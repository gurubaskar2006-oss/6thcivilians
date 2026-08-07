"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { members, brand } from "@/lib/data";

/**
 * The team "photo" — an abstract medallion formation with a subtle 3D tilt
 * on hover. Sits on its own full-width glass card above the member list;
 * the card owns the glass surface and the scroll reveal.
 */
export default function GroupPhotoCard() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });

  function handleMove(e: React.MouseEvent) {
    if (reduce) return;
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(relY * -4);
    ry.set(relX * 6);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  const featured = members.find((m) => m.highlighted)!;
  const rest = members.filter((m) => !m.highlighted);

  return (
    <motion.div
      ref={tiltRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className="relative flex min-h-[26rem] flex-col justify-between overflow-hidden p-6 md:p-10"
    >
      {/* Inner photo surface */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(255,255,255,0.06),transparent)]" />
        <div className="blob left-[12%] top-[8%] h-72 w-72 bg-white/[0.04]" />
        <div className="blob bottom-[-20%] right-[8%] h-80 w-80 bg-[#3d3f54]/30" />
        <div className="absolute inset-6 border border-white/[0.06] md:inset-10" />
      </div>

      {/* Medallion formation */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 md:gap-12">
        <div className="flex items-end gap-6 md:gap-10">
          {rest.slice(0, 3).map((m, i) => (
            <div
              key={m.name}
              className="flex flex-col items-center gap-3"
              style={{
                transform: `translateY(${[0, -14, 0][i] ?? 0}px)`,
              }}
            >
              <span className="glass-metal flex h-14 w-14 items-center justify-center md:h-16 md:w-16">
                <span className="font-display text-sm font-bold text-metal">
                  {m.initials}
                </span>
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted md:block">
                {m.title.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 md:gap-10">
          {rest.slice(3).map((m) => (
            <div key={m.name} className="flex flex-col items-center gap-3">
              <span className="glass-metal flex h-14 w-14 items-center justify-center md:h-16 md:w-16">
                <span className="font-display text-sm font-bold text-metal">
                  {m.initials}
                </span>
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted md:block">
                {m.title.split(" ")[0]}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-3">
            <span className="glass-metal flex h-20 w-20 items-center justify-center md:h-24 md:w-24">
              <span className="font-display text-lg font-bold text-metal">
                {featured.initials}
              </span>
            </span>
            <span className="rounded-chip border border-white/20 bg-white/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-secondary backdrop-blur-md">
              {featured.badge}
            </span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="relative z-10 flex items-end justify-between">
        <div>
          <p className="font-display text-sm font-medium text-primary">
            The Pillars
          </p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
            {brand.name} — One standard
          </p>
        </div>
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
          MMXXVI
        </p>
      </div>
    </motion.div>
  );
}
