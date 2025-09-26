"use client";
import { Orbit } from "lucide-react";
import React, { useState } from "react";

const ConcentricCirclesCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-87 h-96 bg-gradient-to-br from-background to-muted rounded-3xl shadow-2xl overflow-hidden border border-primary/10 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-4/10 animate-pulse"></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)] animate-pulse"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      {/* Floating light orbs */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/60 rounded-full blur-sm animate-bounce opacity-70"
          style={{ animationDuration: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-chart-3/60 rounded-full blur-sm animate-bounce opacity-70"
          style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-chart-2/60 rounded-full blur-sm animate-bounce opacity-70"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        ></div>
      </div>

      {/* Enhanced Concentric circles with special effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outermost circle with rotating dash */}
        <div
          className={`absolute w-80 h-80 rounded-full transition-all duration-700 ${
            isHovered
              ? "border-2 border-dashed border-primary/60 animate-spin opacity-70"
              : "border border-muted-foreground opacity-40 animate-pulse"
          }`}
          style={{ animationDuration: isHovered ? "8s" : "2s" }}
        ></div>

        {/* Second circle with glow effect */}
        <div
          className={`absolute w-64 h-64 rounded-full transition-all duration-700 ${
            isHovered
              ? "border-2 border-chart-2/60 shadow-[0_0_20px_rgba(var(--chart-2),0.3)]"
              : "border border-gray-500 opacity-50"
          } animate-pulse`}
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Third circle with pulsing glow */}
        <div
          className={`absolute w-48 h-48 rounded-full transition-all duration-700 ${
            isHovered
              ? "border-2 border-chart-3/60 shadow-[0_0_15px_rgba(var(--chart-3),0.4)] scale-105"
              : "border border-gray-400 opacity-60"
          } animate-pulse`}
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Fourth circle with special animation */}
        <div
          className={`absolute w-32 h-32 rounded-full transition-all duration-700 ${
            isHovered
              ? "border-2 border-chart-4/60 shadow-[0_0_10px_rgba(var(--chart-4),0.5)] animate-spin scale-110"
              : "border border-gray-300 opacity-70"
          } animate-pulse`}
          style={{
            animationDelay: isHovered ? "0s" : "1.5s",
            animationDuration: isHovered ? "4s" : "2s",
          }}
        ></div>

        {/* Innermost circle with intense glow */}
        <div
          className={`absolute w-20 h-20 rounded-full transition-all duration-700 ${
            isHovered
              ? "border-2 border-primary/80 shadow-[0_0_25px_rgba(var(--primary),0.6)] scale-125"
              : "border border-gray-200 opacity-80"
          } animate-pulse`}
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Enhanced Central content area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center space-x-4">
          {/* Enhanced main icon with special effects */}
          <div
            className={`w-12 h-12 bg-gradient-to-br from-primary to-chart-1 rounded-xl border flex items-center justify-center shadow-lg transition-all duration-500 cursor-pointer group ${
              isHovered
                ? "scale-125 shadow-[0_0_20px_rgba(var(--primary),0.5)] rotate-12"
                : "hover:scale-110 transform"
            }`}
          >
            <Orbit
              className={`text-primary-foreground transition-all duration-700 ${
                isHovered ? "animate-spin w-8 h-8" : "animate-spin w-6 h-6"
              }`}
              style={{ animationDuration: isHovered ? "1s" : "3s" }}
            />

            {/* Icon pulse effect */}
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-chart-1 transition-all duration-500 ${
                isHovered ? "opacity-50 scale-150 blur-md" : "opacity-0"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay with animation */}
      <div
        className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
          isHovered
            ? "bg-gradient-to-t from-primary/5 via-transparent to-chart-2/5"
            : "bg-gradient-to-t from-gray-900/20 to-transparent"
        }`}
      ></div>

      {/* Enhanced corner glow effects */}
      <div
        className={`absolute top-4 right-4 rounded-full blur-xl transition-all duration-500 ${
          isHovered
            ? "w-24 h-24 bg-primary/25 animate-pulse"
            : "w-16 h-16 bg-primary/10"
        }`}
      ></div>

      <div
        className={`absolute bottom-4 left-4 rounded-full blur-xl transition-all duration-500 ${
          isHovered
            ? "w-28 h-28 bg-chart-4/25 animate-pulse"
            : "w-20 h-20 bg-chart-4/10"
        }`}
      ></div>

      {/* Special hover effects */}
      {isHovered && (
        <>
          {/* Scanning line effect */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12 animate-sweep"></div>
          </div>

          {/* Border glow animation */}
          <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)] animate-pulse"></div>
        </>
      )}

      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 rounded-3xl shadow-inner shadow-black/5 pointer-events-none"></div>

      <style jsx>{`
        @keyframes sweep {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(500%) skewX(-12deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ConcentricCirclesCard;
