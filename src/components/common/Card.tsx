import type { ComponentProps } from "react";
import { cn } from "cn";

/**
 * The glass card used across every section so hover behaviour stays consistent.
 */
export function Card({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_-24px_rgba(34,211,238,0.3)] sm:p-8",
        className,
      )}
      {...props}
    />
  );
}