import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import MusicBackground from "@/components/MusicBackground";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about the custom song process, pricing, timelines, revisions, file uploads, and ownership.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-70"
        />
        <MusicBackground className="opacity-70" />
        <div className="container-page relative py-20 text-center sm:py-24">
          <Reveal className="mx-auto max-w-2xl items-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Frequently asked
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Everything you might be{" "}
              <span className="underline decoration-[#e3e8ee] underline-offset-4">wondering</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#64748d]">
              If your question isn&rsquo;t here, the contact page is one click
              away — I&rsquo;m happy to talk it through before you submit anything.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ list */}
      <section className="container-page pb-12">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Still have a question?"
        description="Reach out directly and I'll get back to you — no pressure, no obligation."
        primaryLabel="Submit Your Song Idea"
        primaryHref="/submit"
        secondaryLabel="Contact Me"
        secondaryHref="/contact"
      />
    </>
  );
}
