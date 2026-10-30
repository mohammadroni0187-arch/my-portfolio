import type { ReactNode } from "react";
import { cn } from "cn";

type SectionProps = {
  /** Matches the id used by in-page nav links (e.g. `#about`). */
  id: string;
  /** Accessible name announced for the section by screen readers. */
  label: string;
  children: ReactNode;
  className?: string;
  /** Overrides for the inner max-width container. */
  innerClassName?: string;
};

export function Section({ id, label, children, className, innerClassName }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("relative px-6 py-20 sm:px-8 sm:py-24", className)}
    >
      <div className={cn("mx-auto max-w-7xl", innerClassName)}>{children}</div>
    </section>
  );
}
