'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function AcademyCTA() {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FF7A18] to-[#FFB347] shadow-2xl text-white">
        <div className="relative z-10 px-8 py-16 sm:py-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 max-w-3xl"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Start Your Journey Today
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight">
              Transform your potential into <br className="hidden md:block" />
              <span className="text-white/95 underline decoration-white/40">undeniable mastery.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Join thousands of motivated engineers who have accelerated their careers with EdWth Academy&apos;s expert-led curriculum and 6th Civilians Corporation mentorship.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/academy#contact"
                className="px-8 py-4 bg-white text-[#FF7A18] rounded-full font-bold text-base hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/academy/courses"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-base hover:bg-white/15 transition-all text-center"
              >
                View 17 Course Tracks
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
