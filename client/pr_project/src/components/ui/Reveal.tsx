"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { useReveal } from "@/lib/useReveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
};

/**
 * Scroll fade-up that defaults to fully visible. Only when
 * IntersectionObserver + no-reduced-motion are available does `.pre` hide the
 * block, and it is removed on first scroll-into-view. JS failure can never
 * leave content invisible.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 12,
  scale,
}: RevealProps) {
  const { ref } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-y": `${y}px`,
          "--reveal-scale": scale != null ? `${scale}` : undefined,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
