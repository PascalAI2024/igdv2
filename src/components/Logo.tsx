import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        {/* Main Logo Container */}
        <div className="absolute inset-0 bg-black rounded-lg overflow-hidden border border-red-500/20">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-black to-red-500/20 animate-gradient" />
          
          {/* Logo SVG */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full transform hover:scale-110 transition-transform duration-300"
          >
            {/* Background Shape */}
            <rect width="40" height="40" rx="8" fill="black" />
            
            {/* Animated Circuit Lines */}
            <path
              d="M8 8 L32 8 M8 20 L32 20 M8 32 L32 32"
              stroke="rgba(255,0,0,0.2)"
              strokeWidth="0.5"
              strokeDasharray="1 3"
              className="animate-pulse"
            />
            
            {/* Main "I" Letter */}
            <path
              d="M20 8 L20 32"
              stroke="#FF0000"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-draw"
            />
            
            {/* Digital Wave Pattern */}
            <path
              d="M12 20 Q16 16 20 20 Q24 24 28 20"
              stroke="#FF0000"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-draw"
              style={{ animationDelay: '0.3s' }}
            />
            
            {/* Corner Accents */}
            <path
              d="M10 10 L14 10 L14 14"
              stroke="#FF0000"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="animate-draw"
              style={{ animationDelay: '0.6s' }}
            />
            <path
              d="M30 10 L26 10 L26 14"
              stroke="#FF0000"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="animate-draw"
              style={{ animationDelay: '0.9s' }}
            />
            <path
              d="M10 30 L14 30 L14 26"
              stroke="#FF0000"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="animate-draw"
              style={{ animationDelay: '1.2s' }}
            />
            <path
              d="M30 30 L26 30 L26 26"
              stroke="#FF0000"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="animate-draw"
              style={{ animationDelay: '1.5s' }}
            />
            
            {/* Glowing Effect */}
            <circle
              cx="20"
              cy="20"
              r="12"
              stroke="#FF0000"
              strokeWidth="0.5"
              className="animate-pulse opacity-50"
            />
          </svg>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Company Name */}
      <span className="text-2xl font-bold">
        <span className="text-red-500">Ingenious</span>
        <span className="text-white">Digital</span>
      </span>
    </div>
  );
};