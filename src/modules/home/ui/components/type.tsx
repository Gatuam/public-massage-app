"use client";

import { useState, useEffect } from "react";

export  function TypewriterText() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["Connection!", "Welcome All", "Orbit", "100% Secure"];
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseTime = 2000;

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < currentWord.length) {
          setText((prev) => prev + currentWord[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else if (isDeleting && currentIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else if (!isDeleting && currentIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && currentIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, wordIndex, words]);

  return (
    <div className="">
      <h1 className="text-4xl md:text-7xl font-semibold text-primary">
        {text}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}


export function TypewriterTextAnimate() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    "Analyzing your data with advanced AI algorithms...",
    "Processing millions of connections in real-time...", 
    "Securing your information with quantum encryption...",
    "Optimizing performance with machine learning..."
  ];
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseTime = 3000;

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < currentWord.length) {
          setText((prev) => prev + currentWord[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else if (isDeleting && currentIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else if (!isDeleting && currentIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && currentIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, wordIndex, words]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-4">
      {/* Animated AI Icon */}
      <div className="relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="text-primary"
          fill="currentColor"
        >
          {/* Brain-like AI icon with animated elements */}
          <path
            d="M24 4C15.163 4 8 11.163 8 20c0 4.418 1.791 8.418 4.686 11.314L24 42.628l11.314-11.314C38.209 28.418 40 24.418 40 20c0-8.837-7.163-16-16-16z"
            className="opacity-20"
          />
          <circle cx="18" cy="18" r="2" className="animate-pulse">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="18" r="2" className="animate-pulse">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="24" cy="24" r="2" className="animate-pulse">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="15" cy="26" r="1.5" className="animate-pulse">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="33" cy="26" r="1.5" className="animate-pulse">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Connecting lines with animation */}
          <line x1="18" y1="18" x2="24" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="30" y1="18" x2="24" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="24" y1="24" x2="15" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.2s" repeatCount="indefinite" />
          </line>
          <line x1="24" y1="24" x2="33" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.2s" repeatCount="indefinite" />
          </line>
        </svg>
        
        {/* Rotating ring around icon */}
        <div className="absolute inset-0 border-2 border-primary border-t-transparent rounded-full animate-spin opacity-30"></div>
      </div>

      {/* Typewriter text */}
      <div className="flex-1">
        <p className="text-md md:text-xl font-medium text-shadow-accent-foreground leading-relaxed max-w-xl text-center">
          {text}
          <span className="animate-pulse text-primary">|</span>
        </p>
      </div>
    </div>
  );
}


export function TypewriterTextGemini() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    "Analyzing your data with advanced AI algorithms...",
    "Processing millions of connections in real-time...", 
    "Securing your information with quantum encryption...",
    "Optimizing performance with machine learning..."
  ];
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseTime = 3000;

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < currentWord.length) {
          setText((prev) => prev + currentWord[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else if (isDeleting && currentIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else if (!isDeleting && currentIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && currentIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, wordIndex, words]);

  return (
    <div className="flex items-center gap-4">
      {/* Gemini-style Animated Shape */}
      <div className="relative w-12 h-12">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="text-blue-500"
          fill="none"
        >
          {/* Main morphing shape */}
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#gradient1)"
            opacity="0.8"
            d="M12 24 C12 12, 24 8, 36 24 C36 36, 24 40, 12 24 Z"
          >
            <animate
              attributeName="d"
              values="M12 24 C12 12, 24 8, 36 24 C36 36, 24 40, 12 24 Z;
                      M8 20 C16 8, 32 12, 40 28 C32 40, 16 36, 8 20 Z;
                      M16 16 C8 24, 20 32, 32 32 C40 24, 28 8, 16 16 Z;
                      M12 24 C12 12, 24 8, 36 24 C36 36, 24 40, 12 24 Z"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          {/* Secondary flowing shape */}
          <path
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
            d="M18 18 Q24 12 30 18 Q36 24 30 30 Q24 36 18 30 Q12 24 18 18"
          >
            <animate
              attributeName="d"
              values="M18 18 Q24 12 30 18 Q36 24 30 30 Q24 36 18 30 Q12 24 18 18;
                      M20 14 Q28 8 34 16 Q40 26 32 32 Q22 38 16 28 Q10 22 20 14;
                      M16 20 Q26 10 36 20 Q42 28 34 34 Q24 40 14 30 Q8 24 16 20;
                      M18 18 Q24 12 30 18 Q36 24 30 30 Q24 36 18 30 Q12 24 18 18"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* Inner particles */}
          <circle cx="24" cy="20" r="1" fill="currentColor" opacity="0.4">
            <animate attributeName="cy" values="20;28;20" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="28" cy="24" r="1" fill="currentColor" opacity="0.3">
            <animate attributeName="cx" values="28;20;28" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
          </circle>

          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3">
                <animate attributeName="stopColor" values="#3B82F6;#8B5CF6;#06B6D4;#3B82F6" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1">
                <animate attributeName="stopColor" values="#8B5CF6;#06B6D4;#3B82F6;#8B5CF6" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4">
                <animate attributeName="stopColor" values="#06B6D4;#8B5CF6;#3B82F6;#06B6D4" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8B5CF6">
                <animate attributeName="stopColor" values="#8B5CF6;#3B82F6;#06B6D4;#8B5CF6" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typewriter text */}
      <div className="flex-1">
        <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
          {text}
          <span className="animate-pulse text-primary">|</span>
        </p>
      </div>
    </div>
  );
}
