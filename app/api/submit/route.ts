import { uploadLimits } from "@/lib/site";
import {
  getResend,
  EMAIL_FROM,
  LEAD_INBOX,
  row,
  emailShell,
  sanitizeFilename,
} from "@/lib/email";
import {
  honeypotTripped,
  submittedTooFast,
  rateLimited,
  clientIp,
} from "@/lib/spam";

// File attachments need the Node.js runtime (Buffer, File).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = uploadLimits.maxFileMb * 1024 * 1024;
const MAX_TOTAL_BYTES = uploadLimits.maxTotalMb * 1024 * 1024;
const FILE_FIELDS = ["lyrics", "demo", "voice_note"] as const;

function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

export async function POST(req: Request) {
  try {
    let fd: FormData;
    try {
      fd = await req.formData();
    } catch {
      return json(
        { error: "Your upload was too large or could not be read." },
        413,
      );
    }

    // --- Spam layer 1 + 2: honeypot & timing -----------------------
    // Silently accept so bots don't learn what tripped them.
    if (honeypotTripped(fd) || submittedTooFast(fd)) {
      return json({ ok: true });
    }

    // --- Spam layer 3: rate limiting -------------------------------
    if (rateLimited(`submit:${clientIp(req)}`, 5, 60_000)) {
      return json(
        {
          error:
            "Too many submissions in a short time. Please wait a minute and try again.",
        },
        429,
      );
    }

    // --- Extract + validate text fields ----------------------------
    const get = (k: string) => ((fd.get(k) as string | null) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const contactHandle = get("contact_handle");
    const projectType = get("project_type");
    const genre = get("genre");
    const mood = get("mood");
    const description = get("description");
    const reference = get("reference");
    const notes = get("notes");

    if (!name || !email || !projectType || !genre || !mood || !description) {
      return json({ error: "Please complete all required fields." }, 400);
    }
    if (!EMAIL_RE.test(email)) {
      return json({ error: "Please enter a valid email address." }, 400);
    }
    if (description.length < 15) {
      return json(
        { error: "Please add a little more detail to your idea." },
        400,
      );
    }

    // --- Files -----------------------------------------------------
    const attachments: { filename: string; content: Buffer }[] = [];
    let totalBytes = 0;

    for (const field of FILE_FIELDS) {
      const entry = fd.get(field);
      if (!entry || typeof entry === "string") continue;
      const file = entry as File;
      if (file.size === 0) continue;

      if (file.size > MAX_FILE_BYTES) {
        return json(
          {
            error: `"${file.name}" is larger than ${uploadLimits.maxFileMb}MB. Please send larger files as a link in the notes.`,
          },
          400,
        );
      }
      totalBytes += file.size;
      const content = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: `${field}-${sanitizeFilename(file.name)}`,
        content,
      });
    }

    if (totalBytes > MAX_TOTAL_BYTES) {
      return json(
        {
          error: `Your attachments total more than ${uploadLimits.maxTotalMb}MB. Please remove one or share a link in the notes.`,
        },
        400,
      );
    }

    // --- Email delivery -------------------------------------------
    const resend = getResend();
    if (!resend || !LEAD_INBOX) {
      console.error(
        "[submit] Email not configured — set RESEND_API_KEY and LEAD_INBOX_EMAIL.",
      );
      return json(
        {
          error:
            "The submission form isn't fully connected yet. Please try again later or email directly.",
        },
        500,
      );
    }

    const attachmentSummary = attachments.length
      ? attachments.map((a) => a.filename).join(", ")
      : "None uploaded";

    const rowsHtml = [
      row("Name", name),
      row("Email", email),
      contactHandle ? row("Phone / handle", contactHandle) : "",
      row("Project type", projectType),
      row("Genre / style", genre),
      row("Mood / vibe", mood),
      row("Their idea", description),
      reference ? row("Reference artists / songs", reference) : "",
      notes ? row("Additional notes", notes) : "",
      row("Attachments", attachmentSummary),
    ]
      .filter(Boolean)
      .join("");

    const html = emailShell(
      "New song submission",
      `${name} just submitted a project idea through your website.`,
      rowsHtml,
    );

    const text = [
      "NEW SONG SUBMISSION",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      contactHandle ? `Phone / handle: ${contactHandle}` : "",
      `Project type: ${projectType}`,
      `Genre / style: ${genre}`,
      `Mood / vibe: ${mood}`,
      "",
      "Their idea:",
      description,
      "",
      reference ? `Reference artists / songs: ${reference}` : "",
      notes ? `Additional notes: ${notes}` : "",
      `Attachments: ${attachmentSummary}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Built as a separate object so the customer's address is set as
    // Reply-To (just hit "reply" to respond to them directly).
    const emailOptions = {
      from: EMAIL_FROM,
      to: LEAD_INBOX,
      replyTo: email,
      subject: `New song submission — ${name} (${projectType})`,
      html,
      text,
      attachments: attachments.length ? attachments : undefined,
    };

    const { error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error("[submit] Resend error:", error);
      return json(
        {
          error:
            "We couldn't send your submission right now. Please try again in a moment.",
        },
        502,
      );
    }

    return json({ ok: true });
  } catch (err) {
    console.error("[submit] Unexpected error:", err);
    return json(
      { error: "Something went wrong on our end. Please try again." },
      500,
    );
  }
}

// Reject non-POST methods cleanly.
export async function GET() {
  return json({ error: "Method not allowed." }, 405);
}
