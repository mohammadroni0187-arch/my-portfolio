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

const columns = [
  { type: "experience", title: "Experience", icon: Briefcase },
  { type: "education", title: "Education", icon: GraduationCap },
] as const;

export function Experience() {
  return (
    <Section id="experience" label="Experience and education" className="bg-slate-950">
      <SectionHeading
        align="center"
        eyebrow="My Journey"
        title="Experience & education"
        description="Where I have been learning and building — one project, one concept and one debug session at a time."
        className="mb-14"
      />

      {/* Two columns: experience on the left, education on the right */}
      <div className="grid gap-10 md:grid-cols-2 lg:gap-14">
        {columns.map((column, columnIndex) => {
          const ColumnIcon = column.icon;
          const items = timeline.filter((item) => item.type === column.type);

          return (
            <Reveal key={column.type} delay={columnIndex * 120}>
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <ColumnIcon size={21} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white">{column.title}</h3>
              </div>

              <ol className="relative space-y-6 border-l border-white/10 pl-7">
                {items.map((item) => (
                  <li key={item.role} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute top-8 -left-[37px] h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_14px_rgba(34,211,238,0.6)]"
                    />

                    <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_-24px_rgba(34,211,238,0.3)] sm:p-7">
                      <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                        {item.period}
                      </span>

                      <h4 className="mt-4 text-xl font-semibold text-white">{item.role}</h4>
                      <p className="mt-1 text-sm font-medium text-cyan-400">{item.org}</p>

                      <ul className="mt-4 space-y-2.5">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-3 text-[15px] leading-7 text-slate-400">
                            <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}