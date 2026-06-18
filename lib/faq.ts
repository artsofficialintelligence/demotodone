/**
 * FAQ content — used on both the FAQ page and the homepage preview.
 * Edit freely. The first 4 items show on the homepage.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How does the process actually work?",
    answer:
      "You submit your idea through the form on the Submit page — lyrics, a voice note, a rough demo, or just a written concept. I personally review every submission, then reach out by email (or your preferred messaging handle) to talk through your vision, scope, and timeline before any work begins. Nothing is automated; every project is handled by me, directly.",
  },
  {
    question: "What do I need to submit? I only have a rough idea.",
    answer:
      "A rough idea is plenty. Some people send finished lyrics and a clear reference track; others send a 20-second hummed voice memo and a feeling they're chasing. You can even submit a finished song you want recreated or reimagined in a different style. All are great starting points. The submission form has optional fields for lyrics, demos, and voice notes — share whatever you have, and we'll shape the rest together.",
  },
  {
    question: "What does your production process look like?",
    answer:
      "This is a custom creative service, not an automated generator. I use modern production tools and software to develop, arrange, and shape each track — but every song is personally directed, refined, and finished by me based on your specific vision. You're hiring a person to craft something for you, not buying output from a machine.",
  },
  {
    question: "How much does a custom song cost?",
    answer:
      "Pricing depends on the scope — whether it's a basic idea or full vocal production, instrumental only, song length, and how developed your starting material is. Most projects fall in the $100–$300 range, with simpler ideas on the lower end and more fully produced songs on the higher end. Larger or more complex projects may go beyond that range. After you submit your idea, I'll review it and send a clear quote before any work begins — no surprises.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most projects land somewhere between one and three weeks from the time we lock the brief, depending on complexity and how many revision rounds we use. If you have a deadline — a birthday, a wedding, a release date — tell me in your submission and I'll let you know upfront whether it's realistic.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "Every package includes revision rounds so we can dial the song in until it feels right. The exact number depends on the package — it's listed on the Pricing page. Revisions are about refining the vision we agreed on; a complete change in direction may be quoted separately, and I'll always be transparent about that.",
  },
  {
    question: "Who owns the finished song?",
    answer:
      "You will receive full usage rights to the finished song once the project is complete and fully paid. In most cases, this includes the right to use, share, and release the song for personal or commercial purposes depending on your package. However, final rights may also be influenced by the specific tools and platforms used in the creation process — any relevant third-party licensing terms will be respected and applied where required. I retain credit for my role in the writing, production, and arrangement (for example: \"written/produced by…\") unless otherwise agreed in writing. Specific usage rights will always be confirmed before the project begins.",
  },
  {
    question: "Can you write the lyrics for me?",
    answer:
      "Yes. Story-based songwriting is one of the services — you bring the story, the people, the moment, or the message, and I'll handle the lyric writing as part of the project. Just pick the relevant project type on the submission form and describe what the song is about.",
  },
  {
    question: "What file types can I upload?",
    answer:
      "For lyrics: .txt, .pdf, .doc, .docx, .rtf, or .md. For demos and voice notes: .mp3, .wav, .m4a, .aac, .ogg, or .flac. Each file can be up to 20MB. If your files are larger than that, just mention it in the notes and we'll sort out a transfer link by email.",
  },
  {
    question: "What happens after I submit?",
    answer:
      "You'll see a confirmation screen immediately, and your submission lands in my inbox right away. I personally reply — usually within one to two business days — to start the conversation, ask any clarifying questions, and send a quote. No portal, no dashboard, no waiting room. Just a direct conversation.",
  },
];
