'use client'
import { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function MathCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Handle null case

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Also handle null context

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const draw = () => {
      // Clear canvas with white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set text properties
      ctx.fillStyle = '#000000';
      ctx.font = 'min(8vw, 120px) "Times New Roman", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Draw the mathematical expression
      const text = '√(6/5)';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    };

    // Initial setup
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <Head>
        <title>√(6/5)</title>
        <meta name="description" content="Minimal mathematical expression canvas" />
      </Head>
      
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100vw',
          height: '100vh',
          cursor: 'default'
        }}
      />
    </>
  );
}