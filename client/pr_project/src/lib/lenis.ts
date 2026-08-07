import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}

export function scrollToId(hash: string) {
  const target = hash.startsWith("#") ? hash : `#${hash}`;
  const lenis = instance;
  if (lenis) {
    lenis.scrollTo(target, { offset: -88, duration: 1.4 });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}
