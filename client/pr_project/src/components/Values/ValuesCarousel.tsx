"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { values } from "@/lib/data";
import { EASE } from "@/lib/motionVariants";
import ValueCard from "./ValueCard";
import { MaskLines } from "@/components/ui/KineticText";
import { cn } from "@/lib/cn";

const GAP = 24;

export default function ValuesCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const [maxX, setMaxX] = useState(0);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const step = useCallback(() => {
    const card = firstCardRef.current;
    return card ? card.offsetWidth + GAP : 0;
  }, []);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    setMaxX(Math.max(0, track.scrollWidth - viewport.clientWidth));
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const lastIndex = values.length - 1;

  // Auto-drift: 6s per card, pauses while hovered or mid-drag.
  useEffect(() => {
    if (reduce || paused || maxX === 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => {
        const next = i >= lastIndex ? 0 : i + 1;
        animate(x, -next * step(), {
          type: "spring",
          stiffness: 200,
          damping: 20,
        });
        return next;
      });
    }, 6000);
    return () => window.clearInterval(id);
  }, [reduce, paused, maxX, step, x, lastIndex]);

  const goTo = useCallback(
    (target: number) => {
      const clamped = Math.max(0, Math.min(values.length - 1, target));
      setIndex(clamped);
      if (reduce) return;
      // Spring snap — resistance at the ends springs back, not hard stop.
      animate(x, -clamped * step(), {
        type: "spring",
        stiffness: 200,
        damping: 20,
      });
    },
    [reduce, step, x],
  );

  function handleDragEnd(_: unknown, info: { velocity: { x: number } }) {
    const velocity = info.velocity.x;
    let target = Math.round(-x.get() / step());
    if (velocity < -400) target += 1;
    if (velocity > 400) target -= 1;
    goTo(target);
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Our values"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") goTo(index - 1);
        if (e.key === "ArrowRight") goTo(index + 1);
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow">Values</span>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.06] tracking-tight text-primary md:text-5xl lg:text-6xl">
            <MaskLines
              lines={[
                "What we",
                <span key="s" className="text-metal">
                  stand on.
                </span>,
              ]}
            />
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-xs uppercase tracking-[0.22em] text-muted sm:block">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(values.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0 || maxX === 0}
              aria-label="Previous value"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-primary transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === lastIndex || maxX === 0}
              aria-label="Next value"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-primary transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div ref={viewportRef} className="mt-14 overflow-hidden">
        <motion.div
          ref={trackRef}
          drag={maxX > 0 && !reduce ? "x" : false}
          dragConstraints={{ left: -maxX, right: 0 }}
          dragElastic={0.12}
          style={{ x }}
          onDragEnd={handleDragEnd}
          className="flex cursor-grab gap-6 active:cursor-grabbing"
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="shrink-0"
              animate={{
                scale: i === index ? 1 : 0.92,
                opacity: i === index ? 1 : 0.6,
              }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ transformOrigin: "center center" }}
            >
              <ValueCard
                value={value}
                index={i}
                ref={i === 0 ? firstCardRef : undefined}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* dots */}
      <div className="mt-10 flex items-center justify-center gap-2 sm:justify-start">
        {values.map((v, i) => (
          <button
            key={v.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to value ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === index
                ? "w-8 bg-white/70"
                : "w-1.5 bg-white/20 hover:bg-white/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
