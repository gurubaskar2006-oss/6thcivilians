'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Trophy, Target } from 'lucide-react'

export function AcademyAbout() {
  const stats = [
    { icon: <Users className="w-5 h-5" />, label: 'Students Taught', value: '10,000+' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Active Courses', value: '50+' },
    { icon: <Trophy className="w-5 h-5" />, label: 'Success Rate', value: '98%' },
    { icon: <Target className="w-5 h-5" />, label: 'Industry Mentors', value: '50+' },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F8EFD8]/50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-7"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF7A18]/10 border border-[#FF7A18]/20 text-[#FF7A18] font-semibold text-xs uppercase tracking-wider">
              Our Heritage
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1A1A1A] leading-tight">
              Igniting the spark of <br />
              <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFB347] bg-clip-text text-transparent">
                Brilliance
              </span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              At EdWth Academy, we believe that education is the spark that transforms potential into excellence. Founded on the principle of &ldquo;Empowering Every Learner,&rdquo; we provide a nurturing environment where ambition meets rigorous engineering guidance.
            </p>

            <p className="text-base text-gray-700 leading-relaxed border-l-4 border-[#FF7A18] pl-5 italic bg-[#F8EFD8]/20 py-2 rounded-r-lg">
              &ldquo;Our emblem—an open book with a rising flame—symbolizes our commitment to elevating each student&apos;s journey from foundational knowledge to stellar achievements.&rdquo;
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-2xl bg-[#F8EFD8]/30 border border-gray-100 flex flex-col">
                  <div className="text-[#FF7A18] mb-2">{stat.icon}</div>
                  <div className="text-2xl font-display font-bold text-[#1A1A1A] mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                alt="Students learning"
                className="rounded-3xl shadow-xl w-full h-64 object-cover mt-10"
              />
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
                alt="Mentorship"
                className="rounded-3xl shadow-xl w-full h-80 object-cover -mt-4"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 z-20 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#FF7A18]/10 flex items-center justify-center text-[#FF7A18]">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-[#1A1A1A]">98%</div>
                <div className="text-xs text-gray-500 font-medium">Placement & Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
