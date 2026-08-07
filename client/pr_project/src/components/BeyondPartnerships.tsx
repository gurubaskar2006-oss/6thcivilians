"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import DepthTransition from "@/components/transitions/DepthTransition";
import { EASE } from "@/lib/motionVariants";

/*
 * Ambient orbit: a metallic bead traveling the outer ring's circumference.
 * Rotation is linear (constant speed) so the loop never looks stuttered;
 * only the trail's entrance fade uses the shared EASE curve. Reduced motion
 * renders the bead statically on the ring with no trail.
 */
function OrbitDot() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="h-full w-full overflow-visible"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="orbit-dot-grad"
          gradientUnits="userSpaceOnUse"
          x1="97.6"
          y1="48.2"
          x2="101.4"
          y2="51.8"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#c9cdd6" />
          <stop offset="70%" stopColor="#8b909c" />
          <stop offset="100%" stopColor="#f5f6f8" />
        </linearGradient>
        <linearGradient
          id="orbit-trail-grad"
          gradientUnits="userSpaceOnUse"
          x1="99.5"
          y1="50"
          x2="99.5"
          y2="12.1"
        >
          <stop offset="0%" stopColor="#f5f6f8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f5f6f8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {reduce ? (
        <circle cx="99.5" cy="50" r="2.4" fill="url(#orbit-dot-grad)" />
      ) : (
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformBox: "view-box", transformOrigin: "50% 50%" }}
        >
          {/* ~50° fading trail just behind the bead (counter-clockwise) */}
          <motion.circle
            cx="50"
            cy="50"
            r="49.5"
            fill="none"
            stroke="url(#orbit-trail-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="43.2 267.8"
            strokeDashoffset="267.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
          />
          <circle cx="99.5" cy="50" r="2.4" fill="url(#orbit-dot-grad)" />
        </motion.g>
      )}
    </svg>
  );
}

export default function BeyondPartnerships() {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });
  // Slow Ken-Burns style drift while the section is in view.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="beyond-partnerships"
      className="section relative overflow-hidden"
    >
      <Parallax offset={60}>
        <div className="blob left-[8%] top-[30%] h-[24rem] w-[24rem] bg-white/[0.03]" />
        <div className="blob right-[6%] bottom-[15%] h-[26rem] w-[26rem] bg-[#3d3f54]/25" />
      </Parallax>

      <DepthTransition enter>
        <div className="wrap relative">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Beyond Partnerships"
                lines={[
                  "Partnerships are only",
                  <span key="b" className="text-metal">
                    the beginning.
                  </span>,
                ]}
              />
              <Reveal delay={0.15} className="mt-8">
                <p className="max-w-lg text-balance leading-[1.8] text-secondary">
                  What happens after trust is earned is where the real work
                  lives. We stay through every season of a relationship —
                  growing, evolving, and keeping the promises that brought us
                  together.
                </p>
              </Reveal>
              <Reveal delay={0.25} className="mt-6">
                <p className="max-w-lg text-balance leading-[1.8] text-secondary">
                  We measure ourselves not by the campaigns we run, but by
                  the partnerships we keep — for years, not launches.
                </p>
              </Reveal>
            </div>

            <div ref={panelRef} className="relative">
              <motion.div
                style={reduce ? undefined : { scale }}
                className="relative will-change-transform"
              >
                <div className="relative aspect-[4/5] md:aspect-square">
                  {/* layered abstract composition — slow Ken Burns drift */}
                  <div className="absolute inset-0 rounded-card border border-white/[0.08]" />
                  <div className="absolute inset-10 rounded-full border border-white/[0.06] md:inset-16" />
                  <div className="absolute inset-20 rounded-full border border-white/[0.04] md:inset-28" />
                  {/* orbiting bead on the outer concentric ring */}
                  <div className="pointer-events-none absolute inset-10 md:inset-16">
                    <OrbitDot />
                  </div>
                  <div className="blob left-[15%] top-[18%] h-72 w-72 bg-white/[0.05]" />
                  <div className="blob bottom-[8%] right-[12%] h-80 w-80 bg-[#3d3f54]/35" />
                  <div className="glass-card absolute inset-x-6 bottom-8 flex items-center justify-between p-6 md:inset-x-10">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-muted">
                      Long-term vision
                    </span>
                    <span
                      aria-hidden
                      className="h-px w-16 bg-gradient-to-r from-white/0 to-white/40"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </DepthTransition>
    </section>
  );
}
