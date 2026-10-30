import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/common/Reveal";
import { SocialLinks } from "@/components/common/SocialLinks";
import Image from "next/image";

const highlights = ["React", "Next.js", "TypeScript", "Node.js"];

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate overflow-hidden bg-slate-950"
    >
      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-40 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 md:grid-cols-[1.2fr_0.8fr]">
        {/* Left content */}
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-sm text-cyan-200">Growing as a Full-Stack Developer</span>
          </div>

          <p className="mt-7 mb-4 text-sm font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Hello, I&apos;m {site.name}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
            Building the web,
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              one project at a time.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build responsive and user-friendly web applications using React, Next.js and
            TypeScript. I enjoy solving problems and turning ideas into practical digital
            experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)] focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
            >
              View My Work
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href={site.resumePath}
              download="Mohammad_Roni_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
            >
              Download Resume
              <Download size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <span className="text-sm text-slate-500">Find me on</span>
            <SocialLinks iconSize={21} />
          </div>
        </Reveal>

        {/* Right profile card */}
        <Reveal delay={150} className="mx-auto w-full max-w-sm">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur">
            <div className="absolute -top-3 -right-3 rounded-xl border border-cyan-400/20 bg-slate-900 px-4 py-2 text-sm text-cyan-300">
              Developer
            </div>

            <div className="flex aspect-[4/4.2] flex-col items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950/40 p-6 text-center">
              <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.25)] ring-4 ring-cyan-400/10">
                <Image
                  src={site.image}
                  alt={site.name}
                  width={300}
                  height={300}
                  priority
                  className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">{site.name}</h2>

              <p className="mt-2 text-sm text-slate-400">React · Next.js · TypeScript</p>

              <ul className="mt-7 flex flex-wrap justify-center gap-2">
                {highlights.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#about"
              aria-label="Scroll to the About section"
              className="mt-5 flex items-center justify-between rounded-xl px-2 pb-1 pt-3 text-xs text-slate-500 transition hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none"
            >
              Learning through real projects
              <ArrowDown size={17} className="animate-bounce text-cyan-400" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
