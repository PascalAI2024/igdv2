import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, CheckCircle, ExternalLink, Database, Shield, Cpu, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const CloudServices = () => {
  const solutions = [
    {
      title: 'Cloud Migration',
      description: 'Seamless transition of your infrastructure to the cloud.',
      icon: Database,
      features: [
        'Infrastructure Assessment',
        'Migration Strategy',
        'Data Transfer',
        'Legacy System Integration'
      ]
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud infrastructure.',
      icon: Shield,
      features: [
        'Access Management',
        'Data Encryption',
        'Threat Detection',
        'Compliance Management'
      ]
    },
    {
      title: 'Infrastructure Design',
      description: 'Scalable and efficient cloud architecture solutions.',
      icon: Cpu,
      features: [
        'High Availability',
        'Load Balancing',
        'Auto-scaling',
        'Disaster Recovery'
      ]
    },
    {
      title: 'DevOps Implementation',
      description: 'Streamline development and operations workflows.',
      icon: GitBranch,
      features: [
        'CI/CD Pipelines',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Logging'
      ]
    }
  ];

  const providers = [
    'AWS', 'Azure', 'Google Cloud', 'Digital Ocean'
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
              <Cloud className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                Cloud Services
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your business with scalable, secure, and efficient cloud solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-red-500/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-8 h-8 text-red-500 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gradient mb-4">Cloud Providers</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We work with leading cloud providers to deliver the best solutions for your needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {providers.map((provider, index) => (
                <motion.div
                  key={provider}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-red-500/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white text-center">{provider}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-12 backdrop-blur-sm border border-red-500/20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  Ready to Move to the Cloud?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our cloud solutions can transform your infrastructure.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  Start Your Cloud Journey
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

export default CloudServices;