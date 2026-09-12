'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export function AcademyTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Gopika',
      role: 'Full-Stack Developer',
      content:
        'EdWth Academy completely transformed my career path. The instructors are top-notch and the curriculum is perfectly aligned with industry needs. I landed an engineering role within weeks of completing the program.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Preethu Sree Reddy',
      role: 'Data Scientist at TechCorp',
      content:
        'The personalized learning approach at EdWth made all the difference. Complex topics were broken down into digestible modules, and the hands-on projects gave me the confidence to tackle real-world problems.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Pramothika',
      role: 'Senior UX Designer',
      content:
        'I loved the community aspect of EdWth Academy. Collaborating with peers and getting feedback from expert mentors helped me build a portfolio that truly stands out in a competitive market.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Visva Nanthika',
      role: 'Product & Tech Coordinator',
      content:
        'The practical knowledge and mentorship I received at EdWth Academy were invaluable. It truly accelerated my growth and gave me the practical software tools to succeed.',
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Text */}
          <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF7A18]/10 border border-[#FF7A18]/20 text-[#FF7A18] font-semibold text-xs uppercase tracking-wider">
              Student Stories
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1A1A1A] leading-tight">
              Student <br />
              <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFB347] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-base text-gray-600">
              Hear from graduates who transformed their engineering skills and launched impactful careers with EdWth Academy.
            </p>

            <div className="hidden lg:flex gap-3 pt-4">
              <button
                onClick={handlePrev}
                className="p-3.5 rounded-full bg-white text-[#1A1A1A] hover:bg-[#FF7A18] hover:text-white transition-all border border-gray-300 shadow-xs cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3.5 rounded-full bg-white text-[#1A1A1A] hover:bg-[#FF7A18] hover:text-white transition-all border border-gray-300 shadow-xs cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full lg:w-2/3 relative">
            <div className="absolute -top-8 -left-8 text-[#FF7A18]/10 z-0 pointer-events-none">
              <Quote className="w-32 h-32 rotate-180" />
            </div>

            <div className="relative z-10 bg-[#F8EFD8]/40 rounded-[2.5rem] p-8 sm:p-12 border border-gray-200/80 shadow-lg min-h-[300px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="w-full space-y-6"
                >
                  <div className="flex gap-1 text-[#FF7A18]">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xl sm:text-2xl text-[#1A1A1A] font-display font-medium leading-relaxed italic">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-display font-bold text-[#1A1A1A] text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white shadow-md border border-gray-200"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white shadow-md border border-gray-200"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
