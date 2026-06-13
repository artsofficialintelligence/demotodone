import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Upload,
  Eye,
  MessagesSquare,
  Sparkles,
  PenLine,
  Wand2,
  Lightbulb,
  Music2,
  Mic2,
  Gift,
  BookOpen,
  Radio,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FaqAccordion from "@/components/FaqAccordion";
import Waveform from "@/components/Waveform";
import { faqs } from "@/lib/faq";
import { spotifyTracks } from "@/lib/work";

export const metadata: Metadata = {
  title: "Turn Your Song Idea Into Reality",
  description:
    "Send your lyrics, demos, voice notes, or rough ideas — I'll transform them into a finished, custom song built around your vision. Submit your idea to get started.",
  alternates: { canonical: "/" },
};

const steps = [
  {
    icon: Upload,
    title: "Submit your idea",
    body: "Upload lyrics, a demo, a voice note, or just describe the song in your head. Whatever you have is enough to start.",
  },
  {
    icon: Eye,
    title: "I review your concept",
    body: "I personally read and listen to every submission — no bots, no queue-pool. I'll come back with thoughts and questions.",
  },
  {
    icon: MessagesSquare,
    title: "We connect via email",
    body: "We talk through the vision, scope, timeline, and a clear fixed quote before any work begins.",
  },
  {
    icon: Sparkles,
    title: "Your custom song gets created",
    body: "I use AI to produce the track, then personally refine every element — arrangement, sound, feel — until it matches your vision. You get a polished, professional result.",
  },
];

const services = [
  {
    icon: PenLine,
    title: "Turn lyrics into songs",
    body: "You've got the words. I'll build the melody, production, and arrangement around them.",
  },
  {
    icon: Wand2,
    title: "Finish unfinished demos",
    body: "That half-done track sitting in your drafts? Let's get it across the finish line.",
  },
  {
    icon: Lightbulb,
    title: "Custom songs from ideas",
    body: "A concept, a feeling, a hook in your head — I'll turn it into a fully realized song.",
  },
  {
    icon: Music2,
    title: "Instrumentals",
    body: "Original instrumental tracks crafted to your genre, mood, and reference points.",
  },
  {
    icon: Mic2,
    title: "Vocal songs",
    body: "Full vocal productions — written, arranged, and produced end to end.",
  },
  {
    icon: Gift,
    title: "Songs for family & friends",
    body: "A one-of-a-kind song for a birthday, wedding, anniversary, or someone you love — the kind of gift no one forgets.",
  },
  {
    icon: BookOpen,
    title: "Story-based songwriting",
    body: "Bring me the story or the moment — I'll write and produce the song that tells it.",
  },
  {
    icon: Radio,
    title: "Business jingles",
    body: "Memorable, professional jingles for brands, ads, and marketing — built to stick in your audience's head.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-hero-glow"
        />
        <div className="container-page relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" />
                AI-powered · personally curated
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Turn your{" "}
                <span className="gradient-text">song idea</span> into reality.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                Send your lyrics, demos, voice notes, or rough ideas. I use
                AI to produce the finished track — then personally shape, refine,
                and deliver every detail until it&rsquo;s exactly right. Fast,
                polished, and built around your vision.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/submit" className="btn-primary">
                  Submit Your Song Idea
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/pricing" className="btn-secondary">
                  View Pricing
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  AI-produced, human-curated
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Every project handled personally
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Fixed quote before we start
                </span>
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] bg-brand/10 blur-2xl"
              />
              <div className="card relative flex flex-col gap-6 p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-sm font-medium text-white">
                      Now in production
                    </p>
                    <p className="text-xs text-slate-500">
                      Your idea → finished song
                    </p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient">
                    <Music2 className="h-4 w-4 text-white" />
                  </span>
                </div>
                <div className="h-28 rounded-xl border border-white/[0.06] bg-ink-900/80 p-4">
                  <Waveform />
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "Lyrics", v: "Received" },
                    { k: "Demo", v: "Reviewing" },
                    { k: "Mix", v: "In progress" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="rounded-xl border border-white/[0.06] bg-ink-900/60 p-3"
                    >
                      <p className="text-[11px] uppercase tracking-wider text-slate-500">
                        {s.k}
                      </p>
                      <p className="mt-1 text-xs font-medium text-brand-light">
                        {s.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────── How it works ─────────────────── */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="From rough idea to finished song in four steps"
          description="A simple, personal process. You're working directly with me the whole way through — never a platform."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="card card-hover relative h-full p-6">
                <span className="absolute right-5 top-5 font-display text-4xl font-bold text-white/[0.06]">
                  0{i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10">
                  <step.icon className="h-5 w-5 text-brand-light" />
                </span>
                <h3 className="mt-5 text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Services ───────────────────── */}
      <section className="border-y border-white/[0.06] bg-ink-900/40">
        <div className="container-page py-20 sm:py-24">
          <SectionHeading
            eyebrow="What I create"
            title="Whatever stage you're at, there's a way in"
            description="Bring a finished lyric sheet or a half-formed hum — every service starts from wherever you are right now."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <div className="card card-hover group h-full p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient shadow-glow transition-transform duration-300 group-hover:scale-105">
                    <service.icon className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="mt-5 text-lg font-medium text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {service.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={90}>
              <Link
                href="/submit"
                className="card card-hover flex h-full flex-col justify-between gap-6 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10">
                  <ArrowRight className="h-5 w-5 text-brand-light" />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Not sure which fits?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Just submit your idea and I&rsquo;ll help you figure out the
                    right approach.
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────── My work ───────────────────── */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="My work"
          title="Hear what's possible"
          description="A few examples of finished tracks — each one started as a rough idea, a voice note, or a concept."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {spotifyTracks.slice(0, 6).map((embedUrl, i) => (
            <Reveal key={embedUrl} delay={i * 90}>
              <iframe
                title={`Track ${i + 1}`}
                src={embedUrl}
                width="100%"
                height="152"
                style={{ borderRadius: "12px" }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 text-center">
            <Link href="/about#work" className="btn-ghost">
              Hear more of my work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ─────────────────────── FAQ preview ──────────────────── */}
      <section className="border-t border-white/[0.06] bg-ink-900/40">
        <div className="container-page py-20 sm:py-24">
          <SectionHeading
            eyebrow="Questions"
            title="Quick answers before you submit"
            description="A few of the most common questions. There's more on the full FAQ page."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Reveal>
              <FaqAccordion items={faqs.slice(0, 4)} />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 text-center">
                <Link href="/faq" className="btn-ghost">
                  Read the full FAQ
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────── Final CTA ────────────────────── */}
      <CTASection />
    </>
  );
}
