import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { CorporateIntro } from '@/components/sections/corporate-intro'
import { Services } from '@/components/sections/services'
import { Industries } from '@/components/sections/industries'
import { Projects } from '@/components/sections/projects'
import { Process } from '@/components/sections/process'
import { About } from '@/components/sections/about'
import { AcademySection } from '@/components/sections/academy-section'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-col w-full">
        <Hero />
        <CorporateIntro />
        <Services />
        <Industries />
        <Projects />
        <Process />
        <About />
        <AcademySection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
