import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '790a748b-739b-48fb-a7e7-35bf1ed94d92');
    formData.append('from_name', 'EdWth Academy Contact Form');
    formData.append('subject', 'New Contact Message - EdWth Academy');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3Forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const data = await res.json();
      if (res.status === 200 || data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Failed to send message. Please email us directly.');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('Network error. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Have questions? Contact our team directly.
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
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-charcoal dark:text-white">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out to EdWth Academy. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMsg('');
                  }}
                  className="inline-block text-xs font-bold text-brand-orange underline cursor-pointer pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-brand-orange outline-none transition-all dark:text-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-brand-orange outline-none transition-all dark:text-white" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-brand-orange outline-none transition-all resize-none dark:text-white" placeholder="How can we help you?"></textarea>
                </div>
                {errorMsg && (
                  <p className="text-red-500 text-xs font-semibold">{errorMsg}</p>
                )}
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-brand-charcoal dark:bg-white text-white dark:text-brand-charcoal font-bold rounded-xl hover:bg-black dark:hover:bg-gray-200 transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Contact Info - Email Only */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 space-y-6">
              <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-brand-charcoal dark:text-white mb-2">Email Us Directly</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  For all admissions, course details, enrollment questions, and partnerships, reach out directly to our official email address.
                </p>
                <a 
                  href="mailto:edwthacademy@gmail.com" 
                  className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl bg-brand-parchmentLight dark:bg-gray-700 text-brand-charcoal dark:text-white font-bold text-base hover:text-brand-orange transition-colors"
                >
                  <Mail className="w-5 h-5 text-brand-orange" />
                  <span>edwthacademy@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
