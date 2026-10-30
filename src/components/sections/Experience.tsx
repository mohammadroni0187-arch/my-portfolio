import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

type TimelineItem = {
  type: "experience" | "education";
  role: string;
  org: string;
  period: string;
  points: string[];
};

/**
 * TODO: Replace the entries below with your real experience & education
 * history — everything else on the page adapts automatically.
 */
const timeline: TimelineItem[] = [
  {
    type: "experience",
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "2026 — Present",
    points: [
      "Building responsive, production-ready websites with Next.js, TypeScript and Tailwind CSS.",
      "Turning client ideas into deployed products on Vercel with MongoDB-backed data.",
      "Writing clean, reusable components and iterating on feedback until the UI feels right.",
    ],
  },
  
  {
    type: "education",
    role: "Bachelor of Business Studies (BBS)",
    org: "Chengarchar Gov. Degree College",
    period: "2017 — 2022",
    points: [
      "Completed Bachelor of Business Studies (BBS) with coursework in management, accounting, and business administration.",
      "Developed strong analytical reasoning, structured planning, and collaborative problem-solving skills.",
      "Applied structured learning and discipline toward transitioning into modern software and web development.",
    ],
  },
];

const metadataByType = {
  experience: { label: "Experience", icon: Briefcase },
  education: { label: "Education", icon: GraduationCap },
} as const;

export function Experience() {
  return (
    <Section id="experience" label="Experience and education" className="bg-slate-950">
      <SectionHeading
        eyebrow="My Journey"
        title="Experience & education"
        description="Where I have been learning and building — one project, one concept and one debug session at a time."
        className="mb-14"
      />

      <ol className="relative mx-auto max-w-3xl space-y-8 border-l border-white/10 pl-8 sm:pl-10">
        {timeline.map((item, index) => {
          const meta = metadataByType[item.type];
          const Icon = meta.icon;

          return (
            <li key={item.role} className="relative">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute top-7 -left-[45px] h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.5)] sm:-left-[53px]"
              />

              <Reveal delay={index * 120}>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                      <Icon size={13} aria-hidden="true" />
                      {meta.label}
                    </span>

                    <span className="text-sm text-slate-500">{item.period}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">{item.role}</h3>

                  <p className="mt-1 text-sm font-medium text-cyan-400">{item.org}</p>

                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-7 text-slate-400">
                        <span aria-hidden="true" className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
