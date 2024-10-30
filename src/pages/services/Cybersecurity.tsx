import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, ExternalLink, Lock, Eye, AlertTriangle, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const Cybersecurity = () => {
  const solutions = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your security posture.',
      icon: Eye,
      features: [
        'Vulnerability Assessment',
        'Penetration Testing',
        'Risk Analysis',
        'Compliance Audit'
      ]
    },
    {
      title: 'Threat Protection',
      description: 'Advanced threat detection and prevention systems.',
      icon: AlertTriangle,
      features: [
        'Real-time Monitoring',
        'Intrusion Detection',
        'Malware Protection',
        'Zero-day Defense'
      ]
    },
    {
      title: 'Data Security',
      description: 'Robust data protection and encryption solutions.',
      icon: Lock,
      features: [
        'Data Encryption',
        'Access Control',
        'Data Loss Prevention',
        'Secure Data Transfer'
      ]
    },
    {
      title: 'Compliance Management',
      description: 'Ensure adherence to security standards and regulations.',
      icon: FileCheck,
      features: [
        'HIPAA Compliance',
        'PCI DSS',
        'GDPR',
        'SOC 2'
      ]
    }
  ];

  const stats = [
    {
      value: '99.9%',
      label: 'Threat Detection Rate'
    },
    {
      value: '24/7',
      label: 'Security Monitoring'
    },
    {
      value: '100+',
      label: 'Security Audits Completed'
    },
    {
      value: '0',
      label: 'Data Breaches'
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
              <Shield className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Protect your business with comprehensive security solutions designed to defend against evolving cyber threats.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-red-500 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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

        {/* Security Process */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gradient mb-4">Our Security Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive approach to protecting your digital assets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Evaluate current security posture'
                },
                {
                  step: '02',
                  title: 'Implementation',
                  description: 'Deploy security measures'
                },
                {
                  step: '03',
                  title: 'Monitoring',
                  description: '24/7 threat detection'
                },
                {
                  step: '04',
                  title: 'Response',
                  description: 'Rapid incident response'
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                    <span className="text-4xl font-bold text-red-500/20">{phase.step}</span>
                    <h3 className="text-xl font-semibold text-white mt-4 mb-2">{phase.title}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-red-500/20 to-transparent transform translate-x-1/2" />
                  )}
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
                  Secure Your Digital Assets
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our cybersecurity solutions can protect your business.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  Get Protected Now
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

export default Cybersecurity;