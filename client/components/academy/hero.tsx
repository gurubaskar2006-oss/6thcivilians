'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function AcademyHero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-12 pb-20 overflow-hidden bg-[#F8EFD8]/40">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-10 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-[#FF7A18]/25 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-10 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-[#FFB347]/30 rounded-full blur-[80px]"
        />

        {/* Subtle rising flame / star streaks */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 0.7, 0], y: -700 }}
            transition={{
              duration: 10 + (i * 2.5),
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear',
            }}
            className="absolute"
            style={{ left: `${15 + i * 14}%`, bottom: '-5%' }}
          >
            <div className="w-1 h-16 bg-gradient-to-t from-transparent to-[#FF7A18]/40 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#FFB347] shadow-[0_0_12px_rgba(255,179,71,0.9)] -mt-1 mx-auto" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF7A18]/10 border border-[#FF7A18]/30 px-4 py-1.5 text-xs font-semibold text-[#FF7A18]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EDUCATION DIVISION OF 6TH CIVILIANS CORPORATION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#1A1A1A] leading-[1.08] tracking-tight">
              Empowering Every Learner to{' '}
              <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFB347] bg-clip-text text-transparent">
                Rise.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join EdWth Academy to ignite your potential. Expert-led engineering bootcamps, personalized curriculum, and hands-on production immersion backed by 6th Civilians Corporation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2">
              <Link
                href="/academy/courses"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF7A18] to-[#FFB347] text-white rounded-full font-bold text-base hover:shadow-xl hover:shadow-[#FF7A18]/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/academy#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#1A1A1A] rounded-full font-bold text-base border border-gray-300 hover:border-[#FF7A18] hover:text-[#FF7A18] transition-all hover:shadow-md text-center"
              >
                Book Free Demo
              </Link>
            </div>
          </motion.div>

          {/* Right Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7A18]/25 to-[#FFB347]/40 rounded-full animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                className="absolute inset-3 object-cover rounded-full shadow-2xl border-8 border-white"
              />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 -left-4 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg">
                  🎉
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">New Batch</div>
                  <div className="font-bold text-[#1A1A1A] text-sm">Starting Soon</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 -right-4 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                  🎓
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Expert Faculty</div>
                  <div className="font-bold text-[#1A1A1A] text-sm">50+ Mentors</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
