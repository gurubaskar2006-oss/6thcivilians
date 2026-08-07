import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import PhilosophyPinnedSection from "@/components/Philosophy/PhilosophyPinnedSection";
import Team from "@/components/Team";
import Together from "@/components/Together";
import Values from "@/components/Values";
import BeyondPartnerships from "@/components/BeyondPartnerships";
import CTASection from "@/components/CTA/CTASection";
import Footer from "@/components/Footer";
import LightSweep from "@/components/ui/LightSweep";
import DotNav from "@/components/ui/DotNav";

export default function Home() {
  return (
    <main>
      {/* Global overlay layer — the signature sweep, always on top */}
      <LightSweep intensity={0.22} />
      <DotNav />
      <Hero />
      <WhoWeAre />
      <PhilosophyPinnedSection />
      <Team />
      <Together />
      <Values />
      <BeyondPartnerships />
      <CTASection />
      <Footer />
    </main>
  );
}
