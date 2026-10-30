import type { ComponentProps } from "react";
import { cn } from "cn";

/**
 * The glass card used across every section so hover behaviour stays consistent.
 */
export function Card({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8",
        className,
      )}
      {...props}
    />
  );
}
