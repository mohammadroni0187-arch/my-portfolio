"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "cn";
import { navLinks, sectionIds, site } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Close the mobile menu when the viewport grows to desktop size.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/80 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="rounded-lg focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none"
        >
          <span className="block text-2xl font-bold tracking-tight text-white">
            {site.name}
            <span className="text-cyan-400">.</span>
          </span>
          <span className="block text-[9px] font-medium tracking-[0.22em] text-slate-500 uppercase">
            {site.role}
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "block rounded-full px-4 py-2 text-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none",
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/[0.08] hover:text-cyan-300",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Contact CTA */}
        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none sm:flex"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="rounded-xl border border-white/10 p-2.5 text-white transition hover:border-cyan-400/50 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none md:hidden"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="overflow-hidden border-t border-white/[0.08] bg-slate-950/95 px-5 py-5 md:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm transition",
                    isActive ? "bg-cyan-400/10 text-cyan-300" : "text-slate-300 hover:bg-white/[0.05] hover:text-cyan-300",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li className="mt-3">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Let&apos;s Talk
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
