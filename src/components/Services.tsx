import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Cloud, Shield, LineChart, Smartphone } from 'lucide-react';

const services = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business needs.',
    icon: Code2,
    features: [
      'Web Applications',
      'Mobile Apps',
      'Enterprise Software',
      'API Integration'
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to transform your business.',
    icon: Brain,
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Process Automation'
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Secure, scalable cloud infrastructure and migration services.',
    icon: Cloud,
    features: [
      'Cloud Migration',
      'Infrastructure Design',
      'DevOps',
      'Serverless Solutions'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions.',
    icon: Shield,
    features: [
      'Security Audits',
      'Threat Detection',
      'Compliance',
      'Data Protection'
    ]
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Transform data into actionable insights for better decision-making.',
    icon: LineChart,
    features: [
      'Data Analytics',
      'Reporting',
      'Visualization',
      'KPI Tracking'
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    icon: Smartphone,
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'Mobile Strategy'
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transforming businesses through innovative digital solutions and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-red-500/20 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              {selectedService === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4"
                >
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;