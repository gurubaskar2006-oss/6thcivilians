'use client'

import { useState } from 'react'
import { Mail, Phone, Check } from 'lucide-react'
import { brand, projectTypes, engagementModels } from '@/data/content'
import { Reveal } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { MagneticButton } from '@/components/magnetic-button'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-xl border border-border bg-secondary/35 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-quantum focus:ring-1 focus:ring-quantum/50 focus:shadow-[0_0_10px_-3px_rgba(0,212,255,0.15)]'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire this up to your email service / API route.
    setSent(true)
  }

  return (
    <section id="contact-panel" className="relative overflow-hidden w-full min-h-screen flex flex-col justify-center py-24">



      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* left: pitch */}
          <div>
            <SectionLabel index="05" label="Start a Project" />
            <Reveal>
              <h2 className="mt-2 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance metallic-heading sm:text-4xl md:text-5xl">
                Let&apos;s engineer your <span className="text-quantum text-glow">next reality.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Tell us what you&apos;re building. We&apos;ll come back with a clear path from idea to
                launch.
              </p>
            </Reveal>

            <Reveal delay={1.5}>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {engagementModels.map((model) => (
                  <div key={model.title} className="glass-panel rounded-xl p-4 transition-colors hover:border-quantum/30">
                    <h3 className="font-display text-sm font-semibold metallic-heading">{model.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{model.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href={`mailto:${brand.email}`}
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary text-quantum transition-colors group-hover:border-quantum/50">
                    <Mail className="h-4 w-4" />
                  </span>
                  {brand.email}
                </a>

              </div>
            </Reveal>
          </div>

          {/* right: form */}
          <Reveal delay={1}>
            <div className="quantum-border glass-panel rounded-3xl p-5 sm:p-7">
              {sent ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-quantum text-primary-foreground shadow-[0_0_20px_-6px_rgba(0,212,255,0.25)]">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold metallic-heading">Message received.</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Thanks for reaching out — we&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                        Name
                      </label>
                      <input id="name" name="name" required placeholder="Ada Lovelace" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                        Email
                      </label>
                      <input id="email" name="email" type="email" required placeholder="you@company.com" className={fieldClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs text-muted-foreground">
                      Company
                    </label>
                    <input id="company" name="company" placeholder="Acme Inc." className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="mb-1.5 block text-xs text-muted-foreground">
                      Project Type
                    </label>
                    <select id="projectType" name="projectType" defaultValue="" className={cn(fieldClass, 'appearance-none')}>
                      <option value="" disabled className="bg-zinc-950 text-white">
                        Select a focus…
                      </option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p} className="bg-zinc-950 text-white">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="What are you building?"
                      className={cn(fieldClass, 'resize-none')}
                    />
                  </div>
                  <div className="pt-2 flex flex-col gap-3 sm:flex-row">
                    <div className="flex-1">
                      <MagneticButton type="submit" className="w-full">
                        Send Message
                      </MagneticButton>
                    </div>
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
