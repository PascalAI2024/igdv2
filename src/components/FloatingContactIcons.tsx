import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContactIcons = () => {
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-4">
      <motion.a
        href="tel:+19545158586"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative bg-red-500 p-3 rounded-full shadow-lg hover:shadow-red-500/25 transition-shadow"
      >
        <Phone className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          (954) 515-8586
        </span>
      </motion.a>

      <motion.a
        href="mailto:pascal@ingeniousdigital.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative bg-red-500 p-3 rounded-full shadow-lg hover:shadow-red-500/25 transition-shadow"
      >
        <Mail className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Email Us
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingContactIcons;