"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Eased number count-up (ease-out-expo over 1.2s) triggered on scroll-into-view.
 * Non-numeric values (e.g. "∞") render statically.
 */
export default function CountUp({
  value,
  duration = 1.2,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;

    const text = String(value);
    if (!/^\d+$/.test(text)) {
      el.textContent = text;
      return;
    }

    const target = parseInt(text, 10);
    const pad = text.length;
    if (reduce) {
      el.textContent = text;
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(2, -10 * p);
      el.textContent = String(Math.round(target * eased)).padStart(pad, "0");
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {String(value).padStart(String(value).length, "0")}
    </span>
  );
}
