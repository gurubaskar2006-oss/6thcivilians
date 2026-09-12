'use client'

import { motion } from 'framer-motion'
import { UserPlus, BookOpen, PenTool, Flame } from 'lucide-react'

export function AcademyTeachingApproach() {
  const steps = [
    {
      id: 1,
      title: 'Enroll & Assess',
      description: 'Get evaluated on your foundational aptitude and matched with the optimal engineering track.',
      icon: <UserPlus className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Learn & Build',
      description: 'Engage with interactive code labs, live architectural reviews, and peer programming squads.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Production Immersion',
      description: 'Contribute to actual software platforms, API integrations, and cloud infrastructure.',
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      id: 4,
      title: 'Graduate & Excel',
      description: 'Earn industry-recognized certification and interview directly with enterprise squads.',
      icon: <Flame className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-24 bg-[#F8EFD8]/40 border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF7A18]/10 border border-[#FF7A18]/20 text-[#FF7A18] font-semibold text-xs uppercase tracking-wider mb-3">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1A1A1A] mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFB347] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-base text-gray-600">
            A seamless, step-by-step pathway designed to take motivated learners from fundamentals to production mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center p-6 rounded-3xl bg-white shadow-xs border border-gray-100 hover:shadow-md transition-all group"
            >
              {/* Step indicator */}
              <div className="w-14 h-14 rounded-2xl bg-[#FF7A18]/10 flex items-center justify-center text-[#FF7A18] mb-5 group-hover:scale-110 group-hover:bg-[#FF7A18] group-hover:text-white transition-all">
                {step.icon}
              </div>

              <div className="font-mono text-xs font-bold text-[#FF7A18] mb-1">
                STEP 0{step.id}
              </div>
              <h3 className="text-lg font-display font-bold text-[#1A1A1A] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
