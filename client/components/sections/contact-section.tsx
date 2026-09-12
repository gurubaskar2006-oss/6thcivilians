'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, ArrowRight, ArrowDownRight, Send } from 'lucide-react'
import { brand, projectTypes, engagementModels } from '@/data/content'
import { useIsReducedMotion, EASE } from '@/components/motion'

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const reduced = useIsReducedMotion()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', '790a748b-739b-48fb-a7e7-35bf1ed94d92')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })

      if (res.status === 200) {
        setSent(true)
      } else {
        console.error('Failed to submit form')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass =
    'w-full rounded-xl border border-[rgba(17,21,20,0.12)] bg-[#F7F7F2] px-4 py-3.5 text-sm text-[#111514] placeholder:text-[#8E929E] outline-none transition-all duration-200 focus:border-[#073B32] focus:bg-white focus:ring-2 focus:ring-[#073B32]/10'

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-[#F7F7F2] overflow-hidden">
      {/* Background Soft Glow Auras */}
      <div className="absolute top-1/2 -left-40 w-[32rem] h-[32rem] rounded-full bg-[#35D07F]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Bold CTA Top Header */}
        <div className="rounded-3xl border border-[rgba(17,21,20,0.08)] bg-white p-10 sm:p-16 mb-16 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B5D4F] block mb-3">
              LET&apos;S TALK
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#111514] leading-[1.02]">
              HAVE SOMETHING <br />
              <span className="text-[#073B32]">WORTH BUILDING?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#525C58]">
              Let&apos;s turn the idea into something real. Schedule a conversation with our technical leadership.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-3 rounded-full bg-[#073B32] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#0B5D4F] active:scale-[0.98]"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(17,21,20,0.15)] bg-white px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#111514] transition-all hover:border-[#073B32] hover:bg-[#E9EBE7]"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowDownRight className="h-4 w-4 text-[#525C58]" />
            </a>
          </div>
        </div>

        {/* Corporate Intake Console Layout */}
        <div id="inquiry-form" className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Context, Engagement Frameworks, Direct Email */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#073B32]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#073B32]">
                GET IN TOUCH
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111514]">
              Start a project.
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#525C58]">
              Tell us what you&apos;re looking to build. We&apos;ll review your requirements and set up an introductory call to discuss architecture, scope, and timeline.
            </p>

            {/* Engagement Frameworks */}
            <div className="mt-8 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#073B32] block">
                HOW WE COLLABORATE
              </span>
              <div className="rounded-2xl border border-[rgba(17,21,20,0.08)] bg-white divide-y divide-[rgba(17,21,20,0.06)] shadow-sm">
                {engagementModels.map((model) => (
                  <div key={model.title} className="p-4">
                    <h4 className="font-display text-sm font-bold text-[#111514]">
                      {model.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#525C58]">
                      {model.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Email */}
            <div className="mt-8 pt-6 border-t border-[rgba(17,21,20,0.08)]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#525C58] block mb-2">
                EMAIL DIRECTLY
              </span>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#073B32] hover:text-[#0B5D4F] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#0B5D4F]" />
                <span className="font-mono">{brand.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-End Contact Console Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[rgba(17,21,20,0.08)] bg-white p-8 sm:p-10 shadow-lg">
              <div className="flex items-center justify-between border-b border-[rgba(17,21,20,0.06)] pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase text-[#073B32]">
                  SEND A MESSAGE
                </span>
                <span className="font-mono text-[11px] text-[#525C58]">
                  WE REPLY WITHIN 24 HOURS
                </span>
              </div>

              {sent ? (
                <div className="flex min-h-72 flex-col items-center justify-center text-center p-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#073B32] text-[#35D07F] shadow-sm mb-4">
                    <Check className="h-7 w-7 stroke-[2.5]" />
                  </span>
                  <h4 className="font-display text-2xl font-bold text-[#111514]">
                    Message Sent.
                  </h4>
                  <p className="mt-2 max-w-sm text-xs sm:text-sm leading-relaxed text-[#525C58]">
                    Thanks for reaching out. We&apos;ll review your project details and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-mono font-semibold text-[#111514]">
                        YOUR NAME *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Alex Chen"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-mono font-semibold text-[#111514]">
                        WORK EMAIL *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs font-mono font-semibold text-[#111514]">
                      COMPANY OR ORGANIZATION
                    </label>
                    <input
                      id="company"
                      name="company"
                      placeholder="e.g. Acme Corp"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="mb-1.5 block text-xs font-mono font-semibold text-[#111514]">
                      WHAT CAN WE HELP YOU WITH?
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      className={`${fieldClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select a focus area…
                      </option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-mono font-semibold text-[#111514]">
                      PROJECT DETAILS & GOALS *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about what you want to build, timeline, and any specific requirements…"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 rounded-full bg-[#073B32] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#0B5D4F] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    </button>
                    <a
                      href={`mailto:${brand.email}`}
                      className="inline-flex items-center justify-center rounded-full border border-[rgba(17,21,20,0.15)] bg-white px-6 py-4 text-xs font-bold text-[#525C58] transition-colors hover:border-[#073B32] hover:text-[#073B32]"
                    >
                      Direct Email
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
