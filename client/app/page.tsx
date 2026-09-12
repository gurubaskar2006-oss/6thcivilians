import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { BrandStatement } from '@/components/sections/brand-statement'
import { CapabilitiesGrid } from '@/components/sections/capabilities-grid'
import { ProjectsShowcase } from '@/components/sections/projects-showcase'
import { EcosystemFlow } from '@/components/sections/ecosystem-flow'
import { AcademyEducation } from '@/components/sections/academy-education'
import { SignatureTransition } from '@/components/sections/signature-transition'
import { TeamDirectory } from '@/components/sections/team-directory'
import { PhilosophyPillars } from '@/components/sections/philosophy-pillars'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-col w-full bg-[#F7F7F2]">
        <Hero />
        <BrandStatement />
        <CapabilitiesGrid />
        <ProjectsShowcase />
        <EcosystemFlow />
        <AcademyEducation />
        <SignatureTransition />
        <TeamDirectory />
        <PhilosophyPillars />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
