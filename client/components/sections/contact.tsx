'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'
import { brand, projectTypes, engagementModels } from '@/data/content'
import { Reveal } from '@/components/motion'

const fieldClass =
  'w-full border border-border bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors duration-200 focus:border-zinc-400 focus:bg-card'

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
    <section id="contact" className="relative w-full py-24 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Heading, Models, and Direct Email (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
              07 // INITIATE CORPORATE ENGAGEMENT
            </span>

            <Reveal>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                Have a technology challenge? Let&apos;s build what&apos;s next.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Tell us what you&apos;re building. Let&apos;s explore how disciplined software engineering, applied machine intelligence, and scalable cloud architecture can accelerate your business objectives.
              </p>
            </Reveal>

            {/* Engagement Models (Tabular vertical list) */}
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  ENGAGEMENT FRAMEWORKS
                </span>
                <div className="border border-border divide-y divide-border bg-card/30">
                  {engagementModels.map((model) => (
                    <div key={model.title} className="p-3.5">
                      <h3 className="font-display text-xs font-bold text-foreground">
                        {model.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {model.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Direct Inquiries */}
            <Reveal delay={0.3}>
              <div className="mt-8 pt-6 border-t border-border flex flex-col gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  DIRECT CORPORATE DISPATCH
                </span>
                <a
                  href={`mailto:${brand.email}`}
                  className="group inline-flex items-center gap-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span className="font-mono text-xs sm:text-sm">{brand.email}</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Intake Dispatch Console (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                  <span className="font-mono text-xs font-bold text-zinc-300">
                    INTAKE_DISPATCH // INQUIRY_PORTAL
                  </span>
                  <span className="font-mono text-[10px] text-emerald-500">ENCRYPTED_TLS</span>
                </div>

                {sent ? (
                  <div className="flex min-h-72 flex-col items-center justify-center text-center p-6">
                    <span className="flex h-12 w-12 items-center justify-center border border-emerald-500 text-emerald-400">
                      <Check className="h-6 w-6 stroke-[2.5]" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                      Inquiry received.
                    </h3>
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground font-sans">
                      Thank you for contacting 6th Civilians Corporation. Our technical leadership will review your inquiry and schedule an introductory architecture session.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4 font-sans">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1 block text-xs font-mono text-zinc-400">
                          NAME *
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
                        <label htmlFor="email" className="mb-1 block text-xs font-mono text-zinc-400">
                          CORPORATE EMAIL *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="name@organization.com"
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="mb-1 block text-xs font-mono text-zinc-400">
                        ORGANIZATION / ENTERPRISE
                      </label>
                      <input
                        id="company"
                        name="company"
                        placeholder="Company or project name"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="mb-1 block text-xs font-mono text-zinc-400">
                        CAPABILITY REQUIREMENT
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        defaultValue=""
                        className={`${fieldClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled className="bg-zinc-950 text-white">
                          Select capability area…
                        </option>
                        {projectTypes.map((p) => (
                          <option key={p} value={p} className="bg-zinc-950 text-white">
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1 block text-xs font-mono text-zinc-400">
                        PROJECT SCOPE & OBJECTIVES *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Describe the operational problem, scale requirements, and expected timeline…"
                        className={`${fieldClass} resize-none`}
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-foreground text-background py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-zinc-200 active:scale-[0.99] disabled:opacity-50"
                      >
                        {isSubmitting ? 'Transmitting...' : 'Start a Conversation'}
                      </button>
                      <a
                        href={`mailto:${brand.email}`}
                        className="inline-flex items-center justify-center border border-border px-5 py-3.5 text-xs font-semibold text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
                      >
                        Contact Us Directly
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
