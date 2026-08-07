"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  /**
   * Skip adding the `.pre` hiding class. The element is never hidden; `isIn`
   * still drives any inner motion (masks, draws). Use for nested content that
   * lives inside a block that already owns the reveal.
   */
  addPre?: boolean;
  /** Force visible immediately (another system owns this reveal). */
  disabled?: boolean;
};

/**
 * True only when a scroll-triggered enhancement should actually run:
 * IntersectionObserver exists and prefers-reduced-motion is not set.
 */
export function useCanReveal() {
  const [can, setCan] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setCan(true);
  }, []);

  return can;
}

/**
 * Progressive-enhancement scroll reveal.
 *
 * Elements are fully visible by default. `.pre` (opacity 0 + rise) is only
 * added at runtime when all of the following hold:
 *   - running on the client,
 *   - IntersectionObserver exists,
 *   - prefers-reduced-motion is not set.
 * `.is-in` flips it to visible on first scroll-into-view, then `.pre` is
 * removed so the element returns to fully natural styles. If JS, the
 * observer, or a ref never materializes, no `.pre` is ever applied and the
 * content stays visible.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  options: UseRevealOptions = {},
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (options.disabled) {
      setInView(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const ownsPre = options.addPre !== false;
    if (ownsPre) el.classList.add("pre");

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      el.classList.add("is-in");
      setInView(true);
      if (ownsPre) {
        window.setTimeout(() => el.classList.remove("pre"), 1500);
      }
      io.disconnect();
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            return;
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -48px 0px" },
    );
    io.observe(el);

    // Failsafe: if the element is genuinely on screen but the observer never
    // delivers a callback (broken IO / edge case), force the reveal.
    const failsafe = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom > 0 && rect.top < vh) reveal();
    }, 2500);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
      el.classList.remove("pre", "is-in");
    };
  }, [options.disabled, options.addPre]);

  return { ref, isIn: inView } as const;
}
