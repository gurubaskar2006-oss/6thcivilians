"use client";

/* Intro/loader handoff signal.
 * Hero waits for `introReady` before it starts its reveal, so the word wipe
 * lands exactly as the loader curtain lifts (and skips the wait on repeat
 * visits when the loader is skipped). */

let resolveIntro: () => void = () => {};

export const introReady = new Promise<void>((resolve) => {
  resolveIntro = resolve;
});

export function markIntroReady() {
  resolveIntro();
}

export function loaderPlayed() {
  if (typeof window === "undefined") return true;
  return sessionStorage.getItem("pr-loaded") === "1";
}

export function markLoaderPlayed() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem("pr-loaded", "1");
}
