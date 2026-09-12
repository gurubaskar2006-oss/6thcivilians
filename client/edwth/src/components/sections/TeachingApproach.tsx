import { motion } from 'framer-motion';
import { UserPlus, BookOpen, PenTool, Flame } from 'lucide-react';

export default function TeachingApproach() {
  const steps = [
    {
      id: 1,
      title: 'Enroll',
      description: 'Join our community and get matched with the right learning path.',
      icon: <UserPlus className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Learn',
      description: 'Engage with interactive lessons, live sessions, and peer discussions.',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Practice',
      description: 'Apply knowledge through real-world projects and assessments.',
      icon: <PenTool className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'Achieve',
      description: 'Reach your goals, get certified, and ignite your career.',
      icon: <Flame className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-brand-parchmentLight dark:bg-gray-900 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-heading font-bold text-brand-charcoal dark:text-white mb-6"
          >
            How It <span className="text-gradient">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            A seamless, step-by-step journey designed to take you from a beginner to an expert.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-brand-orange to-brand-orangeLight"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Indicator */}
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-brand-parchmentLight dark:border-gray-900 shadow-xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 group-hover:border-brand-orange">
                  <div className="text-brand-orange">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-brand-charcoal dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>

                {/* Mobile connecting arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-6 text-brand-orange animate-bounce">
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
