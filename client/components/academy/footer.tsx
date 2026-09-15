'use client'

import Link from 'next/link'
import { ArrowUp, ArrowUpRight } from 'lucide-react'

export function AcademyFooter() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/academy/logo-transparent.png"
                alt="EdWth Academy Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display font-bold text-2xl text-white">
                EdWth Academy
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Empowering Every Learner to rise above. We are dedicated to providing world-class education that transforms potential into success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/academy' },
                { name: 'About the Academy', href: '/academy#about' },
                { name: 'Courses Directory', href: '/academy/courses' },
                { name: 'The EdWth Advantage', href: '/academy#why-us' },
                { name: 'Student Testimonials', href: '/academy#testimonials' },
                { name: 'Admissions & Inquiries', href: '/academy#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#FF7A18] transition-colors text-xs sm:text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Featured Tracks</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/academy/courses" className="text-gray-400 hover:text-[#FF7A18] transition-colors text-xs sm:text-sm">
                  Full-Stack Web Engineering
                </Link>
              </li>
              <li>
                <Link href="/academy/courses" className="text-gray-400 hover:text-[#FF7A18] transition-colors text-xs sm:text-sm">
                  Data Science & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/academy/courses" className="text-gray-400 hover:text-[#FF7A18] transition-colors text-xs sm:text-sm">
                  AI Agents & Generative Systems
                </Link>
              </li>
              <li>
                <Link href="/academy/courses" className="text-gray-400 hover:text-[#FF7A18] transition-colors text-xs sm:text-sm">
                  Cloud Computing & DevOps
                </Link>
              </li>
              <li>
                <Link href="/academy/courses" className="text-gray-400 hover:text-[#FF7A18] transition-colors text-xs sm:text-sm">
                  Cybersecurity & Threat Defense
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions & Inquiries */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Admissions & Inquiries</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Have questions about courses, cohort schedules, or admissions? Reach out to our team.
            </p>
            <Link
              href="/academy#contact"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#FF7A18] text-white text-xs font-semibold transition-all border border-white/15"
            >
              <span>Contact Admissions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} EdWth Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xs">Empowering Every Learner</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF7A18] transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
