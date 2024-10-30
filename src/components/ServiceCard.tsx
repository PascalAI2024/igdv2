import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceProps {
  service: {
    title: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    details: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, isSelected, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-gray-800 rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <service.icon className="w-8 h-8 text-blue-400 mr-3" />
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>
      
      <p className="text-gray-300 mb-4">{service.description}</p>
      
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4"
        >
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-400 text-sm">{service.details}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceCard;