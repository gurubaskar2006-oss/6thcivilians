"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ScrollCue() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="flex flex-col items-center gap-4 text-muted"
    >
      <span className="text-[10px] uppercase tracking-[0.32em]">
        Scroll
      </span>
      <span className="relative h-12 w-px overflow-hidden rounded-full bg-white/10">
        {!reduce && (
          <motion.span
            className="absolute left-0 top-0 h-5 w-px rounded-full bg-white"
            animate={{ y: [-20, 52] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </span>
    </div>
  );
}
