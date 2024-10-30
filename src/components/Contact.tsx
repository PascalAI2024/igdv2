import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Send Us a Message</h3>
                <p className="text-gray-400">
                  Ready to transform your digital presence? Let's discuss your project.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Contact Information</h3>
                
                <div className="space-y-4">
                  <a href="tel:9545158586" className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                      <Phone className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="text-lg group-hover:text-red-500 transition-colors">954-515-8586</span>
                  </a>

                  <a href="mailto:pascal@ingeniousdigital.com" className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="text-lg group-hover:text-red-500 transition-colors">pascal@ingeniousdigital.com</span>
                  </a>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-red-500/10">
                      <MapPin className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="text-lg">Fort Lauderdale, FL 33304</span>
                  </div>
                </div>
              </div>

              {/* Location Image with Directions Link */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-[300px] relative group">
                <img
                  src="https://images.unsplash.com/photo-1589083130544-0d6a2926e519?auto=format&fit=crop&q=80"
                  alt="Fort Lauderdale"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 grayscale contrast-125 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <a
                  href="https://www.google.com/maps/dir//Fort+Lauderdale,+FL+33304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-red-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transform hover:scale-105 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                    <span>Get Directions</span>
                  </div>
                </a>
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;