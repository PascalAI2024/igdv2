import { 
  Code2, 
  Brain, 
  Cloud, 
  Shield, 
  LineChart, 
  Smartphone,
  Database,
  Globe,
  Cpu,
  Network
} from 'lucide-react';

export const services = [
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