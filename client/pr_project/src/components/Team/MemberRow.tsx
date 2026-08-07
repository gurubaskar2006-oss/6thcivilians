"use client";

import { motion } from "framer-motion";
import type { Member } from "@/lib/data";
import { members } from "@/lib/data";
import { EASE } from "@/lib/motionVariants";
import { cn } from "@/lib/cn";
import { useReveal } from "@/lib/useReveal";

/*
 * Member row: 100ms cascade between rows; the title arrives 60ms after the
 * name (compound stagger); Sarath's badge lands 200ms after the row settles
 * as a secondary beat. Hover lifts the row background, draws a metallic
 * underline in from the left, and nudges the avatar+name group right 4px.
 *
 * The row never hides itself (addPre: false) — the Team panel owns the block
 * reveal. isIn only drives the inner name/title masks, which default open, so
 * a broken observer can never leave a row invisible.
 */
export default function MemberRow({
  member,
  index,
}: {
  member: Member;
  index: number;
}) {
  const { ref, isIn } = useReveal<HTMLDivElement>({ addPre: false });
  const featured = member.highlighted;
  const rowDelay = index * 0.1;
  const settle = 0.7;
  const isLast = index === members.length - 1;

  return (
    <div
      ref={ref}
      className={cn(
        "group underline-metal flex w-full items-center gap-5 border-b border-[var(--border-glass)] px-0 py-5 transition-colors duration-200 hover:bg-white/[0.03]",
        isLast && "border-none pb-0",
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-5 transition-transform duration-200 group-hover:translate-x-1">
        <span
          className={cn(
            "avatar-disc flex shrink-0 items-center justify-center rounded-full",
            featured ? "avatar-disc-featured h-14 w-14 md:h-16 md:w-16" : "h-12 w-12",
          )}
        >
          <span className="font-display text-sm font-bold text-metal md:text-base">
            {member.initials}
          </span>
        </span>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3
              className={cn(
                "overflow-hidden font-display font-medium tracking-tight text-primary",
                "text-base md:text-lg",
              )}
            >
              <motion.span
                className="block"
                initial={false}
                animate={{ y: isIn ? "0%" : "110%" }}
                transition={{ duration: 0.55, ease: EASE, delay: rowDelay }}
              >
                {member.name}
              </motion.span>
            </h3>
            {member.badge ? (
              <motion.span
                initial={false}
                animate={{ opacity: isIn ? 1 : 0, y: isIn ? 0 : 6 }}
                transition={{
                  duration: 0.4,
                  ease: EASE,
                  delay: rowDelay + settle + 0.2,
                }}
                className={cn(
                  "rounded-chip px-3 py-0.5 text-[10px] uppercase tracking-[0.22em]",
                  featured
                    ? "border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-bright)]"
                    : "border border-white/25 bg-white/[0.06] text-secondary",
                )}
              >
                {member.badge}
              </motion.span>
            ) : null}
          </div>
          <p className="overflow-hidden text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
            <motion.span
              className="block"
              initial={false}
              animate={{ y: isIn ? "0%" : "110%" }}
              transition={{
                duration: 0.55,
                ease: EASE,
                delay: rowDelay + 0.06,
              }}
            >
              {member.title}
            </motion.span>
          </p>
        </div>
      </div>

      <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted lg:block">
        <motion.span
          className="block"
          initial={false}
          animate={{ opacity: isIn ? 1 : 0, y: isIn ? 0 : 8 }}
          transition={{
            duration: 0.6,
            ease: EASE,
            delay: rowDelay + 0.15,
          }}
        >
          {member.focus}
        </motion.span>
      </p>
    </div>
  );
}
