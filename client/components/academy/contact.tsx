'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'

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
            Have questions about syllabus, eligibility, batches, or corporate sponsorship? Our admissions team is here to assist.
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
                  Thank you for reaching out to EdWth Academy. An admissions counselor will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent outline-none transition-all text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Target Track
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
                    placeholder="Tell us about your background and what you are looking to learn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#FF7A18] to-[#FFB347] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#FF7A18]/30 transition-all text-sm"
                >
                  Submit Application / Inquiry
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details & Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FF7A18]/10 flex items-center justify-center text-[#FF7A18] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">Campus Location</h4>
                  <a
                    href="https://maps.google.com/maps?q=6th+Civilians+Corporation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xs hover:text-[#FF7A18] transition-colors leading-relaxed block mt-0.5"
                  >
                    6th Civilians Corporation<br />Chennai, Tamil Nadu, India
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FF7A18]/10 flex items-center justify-center text-[#FF7A18] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">Contact Hotline</h4>
                  <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">
                    Mon - Sat from 9:00 AM to 6:00 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FF7A18]/10 flex items-center justify-center text-[#FF7A18] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">Email Admissions</h4>
                  <a
                    href="mailto:sixthciviliansoffical@gmail.com"
                    className="text-gray-600 text-xs hover:text-[#FF7A18] transition-colors block mt-0.5"
                  >
                    sixthciviliansoffical@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-56 bg-gray-100 rounded-3xl overflow-hidden border border-gray-200">
              <iframe
                title="6th Civilians Corporation Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=6th+Civilians+Corporation&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
