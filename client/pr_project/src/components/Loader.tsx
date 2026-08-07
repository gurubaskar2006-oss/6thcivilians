"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CURTAIN, EASE } from "@/lib/motionVariants";
import { brand } from "@/lib/data";
import { markIntroReady, markLoaderPlayed } from "@/lib/loaderState";
import { SweepBand } from "@/components/ui/LightSweep";

const LOADER_MS = 1500;

export default function Loader() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setShow(false);
      markIntroReady();
      return;
    }
    if (sessionStorage.getItem("pr-loaded")) {
      setShow(false);
      markIntroReady();
      return;
    }
    markLoaderPlayed();
    const t = setTimeout(() => {
      setShow(false);
      // Curtain exit runs 1.05s; hero reveal starts as it lifts.
      setTimeout(markIntroReady, 1080);
    }, LOADER_MS);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 overflow-hidden bg-base"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.05, ease: CURTAIN }}
        >
          {/* Exit sweep — the signature light, brighter as the curtain lifts */}
          <motion.div
            aria-hidden
            className="absolute inset-0 overflow-hidden"
            initial={{ x: "-220%" }}
            exit={{ x: "260%" }}
            transition={{ duration: 1.0, ease: CURTAIN }}
          >
            <div className="absolute left-0 top-1/2 w-[40vw] min-w-[24rem]">
              <SweepBand className="sweep-band-bright h-[34vh] -rotate-[14deg]" />
            </div>
          </motion.div>

          {/* Intro sweep — one quiet pass while the loader settles */}
          <motion.div
            aria-hidden
            className="absolute inset-0 overflow-hidden"
            initial={{ x: "-240%" }}
            animate={{ x: "360%" }}
            transition={{ duration: 2.4, ease: EASE, delay: 0.3 }}
          >
            <div className="absolute left-0 top-1/2 w-[30vw] min-w-[20rem]">
              <SweepBand className="h-[30vh] -rotate-[14deg]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative z-10 flex flex-col items-center gap-5"
          >
            <div className="glass-metal relative flex h-20 w-20 items-center justify-center">
              <span className="shimmer-sweep" aria-hidden />
              <span className="relative z-10 font-display text-2xl font-bold tracking-tight text-metal">
                {brand.mark}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-display text-sm font-medium tracking-[0.18em] text-primary">
                {brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                {brand.tagline}
              </span>
            </div>
          </motion.div>

          <div className="relative z-10 h-px w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: LOADER_MS / 1000,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
