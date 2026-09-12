import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-parchment-pattern">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-brand-orange/30 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-brand-orangeLight/30 rounded-full blur-[80px]"
        />
        
        {/* Subtle rising star/arrow motif based on logo */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 0.6, 0], y: -800 }}
            transition={{
              duration: 12 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
            className="absolute"
            style={{ left: `${10 + Math.random() * 80}%`, bottom: '-10%' }}
          >
            <div className="w-1 h-16 bg-gradient-to-t from-transparent to-brand-orange/40 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-brand-orangeLight shadow-[0_0_12px_rgba(255,179,71,0.9)] -mt-1 mx-auto" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-brand-charcoal dark:text-white leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Empowering <br className="hidden lg:block"/>Every Learner to <span className="text-gradient">Rise.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join EdWth Academy to ignite your potential. Expert-led coaching, personalized paths, and a community dedicated to your growth and success.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orangeLight text-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-brand-orange/40 hover:-translate-y-1 transition-all flex items-center justify-center">
                Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white rounded-full font-bold text-lg border border-gray-200 dark:border-gray-700 hover:border-brand-orange hover:text-brand-orange transition-all hover:shadow-lg">
                Book Free Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image/Mockup Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-orangeLight/40 rounded-full animate-[spin_20s_linear_infinite]" />
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                alt="Students collaborating" 
                className="absolute inset-4 object-cover rounded-full shadow-2xl border-8 border-white dark:border-gray-800"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl">🎉</div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">New Batch</div>
                  <div className="font-bold text-brand-charcoal dark:text-white">Starting Soon</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl">🎓</div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Expert Faculty</div>
                  <div className="font-bold text-brand-charcoal dark:text-white">50+ Mentors</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
