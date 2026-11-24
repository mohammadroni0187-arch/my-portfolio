import { ArrowUpRight, Code2, ExternalLink, Star } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

const projects = [
  {
    number: "01",
    title: "MentorLagbe",
    category: "Online Tuition & Tutor Finding Platform",
    description:
      "MentorLagbe is a full-stack tuition management platform designed to connect students with tutors, simplify tuition discovery, and manage tuition applications. It includes role-based dashboards for students, tutors, and administrators.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "Stripe",
    ],
    demo: "https://mentorlagbe-client-one.vercel.app",
    featured: true,
  },
  {
    number: "02",
    title: "Book-Nook",
    category: "Online Library Management Application",
    description:
      "BookNook is an online library management application focused on organizing books and managing borrowing activities. The project uses a modern frontend with a separate backend API and MongoDB database.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
      "Node.js",
      "Express.js",
      "JWT",
    ],
    demo: "https://online-library-qtj5.vercel.app",
    featured: true,
  },
  {
    number: "03",
    title: "Bazer-dor",
    category: "E-commerce Web Application",
    description:
      "A modern web project built with Next.js and TypeScript, focused on a clean user interface and responsive experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    demo: "https://bazer-dor-web-site.vercel.app",
    featured: false,
  },
  {
    number: "04",
    title: "Dev Stack Website",
    category: "Responsive Frontend Website",
    description:
      "Created a personal website to showcase web development work and projects, with a focus on clean layout and user-friendly design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Toastify", "Responsive Design"],
    demo: "https://dev-stack-roni.netlify.app/",
    source: "https://github.com/mohammadroni0187-arch/Fast-Project",
    featured: false,
  },
  {
    number: "05",
    title: "Fit Log",
    category: "Workout Tracking Web Application",
    description:
      "A modern workout library with dynamic routing, API integration and a personal plan that lets users save up to five workouts — complete with responsive UI and toast notifications.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "React Toastify"],
    demo: "https://fit-log-app-teal.vercel.app",
    source: "https://github.com/mohammadroni0187-arch/fit-log-app",
    featured: false,
  },
  {
    number: "06",
    title: "DevConf Website",
    category: "Responsive Frontend Website",
    description:
      "A conference website featuring a navigation menu, speaker section and event-focused layout, built as an HTML and CSS project.",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    demo: "https://mohammadroni0187-arch.github.io/Assignment/",
    source: "https://github.com/mohammadroni0187-arch/Assignment",
    featured: false,
  },
] as const;

const MAX_VISIBLE_TECH = 6;

export function Projects() {
  return (
    <Section id="projects" label="Projects" className="bg-slate-950">
      <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="My Projects"
          title="Some things I've built"
          description="A selection of my projects where I apply my skills, learn new technologies and solve practical problems."
          className="max-w-2xl"
        />

        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-lg text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none"
        >
          Explore GitHub
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      {/* 1 column on mobile, 2 columns from md and up */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => {
          const visibleTech = project.technologies.slice(0, MAX_VISIBLE_TECH);
          const extra = project.technologies.length - visibleTech.length;

          return (
            <Reveal key={project.number} delay={(index % 2) * 100} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)]">
                {/* Cover */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950/60">
                  {/* subtle grid pattern */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:28px_28px]"
                  />

                  {/* big faded number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-6 -left-2 text-[8rem] leading-none font-black text-white/[0.04] select-none"
                  >
                    {project.number}
                  </span>

                  <span className="absolute top-5 left-6 text-xs font-medium tracking-[0.25em] text-slate-500">
                    PROJECT / {project.number}
                  </span>

                  {project.featured ? (
                    <span className="absolute top-4 right-5 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">
                      <Star size={12} className="fill-cyan-300" aria-hidden="true" />
                      Featured
                    </span>
                  ) : null}

                  <div className="relative text-center transition duration-300 group-hover:scale-105">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                      <Code2 size={28} className="text-cyan-400" aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-2xl font-bold text-white">{project.title}</p>
                    <p className="mt-1.5 px-6 text-sm text-slate-400">{project.category}</p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -bottom-16 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl transition duration-500 group-hover:bg-cyan-400/25"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>

                  <p className="mt-3 line-clamp-4 leading-7 text-slate-400">{project.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {visibleTech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300 transition group-hover:border-cyan-400/20"
                      >
                        {tech}
                      </li>
                    ))}
                    {extra > 0 ? (
                      <li className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                        +{extra} more
                      </li>
                    ) : null}
                  </ul>

                  {/* Buttons pinned to the bottom so every card lines up */}
                  <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-5">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open the ${project.title} live demo in a new tab`}
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
                    >
                      Live Demo <ExternalLink size={16} aria-hidden="true" />
                    </a>

                    <a
                      href={"source" in project ? project.source : site.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View the ${project.title} source code in a new tab`}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
                    >
                      Source Code <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}