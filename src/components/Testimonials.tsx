import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    quote: "Ingenious Digital transformed our business with their innovative solutions. Their AI implementation increased our efficiency by 200%.",
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO, StartupX',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    quote: "The team's expertise in custom software development helped us launch our product months ahead of schedule.",
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Innovation, Enterprise Co',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    quote: "Their cybersecurity solutions gave us peace of mind. Professional, thorough, and always ahead of threats.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
          What Our Clients Say
        </h2>
        
        <div className="relative">
          <div className="flex justify-center items-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={`w-full max-w-2xl mx-auto transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{currentTestimonial.name}</h3>
                    <p className="text-gray-400">{currentTestimonial.role}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <Quote className="text-red-500 w-8 h-8 mb-2" />
                  <p className="text-lg text-gray-200 italic">{currentTestimonial.quote}</p>
                </div>

                <div className="flex">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-red-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}