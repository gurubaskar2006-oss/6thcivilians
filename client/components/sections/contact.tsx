'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'
import { brand, projectTypes, engagementModels } from '@/data/content'
import { Reveal } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { MagneticButton } from '@/components/magnetic-button'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-xl border border-border bg-secondary/35 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 focus:shadow-[0_0_10px_-3px_rgba(16,185,129,0.2)]'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        console.error('Failed to send email')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden w-full py-28 border-t border-border/40">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column: Heading & Details */}
          <div>
            <SectionLabel index="07" label="Engagement" />
            <Reveal>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Have a technology challenge?{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Let&apos;s build what&apos;s next.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tell us what you&apos;re building. Let&apos;s explore how disciplined software engineering, intelligent systems, and scalable architecture can move your objectives forward.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 block">
                  Engagement Models
                </span>
                <div className="grid gap-3 sm:grid-cols-3">
                  {engagementModels.map((model) => (
                    <div
                      key={model.title}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-emerald-500/30"
                    >
                      <h3 className="font-display text-xs font-bold text-foreground">
                        {model.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                        {model.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                  Direct Inquiries
                </span>
                <a
                  href={`mailto:${brand.email}`}
                  className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary text-emerald-400 transition-colors group-hover:border-emerald-400/50">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs sm:text-sm">{brand.email}</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Form */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              {sent ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/30">
                    <Check className="h-6 w-6 stroke-[3]" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    Message received.
                  </h3>
                  <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
                    Thank you for reaching out to 6th Civilians Corporation. Our technical team will review your inquiry and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Corporate Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      placeholder="Organization or project name"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Focus Area / Service Required
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      className={cn(fieldClass, 'appearance-none')}
                    >
                      <option value="" disabled className="bg-zinc-950 text-white">
                        Select a capability area…
                      </option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p} className="bg-zinc-950 text-white">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Project Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about the problem space, requirements, and desired timeline…"
                      className={cn(fieldClass, 'resize-none')}
                    />
                  </div>

                  <div className="pt-2">
                    <MagneticButton type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting Inquiry...' : 'Start a Conversation'}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
