import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ExternalLink, Code2, Brain, Cloud, Shield, LineChart, Smartphone } from 'lucide-react';
import PageTransition from '../components/PageTransition';

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
    ],
    details: 'Our expert developers create scalable, maintainable software solutions using the latest technologies and best practices.',
    benefits: [
      'Increased Efficiency',
      'Reduced Operational Costs',
      'Improved Customer Experience',
      'Competitive Advantage'
    ],
    technologies: [
      'React', 'Node.js', 'Python', 'TypeScript'
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
    ],
    details: 'We implement cutting-edge AI solutions to automate processes, gain insights, and drive innovation.',
    benefits: [
      'Data-Driven Decisions',
      'Automated Workflows',
      'Enhanced Customer Insights',
      'Predictive Capabilities'
    ],
    technologies: [
      'TensorFlow', 'PyTorch', 'OpenAI', 'scikit-learn'
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
    ],
    details: 'Leverage the power of cloud computing with our expert cloud architecture and implementation services.',
    benefits: [
      'Scalability',
      'Cost Optimization',
      'Enhanced Security',
      'Global Reach'
    ],
    technologies: [
      'AWS', 'Azure', 'Google Cloud', 'Kubernetes'
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
    ],
    details: 'Our security experts ensure your systems and data are protected against evolving cyber threats.',
    benefits: [
      'Risk Mitigation',
      'Regulatory Compliance',
      'Data Protection',
      'Peace of Mind'
    ],
    technologies: [
      'SIEM', 'Penetration Testing', 'Encryption', 'Zero Trust'
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
    ],
    details: 'We help you make data-driven decisions with powerful analytics and visualization tools.',
    benefits: [
      'Better Decision Making',
      'Performance Tracking',
      'Market Intelligence',
      'Revenue Growth'
    ],
    technologies: [
      'Power BI', 'Tableau', 'Looker', 'Snowflake'
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
    ],
    details: 'Create engaging mobile experiences with our expert mobile development services.',
    benefits: [
      'Market Reach',
      'User Engagement',
      'Brand Presence',
      'Revenue Growth'
    ],
    technologies: [
      'React Native', 'Flutter', 'Swift', 'Kotlin'
    ]
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(services.find(s => s.id === id));

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Service Not Found</h2>
          <Link
            to="/"
            className="inline-flex items-center text-red-500 hover:text-red-400"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Link
              to="/#services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 rounded-full text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-red-500/20 to-purple-500/20 p-8 backdrop-blur-sm border border-red-500/20">
                  <service.icon className="w-full h-full text-red-500 animate-float" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gradient">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white">{feature}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-gradient">
                  Benefits
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10"
                    >
                      <p className="text-white">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-12 backdrop-blur-sm border border-red-500/20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our {service.title.toLowerCase()} can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                  >
                    Get Started
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-8 py-4 border border-red-500/20 hover:bg-red-500/10 text-white rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ServiceDetail;