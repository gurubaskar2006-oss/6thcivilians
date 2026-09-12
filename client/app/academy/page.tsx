import type { Metadata } from 'next'
import { AcademyNavbar } from '@/components/academy/navbar'
import { AcademyHero } from '@/components/academy/hero'
import { AcademyAbout } from '@/components/academy/about'
import { AcademyCoursesPreview } from '@/components/academy/courses-preview'
import { AcademyWhyChooseUs } from '@/components/academy/why-choose-us'
import { AcademyTeachingApproach } from '@/components/academy/teaching-approach'
import { AcademyTestimonials } from '@/components/academy/testimonials'
import { AcademyCTA } from '@/components/academy/cta'
import { AcademyContact } from '@/components/academy/contact'
import { AcademyFooter } from '@/components/academy/footer'

export const metadata: Metadata = {
  title: 'EdWth Academy | Empowering Every Learner to Rise',
  description:
    'Empowering Every Learner to Rise. EdWth Academy provides practical, project-based engineering training, hands-on masterclasses, and career pathways.',
  openGraph: {
    title: 'EdWth Academy | Empowering Every Learner to Rise',
    description:
      'Empowering Every Learner to Rise. Practical, project-based software engineering training and career masterclasses.',
    url: 'https://6thcivilians.com/academy',
    siteName: 'EdWth Academy',
  },
}

export default function AcademyHomePage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] font-sans antialiased selection:bg-[#FF7A18]/20 selection:text-[#1A1A1A]">
      <AcademyNavbar />
      <AcademyHero />
      <AcademyAbout />
      <AcademyCoursesPreview />
      <AcademyWhyChooseUs />
      <AcademyTeachingApproach />
      <AcademyTestimonials />
      <AcademyCTA />
      <AcademyContact />
      <AcademyFooter />
    </main>
  )
}
