'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { brand, nav } from '@/data/content'
import { Wordmark } from '@/components/logo'
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
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          scrolled
            ? 'border-b border-border bg-background/95 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav className={cn('mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300', scrolled ? 'py-3.5' : 'py-5')}>
          <a href="#top" aria-label="6th Civilians Corporation home" className="focus:outline-none">
            <Wordmark />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
                >
                  {item.label}
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
              className="group inline-flex items-center gap-2 border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-mono tracking-wider text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>EWDTH ACADEMY</span>
              <ArrowUpRight className="h-3 w-3 text-zinc-400" />
            </a>

            <a
              href="#contact"
              className="bg-foreground text-background px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-zinc-200"
            >
              Work With Us
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="text-foreground p-2 border border-border lg:hidden focus:outline-none hover:border-zinc-500 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer with Staggered Editorial Typography */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-background p-6 overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-border pb-4">
              <a href="#top" onClick={() => setOpen(false)} aria-label="6th Civilians Corporation home">
                <Wordmark />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="border border-border p-2 text-foreground transition-colors hover:border-zinc-500"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <div className="my-auto py-8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-6">
                CORPORATE NAVIGATION
              </span>
              <ul className="flex flex-col gap-4">
                {nav.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * idx + 0.08, duration: 0.3, ease: EASE }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-2 text-3xl font-display font-bold text-zinc-200 transition-colors hover:text-white"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-xs font-mono text-zinc-600 group-hover:text-emerald-500">
                          0{idx + 1}
                        </span>
                        <span>{item.label}</span>
                      </span>
                      <ArrowRight className="h-5 w-5 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Section: Ecosystem Reference & CTA */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35, ease: EASE }}
              className="flex flex-col gap-4 border-t border-border pt-6"
            >
              <a
                href={brand.academy.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border border-border bg-card p-4 text-xs font-mono tracking-wider text-zinc-300 transition-colors hover:border-zinc-500"
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>EWDTH ACADEMY</span>
                </div>
                <span className="text-[11px] text-zinc-500 flex items-center gap-1">
                  external division <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-foreground text-background py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-zinc-200"
              >
                <span>Work With Us</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono pt-2">
                <span>© 2026 6TH CIVILIANS CORPORATION</span>
                <span>ENTERPRISE SYSTEMS</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
