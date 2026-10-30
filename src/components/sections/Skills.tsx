import { Code2, Database, Palette, Wrench } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Reveal } from "@/components/common/Reveal";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    skills: ["Tailwind CSS", "Responsive Design", "DaisyUI"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills" className="border-y border-slate-800 bg-slate-950">
      <SectionHeading
        align="center"
        eyebrow="My Skills"
        title="Technologies I work with"
        description="Tools and technologies I use to build responsive, modern and user-friendly web applications."
        className="mb-14"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <Reveal key={group.title} delay={(index % 2) * 100}>
              <Card className="h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
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
