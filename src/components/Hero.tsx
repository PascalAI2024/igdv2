import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeWriter } from './TypeWriter';
import { ArrowRight, Code2, Zap } from 'lucide-react';

export const Hero = ({ scrollY }: { scrollY: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Circuit board animation
    const lines: any[] = [];
    const createLine = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const angle = Math.round(Math.random() * 3) * (Math.PI / 2);
      const length = 50 + Math.random() * 100;
      
      return {
        x: startX,
        y: startY,
        angle,
        length,
        progress: 0,
        width: 0.5 + Math.random(),
        speed: 0.005 + Math.random() * 0.01,
        alpha: 0.1 + Math.random() * 0.2
      };
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new lines
      if (lines.length < 50 && Math.random() < 0.1) {
        lines.push(createLine());
      }

      // Update and draw lines
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        line.progress += line.speed;

        if (line.progress >= 1) {
          lines.splice(i, 1);
          continue;
        }

        const endX = line.x + Math.cos(line.angle) * line.length * line.progress;
        const endY = line.y + Math.sin(line.angle) * line.length * line.progress;

        ctx.strokeStyle = `rgba(255, 0, 0, ${line.alpha})`;
        ctx.lineWidth = line.width;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Draw node at the end
        ctx.fillStyle = `rgba(255, 0, 0, ${line.alpha * 2})`;
        ctx.beginPath();
        ctx.arc(endX, endY, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50"
      />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <Code2 className="w-6 h-6 text-red-500" />
            <span className="text-gray-400 text-sm font-mono">sudo transform-business --optimize</span>
            <Zap className="w-6 h-6 text-red-500" />
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Building Digital Excellence</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
              Where Innovation Meets Implementation
            </h2>
          </motion.div>

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-sm mb-8">
            <span className="animate-pulse mr-2 text-red-500">●</span>
            <TypeWriter
              words={[
                'Enterprise Software Development',
                'AI & Machine Learning Solutions',
                'Cloud Infrastructure & DevOps',
                'Digital Transformation Strategy'
              ]}
              delay={80}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white font-medium overflow-hidden shadow-lg hover:shadow-red-500/25 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-8 py-4 border border-red-500/20 rounded-lg text-white font-medium overflow-hidden"
            >
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-sm text-gray-400 mb-2">Discover More</span>
            <div className="w-6 h-10 border-2 border-red-500/20 rounded-full p-1">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce mx-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};