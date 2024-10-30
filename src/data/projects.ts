import { BarChart3, ShoppingCart, Stethoscope, Utensils, Plane, Coffee, Activity, Building2 } from 'lucide-react';

export const projects = [
  {
    id: 'enterprise-analytics',
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
    icon: BarChart3,
    industry: 'Finance',
    testimonial: {
      quote: "The analytics dashboard transformed our decision-making process.",
      author: "John Smith",
      role: "CTO"
    }
  },
  {
    id: 'healthcare-platform',
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
    icon: Stethoscope,
    industry: 'Healthcare',
    testimonial: {
      quote: "This system revolutionized our patient care workflow.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director"
    }
  }
];