import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-parchmentLight dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-heading font-bold text-brand-charcoal dark:text-white mb-4"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions? Our team is here to help you navigate your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-brand-orange outline-none transition-all dark:text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-brand-orange outline-none transition-all dark:text-white" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-brand-orange outline-none transition-all dark:text-white" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-brand-orange outline-none transition-all resize-none dark:text-white" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand-charcoal dark:bg-white text-white dark:text-brand-charcoal font-bold rounded-xl hover:bg-black dark:hover:bg-gray-200 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-charcoal dark:text-white mb-1">Our Location</h4>
                  <a 
                    href="https://www.google.com/maps/place/6th+Civilians+Corporation/@13.1502767,80.108339,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526372c3280e7d:0x370d1d0182615b1a!8m2!3d13.1502715!4d80.1109139!16s%2Fg%2F11nvm95sp6?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                  >
                    6th Civilians Corporation<br />Chennai, India
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-charcoal dark:text-white mb-1">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">+1 (800) 123-4567<br />Mon-Fri from 8am to 6pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-charcoal dark:text-white mb-1">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">hello@edwthacademy.com<br />admissions@edwthacademy.com</p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden relative">
              <iframe 
                title="6th Civilians Corporation Location"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://maps.google.com/maps?q=6th+Civilians+Corporation&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
