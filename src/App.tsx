import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import FloatingContactIcons from './components/FloatingContactIcons';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookie from './pages/Cookie';
import About from './pages/About';
import Careers from './pages/Careers';
import Solutions from './pages/Solutions';
import ServiceDetail from './pages/ServiceDetail';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSequence from './components/LoadingSequence';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MainContent = () => (
    <>
      <main className="relative z-10">
        <Hero scrollY={scrollY} />
        <Services />
        <Projects />
        <TechStack />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
    </>
  );

  return (
    <Router>
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingSequence key="loading" onComplete={() => setIsLoading(false)} />
          ) : (
            <div className="relative bg-black text-white">
              <ParticleBackground />
              <ScrollProgress />
              <Navbar />
              <FloatingContactIcons />
              
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500" />
                </div>
              }>
                <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/services/:id" element={<ServiceDetail />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookie" element={<Cookie />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </ErrorBoundary>
    </Router>
  );
}

export default App;