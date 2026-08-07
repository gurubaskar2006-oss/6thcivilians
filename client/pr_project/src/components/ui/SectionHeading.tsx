"use client";

import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";
import { LineWipe, MaskLines } from "@/components/ui/KineticText";

type SectionHeadingProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  /** Explicit lines → staggered line-level clip wipe. */
  lines?: React.ReactNode[];
  className?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  lines,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal y={0}>
          <span
            className={cn("eyebrow", align === "center" && "eyebrow-centered")}
          >
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <h2 className="font-display text-4xl font-medium leading-[1.06] tracking-tight md:text-5xl lg:text-6xl">
        {lines ? <MaskLines lines={lines} /> : <LineWipe>{title}</LineWipe>}
      </h2>
    </div>
  );
}
