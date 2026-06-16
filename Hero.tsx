import React from 'react';
import { PERSONAL_INFO } from './constants';

const Hero: React.FC = () => {
  const initials = PERSONAL_INFO.name.split(' ').map(n => n[0]).join('');
  const profilePic = (PERSONAL_INFO as any).profilePicture;
  const hasProfilePicture = !!profilePic;

  const socialIcons: Record<string, React.ReactNode> = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    leetcode: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.405a.64.64 0 0 0 0 .905.645.645 0 0 0 .91 0l4.377-4.405a.091.091 0 0 1 .131-.026.091.091 0 0 1 .026.132l-1.02 1.028a.645.645 0 0 0 .91.91l1.02-1.029a1.373 1.373 0 0 0-.014-1.937L14.458.414A1.37 1.37 0 0 0 13.483 0zm-6.066 5.603a1.1 1.1 0 0 0-.788.326l-5.322 5.342a1.1 1.1 0 0 0 0 1.554l5.322 5.342a1.1 1.1 0 0 0 1.554 0l5.322-5.342a1.1 1.1 0 0 0 0-1.554l-5.322-5.342a1.1 1.1 0 0 0-.788-.326zm.945 1.261l5.322 5.342a.312.312 0 0 1 0 .441l-5.322 5.342a.312.312 0 0 1-.441 0l-5.322-5.342a.312.312 0 0 1 0-.441l5.322-5.342a.312.312 0 0 1 .441 0zM19.921 5.603a1.373 1.373 0 0 0-1.937.014l-1.02 1.029a.644.644 0 0 0 .909.91l1.02-1.029a.091.091 0 0 1 .131-.026.091.091 0 0 1 .026.132l-4.377 4.405a.645.645 0 0 0 .91.91l4.377-4.405a1.374 1.374 0 0 0 0-1.94z" />
      </svg>
    ),
    codechef: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1.5 4.5l-1.5 1.5 3 3-3 3 1.5 1.5 4.5-4.5-4.5-4.5zm-3 0l-4.5 4.5 4.5 4.5 1.5-1.5-3-3 3-3-1.5-1.5z" />
      </svg>
    )
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-40 md:pt-48 relative overflow-hidden">
      <div className="relative inline-block mb-10 group">
        {/* Animated Rotating Rainbow Ring */}
        <div className="absolute inset-0 bg-rainbow-gradient rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity animate-spin-slow"></div>
        <div className="absolute -inset-1 bg-rainbow-gradient rounded-full animate-spin-slow"></div>
        
        {/* Profile Image Container */}
        <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[var(--bg-base)] shadow-2xl overflow-hidden bg-[var(--bg-card)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          {hasProfilePicture ? (
            <img 
              src={profilePic} 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover scale-[3.4] translate-y-[5%]" 
              style={{ objectPosition: 'center 10%' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.initials-fallback')) {
                  const span = document.createElement('span');
                  span.className = "initials-fallback text-rainbow-gradient text-4xl md:text-5xl font-black";
                  span.innerText = initials;
                  parent.appendChild(span);
                }
              }}
            />
          ) : (
            <span className="text-rainbow-gradient text-4xl md:text-5xl font-black">
              {initials}
            </span>
          )}
        </div>
      </div>
      
      <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter">
        Hi, I'm <span className="text-rainbow-gradient">{PERSONAL_INFO.name}</span>
      </h1>
      
      <p className="max-w-3xl text-lg md:text-2xl text-[var(--text-secondary)] mb-12 leading-relaxed font-medium">
        {PERSONAL_INFO.impactStatement}
      </p>
      
      <div className="flex flex-wrap gap-6 justify-center relative z-[100]">
        <button 
          type="button"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 bg-rainbow-gradient text-slate-950 font-black rounded-xl transition-all transform hover:scale-110 hover:rotate-1 active:scale-95 shadow-[0_0_30px_var(--glow)] cursor-pointer"
        >
          EXPLORE WORK
        </button>
        <button 
          type="button"
          onClick={() => document.getElementById('resume-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 bg-transparent hover:bg-white/5 text-[var(--text-primary)] font-black rounded-xl transition-all transform hover:scale-110 flex items-center gap-3 cursor-pointer border-2 border-white/20 hover:border-[var(--primary)] shadow-xl"
        >
          <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          VIEW RESUME
        </button>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-x-6 gap-y-4 text-[var(--text-secondary)] relative z-[100] max-w-5xl mx-auto px-4">
        {Object.entries(PERSONAL_INFO.socials).map(([key, url]) => (
          <a 
            key={key}
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 hover:text-[var(--primary)] hover:scale-105 transition-all font-bold group bg-white/5 px-5 py-2.5 rounded-2xl border border-white/5 hover:border-[var(--primary)]/40 shadow-sm"
          >
            <div className="text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors">
              {socialIcons[key]}
            </div>
            <span className="capitalize text-sm tracking-wide">{key}</span>
          </a>
        ))}
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Hero;
