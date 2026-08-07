"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { EASE } from "@/lib/motionVariants";
import { scrollToId } from "@/lib/lenis";
import { introReady } from "@/lib/loaderState";
import Magnetic from "@/components/ui/Magnetic";
import ScrollCue from "@/components/ui/ScrollCue";
import { WordWipe } from "@/components/ui/KineticText";

gsap.registerPlugin(ScrollTrigger);

const headlineLines = [
  "Reputation is earned,",
  "not broadcast.",
  "We build the spaces",
  "where trust grows.",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const slow = useRef(
    typeof window === "undefined"
      ? true
      : !sessionStorage.getItem("pr-loaded"),
  ).current;

  // Start the reveal exactly as the loader curtain lifts.
  useEffect(() => {
    let mounted = true;
    introReady.then(() => {
      if (mounted) setStarted(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Pin-and-release: the headline stays fixed for ~22vh of scroll while the
  // background layers keep moving underneath.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const section = sectionRef.current;
          const bg = bgRef.current;
          const grid = gridRef.current;
          if (!section || !bg || !grid) return;

          const onLoad = () => ScrollTrigger.refresh();
          window.addEventListener("load", onLoad);

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=22vh",
              scrub: 0.5,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
          tl.fromTo(bg, { y: 0 }, { y: -160 }, 0);
          tl.fromTo(grid, { y: 0 }, { y: -70 }, 0);

          return () => {
            window.removeEventListener("load", onLoad);
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const t0 = started ? (slow ? 0.35 : 0.1) : 0;
  const subDelay = started ? (slow ? 0.3 : 0.15) : 0;
  const ctaDelay = started ? (slow ? 0.6 : 0.3) : 0;

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden"
    >
      {/* Layer 0 — ambient light, slowest */}
      <div ref={bgRef} aria-hidden className="absolute inset-0 will-change-transform">
        {!reduce && (
          <>
            <motion.div
              className="blob left-[-10%] top-[-15%] h-[46rem] w-[46rem] bg-white/[0.05]"
              animate={{ x: [0, 90, 0], y: [0, -50, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="blob bottom-[-20%] right-[-8%] h-[40rem] w-[40rem] bg-[#3d3f54]/40"
              animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
              transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="blob left-[35%] top-[55%] h-[26rem] w-[26rem] bg-white/[0.03]"
              animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.04),transparent)]" />
      </div>

      {/* Layer 1 — faint line texture, mid speed */}
      <div ref={gridRef} aria-hidden className="hero-grid absolute inset-0 will-change-transform" />

      {/* Layer 2 — content, pins briefly while layers move underneath */}
      <div className="wrap relative flex flex-col items-center pt-28 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={started ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: started ? 0.1 : 0 }}
          className="eyebrow eyebrow-centered mb-8 justify-center"
        >
          PR Team · Partnerships & Impact
        </motion.p>

        <h1
          aria-label={headlineLines.join(" ")}
          className="font-display text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[1.06] tracking-tight"
        >
          <WordWipe
            lines={headlineLines}
            stagger={0.05}
            duration={0.55}
            delay={t0}
            active={started}
          />
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.9, ease: EASE, delay: started ? t0 + subDelay + 0.55 : 0 }}
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-secondary md:text-lg"
        >
          A private team of public relations pillars building trust that
          lasts for the institutions we serve.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.9, ease: EASE, delay: started ? t0 + ctaDelay + 0.85 : 0 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#contact");
              }}
              className="lift group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-chip border border-white/20 px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:border-white/50"
            >
              <span className="btn-wipe" aria-hidden />
              <span className="relative z-10 flex items-center gap-2">
                Start the Conversation
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#team");
              }}
              className="inline-flex items-center gap-2 rounded-chip px-8 py-4 text-sm font-medium text-secondary transition-colors duration-300 hover:text-primary"
            >
              Meet the Team
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: EASE, delay: started ? (slow ? 1.4 : 0.7) : 0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ScrollCue />
      </motion.div>
    </section>
  );
}
