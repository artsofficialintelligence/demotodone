import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, Sparkles, MessageSquareQuote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import MusicBackground from "@/components/MusicBackground";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description:
    "Three custom song packages — Starter, Professional, and Premium. Every project is quoted individually based on scope. Submit your idea for a quote.",
  alternates: { canonical: "/pricing" },
};

type Package = {
  name: string;
  tagline: string;
  bestFor: string;
  features: string[];
  featured?: boolean;
};

const packages: Package[] = [
  {
    name: "Starter",
    tagline: "One clear idea, brought to life.",
    bestFor: "Best for a single song from lyrics, a concept, or a short demo.",
    features: [
      "One custom song",
      "Built from your lyrics, concept, or rough demo",
      "Genre, mood & reference-guided production",
      "Radio-length arrangement (~2–3 min)",
      "1 revision round",
      "Final high-quality audio file",
      "Direct email collaboration with me",
    ],
  },
  {
    name: "Professional",
    tagline: "A polished, release-ready production.",
    bestFor: "Best for vocal songs, finished demos, and projects you intend to share widely.",
    features: [
      "Everything in Starter, plus:",
      "Full vocal production or detailed instrumental",
      "Extended arrangement & structure work",
      "Lyric writing or refinement included",
      "2–3 revision rounds",
      "Polished mix for streaming-ready sound",
      "Priority turnaround",
    ],
    featured: true,
  },
  {
    name: "Premium",
    tagline: "The full creative treatment.",
    bestFor: "Best for ambitious projects, special occasions, or multi-song work.",
    features: [
      "Everything in Professional, plus:",
      "Deep creative development from the ground up",
      "Multiple concepts or song versions explored",
      "Extended revision rounds until it's right",
      "Detailed mixing & mastering pass",
      "Stems available on request",
      "Flexible scope for one-of-a-kind projects",
    ],
  },
];

const includedEverywhere = [
  "A personal review of your submission",
  "A written quote before any work begins",
  "Direct communication — no portal, no middleman",
];

export default function PricingPage() {
  return (
    <>
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
              Pricing & packages
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Every song is{" "}
              <span className="underline decoration-[#e3e8ee] underline-offset-4">quoted to fit</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#64748d]">
              Custom work doesn&rsquo;t fit neatly into a price sticker — scope,
              length, revisions, and how finished your starting material is all
              shape the cost. Pick the package that sounds closest, submit your
              idea, and I&rsquo;ll send you a clear quote.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Package cards */}
      <section className="container-page pb-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 110}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 sm:p-8 ${
                  pkg.featured ? "border-[#1c1e54] bg-[#1c1e54]" : "card card-hover"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1c1e54] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h2 className={`font-display text-xl font-semibold ${pkg.featured ? "text-white" : "text-[#0d253d]"}`}>
                  {pkg.name}
                </h2>
                <p className={`mt-1 text-sm ${pkg.featured ? "text-white/70" : "text-[#0d253d]"}`}>
                  {pkg.tagline}
                </p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className={`font-display text-3xl font-bold ${pkg.featured ? "text-white" : "text-[#0d253d]"}`}>
                    Custom quote
                  </span>
                </div>
                <p className={`mt-2 text-xs leading-relaxed ${pkg.featured ? "text-white/50" : "text-[#64748d]/70"}`}>
                  {pkg.bestFor}
                </p>
                <Link
                  href="/submit"
                  className={`mt-6 w-full ${pkg.featured ? "btn-secondary" : "btn-primary"}`}
                >
                  Get a quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <ul className={`mt-7 space-y-3 border-t pt-7 ${pkg.featured ? "border-white/20" : "border-[#e3e8ee]"}`}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.featured ? "text-white/70" : "text-[#533afd]"}`} />
                      <span
                        className={
                          feature.endsWith("plus:")
                            ? `font-medium ${pkg.featured ? "text-white" : "text-[#0d253d]"}`
                            : pkg.featured ? "text-white/70" : "text-[#64748d]"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Included everywhere */}
      <section className="container-page py-16">
        <Reveal>
          <div className="card p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#533afd]">
                <MessageSquareQuote className="h-5 w-5 text-white" />
              </span>
              <h2 className="text-xl font-semibold text-[#0d253d] sm:text-2xl">
                Included with every package
              </h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {includedEverywhere.map((item) => (
                <div key={item} className="flex gap-3 text-sm text-[#0d253d]/80">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0d253d]" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#64748d]/70">
              Note: package names and inclusions are a starting framework — your
              final quote is tailored to your actual project. Not sure which
              tier fits? Just submit your idea and I&rsquo;ll recommend the right one.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection
        title="Ready to get a quote?"
        description="Submit your idea and I'll get back to you with a clear, personalised quote before any work begins."
      />
    </>
  );
}
