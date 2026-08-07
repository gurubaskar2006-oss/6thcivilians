"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { pillars } from "@/lib/data";
import Parallax from "@/components/ui/Parallax";
import DepthTransition from "@/components/transitions/DepthTransition";
import { MaskLines } from "@/components/ui/KineticText";
import { cn } from "@/lib/cn";
import PillarCard from "./PillarCard";

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophyPinnedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = trackRef.current;
          if (!track) return;

          const onLoad = () => ScrollTrigger.refresh();
          window.addEventListener("load", onLoad);

          const amount = () =>
            Math.max(0, track.scrollWidth - window.innerWidth);

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${amount()}`,
              scrub: 0.5,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const idx = Math.min(
                  pillars.length,
                  Math.max(1, Math.round(self.progress * pillars.length)),
                );
                setActive(idx);
              },
            },
          });

          tl.to(track, { x: () => -amount() }, 0);

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

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      <Parallax offset={60}>
        <div className="blob left-[8%] top-[20%] h-[26rem] w-[26rem] bg-white/[0.03]" />
        <div className="blob right-[10%] bottom-[10%] h-[28rem] w-[28rem] bg-[#3d3f54]/25" />
      </Parallax>

      <DepthTransition enter>
        <div className="relative">
          <div className="wrap flex items-end justify-between pt-28 md:pt-36">
            <div>
              <span className="eyebrow">Our Philosophy</span>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.06] tracking-tight text-primary md:text-5xl lg:text-6xl">
                <MaskLines
                  lines={[
                    "Four beliefs,",
                    <span key="n" className="text-metal">
                      no exceptions.
                    </span>,
                  ]}
                />
              </h2>
            </div>
            <span
              aria-hidden
              className="hidden pb-2 font-display text-6xl font-light tabular-nums text-white/10 md:block"
            >
              <span className="text-white/40">{active}</span> / 04
            </span>
          </div>

          <div className="mt-14 overflow-hidden">
            <div
              ref={trackRef}
              className="flex w-full flex-col gap-6 px-6 md:w-max md:flex-row md:px-10"
            >
              {pillars.map((pillar) => (
                <PillarCard key={pillar.index} {...pillar} />
              ))}
            </div>
          </div>

          <div className="mt-16 pb-28 md:pb-36" />
        </div>
      </DepthTransition>

      {/* Progress indicator fixed at the section edge while pinned */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {pillars.map((pillar, i) => (
          <span
            key={pillar.index}
            className={cn(
              "h-6 w-[2px] rounded-full transition-colors duration-500",
              i < active ? "bg-white/70" : "bg-white/15",
            )}
          />
        ))}
      </div>
    </section>
  );
}
