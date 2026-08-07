"use client";

import { useRef } from "react";
import { manifestoBody, manifestoLines, metrics } from "@/lib/data";
import { scrollToId } from "@/lib/lenis";
import LightSweep from "@/components/ui/LightSweep";
import Parallax from "@/components/ui/Parallax";
import DepthTransition from "@/components/transitions/DepthTransition";
import GlassCard from "@/components/ui/GlassCard";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { MaskLines } from "@/components/ui/KineticText";

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      {/* Sweep handoff from Hero — the sweep IS the transition */}
      <LightSweep target={sectionRef} intensity={0.5} bandHeight="45vh" range={[0, 0.4]} />

      <Parallax offset={50}>
        <div className="blob left-[5%] top-[25%] h-[24rem] w-[24rem] bg-white/[0.035]" />
        <div className="blob bottom-[15%] right-[8%] h-[26rem] w-[26rem] bg-[#3d3f54]/25" />
      </Parallax>

      <DepthTransition exit>
        <div className="wrap relative">
          <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            {/* Manifesto */}
            <div>
              <div className="flex flex-col gap-5">
                <span className="eyebrow">Who We Are</span>

                <h2 className="font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl">
                  <MaskLines lines={manifestoLines} stagger={0.08} />
                </h2>
              </div>

              <Reveal delay={0.3} className="mt-10">
                <p className="max-w-md text-balance leading-[1.8] text-secondary">
                  {manifestoBody}
                </p>
              </Reveal>

              <Reveal delay={0.4} className="mt-12">
                <a
                  href="#philosophy"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("#philosophy");
                  }}
                  className="group inline-flex items-center gap-3 text-sm font-medium text-secondary transition-colors duration-300 hover:text-primary"
                >
                  <span className="hairline w-10 transition-all duration-500 group-hover:w-16" />
                  See What We Stand For
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            </div>

            {/* Metric panel — count-up, never masked */}
            <Reveal delay={0.15}>
              <GlassCard className="relative overflow-hidden p-8 md:p-10">
                <div
                  aria-hidden
                  className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl"
                />
                <p className="font-display text-2xl font-medium leading-snug tracking-tight text-metal md:text-[1.9rem]">
                  Six Pillars. One standard.
                </p>
                <div className="mt-10 space-y-6">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-baseline justify-between border-b border-white/[0.08] pb-6 last:border-none last:pb-0"
                    >
                      <CountUp
                        value={m.value}
                        className="font-display text-4xl font-medium tracking-tight text-metal tabular-nums md:text-5xl"
                      />
                      <span className="text-xs uppercase tracking-[0.22em] text-secondary">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </DepthTransition>
    </section>
  );
}
