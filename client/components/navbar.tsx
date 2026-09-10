'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { brand, nav } from '@/data/content'
import { Wordmark } from '@/components/logo'
import { MagneticButton } from '@/components/magnetic-button'
import { EASE, useIsReducedMotion } from '@/components/motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduced = useIsReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled
            ? 'border-b border-border/50 bg-background/90 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.7)] backdrop-blur-2xl'
            : 'border-b border-transparent bg-transparent',
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
      >
        <nav className={cn('mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-500', scrolled ? 'py-3' : 'py-5')}>
          <a href="#top" aria-label="6th Civilians Corporation home" className="focus:outline-none focus:ring-2 focus:ring-emerald-400/50 rounded-lg p-1">
            <Wordmark />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground focus:outline-none focus:text-foreground"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Action Area */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={brand.academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.35)]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>Ewdth Academy</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <MagneticButton href="#contact">Work With Us</MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="text-foreground p-2 rounded-lg border border-border/50 lg:hidden focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-colors hover:border-emerald-500/40"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Premium Full-Screen Mobile Drawer with Staggered Typography & Clip-path reveal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-zinc-950/98 backdrop-blur-2xl lg:hidden p-6 overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <a href="#top" onClick={() => setOpen(false)} aria-label="6th Civilians Corporation home">
                <Wordmark />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 p-2 text-foreground transition-colors hover:border-emerald-500/50 hover:bg-white/5"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6 text-emerald-400" />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <div className="my-auto py-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-4">
                CORPORATE DIRECTORY
              </span>
              <ul className="flex flex-col gap-3">
                {nav.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx + 0.1, duration: 0.35, ease: EASE }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-2 text-2xl font-display font-bold text-zinc-200 transition-colors hover:text-emerald-400"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-600 group-hover:text-emerald-400/80">
                          0{idx + 1}
                        </span>
                        <span>{item.label}</span>
                      </span>
                      <ArrowRight className="h-5 w-5 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Section: Ecosystem Reference & CTA */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: EASE }}
              className="flex flex-col gap-4 border-t border-white/10 pt-6"
            >
              <a
                href={brand.academy.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:bg-emerald-500/20"
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span>Ewdth Academy</span>
                </div>
                <span className="text-[11px] text-zinc-400 font-normal lowercase flex items-center gap-1">
                  education division <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                </span>
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
              >
                <span>Work With Us</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono pt-2">
                <span>© 2026 6TH CIVILIANS CORP</span>
                <span>SECURE · ISO-COMPLIANT</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
