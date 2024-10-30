import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, CheckCircle, ExternalLink, BarChart2, Lock, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const Finance = () => {
  const solutions = [
    {
      title: 'Trading Platforms',
      description: 'High-performance trading systems with real-time data.',
      icon: LineChart,
      features: [
        'Real-time Market Data',
        'Advanced Trading Tools',
        'Portfolio Management',
        'Risk Analytics'
      ]
    },
    {
      title: 'Banking Solutions',
      description: 'Secure digital banking and financial management systems.',
      icon: Lock,
      features: [
        'Digital Banking',
        'Payment Processing',
        'Account Management',
        'Transaction Security'
      ]
    },
    {
      title: 'Investment Analytics',
      description: 'Advanced analytics for investment decision-making.',
      icon: BarChart2,
      features: [
        'Portfolio Analysis',
        'Risk Assessment',
        'Market Intelligence',
        'Performance Tracking'
      ]
    },
    {
      title: 'Global Payments',
      description: 'Cross-border payment and settlement solutions.',
      icon: Globe,
      features: [
        'International Transfers',
        'Currency Exchange',
        'Payment Gateway',
        'Compliance Management'
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'High-Performance',
      description: 'Ultra-low latency systems for real-time transactions'
    },
    {
      icon: Lock,
      title: 'Bank-Grade Security',
      description: 'Advanced encryption and security protocols'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Adherence to international financial regulations'
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
              <LineChart className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                Financial Technology Solutions
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Empowering financial institutions with cutting-edge technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <feature.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-12 backdrop-blur-sm border border-red-500/20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  Transform Your Financial Services
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our fintech solutions can help you stay ahead in the digital age.
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

export default Finance;