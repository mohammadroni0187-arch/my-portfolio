import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/common/Reveal";
import { SocialLinks } from "@/components/common/SocialLinks";

const highlights = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"];

const stats = [
  { value: "6", label: "Projects built" },
  { value: "18+", label: "Technologies" },
  { value: "2026", label: "Freelancing since" },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate overflow-hidden bg-slate-950"
    >
      {/* Background: grid + ambient glows */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-48 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-14 px-6 py-16 sm:px-8 md:grid-cols-[1.15fr_0.85fr] lg:py-20">
        {/* Left: copy */}
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm text-emerald-200">Available for freelance &amp; full-time work</span>
          </div>

          <p className="mt-8 mb-4 text-sm font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Hello, I&apos;m {site.name}
          </p>

          <h1 className="text-4xl leading-[1.05] font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
            I build fast, modern
            <span className="text-gradient mt-2 block">web applications.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            {site.role} crafting responsive, user-friendly products with React, Next.js and
            TypeScript — from clean interfaces to the APIs and databases behind them.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.35)] focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
            >
              View My Work
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href={site.resumePath}
              download="Mohammad_Roni_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
            >
              Download Resume
              <Download size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Stats strip */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-4 text-center sm:px-6">
                <dt className="order-2 mt-1 text-xs text-slate-500">{stat.label}</dt>
                <dd className="text-2xl font-bold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm text-slate-500">Find me on</span>
            <SocialLinks iconSize={21} />
          </div>
        </Reveal>

        {/* Right: profile card */}
        <Reveal delay={150} className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/10 to-violet-500/10 blur-2xl" />

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src={site.image}
                  alt={`Portrait of ${site.name}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 380px, 90vw"
                  className="object-cover object-top transition duration-700 hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

                <div className="absolute inset-x-5 bottom-5">
                  <h2 className="text-2xl font-bold text-white">{site.name}</h2>
                  <p className="mt-1 text-sm text-cyan-300">{site.role}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 pt-4 pb-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-cyan-400" aria-hidden="true" />
                  {site.location}
                </span>
                <a
                  href="#about"
                  aria-label="Scroll to the About section"
                  className="inline-flex items-center gap-1.5 rounded-lg transition hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none"
                >
                  More about me
                  <ArrowDown size={14} className="animate-bounce text-cyan-400" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Floating tech chip */}
            <ul className="animate-float absolute -right-3 -bottom-6 hidden max-w-[16rem] flex-wrap justify-end gap-1.5 rounded-2xl border border-white/10 bg-slate-900/90 p-3 shadow-xl backdrop-blur sm:flex">
              {highlights.map((tech) => (
                <li key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}