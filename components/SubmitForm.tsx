"use client";

import { useRef, useState } from "react";
import { Send, AlertCircle, Loader2 } from "lucide-react";
import { projectTypes, genres, moods, uploadLimits } from "@/lib/site";
import {
  EMAIL_RE,
  bytesToMb,
  FileField,
  Honeypot,
  SuccessCard,
} from "./FormBits";

type Status = "idle" | "submitting" | "success" | "error";
type Files = { lyrics: File | null; demo: File | null; voice_note: File | null };

const REQUIRED_FIELDS = [
  "name",
  "email",
  "project_type",
  "genre",
  "mood",
  "description",
] as const;

export default function SubmitForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [startedAt] = useState(() => Date.now());
  const [files, setFiles] = useState<Files>({
    lyrics: null,
    demo: null,
    voice_note: null,
  });

  function setFile(key: keyof Files, file: File | null) {
    setFiles((prev) => ({ ...prev, [key]: file }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validate(fd: FormData): Record<string, string> {
    const next: Record<string, string> = {};

    for (const field of REQUIRED_FIELDS) {
      const value = (fd.get(field) as string | null)?.trim() ?? "";
      if (!value) next[field] = "This field is required.";
    }

    const email = (fd.get("email") as string | null)?.trim() ?? "";
    if (email && !EMAIL_RE.test(email)) {
      next.email = "Please enter a valid email address.";
    }

    const description = (fd.get("description") as string | null)?.trim() ?? "";
    if (description && description.length < 15) {
      next.description =
        "Please add a little more detail so I can understand your idea.";
    }

    // File size checks
    let totalBytes = 0;
    (Object.keys(files) as (keyof Files)[]).forEach((key) => {
      const file = files[key];
      if (!file) return;
      totalBytes += file.size;
      if (bytesToMb(file.size) > uploadLimits.maxFileMb) {
        next[key] = `File is too large (max ${uploadLimits.maxFileMb}MB per file).`;
      }
    });
    if (bytesToMb(totalBytes) > uploadLimits.maxTotalMb) {
      next._files = `Your files total more than ${uploadLimits.maxTotalMb}MB. Please remove one or send larger files via a link in the notes.`;
    }

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
      // Move focus to the first error for accessibility
      const firstKey = Object.keys(validationErrors)[0];
      const el = form.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      el?.focus({ preventScroll: true });
      return;
    }

    setErrors({});
    setStatus("submitting");
    fd.append("_started_at", String(startedAt));
    fd.append("_form", "submission");

    try {
      const res = await fetch("/api/submit", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.error || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus("error");
      setFormError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  function reset() {
    formRef.current?.reset();
    setFiles({ lyrics: null, demo: null, voice_note: null });
    setErrors({});
    setFormError("");
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <SuccessCard
        title="Your idea is on its way to me."
        message="Thanks — I've received your submission and it's landed straight in my inbox. I personally review every project and I'll reply by email (usually within one to two business days) to start the conversation and send you a quote."
        showSubmitAnother
        onReset={reset}
      />
    );
  }

  const fieldError = (name: string) =>
    errors[name] ? (
      <p className="field-error" role="alert" id={`${name}-error`}>
        {errors[name]}
      </p>
    ) : null;

  const describedBy = (name: string, hintId?: string) => {
    const ids = [];
    if (hintId) ids.push(hintId);
    if (errors[name]) ids.push(`${name}-error`);
    return ids.length ? ids.join(" ") : undefined;
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <Honeypot />

      {/* Your details */}
      <fieldset className="space-y-5">
        <legend className="font-display text-lg font-medium text-white">
          Your details
        </legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="field-label">
              Name <span className="text-brand-light">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className="field-input"
              aria-invalid={!!errors.name}
              aria-describedby={describedBy("name")}
            />
            {fieldError("name")}
          </div>

          <div>
            <label htmlFor="email" className="field-label">
              Email <span className="text-brand-light">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="field-input"
              aria-invalid={!!errors.email}
              aria-describedby={describedBy("email")}
            />
            {fieldError("email")}
          </div>
        </div>

        <div>
          <label htmlFor="contact_handle" className="field-label">
            Phone or messaging handle{" "}
            <span className="text-slate-500">(optional)</span>
          </label>
          <input
            id="contact_handle"
            name="contact_handle"
            type="text"
            placeholder="Phone, Instagram, WhatsApp, Discord — whatever's easiest"
            className="field-input"
            aria-describedby="contact_handle-hint"
          />
          <p className="field-hint" id="contact_handle-hint">
            Email is my main channel, but feel free to add a backup.
          </p>
        </div>
      </fieldset>

      <hr className="my-8 border-white/[0.07]" />

      {/* About the song */}
      <fieldset className="space-y-5">
        <legend className="font-display text-lg font-medium text-white">
          About the song
        </legend>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label htmlFor="project_type" className="field-label">
              Project type <span className="text-brand-light">*</span>
            </label>
            <select
              id="project_type"
              name="project_type"
              defaultValue=""
              className="field-input"
              aria-invalid={!!errors.project_type}
              aria-describedby={describedBy("project_type")}
            >
              <option value="" disabled>
                Select…
              </option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {fieldError("project_type")}
          </div>

          <div>
            <label htmlFor="genre" className="field-label">
              Genre / style <span className="text-brand-light">*</span>
            </label>
            <select
              id="genre"
              name="genre"
              defaultValue=""
              className="field-input"
              aria-invalid={!!errors.genre}
              aria-describedby={describedBy("genre")}
            >
              <option value="" disabled>
                Select…
              </option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            {fieldError("genre")}
          </div>

          <div>
            <label htmlFor="mood" className="field-label">
              Mood / vibe <span className="text-brand-light">*</span>
            </label>
            <select
              id="mood"
              name="mood"
              defaultValue=""
              className="field-input"
              aria-invalid={!!errors.mood}
              aria-describedby={describedBy("mood")}
            >
              <option value="" disabled>
                Select…
              </option>
              {moods.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            {fieldError("mood")}
          </div>
        </div>

        <div>
          <label htmlFor="description" className="field-label">
            Describe your idea <span className="text-brand-light">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="What's the song about? Who's it for? What feeling are you chasing? Tell me as much or as little as you've got — there are no wrong answers."
            className="field-input resize-y"
            aria-invalid={!!errors.description}
            aria-describedby={describedBy("description")}
          />
          {fieldError("description")}
        </div>

        <div>
          <label htmlFor="reference" className="field-label">
            Reference artists or songs{" "}
            <span className="text-slate-500">(optional)</span>
          </label>
          <input
            id="reference"
            name="reference"
            type="text"
            placeholder="e.g. 'Something like Bon Iver meets Frank Ocean'"
            className="field-input"
            aria-describedby="reference-hint"
          />
          <p className="field-hint" id="reference-hint">
            Reference tracks are one of the fastest ways to get the sound right.
          </p>
        </div>
      </fieldset>

      <hr className="my-8 border-white/[0.07]" />

      {/* Uploads */}
      <fieldset className="space-y-5">
        <legend className="font-display text-lg font-medium text-white">
          Upload what you have{" "}
          <span className="text-sm font-normal text-slate-500">
            (all optional)
          </span>
        </legend>
        <p className="-mt-2 text-sm text-slate-400">
          Max {uploadLimits.maxFileMb}MB per file. Got something bigger? Mention
          it in the notes and we&rsquo;ll sort a link by email.
        </p>

        <FileField
          name="lyrics"
          label="Lyrics"
          accept={uploadLimits.acceptedLyrics}
          hint=".txt, .pdf, .doc, .docx, .rtf, .md"
          file={files.lyrics}
          error={errors.lyrics}
          onChange={(f) => setFile("lyrics", f)}
        />
        <FileField
          name="demo"
          label="Demo / music file"
          accept={uploadLimits.acceptedAudio}
          hint=".mp3, .wav, .m4a, .aac, .ogg, .flac"
          file={files.demo}
          error={errors.demo}
          onChange={(f) => setFile("demo", f)}
        />
        <FileField
          name="voice_note"
          label="Voice note"
          accept={uploadLimits.acceptedAudio}
          hint="A hummed melody or spoken idea works great."
          file={files.voice_note}
          error={errors.voice_note}
          onChange={(f) => setFile("voice_note", f)}
        />

        {errors._files && (
          <p className="field-error" role="alert">
            {errors._files}
          </p>
        )}
      </fieldset>

      <hr className="my-8 border-white/[0.07]" />

      {/* Additional notes */}
      <fieldset>
        <label htmlFor="notes" className="field-label">
          Additional notes <span className="text-slate-500">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Deadlines, budget range, special context, file-transfer links — anything else I should know."
          className="field-input resize-y"
        />
      </fieldset>

      {/* Form-level error */}
      {status === "error" && formError && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      {/* Submit */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full sm:w-auto sm:min-w-[260px]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending your idea…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Submit Your Song Idea
            </>
          )}
        </button>
        <p className="text-center text-xs text-slate-500">
          No payment now. I&rsquo;ll review your idea and reply with a quote
          first.
        </p>
      </div>
    </form>
  );
}
