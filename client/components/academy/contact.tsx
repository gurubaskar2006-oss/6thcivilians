'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react'

export function AcademyContact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#F8EFD8]/30 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF7A18]/10 border border-[#FF7A18]/20 text-[#FF7A18] font-semibold text-xs uppercase tracking-wider mb-3">
            Inquiries & Admissions
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1A1A1A] mb-4">
            Get in{' '}
            <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFB347] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Have questions about courses, admissions, or curriculum? Contact our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#1A1A1A]">Inquiry Submitted!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out to EdWth Academy. We will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-block text-xs font-bold text-[#FF7A18] underline cursor-pointer pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="program" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Program / Track of Interest
                  </label>
                  <select
                    id="program"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent outline-none transition-all text-sm"
                  >
                    <option value="full-stack">Full-Stack Web Development</option>
                    <option value="data-science">Data Science & Analytics</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="cloud">Cloud Computing & DevOps</option>
                    <option value="ui-ux">UI/UX Design Masterclass</option>
                    <option value="cybersecurity">Cybersecurity Bootcamp</option>
                    <option value="other">Other / Custom Inquiries</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent outline-none transition-all resize-none text-sm"
                    placeholder="Tell us what you are looking to learn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#FF7A18] to-[#FFB347] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#FF7A18]/30 transition-all text-sm cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details - Email Only */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-md space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FF7A18]/10 flex items-center justify-center text-[#FF7A18]">
                <Mail className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF7A18] font-bold block mb-1">
                  OFFICIAL CORRESPONDENCE
                </span>
                <h3 className="text-2xl font-display font-bold text-[#1A1A1A]">
                  Email Us Directly
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  For all course admissions, syllabus details, student queries, and general inquiries, reach out to us at our official email address.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:edwthacademy@gmail.com"
                  className="inline-flex items-center gap-3 p-4 rounded-2xl bg-[#F8EFD8]/40 border border-[#FF7A18]/30 text-[#1A1A1A] hover:bg-[#FF7A18]/10 hover:border-[#FF7A18] transition-all group w-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#FF7A18] shadow-sm group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-gray-500 uppercase">Primary Email</span>
                    <span className="font-bold text-sm sm:text-base text-[#1A1A1A] group-hover:text-[#FF7A18] transition-colors">
                      edwthacademy@gmail.com
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-[#FF7A18] group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
