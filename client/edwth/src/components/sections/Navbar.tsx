import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, UserCircle } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/#about' },
    { name: 'Why Us', to: '/#why-us' },
    { name: 'Testimonials', to: '/#testimonials' },
    { name: 'Contact', to: '/#contact' },
  ];

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/' && location.hash === '';
    if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.substring(1);
    return location.pathname === to;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-brand-charcoal/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-transparent.png" alt="EdWth Academy Logo" className="h-10 w-auto object-contain" />
              <span className="font-heading font-bold text-2xl text-gradient hidden sm:block">
                EdWth Academy
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  className={`font-medium cursor-pointer transition-colors relative group ${isActive(link.to) ? 'text-brand-orange dark:text-brand-orangeLight' : 'text-brand-charcoal dark:text-brand-parchmentLight hover:text-brand-orange dark:hover:text-brand-orangeLight'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l pl-4 border-gray-200 dark:border-gray-700">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle Dark Mode">
                {isDark ? <Sun className="w-5 h-5 text-brand-parchmentLight" /> : <Moon className="w-5 h-5 text-brand-charcoal" />}
              </button>
              
              <button className="hidden lg:flex items-center gap-2 text-brand-charcoal dark:text-brand-parchmentLight hover:text-brand-orange transition-colors">
                <UserCircle className="w-5 h-5" />
                <span className="font-medium text-sm">Login</span>
              </button>

              <Link to="/#contact" className="bg-gradient-to-r from-brand-orange to-brand-orangeLight text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-brand-orange/30 transition-all transform hover:-translate-y-0.5 inline-block">
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {isDark ? <Sun className="w-5 h-5 text-brand-parchmentLight" /> : <Moon className="w-5 h-5 text-brand-charcoal" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-charcoal dark:text-brand-parchmentLight focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-brand-charcoal border-t dark:border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${isActive(link.to) ? 'text-brand-orange bg-brand-orange/10 dark:bg-brand-orange/20' : 'text-brand-charcoal dark:text-brand-parchmentLight hover:text-brand-orange hover:bg-brand-parchment/30 dark:hover:bg-gray-800'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-3">
                <button className="flex items-center gap-2 justify-center w-full px-3 py-3 text-brand-charcoal dark:text-brand-parchmentLight border border-gray-200 dark:border-gray-700 rounded-md font-medium">
                  <UserCircle className="w-5 h-5" />
                  Student Portal
                </button>
                <Link to="/#contact" onClick={() => setIsOpen(false)} className="w-full text-center bg-gradient-to-r from-brand-orange to-brand-orangeLight text-white px-3 py-3 rounded-md font-semibold shadow-md inline-block">
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
