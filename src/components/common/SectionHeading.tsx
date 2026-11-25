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
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto max-w-2xl text-center", className)}>
      <p
        className={cn(
          "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400",
          centered && "justify-center",
        )}
      >
        <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
        {eyebrow}
        {centered ? (
          <span aria-hidden="true" className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
        ) : null}
      </p>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}