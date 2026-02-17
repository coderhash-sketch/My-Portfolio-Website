import React, { useState } from 'react';
import { THEMES } from '../constants';
import { ThemeID } from '../types';

interface ThemeSelectorProps {
  currentThemeId: ThemeID;
  onThemeChange: (id: ThemeID) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentThemeId, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full glass-panel border border-white/10 flex items-center justify-center hover:scale-110 transition-all text-xl neonic-shadow-cyan"
        title="Signature Design Identity"
      >
        🎨
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 w-72 p-6 glass-panel rounded-3xl border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] z-[20000] animate-in zoom-in slide-in-from-top-4 duration-300">
          <div className="mb-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Signature Identity</h4>
            <p className="text-[10px] text-slate-500 font-medium">Select your visual persona</p>
          </div>

          <div className="space-y-3">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className={`w-full p-4 rounded-2xl border transition-all flex flex-col items-start gap-1 group relative overflow-hidden ${
                  currentThemeId === theme.id 
                    ? 'border-white/40 bg-white/5' 
                    : 'border-white/5 bg-black/20 hover:border-white/20'
                }`}
              >
                {/* Mini Preview Dot */}
                <div 
                  className="absolute top-2 right-2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme.colors.primary, boxShadow: `0 0 10px ${theme.colors.primary}` }}
                ></div>

                <span className={`text-xs font-black uppercase tracking-tighter ${
                  currentThemeId === theme.id ? 'text-white' : 'text-slate-400 group-hover:text-white'
                }`}>
                  {theme.name}
                </span>
                <span className="text-[9px] text-slate-500 text-left leading-tight">
                  {theme.description}
                </span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;