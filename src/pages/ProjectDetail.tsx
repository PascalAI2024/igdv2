import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Quote } from 'lucide-react';
import { projects } from '../data/projects';
import PageTransition from '../components/PageTransition';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(projects.find(p => p.id === id));

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
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
              to="/#projects"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 rounded-full text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-lg text-gray-300">
                  <project.icon className="w-5 h-5 mr-2 text-red-500" />
                  {project.industry}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative rounded-2xl overflow-hidden aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gradient">
                  Key Metrics
                </h2>
                <div className="space-y-4">
                  {project.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <CheckCircle className="w-6 h-6 text-red-500" />
                      <p className="text-white">{metric}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-gradient">
                  Features
                </h2>
                <div className="space-y-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10"
                    >
                      <p className="text-white">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {project.testimonial && (
          <section className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-12 backdrop-blur-sm border border-red-500/20">
                <div className="max-w-3xl mx-auto text-center">
                  <Quote className="w-12 h-12 text-red-500 mx-auto mb-6" />
                  <p className="text-2xl text-white mb-6 italic">
                    "{project.testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {project.testimonial.author}
                    </p>
                    <p className="text-gray-400">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gradient mb-6">
                Start Your Project
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to transform your business with innovative solutions?
                Let's discuss your project requirements.
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
        </section>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;