import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, ExternalLink, Network, Cpu, Database, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const AiMachineLearning = () => {
  const solutions = [
    {
      title: 'Predictive Analytics',
      description: 'Leverage historical data to forecast trends and make informed decisions.',
      icon: LineChart,
      features: [
        'Customer Behavior Analysis',
        'Sales Forecasting',
        'Risk Assessment',
        'Market Trend Prediction'
      ]
    },
    {
      title: 'Natural Language Processing',
      description: 'Transform text data into actionable insights and automated processes.',
      icon: Network,
      features: [
        'Sentiment Analysis',
        'Text Classification',
        'Chatbot Development',
        'Document Processing'
      ]
    },
    {
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for automation and insights.',
      icon: Cpu,
      features: [
        'Object Detection',
        'Facial Recognition',
        'Quality Control',
        'Video Analytics'
      ]
    },
    {
      title: 'Machine Learning Operations',
      description: 'End-to-end ML pipeline development and management.',
      icon: Database,
      features: [
        'Model Development',
        'Pipeline Automation',
        'Performance Monitoring',
        'Model Deployment'
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
              <Brain className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                AI & Machine Learning Solutions
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence and machine learning solutions.
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

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gradient mb-4">Our AI Development Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A systematic approach to delivering powerful AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Data Assessment',
                  description: 'Evaluate data quality and requirements'
                },
                {
                  step: '02',
                  title: 'Model Development',
                  description: 'Design and train custom AI models'
                },
                {
                  step: '03',
                  title: 'Integration',
                  description: 'Seamless system integration'
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'Continuous improvement and monitoring'
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
                  Ready to Harness the Power of AI?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our AI solutions can transform your business operations.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  Start Your AI Journey
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

export default AiMachineLearning;