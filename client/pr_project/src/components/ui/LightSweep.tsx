"use client";

import { useEffect, type RefObject } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * The signature light band. Renders the brushed-steel sweep visual only.
 * Positioning/animation is handled by the caller.
 */
export function SweepBand({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className={cn("sweep-band", className)}
      style={style}
    />
  );
}

type LightSweepProps = {
  intensity?: number;
  target?: RefObject<HTMLElement>;
  bandHeight?: string;
  /**
   * Scroll-progress window (0–1) in which the sweep runs. Use a narrow
   * early range like [0, 0.4] for a "handoff": the sweep crosses as the
   * section's content begins revealing. Defaults to the full section.
   */
  range?: [number, number];
};

/**
 * Metallic light-sweep tied to scroll position.
 * - No `target`  -> fixed overlay driven by the whole page's scroll progress.
 * - With target -> absolute sweep inside that section, driven by local progress.
 * - On desktop the global sweep also nudges with the pointer (scroll stays primary).
 * - Scroll is the only driver, so behaviour is identical on touch devices.
 */
export default function LightSweep({
  intensity = 0.5,
  target,
  bandHeight = "45vh",
  range,
}: LightSweepProps) {
  const reduce = useReducedMotion();
  const isGlobal = !target;

  const { scrollYProgress } = useScroll(
    target ? { target, offset: ["start end", "end start"] } : undefined,
  );
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const [r0, r1] = range ?? [0, 1];
  const y = useTransform(
    progress,
    isGlobal ? [0, 1] : [r0, r1],
    isGlobal ? ["-80%", "320%"] : ["-140%", "280%"],
  );
  const opacity = useTransform(
    progress,
    isGlobal
      ? [0, 0.08, 0.92, 1]
      : [r0, r0 + (r1 - r0) * 0.4, r1],
    isGlobal ? [0, intensity, intensity, 0] : [0, intensity, 0],
  );

  // Pointer influence — desktop only, subtle, scroll stays the primary driver.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const xOffset = useTransform(pointerX, (v) => `${v}px`);
  const yOffset = useTransform(pointerY, (v) => `${v}px`);
  const finalY = useTransform(
    [y, yOffset] as typeof y[],
    ([base, offset]: string[]) => `calc(${base} + ${offset})`,
  );

  useEffect(() => {
    if (reduce || !isGlobal) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: PointerEvent) => {
      pointerX.set((e.clientX / window.innerWidth - 0.5) * 30);
      pointerY.set((e.clientY / window.innerHeight - 0.5) * 18);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, isGlobal, pointerX, pointerY]);

  if (reduce) return null;

  if (isGlobal) {
    return (
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 overflow-hidden mix-blend-overlay"
        style={{ opacity }}
      >
        <motion.div
          className="absolute left-0 right-0 will-change-transform"
          style={{ y: finalY, x: xOffset, height: bandHeight }}
        >
          <SweepBand className="h-full" />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-overlay"
      style={{ opacity }}
    >
      <motion.div
        className="absolute left-0 right-0 will-change-transform"
        style={{ y, height: bandHeight }}
      >
        <SweepBand className="h-full" />
      </motion.div>
    </motion.div>
  );
}
