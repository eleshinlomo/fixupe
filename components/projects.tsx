"use client";
import { useState, useRef, useEffect } from 'react';
import { MYAFROSAI_URL } from "./urls";
import NewsletterForm from './newsletter/newsletterform';
import NewsletterPage from './newsletter/page';
import NewsletterButton from './newsletter/newsletterbtn';

export default function Projects() {
  const [activeHover, setActiveHover] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse position tracker for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Project data
  const projects = [
    {
      id: 1,
      title: "ELTEEMA STORE",
      description: "Ecommerce Marketplace",
      url: "https://elteema.com",
      icon: (
        <svg className="w-10 h-10 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2">
              <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
              <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
              <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
              <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
            </g>
          </g>
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-600"
    },
      {
      id: 4,
      title: "RENTALORA",
      description: "Real-Estate Marketplace",
      url: "https://rentalora.com",
      icon: (
        <svg className="w-10 h-10 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2" transform="translate(19.429 20.571)">
              <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
              <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
              <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
            </g>
          </g>
        </svg>
      ),
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 3,
      title: "MYAFROS AI",
      description: "AI/Machine Learning Labs",
      url: 'https://ai.myafros.com',
      icon: (
        <svg className="w-10 h-10 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2">
              <path className="stroke-current text-blue-300" d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286" />
              <path className="stroke-current text-white" strokeLinecap="square" d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286" />
              <path className="stroke-current text-blue-300" d="M36.571 32H40" />
              <path className="stroke-current text-white" d="M24 32h3.429" strokeLinecap="square" />
            </g>
          </g>
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600"
    },
       {
      id: 2,
      title: "PETROLAGE STAFFING",
      description: "Staffing Marketplace",
      url: "https://staffing.petrolage.tech",
      icon: (
        <svg className="w-10 h-10 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2">
              <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
              <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
              <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
              <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
            </g>
          </g>
        </svg>
      ),
      gradient: "from-green-500 to-teal-600"
    },
  
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Interactive gradient orb */}
      <div 
        className="absolute opacity-30 pointer-events-none"
        style={{
          width: '40rem',
          height: '40rem',
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)`,
          transition: 'left 0.5s ease-out, top 0.5s ease-out',
          filter: 'blur(40px)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header with enhanced styling */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <span className="text-sm font-semibold text-blue-300">FEATURED WORK</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
              PORTFOLIO
            </h2>
            
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Discover groundbreaking projects that tackle real-world challenges using advanced technology.
            </p>
            
            {/* Animated decorative element */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Projects grid */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="relative group"
                onMouseEnter={() => setActiveHover(project.id)}
                onMouseLeave={() => setActiveHover(null)}
              >
                {/* Hover highlight effect */}
                <div 
                  className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-300 ${
                    activeHover === project.id ? 'opacity-20' : 'opacity-0'
                  }`}
                />
                
                <div className="relative flex flex-col items-center p-8 bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-700 group-hover:border-gray-500 transition-all duration-500 h-full">
                  
                  {/* Icon container with enhanced effect */}
                  <div className={`relative w-24 h-24 flex items-center justify-center bg-gradient-to-br ${project.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {project.icon}
                    
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 text-center mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-xl group/btn"
                  >
                    {/* Button background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl group-hover/btn:scale-105 transition-transform duration-300`} />
                    
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    
                    <button className="relative px-8 py-3 text-white font-medium flex items-center gap-2">
                      <span>Visit website</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </a>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Want to see more ?</p>
              <NewsletterButton btnText='Get in touch' />
          </div>
        </div>
      </div>
    </section>
  );
}