"use client";

import { useRef } from "react";
import Link from "next/link";
import { Paperclip, X, CheckCircle2, ArrowRight } from "lucide-react";

/* ----------------------------------------------------------------
   Shared helpers
   ---------------------------------------------------------------- */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function bytesToMb(bytes: number) {
  return bytes / (1024 * 1024);
}

export function formatSize(bytes: number) {
  const mb = bytesToMb(bytes);
  if (mb < 1) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${mb.toFixed(1)} MB`;
}

/* ----------------------------------------------------------------
   Honeypot — invisible to humans, tempting to bots.
   Server rejects the submission if this field is non-empty.
   ---------------------------------------------------------------- */

export function Honeypot() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <label htmlFor="company-website">
        Company website (leave this blank)
      </label>
      <input
        type="text"
        id="company-website"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

/* ----------------------------------------------------------------
   File upload field — styled picker with selected-file chip.
   ---------------------------------------------------------------- */

type FileFieldProps = {
  name: string;
  label: string;
  accept: string;
  hint?: string;
  file: File | null;
  error?: string;
  onChange: (file: File | null) => void;
};

export function FileField({
  name,
  label,
  accept,
  hint,
  file,
  error,
  onChange,
}: FileFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <span className="field-label">{label}</span>

      {!file ? (
        <label
          htmlFor={name}
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/15 bg-ink-900/60 px-4 py-3.5 text-sm text-slate-400 transition-colors hover:border-brand/50 hover:bg-ink-900 hover:text-slate-200"
        >
          <Paperclip className="h-4 w-4 text-brand-light" />
          <span>
            Choose a file{" "}
            <span className="text-slate-500">or drag it here</span>
          </span>
        </label>
      ) : (
        <div className="flex items-center justify-between gap-3 rounded-xl border border-brand/30 bg-brand/[0.06] px-4 py-3 text-sm">
          <span className="flex min-w-0 items-center gap-2.5">
            <Paperclip className="h-4 w-4 flex-shrink-0 text-brand-light" />
            <span className="truncate text-slate-200">{file.name}</span>
            <span className="flex-shrink-0 text-xs text-slate-500">
              {formatSize(file.size)}
            </span>
          </span>
          <button
            type="button"
            onClick={() => {
              onChange(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={`Remove ${label} file`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        id={name}
        name={name}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />

      {hint && !error && <p className="field-hint">{hint}</p>}
      {error && (
        <p className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------
   Success confirmation screen — shared by both forms.
   ---------------------------------------------------------------- */

type SuccessCardProps = {
  title: string;
  message: string;
  showSubmitAnother?: boolean;
  onReset?: () => void;
};

export function SuccessCard({
  title,
  message,
  showSubmitAnother,
  onReset,
}: SuccessCardProps) {
  return (
    <div className="flex flex-col items-center py-8 text-center sm:py-12">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient shadow-glow">
        <CheckCircle2 className="h-8 w-8 text-white" />
      </span>
      <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
        {message}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-secondary">
          Back to home
        </Link>
        {showSubmitAnother ? (
          <button type="button" onClick={onReset} className="btn-primary">
            Submit another idea
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <Link href="/faq" className="btn-primary">
            Read the FAQ
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
