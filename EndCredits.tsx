import React, { useEffect, useState, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';

const EndCredits: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden py-32 px-6"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--glow)_0%,transparent_70%)] opacity-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-[var(--primary)] to-transparent opacity-30"></div>
      </div>

      <div className={`space-y-16 text-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        
        {/* Credit Block 1: The Creator */}
        <div className="space-y-4">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-slate-500">Directed by</p>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase">
            {PERSONAL_INFO.name}
          </h2>
        </div>

        {/* Credit Block 2: The Purpose */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-slate-500">Mission</p>
          <p className="text-xl md:text-3xl font-medium text-slate-300 italic leading-relaxed">
            "Engineering systems that redefine <span className="text-rainbow-gradient font-black">Human Potential</span>."
          </p>
        </div>

        {/* Credit Block 3: The Future */}
        <div className="space-y-4 pt-12">
          <div className="flex flex-col items-center gap-4">
             <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-slate-500">Next Chapter</p>
             <div className="flex items-center gap-2">
                <span className="text-2xl md:text-4xl font-black text-white tracking-widest uppercase flex items-center">
                  Loading
                  <span className="ml-2 flex gap-1">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[var(--primary)] rounded-full animate-[bounce_1s_infinite_0ms]"></span>
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[var(--secondary)] rounded-full animate-[bounce_1s_infinite_200ms]"></span>
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[var(--accent)] rounded-full animate-[bounce_1s_infinite_400ms]"></span>
                  </span>
                </span>
             </div>
          </div>
        </div>

        {/* Final Branding Signature */}
        <div className="pt-24 opacity-20 hover:opacity-100 transition-opacity duration-700">
           <p className="text-[9px] font-black uppercase tracking-[0.8em] text-white">DevFolioX Version 3.1.0</p>
           <p className="text-[8px] font-medium text-slate-600 mt-2 uppercase tracking-[0.4em]">Optimized for High-Fidelity Performance</p>
        </div>

      </div>

      {/* Aesthetic Cinematic Bars */}
      <div className="absolute top-0 left-0 w-full h-12 bg-black z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-black z-20"></div>

      <style>{`
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid var(--primary);
          animation: typewriter 2s steps(40, end), blink 0.75s step-end infinite;
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--primary); }
        }
      `}</style>
    </div>
  );
};

export default EndCredits;