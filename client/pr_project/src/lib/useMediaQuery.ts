"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe media query. Always starts `false` (matching the server render),
 * then syncs to the real value in an effect, so hydration never mismatches.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
