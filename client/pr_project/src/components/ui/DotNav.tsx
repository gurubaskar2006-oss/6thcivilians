"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { scrollToId } from "@/lib/lenis";

const SECTIONS = [
  { id: "top", label: "Top" },
  { id: "who-we-are", label: "Who We Are" },
  { id: "philosophy", label: "Philosophy" },
  { id: "team", label: "Team" },
  { id: "values", label: "Values" },
  { id: "beyond-partnerships", label: "Beyond Partnerships" },
  { id: "contact", label: "Contact" },
];

/**
 * Desktop-only side dot nav marking the directed journey through the
 * eight sections. Hidden on touch — it's a pointer-oriented affordance.
 */
export default function DotNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (inView[0]) setActive(inView[0].target.id);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.1, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3.5 lg:flex"
    >
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          type="button"
          aria-label={s.label}
          title={s.label}
          onClick={() => scrollToId(s.id)}
          className={cn(
            "group relative h-2.5 w-2.5 rounded-full transition-all duration-300",
            active === s.id
              ? "bg-white/80"
              : "bg-white/25 hover:bg-white/50",
          )}
        >
          <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {s.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
