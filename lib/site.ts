/**
 * Central site configuration.
 * Edit values here to update them everywhere across the site.
 */

export const siteConfig = {
  name: "Demo to Done",
  // Short tagline used in the header / metadata
  tagline: "Custom songs, made from your ideas",
  description:
    "Demo to Done turns your lyrics, voice notes, demos, and rough ideas into finished, custom songs — AI-produced and personally curated. Submit your idea and start the conversation.",
  // Public URL — also set NEXT_PUBLIC_SITE_URL in your env for SEO metadata.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://demotodone.com",
  // The public-facing contact email shown on the site.
  email: "fromdemotodone@gmail.com",
  // Optional — leave blank to hide. Used in the footer.
  social: {
    instagram: "",
    tiktok: "",
    youtube: "",
    x: "",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

/* ----------------------------------------------------------------
 * Submission form option lists — edit freely.
 * ---------------------------------------------------------------- */

export const projectTypes = [
  "Turn my lyrics into a song",
  "Finish an unfinished demo",
  "Custom song from an idea or concept",
  "Instrumental / beat",
  "Vocal song (full production)",
  "Song for family or friends (gift, occasion, tribute)",
  "Business jingle / commercial",
  "Story-based songwriting",
  "Something else",
];

export const genres = [
  "Pop",
  "Hip-Hop / Rap",
  "R&B / Soul",
  "Rock",
  "Acoustic / Folk",
  "Electronic / EDM",
  "Country",
  "Lo-fi / Chill",
  "Cinematic / Orchestral",
  "Gospel / Worship",
  "Jazz / Blues",
  "Not sure yet",
];

export const moods = [
  "Uplifting & bright",
  "Emotional & heartfelt",
  "Romantic",
  "Energetic & hype",
  "Chill & relaxed",
  "Dark & moody",
  "Nostalgic",
  "Epic & cinematic",
  "Playful & fun",
  "Not sure yet",
];

/* ----------------------------------------------------------------
 * File upload limits (also enforced server-side in /api/submit).
 * ---------------------------------------------------------------- */

export const uploadLimits = {
  // Max size per individual file, in megabytes.
  maxFileMb: 20,
  // Max combined size of all attachments on one submission, in megabytes.
  maxTotalMb: 24,
  acceptedLyrics: ".txt,.pdf,.doc,.docx,.rtf,.md",
  acceptedAudio: ".mp3,.wav,.m4a,.aac,.ogg,.flac",
};
