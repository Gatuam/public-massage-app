'use client'
import { Orbit, Heart, Star, Zap } from 'lucide-react';
import React, { useState } from 'react';

const SimpleAnimatedCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-87 h-96 bg-gradient-to-br from-background to-muted rounded-3xl shadow-2xl overflow-hidden border border-primary/10 cursor-pointer transition-all duration-300 hover:shadow-3xl hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background waves */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-chart-2/5 to-chart-4/5 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 left-0 w-40 h-40 bg-chart-3/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>

      {/* Simple concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[320, 240, 160, 80].map((size, index) => (
          <div
            key={index}
            className={`absolute rounded-full border-2 transition-all duration-1000 ${
              isHovered 
                ? 'border-primary/60 scale-102' 
                : 'border-muted-foreground/30'
            }`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${index * 0.2}s`,
              transform: isHovered ? `scale(1.1) rotate(${index * 45}deg)` : 'scale(1) rotate(0deg)',
              transition: 'all 0.8s ease-in-out'
            }}
          ></div>
        ))}
      </div>

      {/* Center content with rotating icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Main center icon */}
          <div className={`w-16 h-16 bg-gradient-to-br from-primary to-chart-1 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-500 ${
            isHovered ? 'scale-105 rotate-12' : 'scale-100 rotate-0'
          }`}>
            <Orbit className={`w-8 h-8 text-primary-foreground transition-all duration-700 ${
              isHovered ? 'animate-spin' : ' animate-spin'
            }`} />
          </div>

          {/* Orbiting icons */}
          <div className={`absolute inset-0 transition-all duration-1000 ${
            isHovered ? 'animate-spin' : ' animate-spin'
          }`} style={{ animationDuration: '8s' }}>
            {/* Top icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-chart-2 rounded-lg shadow-md flex items-center justify-center">
                <Heart className="w-4 h-4 text-chart-2-foreground" />
              </div>
            </div>

            {/* Right icon */}
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
              <div className="w-8 h-8 bg-chart-3 rounded-lg shadow-md flex items-center justify-center">
                <Star className="w-4 h-4 text-chart-3-foreground" />
              </div>
            </div>

            {/* Bottom icon */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-chart-4 rounded-lg shadow-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-chart-4-foreground" />
              </div>
            </div>

            {/* Left icon */}
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
              <div className="w-8 h-8 bg-primary rounded-lg shadow-md flex items-center justify-center">
                <Orbit className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple corner glows */}
      <div className={`absolute top-6 right-6 w-12 h-12 rounded-full blur-xl transition-all duration-500 ${
        isHovered ? 'bg-primary/30 scale-105' : 'bg-primary/15 scale-100'
      }`}></div>
      
      <div className={`absolute bottom-6 left-6 w-16 h-16 rounded-full blur-xl transition-all duration-500 ${
        isHovered ? 'bg-chart-4/30 scale-105' : 'bg-chart-4/15 scale-100'
      }`}></div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent pointer-events-none"></div>

      {/* Hover border glow */}
      <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
        isHovered 
          ? 'shadow-[0_0_30px_rgba(var(--primary),0.3)] border-primary/30' 
          : 'shadow-none'
      }`}></div>
    </div>
  );
};

export default SimpleAnimatedCard;