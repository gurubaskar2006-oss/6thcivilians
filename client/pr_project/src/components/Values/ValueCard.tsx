"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  type HTMLAttributes,
  type LegacyRef,
} from "react";
import { useInView } from "framer-motion";
import {
  ShieldCheck,
  Users,
  BadgeCheck,
  Briefcase,
  TrendingUp,
  Infinity as InfinityIcon,
  type LucideIcon,
} from "lucide-react";
import type { Value } from "@/lib/data";
import { EASE } from "@/lib/motionVariants";
import { useCanReveal } from "@/lib/useReveal";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Users,
  BadgeCheck,
  Briefcase,
  TrendingUp,
  Infinity: InfinityIcon,
};

const GEOMETRY = "path, circle, rect, line, polyline, polygon";

/**
 * Icons draw on (stroke-dashoffset) rather than popping in fully formed.
 * The dash-hiding only runs when the draw enhancement can actually fire, so
 * a broken observer can never leave an icon half-hidden.
 */
function DrawIcon({ Icon }: { Icon: LucideIcon }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const canReveal = useCanReveal();

  // Hide strokes on mount (avoids a fully-drawn flash), then draw on inView.
  useEffect(() => {
    const svg = ref.current;
    if (!svg || !canReveal) return;
    const parts = Array.from(
      svg.querySelectorAll(GEOMETRY),
    ) as SVGGeometryElement[];
    parts.forEach((el) => {
      const len = el.getTotalLength();
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
    });
  }, [canReveal]);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || !inView || !canReveal) return;
    const parts = Array.from(
      svg.querySelectorAll(GEOMETRY),
    ) as SVGGeometryElement[];
    parts.forEach((el, i) => {
      const len = el.getTotalLength();
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
      el.style.transition = `stroke-dashoffset 0.9s cubic-bezier(${EASE.join(
        ",",
      )}) ${i * 0.06}s`;
    });
    const raf = requestAnimationFrame(() => {
      parts.forEach((el) => {
        el.style.strokeDashoffset = "0";
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [inView, canReveal]);

  return (
    <Icon ref={ref} className="h-5 w-5 text-primary" strokeWidth={1.5} />
  );
}

type ValueCardProps = HTMLAttributes<HTMLElement> & {
  value: Value;
  index: number;
};

const ValueCard = forwardRef<HTMLElement, ValueCardProps>(
  ({ value, index, ...rest }, ref) => {
    const Icon = iconMap[value.icon] ?? ShieldCheck;

    return (
      <article
        ref={ref as LegacyRef<HTMLElement>}
        {...rest}
        className="glass-card flex w-[78vw] shrink-0 flex-col justify-between gap-16 p-8 sm:w-[380px] md:p-9"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.05]">
            <DrawIcon Icon={Icon} />
          </span>
          <span className="font-display text-2xl font-light tabular-nums text-white/15">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-2xl font-medium tracking-tight text-metal md:text-[1.7rem]">
            {value.title}
          </h3>
          <p className="text-sm leading-[1.8] text-secondary">
            {value.copy}
          </p>
        </div>
      </article>
    );
  },
);

ValueCard.displayName = "ValueCard";

export default ValueCard;
