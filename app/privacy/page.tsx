import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Demo to Done collects, uses, and protects the information you share when you submit a song idea or contact the studio.",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "May 14, 2026";

export default function PrivacyPage() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-[#111111]">Legal</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[#707072]/70">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-700/80">
          <strong className="font-semibold text-amber-700">
            Template notice:
          </strong>{" "}
          This page is a starting template. Before you launch, review and adapt
          it with a qualified attorney to make sure it reflects your actual data
          practices and complies with the laws that apply to you.
        </div>

        <div className="legal-prose mt-10 space-y-8 text-sm leading-relaxed text-[#707072] sm:text-[15px]">
          <div>
            <h2 className="text-lg font-semibold text-[#111111]">
              1. Information you provide
            </h2>
            <p className="mt-2">
              When you use the submission or contact forms, you may provide your
              name, email address, an optional phone number or messaging handle,
              and details about your project — including a description, genre
              and mood preferences, reference artists, and any files you upload
              such as lyrics, demos, or voice notes. You choose what to share.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111]">
              2. How your information is used
            </h2>
            <p className="mt-2">
              Information you submit is used solely to review your project,
              respond to you, prepare a quote, and carry out any work you
              engage. {siteConfig.name} does not sell your personal information
              and does not use it for advertising.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111]">
              3. How your information is handled
            </h2>
            <p className="mt-2">
              Form submissions are delivered by email to the studio through a
              third-party email delivery provider. Your information and
              uploaded files are stored only as needed to communicate with you
              and complete your project. Reasonable measures are taken to keep
              this information secure, though no method of transmission or
              storage is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111]">
              4. Third-party services
            </h2>
            <p className="mt-2">
              This site relies on a small number of third-party providers — for
              example, an email delivery service to route form submissions, and
              a hosting provider to serve the website. These providers process
              data on the studio&rsquo;s behalf and are expected to maintain
              appropriate safeguards.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111]">
              5. Cookies &amp; analytics
            </h2>
            <p className="mt-2">
              This site is intentionally lightweight. If analytics or cookies
              are added in the future, this policy will be updated to describe
              what is collected and why.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111]">
              6. Data retention
            </h2>
            <p className="mt-2">
              Submission and project information is retained for as long as
              needed to communicate with you and deliver your project, and for a
              reasonable period afterward for record-keeping. You may request
              deletion of your information at any time (see below).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111]">7. Your choices</h2>
            <p className="mt-2">
              You can request access to, correction of, or deletion of the
              personal information you have shared by emailing the studio. You
              can also decline to provide optional information, though some
              details may be necessary to quote or complete a project.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111]">
              8. Children&rsquo;s privacy
            </h2>
            <p className="mt-2">
              This service is intended for adults. {siteConfig.name} does not
              knowingly collect personal information from children. If you
              believe a child has provided information, please contact the
              studio so it can be removed.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111]">
              9. Changes to this policy
            </h2>
            <p className="mt-2">
              This policy may be updated from time to time. Material changes
              will be reflected by updating the &ldquo;last updated&rdquo; date
              above.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111]">10. Contact</h2>
            <p className="mt-2">
              For any privacy questions or requests, email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-[#707072]/70">
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
