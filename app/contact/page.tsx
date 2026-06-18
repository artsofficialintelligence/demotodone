import type { Metadata } from "next";
import { Mail, Clock, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a question before you submit a project? Send a message and I'll get back to you personally.",
  alternates: { canonical: "/contact" },
};

const points = [
  {
    icon: Mail,
    title: "Straight to my inbox",
    body: "Your message comes directly to me — no support queue, no ticket system.",
  },
  {
    icon: Clock,
    title: "Personal reply",
    body: "I usually respond within one to two business days.",
  },
  {
    icon: MessageSquare,
    title: "No pressure",
    body: "Ask anything about the process, pricing, or your idea before committing.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        />
        <div className="container-page relative py-20 text-center sm:py-24">
          <Reveal className="mx-auto max-w-2xl items-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Get in touch
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Let&rsquo;s <span className="underline decoration-[#cacacb] underline-offset-4">talk</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#707072]">
              Got a question before you submit a project? Send a note and
              I&rsquo;ll get back to you personally. Ready to start? Head
              straight to the{" "}
              <Link href="/submit" className="link-underline">
                submission form
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="container-page pb-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left column */}
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-5">
              <div className="card p-7">
                <h2 className="text-xl font-semibold text-[#111111]">
                  Prefer email?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#707072]">
                  You can reach me directly at:
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#111111] transition-colors hover:text-[#707072]"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </div>

              {points.map((point) => (
                <div key={point.title} className="card flex gap-4 p-6">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#cacacb] bg-[#f5f5f5]">
                    <point.icon className="h-5 w-5 text-[#111111]" />
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-[#111111]">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#707072]">
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}

              <Link
                href="/submit"
                className="card card-hover flex items-center justify-between gap-4 p-6"
              >
                <div>
                  <h3 className="text-base font-medium text-[#111111]">
                    Ready to start a project?
                  </h3>
                  <p className="mt-1 text-sm text-[#707072]">
                    Skip the small talk — submit your song idea.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#111111]" />
              </Link>
            </div>
          </Reveal>

          {/* Right column — form */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="card p-7 sm:p-8">
              <h2 className="text-xl font-semibold text-[#111111]">
                Send a message
              </h2>
              <p className="mt-1 text-sm text-[#707072]">
                Fields marked with an asterisk are required.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
