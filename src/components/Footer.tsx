import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-red-500">Ingenious</span>
                <span className="text-white">Digital</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering businesses through innovative digital solutions and cutting-edge technology. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/ingeniousdigital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/ingenious-digital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/ingenious-digital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>

            <div className="mt-6 space-y-2">
              <a href="tel:+19545158586" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (954) 515-8586
              </a>
              <a href="mailto:info@ingeniousdigital.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@ingeniousdigital.com
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Fort Lauderdale, FL 33304<br />United States</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Ingenious Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;