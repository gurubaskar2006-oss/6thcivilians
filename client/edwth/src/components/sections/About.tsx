import { motion } from 'framer-motion';
import CountUpModule from 'react-countup';
const CountUp = (CountUpModule as any).default || CountUpModule;
import { BookOpen, Users, Trophy, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Users />, label: 'Students Taught', value: 10000, suffix: '+' },
    { icon: <BookOpen />, label: 'Active Courses', value: 50, suffix: '+' },
    { icon: <Trophy />, label: 'Success Rate', value: 98, suffix: '%' },
    { icon: <Target />, label: 'Years Experience', value: 15, suffix: '+' },
  ];

  return (
    <section id="about" className="py-32 bg-white dark:bg-brand-charcoal transition-colors relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-parchmentLight/50 to-transparent dark:from-gray-800/50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-semibold text-sm mb-2">
              Our Heritage
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-charcoal dark:text-white leading-tight">
              Igniting the spark of <br/><span className="text-gradient">Brilliance</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At EdWth Academy, we believe that education is the spark that transforms potential into excellence. Founded on the principle of "Empowering Every Learner," we provide a nurturing environment where ambition meets guidance.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-brand-orange pl-6 italic">
              "Our emblem—an open book with a rising flame—symbolizes our commitment to elevating each student's journey from foundational knowledge to stellar achievements."
            </p>

            <div className="pt-6 grid grid-cols-2 gap-6">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="text-4xl font-heading font-extrabold text-brand-charcoal dark:text-white mb-1">
                    <CountUp end={stat.value} duration={2.5} separator="," enableScrollSpy={true} scrollSpyOnce={true} />
                    <span className="text-brand-orange">{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Grid Composition */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" alt="Students learning" className="rounded-3xl shadow-xl w-full h-64 object-cover mt-12" />
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" alt="Mentorship" className="rounded-3xl shadow-xl w-full h-80 object-cover -mt-4" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 z-20 flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-charcoal dark:text-white">
                  <CountUp end={98} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} />%
                </div>
                <div className="text-sm text-gray-500 font-medium">Placement Rate</div>
              </div>
            </motion.div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
