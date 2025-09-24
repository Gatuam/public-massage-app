"use client";
import { Orbit, Zap, Star, Sparkles, ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

const CreativeAnimatedCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles for floating animation
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-89 h-96 perspective-1000">
      {/* Main card container */}
      <div
        className={`relative w-full h-full bg-gradient-to-br from-background via-muted/50 to-primary/5 rounded-3xl shadow-2xl overflow-hidden border border-primary/20 backdrop-blur-sm transition-all duration-700 ${
          isHovered ? "transform rotate-y-12 scale-105" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-30">
          {/* Rotating gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/40 to-chart-1/40 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-chart-2/30 to-chart-3/30 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-chart-4/40 to-primary/30 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary/60 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}

        {/* Concentric animated rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[280, 220, 160, 100, 60].map((size, index) => (
            <div
              key={index}
              className={`absolute rounded-full border opacity-40 ${
                isHovered ? "border-primary" : "border-muted-foreground"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                animation: `ripple ${3 + index * 0.5}s infinite ease-out`,
                animationDelay: `${index * 0.3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Central interactive content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10">
            {/* Main icon container */}
            <div
              className={`relative w-20 h-20 bg-gradient-to-br from-primary to-chart-1 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 ${
                isHovered ? "scale-110 rotate-12" : ""
              }`}
            >
              <Orbit
                className="w-10 h-10 text-primary-foreground animate-spin"
                style={{ animationDuration: "3s" }}
              />

              {/* Icon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-1 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            </div>

            {/* Satellite icons */}
            <div
              className={`absolute -top-8 -left-8 transition-all duration-700 ${
                isHovered ? "transform -translate-y-2 rotate-45" : ""
              }`}
            >
              <div className="w-8 h-8 bg-chart-2 rounded-lg shadow-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-chart-2-foreground" />
              </div>
            </div>

            <div
              className={`absolute -top-8 -right-8 transition-all duration-700 ${
                isHovered ? "transform -translate-y-2 -rotate-45" : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-8 h-8 bg-chart-3 rounded-lg shadow-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-chart-3-foreground animate-pulse" />
              </div>
            </div>

            <div
              className={`absolute -bottom-8 -left-8 transition-all duration-700 ${
                isHovered ? "transform translate-y-2 -rotate-45" : ""
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-8 h-8 bg-chart-4 rounded-lg shadow-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-chart-4-foreground" />
              </div>
            </div>

            <div
              className={`absolute -bottom-8 -right-8 transition-all duration-700 ${
                isHovered ? "transform translate-y-2 rotate-45" : ""
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-8 h-8 bg-primary rounded-lg shadow-lg flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive glow effects */}
        <div
          className={`absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-full blur-2xl transition-all duration-500 ${
            isHovered ? "scale-150 bg-primary/30" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-4 left-4 w-20 h-20 bg-chart-4/20 rounded-full blur-2xl transition-all duration-500 ${
            isHovered ? "scale-150 bg-chart-4/30" : ""
          }`}
        ></div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-primary/5 backdrop-blur-sm"></div>

        {/* Border animation */}
        <div
          className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
            isHovered ? "shadow-[0_0_50px_rgba(var(--primary),0.3)]" : ""
          }`}
        ></div>

        {/* Scanning line effect */}
        <div
          className={`absolute inset-0 overflow-hidden rounded-3xl ${
            isHovered ? "" : "opacity-0"
          }`}
        >
          <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12 animate-sweep"></div>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: scale(1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        @keyframes sweep {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(500%) skewX(-12deg);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-12 {
          transform: rotateY(12deg) rotateX(5deg);
        }
      `}</style>
    </div>
  );
};

export default CreativeAnimatedCard;
