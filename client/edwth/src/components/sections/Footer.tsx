import { Link as RouterLink } from 'react-router-dom';
import { ArrowUp, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/#about', id: 'about' },
    { name: 'Courses', to: '/#courses', id: 'courses' },
    { name: 'Explore All Courses', to: '/courses' },
    { name: 'Why Us', to: '/#why-us', id: 'why-us' },
    { name: 'Testimonials', to: '/#testimonials', id: 'testimonials' },
    { name: 'Contact', to: '/#contact', id: 'contact' },
  ];

  const programs = [
    { name: 'Full-Stack Web Development', to: '/#courses' },
    { name: 'Data Science & Analytics', to: '/#courses' },
    { name: 'UI/UX Design Masterclass', to: '/#courses' },
    { name: 'Cloud Computing Fundamentals', to: '/#courses' },
    { name: 'AI & Machine Learning', to: '/#courses' },
    { name: 'Cybersecurity Bootcamp', to: '/#courses' },
  ];

  return (
    <footer className="bg-brand-charcoal pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Brand info (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo-transparent.png" alt="EdWth Academy Logo" className="h-10 w-auto object-contain" />
              <span className="font-heading font-bold text-2xl text-white">
                EdWth Academy
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering Every Learner to rise above. We are dedicated to providing world-class, project-based engineering education that transforms potential into success.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/sixth-civilians-3a2768432/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all text-xs font-bold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="https://www.instagram.com/_6th_civilians_?utm_source=qr&igsh=MWluMjhzMnA1MzN6cA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all text-xs font-bold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <RouterLink 
                    to={item.to}
                    onClick={() => item.id && handleScrollTo(item.id)}
                    className="text-gray-400 hover:text-brand-orange transition-colors cursor-pointer text-sm"
                  >
                    {item.name}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs (4 columns - direct to courses section) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-6 tracking-wide">Programs & Curriculums</h4>
            <ul className="space-y-3.5">
              {programs.map((prog) => (
                <li key={prog.name}>
                  <RouterLink 
                    to={prog.to} 
                    onClick={() => handleScrollTo('courses')}
                    className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center justify-between group"
                  >
                    <span>{prog.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                  </RouterLink>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-gray-800">
              <RouterLink 
                to="/courses"
                className="inline-flex items-center gap-1.5 text-brand-orange hover:text-brand-orangeLight font-semibold text-xs transition-colors"
              >
                <span>View All 17+ Roles & Career Paths</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} EdWth Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer ml-4 transition-all"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
