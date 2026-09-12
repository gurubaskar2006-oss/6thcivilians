import { motion } from 'framer-motion';
import { Award, Clock, Users, Zap, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Expert Faculty',
      description: 'Learn directly from industry veterans and acclaimed academics dedicated to your success.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Personalized Learning',
      description: 'Adaptive curriculum that tailors to your pace, style, and career aspirations.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Flexible Schedule',
      description: 'Access high-quality education anytime, anywhere. Your learning, on your terms.',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'Proven Results',
      description: 'Our alumni have consistently achieved top-tier placements and academic excellence.',
      icon: <Zap className="w-6 h-6" />,
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-us" className="py-24 bg-white dark:bg-brand-charcoal transition-colors relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative order-2 lg:order-1"
          >
            {/* Visual Composition */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-col gap-4">
                  {[
                    '99% Satisfaction Rate',
                    'Industry-Aligned Curriculum',
                    'Dedicated Career Support'
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.2) }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full w-max border border-white/20 text-white"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-orangeLight" />
                      <span className="font-medium text-sm md:text-base">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Abstract floating element */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orangeLight/20 backdrop-blur-3xl rounded-full border border-white/30 shadow-xl"
            />
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-10 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-semibold text-sm mb-4">
                The EdWth Advantage
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-charcoal dark:text-white mb-6 leading-tight">
                Why <span className="text-gradient">Choose Us?</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We don't just teach; we transform. EdWth Academy stands at the intersection of traditional academic rigor and modern innovation, ensuring you are always one step ahead.
              </p>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={item} className="group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-parchmentLight dark:bg-gray-800 flex items-center justify-center text-brand-orange mb-5 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all shadow-sm">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-brand-charcoal dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
