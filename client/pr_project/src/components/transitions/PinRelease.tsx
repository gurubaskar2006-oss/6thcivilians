"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pin-release transition: the section pins while its internal choreography
 * plays, then releases and the next section slides up over it.
 * Desktop + no-reduced-motion only.
 */
export default function PinRelease({
  children,
  start = "top 15%",
  distance = "+=45%",
}: {
  children: React.ReactNode;
  start?: string;
  distance?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const st = ScrollTrigger.create({
            trigger: el,
            start,
            end: distance,
            pin: el,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });
          return () => st.kill();
        },
      );

      return () => mm.revert();
    },
    { scope: ref },
  );

  return <div ref={ref}>{children}</div>;
}
