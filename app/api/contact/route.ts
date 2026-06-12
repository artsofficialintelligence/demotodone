import { getResend, EMAIL_FROM, LEAD_INBOX, row, emailShell } from "@/lib/email";
import {
  honeypotTripped,
  submittedTooFast,
  rateLimited,
  clientIp,
} from "@/lib/spam";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

export async function POST(req: Request) {
  try {
    let fd: FormData;
    try {
      fd = await req.formData();
    } catch {
      return json({ error: "Your message could not be read." }, 400);
    }

    // Spam: honeypot + timing — silently accept.
    if (honeypotTripped(fd) || submittedTooFast(fd)) {
      return json({ ok: true });
    }

    // Rate limit.
    if (rateLimited(`contact:${clientIp(req)}`, 5, 60_000)) {
      return json(
        {
          error:
            "Too many messages in a short time. Please wait a minute and try again.",
        },
        429,
      );
    }

    const get = (k: string) => ((fd.get(k) as string | null) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const subject = get("subject");
    const message = get("message");

    if (!name || !email || !message) {
      return json({ error: "Please complete all required fields." }, 400);
    }
    if (!EMAIL_RE.test(email)) {
      return json({ error: "Please enter a valid email address." }, 400);
    }
    if (message.length < 10) {
      return json({ error: "Please add a little more detail." }, 400);
    }

    const resend = getResend();
    if (!resend || !LEAD_INBOX) {
      console.error(
        "[contact] Email not configured — set RESEND_API_KEY and LEAD_INBOX_EMAIL.",
      );
      return json(
        {
          error:
            "The contact form isn't fully connected yet. Please try again later.",
        },
        500,
      );
    }

    const rowsHtml = [
      row("Name", name),
      row("Email", email),
      subject ? row("Subject", subject) : "",
      row("Message", message),
    ]
      .filter(Boolean)
      .join("");

    const html = emailShell(
      "New contact message",
      `${name} sent a message through your website.`,
      rowsHtml,
    );

    const text = [
      "NEW CONTACT MESSAGE",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      subject ? `Subject: ${subject}` : "",
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const emailOptions = {
      from: EMAIL_FROM,
      to: LEAD_INBOX,
      replyTo: email,
      subject: subject
        ? `Contact: ${subject} — ${name}`
        : `New contact message — ${name}`,
      html,
      text,
    };

    const { error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error("[contact] Resend error:", error);
      return json(
        {
          error:
            "We couldn't send your message right now. Please try again in a moment.",
        },
        502,
      );
    }

    return json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return json(
      { error: "Something went wrong on our end. Please try again." },
      500,
    );
  }
}

export async function GET() {
  return json({ error: "Method not allowed." }, 405);
}
