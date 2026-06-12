"use client";

import { useRef, useState } from "react";
import { Send, AlertCircle, Loader2 } from "lucide-react";
import { EMAIL_RE, Honeypot, SuccessCard } from "./FormBits";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [startedAt] = useState(() => Date.now());

  function validate(fd: FormData): Record<string, string> {
    const next: Record<string, string> = {};
    const name = (fd.get("name") as string | null)?.trim() ?? "";
    const email = (fd.get("email") as string | null)?.trim() ?? "";
    const message = (fd.get("message") as string | null)?.trim() ?? "";

    if (!name) next.name = "This field is required.";
    if (!email) next.email = "This field is required.";
    else if (!EMAIL_RE.test(email))
      next.email = "Please enter a valid email address.";
    if (!message) next.message = "This field is required.";
    else if (message.length < 10)
      next.message = "Please add a little more detail.";

    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setFormError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const validationErrors = validate(fd);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      const el = form.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus({ preventScroll: true });
      return;
    }

    setErrors({});
    setStatus("submitting");
    fd.append("_started_at", String(startedAt));
    fd.append("_form", "contact");

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          data?.error || "Something went wrong. Please try again.",
        );
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setFormError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <SuccessCard
        title="Message sent."
        message="Thanks for reaching out — your message is in my inbox. I'll reply personally, usually within one to two business days."
      />
    );
  }

  const fieldError = (name: string) =>
    errors[name] ? (
      <p className="field-error" role="alert" id={`${name}-error`}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <Honeypot />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="field-label">
            Name <span className="text-brand-light">*</span>
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="field-input"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {fieldError("name")}
        </div>

        <div>
          <label htmlFor="c-email" className="field-label">
            Email <span className="text-brand-light">*</span>
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="field-input"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {fieldError("email")}
        </div>
      </div>

      <div>
        <label htmlFor="c-subject" className="field-label">
          Subject <span className="text-slate-500">(optional)</span>
        </label>
        <input
          id="c-subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          className="field-input"
        />
      </div>

      <div>
        <label htmlFor="c-message" className="field-label">
          Message <span className="text-brand-light">*</span>
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={6}
          placeholder="Ask me anything about the process, pricing, timelines, or your idea."
          className="field-input resize-y"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {fieldError("message")}
      </div>

      {status === "error" && formError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      <div className="flex flex-col items-start gap-3 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full sm:w-auto sm:min-w-[200px]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
