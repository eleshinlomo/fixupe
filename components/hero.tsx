"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Typewriter from "@/components/typewriter";
import programImage from '@/public/images/program.jpg';
import { Button } from "./ui/button";

const Hero = () => {
  const [customText, setCustomText] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const MYAFROSAI_URL = process.env.NEXT_PUBLIC_MYAFROSAI_HOME;

  useEffect(() => {
    setCustomText([
      "Integrated CRM",
      "Image GenAI",
      "AI powered APIs",
      "Distributed systems",
      "Secured and scalable platforms"
    ]);
  }, []);

  // Mouse position tracker for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle animation effect
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 50}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.2})`
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Animated background canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-30"
      />
      
      {/* Animated gradient orb */}
      <div 
        className="absolute -inset-64 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.4), transparent 40%)`,
          transition: 'background 0.2s ease-out',
          filter: 'blur(40px)'
        }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Typewriter Section with enhanced styling */}
        <div className="py-8 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="text-sm font-semibold text-blue-300">AI-POWERED SOLUTIONS</span>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Typewriter 
              textArray={customText} 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            />
          </div>
          
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Transforming ideas into intelligent, scalable solutions with cutting-edge AI technology
          </p>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          {/* Text Section */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="border-b border-white/20 pb-6 relative">
              <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <h1 className="text-4xl md:text-5xl font-bold font-urbanist bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                PORTFOLIO
              </h1>
              <p className="mt-4 text-xl text-gray-300">
                Next Generation <span className="text-blue-400 font-semibold">AI-Powered</span> Solutions
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Explore world-class apps with integrated AI Agents. On a mission to make software solutions accessible, intuitive, and transformative for businesses. Whether you run an enterprise or a start-up, explore a diverse range of tools offering the best solutions for business scaling.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href={`https://ai.myafros.com`}
                className="group relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300 rounded-full" />
                <div className="absolute inset-0.5 bg-black rounded-full group-hover:opacity-0 transition-opacity duration-300" />
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto relative bg-transparent border-none text-white rounded-full px-8 py-6 group-hover:scale-105 transition-transform duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>VOICE RECORDER</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </a>
              
              <a 
                href={`https://ai.myafros.com`}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300 rounded-full" />
                <div className="absolute inset-0.5 bg-black rounded-full group-hover:opacity-0 transition-opacity duration-300" />
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto relative bg-transparent border-none text-white rounded-full px-8 py-6 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>GENERATE IMAGE</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Image Section with enhanced effects */}
          <div className="relative order-1 md:order-2">
            <div 
              className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105"
              style={{
                transform: isHovered ? 
                  `perspective(1000px) rotateY(${(mousePosition.x / window.innerWidth) * 4 - 2}deg) rotateX(${(mousePosition.y / window.innerHeight) * -4 + 2}deg)` : 
                  'perspective(1000px) rotateY(0deg) rotateX(0deg)'
              }}
            >
              {/* Image with gradient overlay */}
              <Image
                src={programImage}
                alt="Programming Image"
                fill
                className="object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Shine effect on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  transform: `translateX(${isHovered ? '100%' : '-100%'})`,
                  transition: 'transform 0.7s ease, opacity 0.7s ease'
                }}
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-600/30 animate-pulse flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-purple-600/30 animate-pulse flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;