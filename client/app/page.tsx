import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { Process } from '@/components/sections/process'
import { Team } from '@/components/sections/team'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import { ScrollOrchestrator } from '@/components/scroll-orchestrator'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollOrchestrator
          hero={<Hero />}
          about={<About />}
          process={<Process />}
          services={<Services />}
          team={<Team />}
          contact={<Contact />}
          footer={<Footer />}
        />
      </main>
    </>
  )
}
