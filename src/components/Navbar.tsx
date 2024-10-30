import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

interface NavItem {
  label: string;
  href?: string;
  path?: string;
  children?: NavItem[];
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    {
      label: 'Solutions',
      path: '/solutions',
      children: [
        { label: 'Enterprise Software', path: '/solutions#enterprise' },
        { label: 'AI & Machine Learning', path: '/solutions#ai-ml' },
        { label: 'Cloud Services', path: '/solutions#cloud' },
        { label: 'Cybersecurity', path: '/solutions#security' }
      ]
    },
    {
      label: 'Services',
      href: 'services',
      children: [
        { label: 'Custom Development', href: 'services' },
        { label: 'Digital Transformation', href: 'services' },
        { label: 'Cloud Migration', href: 'services' },
        { label: 'AI Integration', href: 'services' }
      ]
    },
    { 
      label: 'Industries',
      path: '/solutions#industries',
      children: [
        { label: 'Healthcare', path: '/solutions#healthcare' },
        { label: 'Finance', path: '/solutions#finance' },
        { label: 'Retail', path: '/solutions#retail' },
        { label: 'Manufacturing', path: '/solutions#manufacturing' }
      ]
    },
    { label: 'Projects', href: 'projects' },
    { 
      label: 'Company',
      children: [
        { label: 'About', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: 'Blog', href: 'blog' },
        { label: 'Contact', href: 'contact' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (item: NavItem) => {
    if (item.path) {
      navigate(item.path);
      setIsOpen(false);
      return;
    }

    if (item.href) {
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          scrollToSection(item.href!);
        }, 100);
      } else {
        scrollToSection(item.href);
      }
    }

    setIsOpen(false);
  };

  const NavItemContent = ({ item }: { item: NavItem }) => (
    <div className="relative group">
      <button
        onClick={() => handleNavClick(item)}
        className="flex items-center text-gray-300 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        {item.label}
        {item.children && (
          <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" />
        )}
      </button>

      {item.children && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 backdrop-blur-sm border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-2">
            {item.children.map((child) => (
              <button
                key={child.label}
                onClick={() => handleNavClick(child)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-500 transition-colors"
              >
                {child.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavItemContent key={item.label} item={item} />
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-600 hover:bg-gray-700 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-gray-300 font-medium">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child)}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};