import React from 'react';
import { PRINCIPLES } from './constants';

const Constitution: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">Personal <span className="text-rainbow-gradient">Constitution</span></h2>
        <p className="text-slate-500 max-w-xl font-medium">The 5 core principles that guide my engineering and leadership decisions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {PRINCIPLES.map((p, i) => (
          <div key={p.title} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-fuchsia-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-rainbow-gradient opacity-20 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
            
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 group-hover:text-white transition-colors">Principle {i + 1}</h3>
            
            <h4 className="text-xl font-black text-white mb-4 leading-tight uppercase tracking-tighter">{p.title}</h4>
            
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Constitution;
