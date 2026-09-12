import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Gopika',
      role: 'Full-Stack Developer',
      content: 'EdWth Academy completely transformed my career path. The instructors are top-notch and the curriculum is perfectly aligned with industry needs. I landed my dream job within a month of graduating.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Preethu Sree Reddy',
      role: 'Data Scientist at TechCorp',
      content: 'The personalized learning approach at EdWth made all the difference. Complex topics were broken down into digestible modules, and the hands-on projects gave me the confidence to tackle real-world problems.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=11'
    },
    {
      id: 3,
      name: 'Pramothika',
      role: 'Senior UX Designer',
      content: 'I loved the community aspect of EdWth Academy. Collaborating with peers and getting feedback from expert mentors helped me build a portfolio that truly stands out in a competitive market.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 4,
      name: 'Visva Nanthika',
      role: 'Product Manager',
      content: 'The practical knowledge and mentorship I received at EdWth Academy were invaluable. It truly accelerated my career growth and gave me the tools to succeed.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=9'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-white dark:bg-brand-charcoal transition-colors relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-parchmentLight dark:bg-gray-900 -z-10 rounded-l-[100px] opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-semibold text-sm mb-4">
                Testimonials
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-charcoal dark:text-white mb-6 leading-tight">
                Student <br/><span className="text-gradient">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Don't just take our word for it. Hear from our alumni who have successfully navigated their paths to success with EdWth Academy.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex gap-4 pt-4"
            >
              <button 
                onClick={handlePrev}
                className="p-4 rounded-full bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext}
                className="p-4 rounded-full bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </div>

          {/* Right Carousel */}
          <div className="w-full lg:w-2/3 relative">
            <div className="absolute -top-10 -left-10 text-brand-orange/20 dark:text-brand-orange/10 z-0">
              <Quote className="w-40 h-40 rotate-180" />
            </div>
            
            <div className="relative z-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-white/50 dark:border-gray-700/50 min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-1 text-brand-orange">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-2xl md:text-3xl text-brand-charcoal dark:text-white font-heading font-medium leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>
                    
                    <div className="flex items-center gap-6 mt-4 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <h4 className="font-bold text-brand-charcoal dark:text-white text-xl">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-500 font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Mobile Controls */}
            <div className="flex lg:hidden justify-center gap-4 mt-8">
              <button onClick={handlePrev} className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-md">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={handleNext} className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-md">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
