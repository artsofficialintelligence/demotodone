import type { Metadata } from "next";
import { Upload, Eye, MessagesSquare, Sparkles, Lock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SubmitForm from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Submit Your Song Idea",
  description:
    "Submit your song idea — lyrics, demos, voice notes, or a concept. I'll personally review it and reply by email to start your custom song.",
  alternates: { canonical: "/submit" },
};

const miniSteps = [
  { icon: Upload, label: "You submit your idea & files" },
  { icon: Eye, label: "I personally review it" },
  { icon: MessagesSquare, label: "We connect by email to begin" },
];

export default function SubmitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        />
        <div className="container-page relative py-16 text-center sm:py-20">
          <Reveal className="mx-auto max-w-2xl items-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Submit your project
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Tell me about your{" "}
              <span className="underline decoration-[#cacacb] underline-offset-4">song idea</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#707072]">
              Share whatever you have — finished lyrics, a rough demo, a voice
              memo, or just a concept. There are no wrong answers here. I review
              every submission personally and reply by email to start the
              conversation.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-9 flex max-w-2xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
              {miniSteps.map((step, i) => (
                <div
                  key={step.label}
                  className="flex items-center gap-3 rounded-xl border border-[#cacacb] bg-[#f5f5f5] px-4 py-3 text-left"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#111111] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-[#111111]/80">
                    <step.icon className="h-4 w-4 text-[#111111]" />
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="container-page pb-24">
        <Reveal className="mx-auto max-w-3xl">
          <div className="card p-6 sm:p-9">
            <SubmitForm />
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-[#707072]/70">
            <Lock className="h-3.5 w-3.5" />
            Your details and files are sent securely and only used to review and
            discuss your project. See our{" "}
            <a href="/privacy" className="link-underline">
              Privacy Policy
            </a>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
