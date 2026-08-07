"use client";

import { ArrowUp } from "lucide-react";
import { brand, navLinks } from "@/lib/data";
import { scrollToId } from "@/lib/lenis";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}



const socials = [
  { label: "LinkedIn", Icon: LinkedInIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="wrap">
        <hr className="hairline" />

        <div className="flex flex-col gap-12 py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("top");
              }}
              className="flex items-center gap-3"
              aria-label={`${brand.name} home`}
            >
              <span className="glass-metal flex h-11 w-11 items-center justify-center">
                <span className="font-display text-xs font-bold text-metal">
                  {brand.mark}
                </span>
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-display text-sm font-medium tracking-wide text-primary">
                  {brand.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
                  {brand.tagline}
                </span>
              </span>
            </a>

            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center gap-7"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(link.href);
                  }}
                  className="text-[13px] font-medium text-secondary transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-secondary transition-all duration-300 hover:border-white/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
            <button
              type="button"
              onClick={() => scrollToId("top")}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted transition-colors duration-300 hover:text-primary"
            >
              Back to top
              <ArrowUp
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
