import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title = "Got a song idea? Let's bring it to life.",
  description = "Send your lyrics, demo, voice note, or rough concept. I'll personally review it and reply to map out your custom song.",
  primaryLabel = "Submit Your Song Idea",
  primaryHref = "/submit",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: CTASectionProps) {
  return (
    <section className="container-page py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-850 px-6 py-14 text-center sm:px-12 sm:py-20">
        {/* Glow accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary w-full sm:w-auto">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryHref}
              className="btn-secondary w-full sm:w-auto"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
