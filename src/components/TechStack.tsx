import React from 'react';

const technologies = [
  {
    name: 'React',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Node.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    category: 'Backend'
  },
  {
    name: 'Python',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    category: 'AI/ML'
  },
  {
    name: 'TensorFlow',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
    category: 'AI/ML'
  },
  {
    name: 'AWS',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
    category: 'Cloud'
  },
  {
    name: 'Docker',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    category: 'DevOps'
  },
  {
    name: 'Kubernetes',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg',
    category: 'DevOps'
  },
  {
    name: 'MongoDB',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    category: 'Database'
  },
  {
    name: 'PostgreSQL',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    category: 'Database'
  },
  {
    name: 'TypeScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    category: 'Language'
  },
  {
    name: 'Go',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
    category: 'Language'
  },
  {
    name: 'Angular',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg',
    category: 'Frontend'
  }
];

const TechStack = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Technology Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver powerful, scalable solutions
          </p>
        </div>

        {/* Infinite Scroll Animation */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
          
          <div className="flex space-x-12 animate-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-none group relative"
              >
                <div className="w-24 h-24 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-red-500/20 group-hover:bg-white/10">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Categories */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Frontend', 'Backend', 'AI/ML', 'Cloud', 'DevOps', 'Database'].map((category) => (
            <div
              key={category}
              className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:border-red-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category} Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies
                  .filter(tech => tech.category === category)
                  .map(tech => (
                    <div
                      key={tech.name}
                      className="flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-4 h-4"
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;