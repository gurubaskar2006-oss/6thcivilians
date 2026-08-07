"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { cn } from "@/lib/cn";

/**
 * Depth-through transition: the section rises from below as it enters
 * and/or recedes (scale 0.94, opacity 0.7) as it leaves, so the page
 * reads as moving through layers rather than scrolling past cards.
 * Desktop + no-reduced-motion only.
 */
export default function DepthTransition({
  children,
  className,
  enter = true,
  exit = true,
}: {
  children: React.ReactNode;
  className?: string;
  enter?: boolean;
  exit?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const desktop = useMediaQuery("(min-width: 768px)");
  const enabled = !reduce && desktop;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [
    enter ? 120 : 0,
    0,
    0,
    exit ? -90 : 0,
  ]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [
    enter ? 0.96 : 1,
    1,
    1,
    exit ? 0.94 : 1,
  ]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [
    enter ? 0.3 : 1,
    1,
    1,
    exit ? 0.7 : 1,
  ]);

  // The ref-attached element is ALWAYS rendered (the motion styles are the
  // only thing gated), so framer's useScroll target is always hydrated —
  // a conditionally-rendered ref throws "Target ref is defined but not
  // hydrated" and breaks hydration.
  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        className="h-full"
        style={enabled ? { y, scale, opacity, transformPerspective: 1200 } : undefined}
      >
        {children}
      </motion.div>
    </div>
  );
}
