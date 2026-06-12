import { Resend } from "resend";

/**
 * Lazily construct the Resend client.
 * Returns null if RESEND_API_KEY is not configured so callers can
 * fail gracefully with a helpful message.
 */
export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export const EMAIL_FROM =
  process.env.EMAIL_FROM || "Demo to Done <onboarding@resend.dev>";

export const LEAD_INBOX = process.env.LEAD_INBOX_EMAIL || "";

/** Make an uploaded filename safe to use as an attachment name. */
export function sanitizeFilename(name: string): string {
  const cleaned = name
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_{2,}/g, "_")
    .slice(-80);
  return cleaned || "upload";
}

/** Escape user-supplied text before placing it inside an HTML email. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Render a labelled row for the notification email. */
export function row(label: string, value: string): string {
  const safe = escapeHtml(value).replace(/\n/g, "<br/>");
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #ECECEC;width:190px;vertical-align:top;color:#6B6B7B;font-size:13px;font-weight:600;">${escapeHtml(
        label,
      )}</td>
      <td style="padding:10px 0;border-bottom:1px solid #ECECEC;color:#1A1A22;font-size:14px;">${safe}</td>
    </tr>`;
}

/** Wrap content rows in a branded email shell. */
export function emailShell(heading: string, intro: string, rowsHtml: string) {
  return `
  <div style="background:#0b0b12;padding:32px 16px;font-family:Inter,Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#8b5cf6,#d946ef);padding:24px 28px;">
        <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;">${escapeHtml(
          heading,
        )}</p>
        <p style="margin:4px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">${escapeHtml(
          intro,
        )}</p>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;">
          ${rowsHtml}
        </table>
      </div>
      <div style="padding:16px 28px;background:#FAFAFC;color:#9A9AAA;font-size:12px;">
        Sent automatically from your Demo to Done website.
      </div>
    </div>
  </div>`;
}
