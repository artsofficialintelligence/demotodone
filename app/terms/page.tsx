import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern custom song projects with Demo to Done — scope, payment, revisions, delivery, and usage rights.",
  alternates: { canonical: "/terms" },
};

const lastUpdated = "June 18, 2026";

export default function TermsPage() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-[#533afd]">Legal</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-[#64748d]/70">
          Last updated: {lastUpdated}
        </p>

        <div className="legal-prose mt-10 space-y-8 text-sm leading-relaxed text-[#64748d] sm:text-[15px]">
          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">1. Overview</h2>
            <p className="mt-2">
              {siteConfig.name} (&ldquo;{siteConfig.name},&rdquo; &ldquo;I,&rdquo; &ldquo;me,&rdquo; or
              &ldquo;the studio&rdquo;) is a one-person custom song creation service. I take your
              ideas — whether that&rsquo;s finished lyrics, a rough demo, a voice memo, or just a
              concept — and produce a finished, polished song built around your vision. By submitting
              a project, contacting the studio, or engaging the studio for work, you
              (&ldquo;you&rdquo; or &ldquo;the client&rdquo;) agree to these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              2. Nature of the service
            </h2>
            <p className="mt-2">
              {siteConfig.name} is a custom creative service. Every project is personally reviewed,
              directed, and delivered by me — not queued through a platform or generated automatically.
              The service covers a range of project types: turning lyrics into finished songs,
              completing unfinished demos, producing custom songs from scratch, creating instrumentals,
              writing story-based songs, and recreating or reimagining existing songs in a new style.
            </p>
            <p className="mt-3">
              Submitting an idea does not create a binding contract and does not guarantee that I
              will take on your project. A project formally begins only once we have agreed in
              writing (typically by email) on the scope, deliverables, timeline, and price.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              3. Submissions &amp; client responsibilities
            </h2>
            <p className="mt-2">
              When you submit an idea or any supporting materials, you confirm that:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                You have the right to share any lyrics, recordings, demos, voice notes, reference
                tracks, or other materials you provide, and doing so does not infringe the
                rights of any third party.
              </li>
              <li>
                Any reference tracks or existing songs you provide are shared for creative direction
                purposes only, not as source material to be copied or reproduced.
              </li>
              <li>
                The information you provide is accurate to the best of your knowledge.
              </li>
              <li>
                You will respond to questions and provide feedback within a reasonable timeframe.
                Delays in client response may affect delivery timelines.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              4. Quotes, scope &amp; payment
            </h2>
            <p className="mt-2">
              Each project is quoted individually. The price reflects the scope of the work —
              including whether a vocal or instrumental is needed, the complexity of the arrangement,
              the number of revision rounds, and how finished your starting material is. After
              reviewing your submission, I&rsquo;ll reply with a written quote before any work begins.
            </p>
            <p className="mt-3">
              Once a scope and price are agreed in writing, that quote covers the agreed work.
              Changes in creative direction, additional songs, or significant expansions of scope
              may require a separate quote and will always be discussed with you before proceeding.
              Payment terms — including any deposit required and the schedule for final payment —
              will be confirmed in writing at the start of the project.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              5. Revisions &amp; delivery
            </h2>
            <p className="mt-2">
              Each package includes a set number of revision rounds, as described on the Pricing
              page and confirmed in your project agreement. A revision round means I take your
              written feedback and make targeted changes to the existing direction — adjustments
              to arrangement, mix, lyrics, or feel. Revisions are not unlimited rewrites; a request
              to start over in a completely different direction may be treated as a new scope.
            </p>
            <p className="mt-3">
              Delivery timelines are estimates based on project complexity and revision activity.
              I&rsquo;ll give you a realistic timeline at the start of the project. If something
              changes on either side that affects the schedule, I&rsquo;ll let you know promptly.
              If you have a firm deadline — a birthday, wedding, event, or release date — tell me
              upfront so I can confirm whether it&rsquo;s achievable before we begin.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              6. Ownership &amp; usage rights
            </h2>
            <p className="mt-2">
              Upon receipt of final payment, I grant you a license to use the finished song for
              the purposes agreed in your project. For most projects, this covers personal use —
              keeping the song for yourself, sharing it privately, using it as a gift, or posting
              it on personal social media. Commercial use, including sync licensing, monetized
              streaming, use in advertising, or sale, may be available depending on your package
              and will be specified in writing before the project begins.
            </p>
            <p className="mt-3">
              Until final payment is received, the finished work and all drafts remain the
              property of {siteConfig.name}. The studio reserves the right to use completed work
              as portfolio samples unless you request in writing before the project begins that
              your song remain private.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              7. Use of production tools
            </h2>
            <p className="mt-2">
              {siteConfig.name} uses a combination of AI-assisted music production software and
              traditional production tools as part of the creative process. All creative direction,
              curation, and decisions about the final result are handled personally by me.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              8. Cancellations &amp; refunds
            </h2>
            <p className="mt-2">
              Because every project is custom work begun specifically for you, all payments are
              generally non-refundable once work has started. If you need to cancel a project in
              progress, any deposit paid is non-refundable and any work completed up to that point
              will be invoiced at the agreed rate. If I am unable to complete a project for reasons
              on my end, I will issue a full refund of any amounts paid for work not yet delivered.
            </p>
            <p className="mt-3">
              Specific cancellation terms will be confirmed in your written project agreement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              9. Confidentiality
            </h2>
            <p className="mt-2">
              I treat the details of your project — your lyrics, story, personal context, and
              creative materials — as private. I will not share the specifics of your project with
              third parties. The exception is using the finished song as a portfolio sample, which
              you can opt out of in writing as noted above.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              10. Limitation of liability
            </h2>
            <p className="mt-2">
              To the maximum extent permitted by applicable law, {siteConfig.name}&rsquo;s total
              liability for any claim arising from or related to a project is limited to the total
              amount you paid for that project. {siteConfig.name} is not liable for any indirect,
              incidental, consequential, or special damages, including but not limited to loss of
              revenue, loss of data, or loss of opportunity.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">
              11. Changes to these terms
            </h2>
            <p className="mt-2">
              These terms may be updated from time to time. The version that applies to your project
              is the version in effect when your written project agreement is confirmed, or the most
              recent version if no project has been formally agreed.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d253d]">12. Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`} className="link-underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-[#64748d]/70">
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
