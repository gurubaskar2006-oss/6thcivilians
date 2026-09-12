import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Courses from '../components/sections/Courses';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TeachingApproach from '../components/sections/TeachingApproach';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <TeachingApproach />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
