import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);
  const [text, setText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const messages = [
      'Initializing Neural Network',
      'Synthesizing Digital Pathways',
      'Calibrating Innovation Matrix',
      'Engaging Quantum Processors',
      'Activating Digital Excellence'
    ];

    let currentMessageIndex = 0;
    let currentCharIndex = 0;

    const typeMessage = () => {
      if (currentMessageIndex >= messages.length) {
        setTimeout(() => {
          setStage(5);
          setTimeout(onComplete, 1000);
        }, 500);
        return;
      }

      const currentMessage = messages[currentMessageIndex];
      if (currentCharIndex < currentMessage.length) {
        setText(currentMessage.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        setTimeout(typeMessage, 30 + Math.random() * 40);
      } else {
        setTimeout(() => {
          currentMessageIndex++;
          currentCharIndex = 0;
          setStage(prev => prev + 1);
          typeMessage();
        }, 800);
      }
    };

    typeMessage();
  }, [onComplete]);

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

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1 + 0.5;
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.life = 0;
        this.maxLife = 100 + Math.random() * 50;
        this.color = `rgba(255, ${Math.random() * 50}, 0, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.life++;
        this.x += this.speedX;
        this.y += this.speedY;
        return this.life < this.maxLife;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = Math.max(0, 1 - this.life / this.maxLife);
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, `${alpha})`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles
      if (Math.random() < 0.2) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        if (!particle.update()) {
          particles.splice(i, 1);
          continue;
        }
        particle.draw(ctx);

        // Draw connections
        for (let j = i - 1; j >= 0; j--) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 0, 0, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      // Draw energy waves
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;

      for (let i = 0; i < 3; i++) {
        const radius = ((time * 50 + i * 100) % maxRadius);
        const alpha = 0.2 * (1 - radius / maxRadius);
        
        ctx.strokeStyle = `rgba(255, 0, 0, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="relative w-48 h-48 mx-auto mb-12">
            <div className="absolute inset-0">
              <div className="absolute inset-0 border-4 border-red-500/20 rounded-full animate-[spin_8s_linear_infinite]">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-transparent blur-xl" />
              </div>
              <div className="absolute inset-4 border-4 border-red-500/30 rounded-full animate-[spin_6s_linear_infinite_reverse]">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-transparent blur-lg" />
              </div>
              <div className="absolute inset-8 border-4 border-red-500/40 rounded-full animate-[spin_4s_linear_infinite]">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/40 to-transparent blur-md" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg transform rotate-45 animate-pulse">
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg" />
                  <div className="absolute inset-1 border border-white/20 rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="h-6"
            >
              <span className="text-red-500 font-mono">
                {text}
                <span className="animate-blink">_</span>
              </span>
            </motion.div>

            <div className="w-64 mx-auto">
              <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(stage / 5) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingSequence;