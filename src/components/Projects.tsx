import React, { useState } from 'react';
import { ExternalLink, ChevronRight, BarChart3, LineChart, PieChart, Activity, Globe, ShieldCheck, ShoppingCart, Book, Briefcase, Building2, Truck, Users, Coffee, Stethoscope, Utensils, Plane } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Analytics Dashboard',
    client: 'Global Finance Corp',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80',
    description: 'Real-time financial analytics dashboard with multi-source data integration and predictive insights.',
    technologies: ['React', 'D3.js', 'WebSocket', 'AWS'],
    metrics: [
      'Real-time data from 12+ sources',
      'Custom visualization engine',
      '99.99% uptime',
      '500K+ daily transactions'
    ],
    features: [
      'Real-time market data integration',
      'Custom chart components',
      'Predictive analytics',
      'Role-based access control'
    ],
    link: '#',
    icon: BarChart3,
    industry: 'Finance'
  },
  {
    title: 'Smart Retail Management',
    client: 'Local Retail Chain',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
    description: 'Integrated retail management system with inventory tracking and customer analytics.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    metrics: [
      '200% increase in online sales',
      '15,000+ monthly orders',
      '99.9% uptime',
      'Sub-second page loads'
    ],
    features: [
      'Real-time inventory sync',
      'Multi-store management',
      'Customer loyalty program',
      'Mobile POS integration'
    ],
    link: '#',
    icon: ShoppingCart,
    industry: 'Retail'
  },
  {
    title: 'Healthcare Management Platform',
    client: 'Regional Medical Center',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    description: 'Comprehensive healthcare management system with patient records and scheduling.',
    technologies: ['React', 'Node.js', 'MongoDB', 'HIPAA Compliant'],
    metrics: [
      '50% reduced wait times',
      '10,000+ patient records',
      'HIPAA compliant',
      'Improved patient care'
    ],
    features: [
      'Electronic Health Records',
      'Appointment Scheduling',
      'Billing Integration',
      'Patient Portal'
    ],
    link: '#',
    icon: Stethoscope,
    industry: 'Healthcare'
  },
  {
    title: 'Restaurant Management System',
    client: 'Restaurant Chain',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80',
    description: 'All-in-one restaurant management solution with ordering and inventory.',
    technologies: ['Vue.js', 'Express', 'MySQL', 'Socket.io'],
    metrics: [
      '30% increase in efficiency',
      '5,000+ daily orders',
      'Real-time order tracking',
      'Inventory optimization'
    ],
    features: [
      'Online Ordering',
      'Kitchen Display System',
      'Inventory Management',
      'Analytics Dashboard'
    ],
    link: '#',
    icon: Utensils,
    industry: 'Restaurant'
  },
  {
    title: 'Travel Booking Platform',
    client: 'Travel Agency',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80',
    description: 'Modern travel booking system with real-time availability and pricing.',
    technologies: ['React', 'GraphQL', 'PostgreSQL', 'Redis'],
    metrics: [
      '40% booking increase',
      '1M+ monthly searches',
      'Real-time pricing',
      'Multi-provider integration'
    ],
    features: [
      'Flight Booking',
      'Hotel Reservations',
      'Package Deals',
      'User Reviews'
    ],
    link: '#',
    icon: Plane,
    industry: 'Travel'
  },
  {
    title: 'Coffee Shop Chain Management',
    client: 'Local Coffee Chain',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80',
    description: 'Custom management system for multi-location coffee shop operations.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Square'],
    metrics: [
      '25% revenue increase',
      '50+ locations managed',
      'Streamlined operations',
      'Enhanced customer loyalty'
    ],
    features: [
      'Order Management',
      'Inventory Tracking',
      'Staff Scheduling',
      'Loyalty Program'
    ],
    link: '#',
    icon: Coffee,
    industry: 'Food Service'
  },
  {
    title: 'Smart Manufacturing System',
    client: 'Manufacturing Plant',
    image: 'https://images.unsplash.com/photo-1565465295423-68c959ca3c30?auto=format&fit=crop&q=80',
    description: 'IoT-based manufacturing monitoring and control system.',
    technologies: ['Python', 'Node.js', 'InfluxDB', 'Docker'],
    metrics: [
      '30% productivity increase',
      '50% defect reduction',
      'Real-time monitoring',
      'Predictive maintenance'
    ],
    features: [
      'Production Monitoring',
      'Quality Control',
      'Equipment Maintenance',
      'Inventory Tracking'
    ],
    link: '#',
    icon: Activity,
    industry: 'Manufacturing'
  },
  {
    title: 'Property Management Suite',
    client: 'Real Estate Group',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    description: 'Comprehensive property management solution for residential and commercial properties.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    metrics: [
      '80% reduction in paperwork',
      '150+ properties managed',
      '30% faster maintenance',
      'Improved tenant satisfaction'
    ],
    features: [
      'Tenant Portal',
      'Maintenance Tracking',
      'Automated Billing',
      'Document Management'
    ],
    link: '#',
    icon: Building2,
    industry: 'Real Estate'
  }
];

const industries = [
  'All',
  'Finance',
  'Healthcare',
  'Retail',
  'Restaurant',
  'Travel',
  'Food Service',
  'Manufacturing',
  'Real Estate'
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredProjects = selectedIndustry === 'All' 
    ? projects 
    : projects.filter(project => project.industry === selectedIndustry);

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming businesses across industries with innovative digital solutions
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedIndustry === industry
                  ? 'bg-red-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Navigation */}
          <div className="space-y-4">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`group cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                    activeProject === index
                      ? 'bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20'
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Icon className={`w-6 h-6 ${
                        activeProject === index ? 'text-red-500' : 'text-gray-500'
                      }`} />
                      <div>
                        <h3 className={`font-semibold ${
                          activeProject === index ? 'text-white' : 'text-gray-300'
                        }`}>
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500">{project.client}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transform transition-transform ${
                      activeProject === index ? 'translate-x-1 text-red-500' : 'text-gray-500'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Details */}
          <div className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm">
              <img
                src={filteredProjects[activeProject].image}
                alt={filteredProjects[activeProject].title}
                className="object-cover w-full aspect-video transform transition-transform duration-700 group-hover:scale-110 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-sm">
                      {filteredProjects[activeProject].industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white">
                    {filteredProjects[activeProject].title}
                  </h3>
                  
                  <p className="text-gray-300 max-w-lg text-shadow-lg">
                    {filteredProjects[activeProject].description}
                  </p>

                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {filteredProjects[activeProject].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span className="text-gray-300 text-sm text-shadow-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[activeProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`transform transition-all duration-500 ${
                    isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Metrics</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {filteredProjects[activeProject].metrics.map((metric, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm text-shadow-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href={filteredProjects[activeProject].link}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;