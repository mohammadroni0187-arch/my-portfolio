import { Code2, Rocket, Target } from "lucide-react";
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

export function About() {
  return (
    <Section id="about" label="About me" className="bg-slate-950">
      <div className="mb-14 max-w-2xl">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Turning ideas into<span className="text-cyan-400"> digital experiences.</span>
            </>
          }
          description="I'm a web developer focused on building modern, responsive and user-friendly web applications. I work with React, Next.js and TypeScript, and I enjoy learning by building projects and solving development challenges."
        />

        <p className="mt-4 leading-8 text-slate-400">
          My goal is to become a stronger developer by improving my problem-solving skills,
          writing maintainable code and creating useful digital experiences.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 100}>
              <Card className="h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                  <Icon size={23} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-semibold text-white">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
