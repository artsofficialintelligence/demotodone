/**
 * Basic, dependency-free spam protection helpers.
 * Layer 1: honeypot field that humans never see.
 * Layer 2: time-to-submit check (bots fill forms instantly).
 * Layer 3: lightweight in-memory rate limiting per IP.
 */

/** True if the hidden honeypot field was filled in (i.e. a bot). */
export function honeypotTripped(fd: FormData): boolean {
  const value = (fd.get("company_website") as string | null)?.trim();
  return Boolean(value);
}

/**
 * True if the form was submitted suspiciously fast after loading.
 * Missing/invalid timestamps are treated as OK (don't punish real users).
 */
export function submittedTooFast(fd: FormData, minMs = 2500): boolean {
  const raw = fd.get("_started_at");
  const started = raw ? Number(raw) : NaN;
  if (!Number.isFinite(started)) return false;
  const elapsed = Date.now() - started;
  // Negative elapsed (clock skew / tampering) -> treat as suspicious.
  if (elapsed < 0) return true;
  return elapsed < minMs;
}

/* --- In-memory rate limiter --------------------------------------
 * Note: in a serverless environment this is per-instance and resets
 * on cold starts. It's a cheap first line of defense, not a fortress.
 * For heavier protection, add Cloudflare Turnstile (see README).
 * ----------------------------------------------------------------- */
const hits = new Map<string, number[]>();

export function rateLimited(
  key: string,
  limit = 5,
  windowMs = 60_000,
): boolean {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  // Opportunistic cleanup so the map doesn't grow unbounded.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t > windowMs)) hits.delete(k);
    }
  }

  return false;
}

/** Best-effort client IP extraction from request headers. */
export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}
