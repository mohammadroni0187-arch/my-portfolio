import { Code2, Database, Palette, Wrench } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Reveal } from "@/components/common/Reveal";

const skillGroups = [
  {
    title: "Frontend Development",
    blurb: "Interfaces that are fast, accessible and easy to maintain.",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    title: "Styling & UI",
    blurb: "Responsive, consistent design systems.",
    icon: Palette,
    skills: ["Tailwind CSS", "Responsive Design", "DaisyUI"],
  },
  {
    title: "Backend & Database",
    blurb: "APIs and data models that power the product.",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    title: "Tools & Workflow",
    blurb: "Shipping code with a reliable workflow.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills" className="border-y border-white/[0.06] bg-slate-900/40">
      <SectionHeading
        align="center"
        eyebrow="My Skills"
        title="Technologies I work with"
        description="Tools and technologies I use to build responsive, modern and user-friendly web applications."
        className="mb-14"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <Reveal key={group.title} delay={(index % 2) * 100} className="h-full">
              <Card className="h-full">
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-7 text-5xl leading-none font-black text-white/[0.04] select-none"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-0.5 text-sm text-slate-500">{group.blurb}</p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}