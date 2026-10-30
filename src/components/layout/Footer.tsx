"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { site } from "@/data/site";
import { SocialLinks } from "@/components/common/SocialLinks";

export function Footer() {
  const [year, setYear] = useState<number | string>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link
          href="#home"
          className="rounded-lg text-2xl font-bold text-white focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none"
        >
          {site.name.split(" ")[0]}
          <span className="text-cyan-400">.</span>
        </Link>

        <p className="text-center text-sm text-slate-500">
          © {year} {site.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <SocialLinks />

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <p className="mt-6 flex items-center justify-center gap-1 text-xs text-slate-600">
        Built with <Heart size={12} className="text-cyan-400" aria-hidden="true" /> using Next.js
        and Tailwind CSS
      </p>
    </footer>
  );
}
