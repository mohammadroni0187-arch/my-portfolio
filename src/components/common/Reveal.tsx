"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms when several elements reveal together. */
  delay?: number;
};

/**
 * Scroll-reveal micro-interaction: fades/slides children into view once with
 * an IntersectionObserver, then disconnects. Users who prefer reduced motion
 * get an instant reveal (see the global override in `globals.css`), and the
 * content stays visible when JavaScript is disabled (see the <noscript> style
 * in `layout.tsx`).
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", visible && "reveal-visible", className)}
    >
      {children}
    </div>
  );
}
