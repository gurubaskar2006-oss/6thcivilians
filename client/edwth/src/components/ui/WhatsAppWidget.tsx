import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/1234567890" 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/30 flex items-center justify-center cursor-pointer group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
        {/* Tooltip arrow */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-white dark:border-l-gray-800"></span>
      </span>
    </motion.a>
  );
}
