import type { ReactNode } from "react";
import { cn } from "cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">{eyebrow}</p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">
        {title}
      </h2>

      {description ? <p className="mt-5 leading-8 text-slate-400">{description}</p> : null}
    </div>
  );
}
