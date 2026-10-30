import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

const projects = [
  {
    number: "01",
    title: "Bazer-dor",
    category: "E-commerce Web Application",
    description:
      "A modern web project built with Next.js and TypeScript, focused on a clean user interface and responsive experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    demo: "https://bazer-dor-web-site.vercel.app",
    featured: true,
  },
  {
    number: "02",
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
    number: "03",
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
    number: "04",
    title: "DevConf Website",
    category: "Responsive Frontend Website",
    description:
      "A conference website featuring a navigation menu, speaker section and event-focused layout, built as an HTML and CSS project.",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    demo: "https://mohammadroni0187-arch.github.io/Assignment/",
    source: "https://github.com/mohammadroni0187-arch/Assignment",
    featured: false,
  }
] as const;

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

      <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={(index % 2) * 100} className={project.featured ? "md:col-span-2" : undefined}>
            <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              {/* Project cover */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950/50">
                <span className="absolute top-5 left-6 text-sm font-medium tracking-widest text-slate-500">
                  PROJECT / {project.number}
                </span>

                {project.featured ? (
                  <span className="absolute top-5 right-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    Featured
                  </span>
                ) : null}

                <div className="text-center transition duration-300 group-hover:scale-105">
                  <Code2 size={44} className="mx-auto text-cyan-400" aria-hidden="true" />
                  <p className="mt-4 text-2xl font-bold text-white">{project.title}</p>
                  <p className="mt-2 text-sm text-slate-400">{project.category}</p>
                </div>

                <div aria-hidden="true" className="pointer-events-none absolute -right-8 -bottom-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-4 border-t border-white/10 pt-5">
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
        ))}
      </div>
    </Section>
  );
}
