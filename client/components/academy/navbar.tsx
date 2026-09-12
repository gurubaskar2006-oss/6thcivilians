'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowLeft, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function AcademyNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/academy' },
    { name: 'About', href: '/academy#about' },
    { name: 'Courses', href: '/academy/courses' },
    { name: 'Why Us', href: '/academy#why-us' },
    { name: 'Testimonials', href: '/academy#testimonials' },
    { name: 'Contact', href: '/academy#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Corporate Back-Nav Bar */}
      <div className="w-full bg-[#1A1A1A] text-white/80 text-xs py-2 px-4 sm:px-8 flex items-center justify-between border-b border-white/10 z-50 relative">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to 6th Civilians Corporation</span>
        </Link>
        <span className="hidden sm:inline-block font-mono text-[11px] text-[#FFB347]">
          OFFICIAL EDUCATION DIVISION
        </span>
      </div>

      <nav
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200'
            : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link href="/academy" className="flex items-center gap-3">
                <img
                  src="/academy/logo-transparent.png"
                  alt="EdWth Academy Logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="font-display font-bold text-2xl bg-gradient-to-r from-[#FF7A18] to-[#FFB347] bg-clip-text text-transparent">
                  EdWth Academy
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-medium text-[#1A1A1A] hover:text-[#FF7A18] transition-colors relative group py-1"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 h-0.5 bg-[#FF7A18] w-0 group-hover:w-full transition-all duration-200" />
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
                <Link
                  href="/academy#contact"
                  className="bg-gradient-to-r from-[#FF7A18] to-[#FFB347] text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-[#FF7A18]/30 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-1.5 text-sm"
                >
                  <span>Enroll Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#1A1A1A] p-2 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 text-base font-medium text-[#1A1A1A] hover:text-[#FF7A18] hover:bg-[#F8EFD8]/40 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                  <Link
                    href="/academy#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-gradient-to-r from-[#FF7A18] to-[#FFB347] text-white px-4 py-3 rounded-full font-semibold shadow-md inline-block text-sm"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center border border-gray-300 text-gray-700 px-4 py-2.5 rounded-full font-medium text-xs"
                  >
                    ← Back to 6th Civilians Main Site
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
