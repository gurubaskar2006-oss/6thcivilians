"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { navLinks, brand } from "@/lib/data";
import { scrollToId } from "@/lib/lenis";
import { useTabTitle } from "@/lib/useTabTitle";
import OutlineButton from "@/components/ui/OutlineButton";
import { EASE } from "@/lib/motionVariants";
import { cn } from "@/lib/cn";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  useTabTitle();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: reduce ? 0 : -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="wrap">
        <div
          className={cn(
            "mt-4 flex items-center justify-between gap-6 rounded-chip border px-5 py-3 transition-all duration-500",
            scrolled
              ? "border-glass bg-glass backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("top");
            }}
            className="flex items-center gap-3"
            aria-label={`${brand.name} home`}
          >
            <span className="glass-metal flex h-9 w-9 items-center justify-center">
              <span className="font-display text-[11px] font-bold text-metal">
                {brand.mark}
              </span>
            </span>
            <span className="hidden font-display text-sm font-medium tracking-wide text-primary sm:block">
              {brand.name}
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(link.href);
                }}
                className="relative text-[13px] font-medium text-secondary transition-colors duration-300 hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/60 after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <OutlineButton
            href="#contact"
            className="px-4 py-2.5 text-[13px]"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("#contact");
            }}
          >
            Start the Conversation
          </OutlineButton>
        </div>
      </div>
    </motion.header>
  );
}
