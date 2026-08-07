import type { Variants } from "framer-motion";

/* The single easing curve for the whole site. Never let a second one in. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const CURTAIN: [number, number, number, number] = [0.76, 0, 0.24, 1];

/* Body copy: simple opacity + 12px rise. Masking is reserved for headlines. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/* Eyebrows: calm, fixed signage — a soft fade and nothing else. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.85, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: EASE },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

/* Word-level clip-path wipe — the hero headline. */
export const wordWipe: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.55, ease: EASE },
  },
};

/* Line-level clip-path wipe — section headlines (faster, less weight). */
export const lineWipe: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.5, ease: EASE },
  },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;
export const viewportReveal = { once: true, margin: "-60px" } as const;
