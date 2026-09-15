'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { brand } from '@/data/content'
import { HeaderWordmark, Wordmark } from '@/components/logo'
import { EASE, useIsReducedMotion } from '@/components/motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduced = useIsReducedMotion()

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'What We Do', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
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
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[rgba(17,21,20,0.06)] bg-[#F7F7F2]/95 backdrop-blur-md shadow-sm'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav
          className={cn(
            'mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 transition-[padding] duration-300',
            scrolled ? 'py-3' : 'py-4 sm:py-5',
          )}
          aria-label="Main Navigation"
        >
          {/* Company Brand Anchor: 6TH CIVILIANS CORPORATION */}
          <a
            href="#top"
            aria-label="6th Civilians Corporation home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D4F] rounded-lg shrink-0"
          >
            <HeaderWordmark />
          </a>

          {/* Desktop Navigation Links (Centrally placed on wide screens) */}
          <ul className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-semibold tracking-wide text-[#525C58] transition-colors duration-200 hover:text-[#073B32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D4F] rounded-sm py-1 px-1.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions Area with Premium Micro-Interactions */}
          <div className="hidden lg:flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* EDWTH ACADEMY BUTTON */}
            <Link
              href="/academy"
              className="group relative inline-flex items-center gap-1.5 rounded-full border border-[rgba(17,21,20,0.1)] bg-white/80 px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#073B32] transition-all duration-300 ease-out hover:border-[#FF7A18] hover:bg-white hover:shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A18] transition-transform duration-300 group-hover:scale-125" />
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                EDWTH ACADEMY
              </span>
              <ArrowRight className="h-3 w-3 text-[#525C58] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#FF7A18]" />
            </Link>

            {/* TEAM GAMBIT BUTTON */}
            <a
              href="https://pr.6thcivilians.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 rounded-full border border-[rgba(17,21,20,0.1)] bg-white/80 px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#073B32] transition-all duration-300 ease-out hover:border-[#0B5D4F] hover:bg-white hover:shadow-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#35D07F] opacity-75 group-hover:opacity-100" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0B5D4F] group-hover:bg-[#35D07F]" />
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                TEAM GAMBIT
              </span>
              <ArrowRight className="h-3 w-3 text-[#525C58] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#073B32]" />
            </a>

            {/* PRIMARY CTA: LET'S BUILD */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#073B32] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#F7F7F2] shadow-sm transition-all duration-300 ease-out hover:bg-[#0B5D4F] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>LET&apos;S BUILD</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Navigation Trigger */}
          <button
            className="text-[#111514] p-2.5 rounded-lg border border-[rgba(17,21,20,0.1)] bg-white/80 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D4F] hover:bg-[#E9EBE7] transition-colors shadow-sm"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#F7F7F2] p-6 overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-[rgba(17,21,20,0.08)] pb-4">
              <a href="#top" onClick={() => setOpen(false)} aria-label="6th Civilians Corporation home">
                <HeaderWordmark />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-[rgba(17,21,20,0.1)] bg-white p-2.5 text-[#111514] transition-colors hover:bg-[#E9EBE7]"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="my-auto py-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0B5D4F] block mb-5">
                NAVIGATION
              </span>
              <ul className="flex flex-col gap-3.5">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx + 0.05, duration: 0.25, ease: EASE }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-1.5 text-2xl font-display font-bold text-[#111514] transition-colors hover:text-[#073B32]"
                    >
                      <span className="flex items-center gap-3.5">
                        <span className="text-xs font-mono text-[#525C58] group-hover:text-[#0B5D4F]">
                          0{idx + 1}
                        </span>
                        <span>{item.label}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#525C58] transition-transform group-hover:translate-x-1 group-hover:text-[#073B32]" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Destinations & CTAs inside Mobile Drawer */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.25, ease: EASE }}
              className="flex flex-col gap-3 border-t border-[rgba(17,21,20,0.08)] pt-5"
            >
              {/* EDWTH ACADEMY */}
              <Link
                href="/academy"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl border border-[rgba(17,21,20,0.1)] bg-white p-3.5 text-xs font-bold tracking-wide text-[#073B32] transition-colors hover:bg-[#E9EBE7]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#FF7A18]" />
                  <span>EDWTH ACADEMY</span>
                </div>
                <ArrowRight className="h-4 w-4 text-[#073B32]" />
              </Link>

              {/* TEAM GAMBIT */}
              <a
                href="https://pr.6thcivilians.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl border border-[rgba(17,21,20,0.1)] bg-white p-3.5 text-xs font-bold tracking-wide text-[#073B32] transition-colors hover:bg-[#E9EBE7]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#0B5D4F]" />
                  <span>TEAM GAMBIT</span>
                </div>
                <ArrowRight className="h-4 w-4 text-[#073B32]" />
              </a>

              {/* PRIMARY CTA */}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#073B32] py-3.5 text-xs font-bold uppercase tracking-wider text-[#F7F7F2] transition-colors hover:bg-[#0B5D4F]"
              >
                <span>LET&apos;S BUILD</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="flex items-center justify-between text-[10px] text-[#525C58] font-mono pt-1">
                <span>© {new Date().getFullYear()} 6TH CIVILIANS CORPORATION</span>
                <span>SOFTWARE & CLOUD</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
