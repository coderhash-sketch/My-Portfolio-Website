import React, { useState, useEffect, useRef } from 'react';
import { NEXT_SKILL_OPTIONS } from '../constants';

const HiringSuite: React.FC = () => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledToBottom(true);
        }
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSkillSelect = (skillId: string) => {
    setSelectedSkill(skillId);
    // Persist temporarily
    localStorage.setItem('agrim_next_skill_challenge', skillId);
  };

  return (
    <div className="max-w-4xl mx-auto py-24 space-y-32">
      {/* Dynamic Scroll CTA */}
      <div 
        ref={scrollRef}
        className={`text-center space-y-8 transition-all duration-1000 transform ${
          hasScrolledToBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
          If you're still scrolling,<br />
          <span className="text-rainbow-gradient italic">You should hire me.</span>
        </h2>
        <div className="h-px w-32 bg-rainbow-gradient mx-auto"></div>
        <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-sm">Let's build something extraordinary.</p>
        
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-5 bg-white text-slate-950 font-black rounded-2xl transition-all hover:scale-110 active:scale-95 neonic-shadow-cyan"
        >
          INITIATE COLLABORATION
        </button>
      </div>

      {/* Interactive Skill Module */}
      <div className="glass-panel p-12 rounded-[40px] border border-white/5 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-slate-900 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">
            Adaptive Growth Module
          </div>
          <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Choose My Next Skill</h3>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto font-medium">
            Challenge my capacity. Which domain should I master next to drive the most impact?
          </p>

          {!selectedSkill ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {NEXT_SKILL_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSkillSelect(option.id)}
                  className="p-6 rounded-2xl bg-[#0a0f1d] border border-white/5 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group flex flex-col items-center text-center"
                >
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2 opacity-60">{option.category}</span>
                  <span className="text-white font-bold">{option.name}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 animate-in zoom-in duration-500">
              <div className="w-24 h-24 bg-rainbow-gradient rounded-full mx-auto flex items-center justify-center text-slate-950 text-4xl mb-8 neonic-shadow-pink">
                ⚡
              </div>
              <h4 className="text-4xl font-black uppercase text-white mb-4">Challenge Accepted.</h4>
              <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
                Mastering {NEXT_SKILL_OPTIONS.find(o => o.id === selectedSkill)?.name}...
              </p>
              <button 
                onClick={() => setSelectedSkill(null)}
                className="mt-10 text-slate-500 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors"
              >
                Pick Another Skill
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HiringSuite;