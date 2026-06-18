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
      <Reveal className="relative overflow-hidden rounded-2xl bg-[#1c1e54] px-6 py-14 text-center sm:px-12 sm:py-20">
        {/* Subtle gradient mesh overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% -20%, rgba(101,94,253,0.35) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1c1e54] transition-opacity duration-200 hover:opacity-90 sm:w-auto"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
