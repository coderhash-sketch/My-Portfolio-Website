import React, { useEffect, useState, useRef } from 'react';
import { GAME_SKILLS, GAME_ACHIEVEMENTS } from './constants';

const SkillDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isAchievementUnlocked = (achievement: typeof GAME_ACHIEVEMENTS[0]) => {
    const skill = GAME_SKILLS.find(s => s.name === achievement.thresholdSkill);
    return skill ? skill.level >= achievement.thresholdValue : false;
  };

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto py-12">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">Stats <span className="text-rainbow-gradient">&amp; Progression</span></h2>
        <p className="text-slate-500 font-medium">Quantifying engineering aptitude through experience points.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* XP Progress Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-rainbow-gradient opacity-30"></div>
            <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-widest">
              <span className="w-8 h-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-xs">XP</span>
              Skill Trees
            </h3>
            
            <div className="space-y-10">
              {GAME_SKILLS.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{skill.icon}</span>
                      <div>
                        <h4 className="text-white font-black text-sm uppercase tracking-tight">{skill.name}</h4>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Level {skill.level}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-fuchsia-400 font-black tracking-widest">{skill.xp}% XP</span>
                  </div>
                  <div className="h-3 w-full bg-slate-900/50 rounded-full border border-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-rainbow-gradient transition-all duration-[2000ms] ease-out rounded-full neonic-shadow-pink"
                      style={{ width: isVisible ? `${skill.xp}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges & Achievements Section */}
        <div className="space-y-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/5 h-full">
            <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-widest">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">★</span>
              Unlocked Badges
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {GAME_ACHIEVEMENTS.map((achievement) => {
                const unlocked = isAchievementUnlocked(achievement);
                return (
                  <div 
                    key={achievement.id}
                    className={`relative p-6 rounded-2xl border transition-all duration-500 flex flex-col items-center text-center group ${
                      unlocked 
                        ? 'bg-slate-900 border-white/10 hover:border-cyan-500/50 cursor-default' 
                        : 'bg-black/40 border-white/5 opacity-40 grayscale'
                    }`}
                  >
                    <div className={`text-4xl mb-4 transition-transform duration-500 ${unlocked ? 'group-hover:scale-125 group-hover:rotate-12' : ''}`}>
                      {unlocked ? achievement.icon : "🔒"}
                    </div>
                    <h4 className={`text-[10px] font-black uppercase tracking-tighter leading-tight ${unlocked ? 'text-white' : 'text-slate-600'}`}>
                      {achievement.title}
                    </h4>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/95 rounded-2xl p-4 flex flex-center flex-col justify-center z-20 pointer-events-none">
                      <p className="text-[9px] text-cyan-400 font-bold mb-2 uppercase tracking-widest">Requirement</p>
                      <p className="text-[10px] text-white font-black uppercase leading-tight">{achievement.requirement}</p>
                      <p className="text-[9px] text-slate-500 mt-2 italic">{achievement.description}</p>
                    </div>

                    {unlocked && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full neonic-shadow-cyan border-2 border-[#020617]"></div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4">Meta Status</h4>
              <div className="flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-rainbow-gradient/10 border border-fuchsia-500/30 text-fuchsia-400 text-[9px] font-black rounded-md uppercase tracking-widest">Growth Mindset +99</span>
                 <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[9px] font-black rounded-md uppercase tracking-widest">Fast Learner IV</span>
                 <span className="px-3 py-1 bg-lime-500/10 border border-lime-500/30 text-lime-400 text-[9px] font-black rounded-md uppercase tracking-widest">Vibe Coding Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDashboard;
