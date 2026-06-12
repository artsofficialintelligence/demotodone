# Demo to Done — Custom Song Creation Website

A clean, modern, dark-mode website for **Demo to Done** — a custom song creation
service. Visitors submit their song idea (lyrics, demos, voice notes, or a
concept) through an upload form, and each submission is emailed straight to you
so you can continue the conversation personally.

This is a **lead-generation site for a creative service** — not a marketplace
and not an automated music generator.

---

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Resend** for email delivery (submission + contact notifications)
- **lucide-react** for icons
- No database, no client portal — intentionally lightweight

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file
cp .env.local.example .env.local
#   (on Windows PowerShell: copy .env.local.example .env.local)

# 3. Fill in .env.local — see "Environment variables" below

# 4. Run the dev server
npm run dev
```

Then open <http://localhost:3000>.

To build for production:

```bash
npm run build
npm run start
```

---

## Environment variables

All variables live in `.env.local` (copy from `.env.local.example`). **Never
commit `.env.local` to git** — it's already in `.gitignore`.

| Variable               | Required | What it does                                                            |
| ---------------------- | -------- | ----------------------------------------------------------------------- |
| `RESEND_API_KEY`       | Yes      | Your Resend API key — used to send notification emails.                 |
| `LEAD_INBOX_EMAIL`     | Yes      | The inbox where new submissions + contact messages are delivered.       |
| `EMAIL_FROM`           | Yes      | The "from" address on notification emails.                              |
| `NEXT_PUBLIC_SITE_URL` | Yes      | The public URL of the deployed site (used for SEO metadata + sitemap).  |

The forms will not send email until `RESEND_API_KEY` and `LEAD_INBOX_EMAIL` are
set — until then they return a friendly "not connected yet" message.

---

## Setting up email (Resend) — step by step

1. Create a free account at <https://resend.com>.
2. Go to **API Keys** → **Create API Key**. Copy it into `RESEND_API_KEY`.
3. **For quick testing:** set `EMAIL_FROM="Demo to Done <onboarding@resend.dev>"`.
   This shared sender works immediately but can **only deliver to the email
   address on your Resend account** — fine for testing, not for production.
4. **For production:** in Resend, go to **Domains** → **Add Domain**, add your
   own domain, and follow the DNS instructions. Once verified, set something
   like `EMAIL_FROM="Demo to Done <noreply@yourdomain.com>"`. Now emails can be
   delivered to any inbox, including your `LEAD_INBOX_EMAIL`.
5. Set `LEAD_INBOX_EMAIL` to wherever you want leads to land (your inbox).

Replies to the notification emails go straight to the customer — the `Reply-To`
header is set to their email address automatically.

---

## File uploads & hosting limits — important

The submission form accepts lyrics, demo, and voice-note files. Limits are
defined in `lib/site.ts` (`uploadLimits`) and enforced **both** client-side and
server-side:

- Default: **20 MB per file**, **24 MB total** per submission.

**Hosting caveat:** some serverless hosts cap the request body size for API
routes (for example, Vercel's serverless functions cap request bodies at
~4.5 MB). If you deploy there, large audio files will be rejected by the
platform before they reach the code.

You have three options:

1. **Keep it small** — lower `uploadLimits` in `lib/site.ts` to stay under your
   host's limit (voice notes and compressed MP3 demos are usually small).
2. **Deploy somewhere without that limit** — e.g. a long-running Node server,
   Render, Railway, Fly.io, or a self-hosted box.
3. **Let customers send big files as a link** — the form already invites this in
   the "Additional notes" field, and the FAQ explains it.

For a future upgrade, the cleanest pattern for large audio is uploading files
directly to object storage (S3, R2, Supabase Storage) and emailing you the
links — but that adds infrastructure this lightweight site intentionally avoids.

---

## Spam protection

Three lightweight, dependency-free layers are built in (`lib/spam.ts`):

1. **Honeypot field** — an invisible input that real users never fill in.
2. **Time-to-submit check** — submissions completed unrealistically fast are
   silently dropped.
3. **In-memory rate limiting** — caps submissions per IP per minute.

For stronger protection, add **Cloudflare Turnstile** (free, privacy-friendly):
add the widget to `SubmitForm.tsx` / `ContactForm.tsx`, send the token with the
form, and verify it server-side in the API routes before sending email.

---

## Editing content

Almost everything is centralized so you don't have to dig through components:

| What you want to change            | Edit this file                          |
| ---------------------------------- | --------------------------------------- |
| Business name, contact email, social links | `lib/site.ts` (`siteConfig`)     |
| Navigation links                   | `lib/site.ts` (`navLinks`)              |
| Project type / genre / mood options | `lib/site.ts` (`projectTypes`, `genres`, `moods`) |
| File upload limits & accepted types | `lib/site.ts` (`uploadLimits`)         |
| FAQ questions & answers            | `lib/faq.ts` (first 4 show on the homepage) |
| Pricing packages & inclusions      | `app/pricing/page.tsx`                  |
| Homepage hero, steps, services, testimonials | `app/page.tsx`                |
| About page copy                    | `app/about/page.tsx`                    |
| Terms / Privacy text               | `app/terms/page.tsx`, `app/privacy/page.tsx` |
| Colors, fonts, animations          | `tailwind.config.ts`, `app/globals.css` |

The accent color is an electric violet → magenta gradient. To re-theme, update
the `brand` / `accent` colors and `brand-gradient` in `tailwind.config.ts`.

---

## Deploying

The easiest path is **Vercel**:

1. Push this folder to a GitHub repository.
2. Import the repo at <https://vercel.com/new>.
3. Add the four environment variables from the table above in the Vercel project
   settings.
4. Deploy. Set `NEXT_PUBLIC_SITE_URL` to your final domain.

(Review the file-upload hosting caveat above before going live.)

It also runs anywhere Next.js runs — Render, Railway, Fly.io, or a Node server.

---

## Project structure

```
app/
  layout.tsx          Root layout, SEO metadata, JSON-LD, nav + footer
  page.tsx            Home
  about/page.tsx      About
  pricing/page.tsx    Pricing & packages (contact-for-quote)
  submit/page.tsx     Submit Your Song Idea (submission form)
  contact/page.tsx    Contact
  faq/page.tsx        FAQ (with FAQ structured data)
  terms/page.tsx      Terms of Service
  privacy/page.tsx    Privacy Policy
  not-found.tsx       Custom 404
  sitemap.ts          Generated sitemap.xml
  robots.ts           Generated robots.txt
  globals.css         Tailwind layers + design system
  api/
    submit/route.ts   Handles song submissions → Resend email (with files)
    contact/route.ts  Handles contact messages → Resend email
components/
  Navbar, Footer, Reveal (scroll animation), SectionHeading,
  CTASection, Waveform, FaqAccordion, FormBits,
  SubmitForm, ContactForm
lib/
  site.ts             Central site config + form option lists
  faq.ts              FAQ content
  email.ts            Resend client + email templating helpers
  spam.ts             Honeypot, timing, and rate-limit helpers
```

---

## Accessibility & SEO

- Semantic HTML, labelled form fields, visible focus rings, "skip to content"
  link, and `prefers-reduced-motion` support throughout.
- Per-page `<title>` / meta descriptions, Open Graph + Twitter cards,
  canonical URLs, `ProfessionalService` + `FAQPage` JSON-LD, sitemap, robots.
- Fonts are self-hosted via `next/font` (no layout shift, no external request).

---

## A note on the legal pages

`app/terms/page.tsx` and `app/privacy/page.tsx` are **starting templates**.
Before launching, review and adapt them with a qualified attorney for your
jurisdiction and the way you actually handle data and projects.
