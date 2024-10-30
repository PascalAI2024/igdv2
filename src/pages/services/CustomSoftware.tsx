import React from 'react';
import { motion } from 'framer-motion';
import { Code2, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const CustomSoftware = () => {
  const features = [
    {
      title: 'Web Applications',
      description: 'Modern, scalable web applications built with cutting-edge technologies.',
      items: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'Enterprise Web Portals',
        'Custom CMS Solutions'
      ]
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      items: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Solutions',
        'Mobile-First Design'
      ]
    },
    {
      title: 'Enterprise Software',
      description: 'Robust enterprise solutions tailored to your business needs.',
      items: [
        'ERP Systems',
        'CRM Solutions',
        'Business Process Automation',
        'Legacy System Integration'
      ]
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs.',
      items: [
        'RESTful APIs',
        'GraphQL Implementation',
        'Microservices Architecture',
        'API Gateway Solutions'
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Code2 className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                Custom Software Development
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your business with tailored software solutions designed to meet your unique needs and challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-red-500/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-12 backdrop-blur-sm border border-red-500/20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our custom software development services can help you achieve your goals.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  Get Started
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default CustomSoftware;