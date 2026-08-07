"use client";

import { motion, useReducedMotion } from "framer-motion";
import MetalShine from "@/components/ui/MetalShine";
import Parallax from "@/components/ui/Parallax";
import DepthTransition from "@/components/transitions/DepthTransition";
import Reveal from "@/components/ui/Reveal";
import { LineWipe } from "@/components/ui/KineticText";

export default function Together() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-44 md:py-60">
      {/* Background: slow gradient drift only — the sweep is the motion here */}
      <Parallax offset={40}>
        {!reduce && (
          <motion.div
            aria-hidden
            className="absolute inset-0"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="blob left-[20%] top-0 h-[34rem] w-[34rem] bg-white/[0.04]" />
            <div className="blob bottom-0 right-[10%] h-[30rem] w-[30rem] bg-[#3d3f54]/30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(255,255,255,0.03),transparent)]" />
          </motion.div>
        )}
      </Parallax>

      <DepthTransition enter>
        <div className="wrap relative flex flex-col items-center text-center">
          <Reveal y={0} className="mb-10">
            <span className="eyebrow eyebrow-centered justify-center">
              Together
            </span>
          </Reveal>

          <h2 className="max-w-4xl font-display text-[clamp(2.4rem,6vw,5.5rem)] font-medium leading-[1.05] tracking-tight">
            <LineWipe>
              <MetalShine>The best work happens together.</MetalShine>
            </LineWipe>
          </h2>

          <Reveal delay={0.15} className="mt-8 max-w-xl">
            <p className="text-balance text-base leading-relaxed text-secondary md:text-lg">
              Every partnership begins as a conversation and ends as a shared
              result — ours to build, theirs to keep.
            </p>
          </Reveal>
        </div>
      </DepthTransition>
    </section>
  );
}
