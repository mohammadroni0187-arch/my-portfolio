import { Code2, GraduationCap, Mail, MapPin, Rocket, Target, Layers } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Reveal } from "@/components/common/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean Development",
    description:
      "Building reusable components and maintainable code with modern web technologies.",
  },
  {
    icon: Rocket,
    title: "Real Projects",
    description:
      "Learning through practical projects, debugging and solving real-world problems.",
  },
  {
    icon: Target,
    title: "Continuous Growth",
    description:
      "Improving my development skills through consistent practice and learning.",
  },
];

const facts = [
  { icon: MapPin, label: "Based in", value: site.location },
  { icon: Layers, label: "Focus", value: "Full-stack web development" },
  { icon: GraduationCap, label: "Education", value: site.education.degree },
  { icon: Mail, label: "Email", value: site.email },
];

export function About() {
  return (
    <Section id="about" label="About me" className="bg-slate-950">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column: story + quick facts */}
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title={
              <>
                Turning ideas into<span className="text-gradient"> digital experiences.</span>
              </>
            }
            description="I'm a web developer focused on building modern, responsive and user-friendly web applications. I work with React, Next.js and TypeScript, and I enjoy learning by building projects and solving development challenges."
          />

          <p className="mt-5 leading-8 text-slate-400">
            My goal is to become a stronger developer by improving my problem-solving skills,
            writing maintainable code and creating useful digital experiences.
          </p>

          <dl className="mt-10 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Icon size={17} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs tracking-wider text-slate-500 uppercase">{fact.label}</dt>
                    <dd className="mt-0.5 text-sm font-medium break-words text-slate-200">{fact.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </Reveal>

        {/* Right column: principles */}
        <div className="grid gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 100}>
                <Card className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                    <Icon size={26} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-400">{item.description}</p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}