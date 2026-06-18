import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern custom song projects with Demo to Done — scope, payment, revisions, delivery, and usage rights.",
  alternates: { canonical: "/terms" },
};

const lastUpdated = "May 14, 2026";

export default function TermsPage() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-brand-light">Legal</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-200/80">
          <strong className="font-semibold text-amber-200">
            Template notice:
          </strong>{" "}
          This page is a starting template for a custom creative service. Before
          you launch, review and adapt it with a qualified attorney for your
          jurisdiction and business setup.
        </div>

        <div className="legal-prose mt-10 space-y-8 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
          <div>
            <h2 className="text-lg font-semibold text-white">1. Overview</h2>
            <p className="mt-2">
              {siteConfig.name} (&ldquo;{siteConfig.name},&rdquo; &ldquo;I,&rdquo;
              &ldquo;me,&rdquo; or &ldquo;the studio&rdquo;) provides custom song
              creation services. By submitting a project, contacting the studio,
              or engaging the studio for work, you (&ldquo;you&rdquo; or
              &ldquo;the client&rdquo;) agree to these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              2. Nature of the service
            </h2>
            <p className="mt-2">
              {siteConfig.name} is a custom creative service, not a marketplace
              and not an automated music-generation product. Each project is
              reviewed and produced personally. Submitting an idea does not
              create a binding contract; a project begins only once scope and a
              fixed quote have been agreed in writing (typically by email).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              3. Submissions &amp; project intake
            </h2>
            <p className="mt-2">
              When you submit an idea, you confirm that you have the right to
              share any lyrics, recordings, demos, voice notes, or other
              materials you provide, and that doing so does not infringe on the
              rights of any third party. You are responsible for the accuracy of
              the information you provide.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              4. Quotes, scope &amp; payment
            </h2>
            <p className="mt-2">
              Each project is quoted individually based on scope, length,
              revisions, and the state of your starting material. The agreed
              quote is fixed for the agreed scope; changes in direction or scope
              may be quoted separately. Payment terms, deposits, and schedules
              will be confirmed in writing before work begins.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              5. Revisions &amp; delivery
            </h2>
            <p className="mt-2">
              Each package includes a defined number of revision rounds, as
              described on the Pricing page and confirmed in your project
              agreement. Revisions refine the agreed creative direction;
              wholesale changes in direction may require an additional quote.
              Delivery timelines are estimates confirmed at the start of the
              project and may shift with revision activity or client response
              time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              6. Ownership &amp; usage rights
            </h2>
            <p className="mt-2">
              Usage rights for the finished song depend on your package and
              intended use (for example, a personal gift versus a commercial
              release). The specific rights granted to you will be set out in
              your written project agreement before work begins. Until final
              payment is received, all work product remains the property of{" "}
              {siteConfig.name}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              7. Use of production tools
            </h2>
            <p className="mt-2">
              {siteConfig.name} uses modern production software and tools
              as part of the creative process. All creative direction,
              refinement, and final decisions are made by the studio. You will
              not receive raw, unedited output as a deliverable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              8. Cancellations &amp; refunds
            </h2>
            <p className="mt-2">
              Because each project is custom work, cancellation and refund terms
              will be specified in your written project agreement. Work
              completed up to the point of cancellation is generally
              non-refundable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              9. Limitation of liability
            </h2>
            <p className="mt-2">
              To the maximum extent permitted by law, {siteConfig.name}&rsquo;s
              total liability for any claim related to a project is limited to
              the amount paid for that project. {siteConfig.name} is not liable
              for indirect, incidental, or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              10. Changes to these terms
            </h2>
            <p className="mt-2">
              These terms may be updated from time to time. The version in
              effect for your project is the version agreed in your written
              project agreement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">11. Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
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

        <p className="mt-12 text-sm text-slate-500">
          See also our{" "}
          <Link href="/privacy" className="link-underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
