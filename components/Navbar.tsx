"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Music4 } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#e3e8ee] bg-white/95 backdrop-blur-sm"
          : "border-b border-transparent bg-white"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#533afd] transition-opacity duration-200 group-hover:opacity-75">
            <Music4 className="h-5 w-5 text-white" strokeWidth={2.2} />
          </span>
          <span className="text-lg font-semibold tracking-tight text-[#0d253d]">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[#0d253d]"
                    : "text-[#64748d] hover:text-[#0d253d]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/submit" className="btn-primary">
            Submit Your Song Idea
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e3e8ee] text-[#0d253d] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[#e3e8ee] bg-white md:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-[#f6f9fc] text-[#0d253d]"
                      : "text-[#64748d] hover:bg-[#f6f9fc] hover:text-[#0d253d]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link href="/submit" className="btn-primary w-full">
                Submit Your Song Idea
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
