import type { Metadata } from "next";
import {
  Heart,
  ShieldCheck,
  Headphones,
  Clock,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site";
import { spotifyTracks, soundcloudPlaylist } from "@/lib/work";

export const metadata: Metadata = {
  title: "About",
  description:
    "Demo to Done is a one-person custom song service. I use AI tools to create polished, finished tracks — guided by your ideas and my ear for what makes a song work.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Heart,
    title: "Built around your vision",
    body: "Your song starts with your idea — not a preset or a template. I work to capture the feeling you're actually chasing.",
  },
  {
    icon: Headphones,
    title: "Handled personally, start to finish",
    body: "Every submission is read and listened to by me. You're working directly with the person making your track — not a team, not a queue.",
  },
  {
    icon: ShieldCheck,
    title: "Clear and honest",
    body: "Fixed quotes before we start, transparent revision rounds, and written terms on usage rights. No surprises.",
  },
  {
    icon: Clock,
    title: "Respectful of your time",
    body: "No portal to learn, no dashboard to check. You submit once, and the rest happens over a simple back-and-forth.",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-hero-glow"
        />
        <div className="container-page relative py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              About
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              A creative ear and the tools{" "}
              <span className="gradient-text">to finish the job right</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              I understand music — structure, arrangement, what makes something
              feel right. My production workflow is built on AI, and the results
              speak for themselves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="container-page pb-8 sm:pb-12">
        <Reveal>
          <div className="card p-7 sm:p-9 max-w-3xl">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              How I work
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              <p>
                My background is in songwriting and creative direction — understanding
                structure, knowing what a lyric needs, hearing when an arrangement
                serves the song versus when it gets in the way. I&rsquo;ve developed
                a production workflow built around AI tools that lets me translate
                that into finished, release-quality audio without a traditional DAW
                setup.
              </p>
              <p>
                What that means in practice: you get professional results, fast,
                at a price point that reflects the way I work. What doesn&rsquo;t
                change is the creative judgment — that&rsquo;s entirely mine.
                I listen to everything you send, shape the direction, make the
                calls on what sounds right, and keep going until the track
                actually matches your vision.
              </p>
              <p>
                {siteConfig.name} exists because most people with a great song
                idea have no clear path to a finished track. This is that path —
                handled personally, from your first message to the final file.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Work samples */}
      <section id="work" className="border-y border-white/[0.06] bg-ink-900/40">
        <div className="container-page py-20 sm:py-24">
          <SectionHeading
            eyebrow="My work"
            title="Hear what's possible"
            description="A selection of finished tracks — each one started as a rough idea, a voice note, or a concept."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {spotifyTracks.map((embedUrl, i) => (
              <Reveal key={embedUrl} delay={(i % 6) * 60}>
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

          {/* SoundCloud playlist */}
          <Reveal delay={120} className="mt-10">
            <div className="card p-6 sm:p-7">
              <h3 className="mb-4 text-lg font-medium text-white">
                {soundcloudPlaylist.title}
              </h3>
              <iframe
                title="SoundCloud playlist"
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={soundcloudPlaylist.embedUrl}
                style={{ borderRadius: "12px" }}
              />
              <div className="mt-2 truncate text-xs text-slate-500">
                <a
                  href={soundcloudPlaylist.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-light"
                >
                  {soundcloudPlaylist.profileName}
                </a>{" "}
                ·{" "}
                <a
                  href={soundcloudPlaylist.playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-light"
                >
                  {soundcloudPlaylist.title}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="How I work"
          title="What you can count on"
          description="Every project runs on the same principles — the things that make a creative collaboration actually work."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={(i % 2) * 100}>
              <div className="card card-hover flex h-full gap-5 p-6">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10">
                  <value.icon className="h-5 w-5 text-brand-light" />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {value.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready when you are"
        description="Send your idea over and I'll take it from there."
      />
    </>
  );
}
