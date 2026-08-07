"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motionVariants";
import { cn } from "@/lib/cn";
import { useReveal } from "@/lib/useReveal";

/*
 * Masked reveal primitives (headlines get a clip-wipe; body copy stays a
 * plain fade — see Reveal.tsx).
 *
 * Each primitive observes its own STABLE wrapper through useReveal and drives
 * the masked child with the resulting boolean. Everything is fully visible by
 * default — `.pre` hiding and the closed clip are only applied when
 * IntersectionObserver + no-reduced-motion hold, so a broken observer can
 * never leave content hidden.
 */
type WipeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

const OPEN = "inset(0 0 0 0)";
const CLOSED = "inset(0 100% 0 0)";

/**
 * Single masked block — clip-path wipes left → right on scroll-into-view.
 * Used for headline lines and the Together statement. Not for body copy.
 */
export function LineWipe({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: WipeProps) {
  const { ref, isIn } = useReveal<HTMLSpanElement>();
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span ref={ref} className={cn("block pb-[0.08em]", className)}>
        {children}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={cn("block overflow-hidden pb-[0.08em]", className)}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      <motion.span
        className="block"
        initial={false}
        animate={{ clipPath: isIn ? OPEN : CLOSED }}
        transition={{ duration, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Staggered masked lines (line-level clip wipe) for section headlines. */
export function MaskLines({
  lines,
  className,
  lineClassName,
  stagger = 0.08,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
}) {
  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <LineWipe key={i} className={lineClassName} delay={i * stagger}>
          {line}
        </LineWipe>
      ))}
    </span>
  );
}

/**
 * Word-level clip-path wipe — the hero headline.
 * Driven by the `active` prop (e.g. after the loader curtain lifts), so it
 * plays exactly on cue rather than on an observer. Falls back to the final,
 * fully visible state when reduced motion or a broken enhancement stack.
 */
export function WordWipe({
  lines,
  className,
  stagger = 0.05,
  duration = 0.55,
  delay = 0,
  active,
}: {
  lines: string[];
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  active?: boolean;
}) {
  const reduce = useReducedMotion();
  const wordCounts = lines.map((line) => line.split(" ").length);

  if (reduce) {
    return (
      <span className={cn("block", className)} aria-hidden>
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={cn("block", className)} aria-hidden>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi) => {
            const wordIndex =
              wordCounts.slice(0, li).reduce((a, b) => a + b, 0) + wi;
            return (
              <motion.span
                key={wi}
                className="mr-[0.26em] inline-block"
                initial={false}
                animate={{
                  clipPath: active ? OPEN : CLOSED,
                }}
                transition={{
                  duration,
                  ease: EASE,
                  delay: delay + wordIndex * stagger,
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

/**
 * Generic masked block — clip-path wipe for whole panels (CTA fields, panels).
 * Reserved, like LineWipe, for structure — not paragraphs.
 */
export function MaskWipe({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: WipeProps) {
  const { ref, isIn } = useReveal<HTMLDivElement>();
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      <motion.div
        className={className}
        initial={false}
        animate={{ clipPath: isIn ? OPEN : CLOSED }}
        transition={{ duration, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
