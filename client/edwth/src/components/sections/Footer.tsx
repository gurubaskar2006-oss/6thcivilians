import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo-transparent.png" alt="EdWth Academy Logo" className="h-10 w-auto object-contain" />
              <span className="font-heading font-bold text-2xl text-white">
                EdWth Academy
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Every Learner to rise above. We are dedicated to providing world-class education that transforms potential into success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all text-xs font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all text-xs font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all text-xs font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all text-xs font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Courses', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase().replace(' ', '-')}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-brand-orange transition-colors cursor-pointer text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Data Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Business Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest updates and course offers.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
              />
              <button className="w-full px-4 py-3 bg-brand-orange hover:bg-brand-orangeLight text-white rounded-lg font-bold transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} EdWth Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            
            <Link to="home" smooth={true} duration={500} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer ml-4 transition-all">
              <ArrowUp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
