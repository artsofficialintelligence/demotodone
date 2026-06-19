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
import MusicBackground from "@/components/MusicBackground";
import SpotifyGrid from "@/components/SpotifyGrid";
import { spotifyTracks, soundcloudPlaylist } from "@/lib/work";

export const metadata: Metadata = {
  title: "About",
  description:
    "Demo to Done is a one-person custom song service. I take your ideas and turn them into polished, finished tracks — guided by your vision and my ear for what makes a song work.",
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
    body: "A quote before we start, transparent revision rounds, and clear communication throughout. No surprises.",
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
          className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-70"
        />
        <MusicBackground className="opacity-70" />
        <div className="container-page relative py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              About
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              A creative ear and the tools{" "}
              <span className="underline decoration-[#e3e8ee] underline-offset-4">to finish the job right</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#64748d]">
              I understand music — structure, arrangement, what makes something
              feel right. I have the background and the tools to bring it to life,
              and the results speak for themselves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-[#e3e8ee] bg-[#f6f9fc]">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">About me</h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#64748d] sm:text-base">
                <p>
                  I have a background in songwriting, production, performing in bands,
                  and audio work. I understand how songs are built, what a lyric needs,
                  and how to shape an arrangement that serves the idea.
                </p>
                <p>
                  Whether you bring a rough demo, a voice memo, a lyric sheet, a melody,
                  or just the spark of an idea, that's the foundation I build from.
                  I use modern production tools to develop and refine your ideas into
                  finished songs that feel complete, polished, and true to your vision.
                </p>
                <p>
                  The process is guided by experience, instinct, and listening. I shape
                  the production, make the creative decisions, and refine each track until
                  it feels right for you. From demo to done: helping ideas find their
                  final form.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work samples */}
      <section id="work" className="border-y border-[#e3e8ee]">
        <div className="container-page py-20 sm:py-24">
          <SectionHeading
            eyebrow="My work"
            title="Hear what's possible"
            description="A selection of finished tracks — each one started as a rough idea, a voice note, or a concept."
          />
          <div className="mt-14">
            <SpotifyGrid tracks={spotifyTracks} />
          </div>
          <Reveal delay={120} className="mt-10">
            <div className="card p-6 sm:p-7">
              <h3 className="mb-4 text-lg font-medium text-[#0d253d]">
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
              <div className="mt-2 truncate text-xs text-[#64748d]">
                <a href={soundcloudPlaylist.profileUrl} target="_blank" rel="noopener noreferrer" className="text-[#64748d] hover:text-[#0d253d]">
                  {soundcloudPlaylist.profileName}
                </a>
                {" · "}
                <a href={soundcloudPlaylist.playlistUrl} target="_blank" rel="noopener noreferrer" className="text-[#64748d] hover:text-[#0d253d]">
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
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#e3e8ee] bg-[#f6f9fc]">
                  <value.icon className="h-5 w-5 text-[#0d253d]" />
                </span>
                <div>
                  <h3 className="text-lg font-medium">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748d]">{value.body}</p>
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
