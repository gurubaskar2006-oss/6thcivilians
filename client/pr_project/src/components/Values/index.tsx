"use client";

import { useRef } from "react";
import LightSweep from "@/components/ui/LightSweep";
import Parallax from "@/components/ui/Parallax";
import PinRelease from "@/components/transitions/PinRelease";
import ValuesCarousel from "./ValuesCarousel";

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="values"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Sweep handoff from Together */}
      <LightSweep target={sectionRef} intensity={0.5} bandHeight="45vh" range={[0, 0.4]} />

      <Parallax offset={50}>
        <div className="blob left-[12%] top-[15%] h-[26rem] w-[26rem] bg-white/[0.03]" />
        <div className="blob right-[10%] bottom-[10%] h-[28rem] w-[28rem] bg-[#3d3f54]/25" />
      </Parallax>

      {/* Pin-release: the carousel holds while its intro plays, then Beyond
          slides up over it. */}
      <PinRelease>
        <div className="section relative">
          <div className="wrap">
            <ValuesCarousel />
          </div>
        </div>
      </PinRelease>
    </section>
  );
}
