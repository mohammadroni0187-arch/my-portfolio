import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { SocialLinks } from "@/components/common/SocialLinks";

export async function Footer() {
  // `new Date()` is blocked during prerender under `cacheComponents`; caching
  // the value lets Next.js bake it into the static shell at build time.
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 px-6 pt-14 pb-8 sm:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        {/* Brand */}
        <div>
          <Link
            href="#home"
            className="rounded-lg text-3xl font-bold text-white focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none"
          >
            {site.name}
            <span className="text-cyan-400">.</span>
          </Link>

          <p className="mt-4 max-w-md leading-7 text-slate-400">
            {site.role} building modern, responsive web applications with React, Next.js,
            TypeScript and MongoDB.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block rounded-lg text-sm font-medium text-cyan-400 transition hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none"
          >
            {site.email}
          </a>
        </div>

        {/* Navigation + socials */}
        <div className="grid grid-cols-2 gap-8 md:justify-items-end">
          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">Connect</p>
            <SocialLinks className="mt-4" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-center text-sm text-slate-500">
          © {year} {site.name}. All rights reserved.
        </p>

        <a
          href="#home"
          aria-label="Back to top"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
        >
          Back to top
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}