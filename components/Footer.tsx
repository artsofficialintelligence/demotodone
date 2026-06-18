import Link from "next/link";
import { Music4, Mail, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerNav = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/pricing", label: "Pricing" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Get started",
    links: [
      { href: "/submit", label: "Submit Your Song Idea" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e3e8ee] bg-[#f6f9fc]">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#533afd]">
                <Music4 className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="text-lg font-semibold tracking-tight text-[#0d253d]">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#64748d]">
              {siteConfig.description}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-[#0d253d] transition-opacity hover:opacity-60"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>

            {(siteConfig.social.instagram || siteConfig.social.youtube) && (
              <div className="mt-5 flex items-center gap-3">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e3e8ee] text-[#0d253d] transition-opacity hover:opacity-60"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                )}
                {siteConfig.social.youtube && (
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e3e8ee] text-[#0d253d] transition-opacity hover:opacity-60"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748d]">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#64748d] transition-colors hover:text-[#0d253d]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#e3e8ee] pt-6 text-xs text-[#64748d] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            A custom creative service — not a marketplace or automated
            generator.
          </p>
        </div>
      </div>
    </footer>
  );
}
