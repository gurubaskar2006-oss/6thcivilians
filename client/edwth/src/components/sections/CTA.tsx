import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white dark:bg-brand-charcoal transition-colors px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-brand-orange to-brand-orangeLight shadow-2xl">
        
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -right-[10%] w-[80%] aspect-square rounded-full border-[40px] border-white/30"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[50%] -left-[10%] w-[60%] aspect-square rounded-full border-[20px] border-white/20"
          />
        </div>

        <div className="relative z-10 px-8 py-20 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-3xl"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm mb-2">
              <Sparkles className="w-4 h-4" /> Start Your Journey Today
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Transform your potential into <br className="hidden md:block" />
              <span className="text-white/90 italic">undeniable success.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">
              Join thousands of learners who have accelerated their careers with EdWth Academy's expert-led curriculum.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-brand-orange rounded-full font-bold text-lg hover:shadow-xl hover:shadow-white/30 hover:-translate-y-1 transition-all flex items-center justify-center group">
                Enroll Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all">
                Speak with Admissions
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
