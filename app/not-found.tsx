import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
        This track <span className="underline decoration-[#e3e8ee] underline-offset-4">skipped</span>.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-[#64748d]">
        The page you&rsquo;re looking for isn&rsquo;t here. Let&rsquo;s get you
        back to something that plays.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" />
          Back to home
        </Link>
        <Link href="/submit" className="btn-secondary">
          Submit a song idea
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
