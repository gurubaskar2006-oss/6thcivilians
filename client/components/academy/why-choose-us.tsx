'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Users, Zap, CheckCircle2 } from 'lucide-react'

export function AcademyWhyChooseUs() {
  const features = [
    {
      title: 'Expert Engineering Faculty',
      description: 'Learn directly from practicing senior developers, architects, and founders dedicated to your mastery.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Live Production Immersion',
      description: 'Build features on real client systems, review PRs, and master modern Git workflows and cloud deployments.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Adaptive Learning Tracks',
      description: 'Flexible schedules built for college students and working professionals aiming to upskill.',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'Direct Placement & Careers',
      description: 'Top performers earn direct placement into 6th Civilians Corporation engineering squads.',
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-100 aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-col gap-3">
                  {[
                    '99% Student Satisfaction Rate',
                    'Direct 6th Civilians Squad Placement',
                    'Production-Grade Architecture Experience',
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full w-max border border-white/20 text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FFB347]" />
                      <span className="font-medium text-xs sm:text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF7A18]/10 border border-[#FF7A18]/20 text-[#FF7A18] font-semibold text-xs uppercase tracking-wider mb-4">
                The EdWth Advantage
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1A1A1A] mb-5 leading-tight">
                Why{' '}
                <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFB347] bg-clip-text text-transparent">
                  Choose Us?
                </span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                We don&apos;t just teach theory; we build engineers. EdWth Academy sits directly inside 6th Civilians Corporation, giving learners authentic exposure to production software development and client architectures.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#F8EFD8]/30 border border-gray-100 hover:border-[#FF7A18]/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF7A18]/10 flex items-center justify-center text-[#FF7A18] mb-4 group-hover:scale-105 group-hover:bg-[#FF7A18] group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <h4 className="text-base font-display font-bold text-[#1A1A1A] mb-1.5">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
