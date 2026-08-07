"use client";

import { useRef } from "react";
import { Mail } from "lucide-react";
import LightSweep from "@/components/ui/LightSweep";
import MetalShine from "@/components/ui/MetalShine";
import Reveal from "@/components/ui/Reveal";
import { LineWipe } from "@/components/ui/KineticText";
import ContactForm from "./ContactForm";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      {/* Sweep handoff from Beyond — the final light hitting the closing statement */}
      <LightSweep target={sectionRef} intensity={0.55} bandHeight="45vh" range={[0, 0.4]} />

      <div aria-hidden className="absolute inset-0">
        <div className="blob left-1/2 top-[10%] h-[30rem] w-[40rem] -translate-x-1/2 bg-white/[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(255,255,255,0.035),transparent)]" />
      </div>

      <div className="wrap relative flex flex-col items-center text-center">
        <Reveal y={0}>
          <span className="eyebrow eyebrow-centered justify-center">
            Start a conversation
          </span>
        </Reveal>

        <h2 className="mt-7 font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-medium leading-[1.05] tracking-tight">
          <LineWipe>
            <MetalShine>Let&apos;s build what lasts.</MetalShine>
          </LineWipe>
        </h2>

        <Reveal delay={0.15} className="mt-7 max-w-xl">
          <p className="text-balance text-base leading-relaxed text-secondary md:text-lg">
            Tell us where you are and where you want to be. We&apos;ll take it
            from there — with trust, discretion, and a long view.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-6">
          <a
            href="mailto:hello6cprpartners@gmail.com"
            className="inline-flex items-center gap-3 text-sm text-secondary transition-colors duration-300 hover:text-primary"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            hello6cprpartners@gmail.com
          </a>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 w-full max-w-xl text-left">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
