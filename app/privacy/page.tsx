import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Demo to Done collects, uses, and protects the information you share when you submit a song idea or contact the studio.",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "June 18, 2026";

export default function PrivacyPage() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-[#533afd]">Legal</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[#64748d]/70">
          Last updated: {lastUpdated}
        </p>

        <div className="legal-prose mt-10 space-y-8 text-sm leading-relaxed text-[#64748d] sm:text-[15px]">
          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              1. Who we are
            </h2>
            <p className="mt-2">
              {siteConfig.name} is a one-person custom song creation studio operated by an
              individual based in Canada. This policy explains what information is collected when
              you use this website, how it is used, and your rights in relation to it. You can
              reach the studio at{" "}
              <a href={`mailto:${siteConfig.email}`} className="link-underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              2. Information you provide
            </h2>
            <p className="mt-2">
              When you use the submission form or the contact form, you may share the following:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Your name and email address (required to reply to you)</li>
              <li>
                An optional phone number or messaging handle if you prefer to communicate
                that way
              </li>
              <li>
                A description of your project — what kind of song you want, genre, mood,
                reference artists, and any context you want to share
              </li>
              <li>
                Files you choose to upload, such as lyrics documents, voice memos, rough
                demos, or reference tracks (up to 20 MB per file)
              </li>
              <li>
                Any other details you include in the free-text fields
              </li>
            </ul>
            <p className="mt-3">
              You choose exactly what to share. Many fields are optional — you can submit
              with just a name, email, and a rough description if that&rsquo;s all you have.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              3. How your information is used
            </h2>
            <p className="mt-2">
              The information you provide is used for one purpose: to review your project,
              respond to you, prepare a quote, and carry out any work you commission. Specifically:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Your contact details are used to reply to your submission and communicate
                with you throughout the project.
              </li>
              <li>
                Your project details and uploaded files are used to understand what you need
                and to produce your song.
              </li>
              <li>
                No information you provide is used for marketing, sold to third parties,
                or shared with anyone outside the studio.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              4. Third-party services
            </h2>
            <p className="mt-2">
              This site uses a small number of third-party services to operate:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="font-medium text-[#0d253d]">Resend</strong> — an email
                delivery service used to route form submissions to the studio. When you submit
                a form, your information passes through Resend&rsquo;s servers to deliver the
                email. Resend&rsquo;s privacy policy is available at{" "}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  resend.com
                </a>
                .
              </li>
              <li>
                <strong className="font-medium text-[#0d253d]">Railway</strong> — the hosting
                platform where this site runs. Railway may log standard server-side request
                data (IP address, timestamp, browser type) as part of normal hosting
                operations.
              </li>
              <li>
                <strong className="font-medium text-[#0d253d]">Spotify &amp; SoundCloud</strong>{" "}
                — embedded music players on the About and Home pages. If you interact with
                these players, those platforms may collect data under their own privacy
                policies. The embeds are loaded from their respective domains.
              </li>
            </ul>
            <p className="mt-3">
              No analytics platform, advertising network, or tracking pixel is used on this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              5. Cookies
            </h2>
            <p className="mt-2">
              This site does not set any first-party cookies. The third-party embeds listed
              above (Spotify, SoundCloud) may set their own cookies if you interact with them,
              governed by their respective policies. No cookies are used for tracking or
              advertising.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              6. Data retention
            </h2>
            <p className="mt-2">
              Information from your submission is retained for as long as needed to complete
              your project and for a reasonable period afterward for record-keeping — typically
              up to two years after a project closes. Submissions that don&rsquo;t result in a
              project are generally not retained beyond the initial correspondence. You may
              request deletion of your information at any time (see below).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              7. Security
            </h2>
            <p className="mt-2">
              Reasonable technical and organisational measures are taken to protect the
              information you share — including secure HTTPS transmission and access limited
              to the studio. That said, no method of transmitting or storing data over the
              internet is completely secure. If you have sensitive materials, you&rsquo;re
              welcome to reach out by email first and we can arrange a secure transfer method.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              8. Your rights
            </h2>
            <p className="mt-2">
              You have the right to request access to, correction of, or deletion of any
              personal information the studio holds about you. To make a request, email{" "}
              <a href={`mailto:${siteConfig.email}`} className="link-underline">
                {siteConfig.email}
              </a>{" "}
              and I&rsquo;ll respond promptly. You can also choose not to provide optional
              information on the submission form, though some details may be necessary to
              quote or complete your project.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              9. Children&rsquo;s privacy
            </h2>
            <p className="mt-2">
              This service is intended for adults aged 18 and over. {siteConfig.name} does
              not knowingly collect personal information from anyone under 18. If you believe
              a minor has submitted information through this site, please contact the studio
              and it will be removed.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              10. Changes to this policy
            </h2>
            <p className="mt-2">
              This policy may be updated from time to time to reflect changes in how the
              site operates. The &ldquo;last updated&rdquo; date at the top of this page will
              reflect any changes. Continued use of the site after an update constitutes
              acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">11. Contact</h2>
            <p className="mt-2">
              For any privacy questions, access requests, or deletion requests, email{" "}
              <a href={`mailto:${siteConfig.email}`} className="link-underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-[#64748d]/70">
          See also our{" "}
          <Link href="/terms" className="link-underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
