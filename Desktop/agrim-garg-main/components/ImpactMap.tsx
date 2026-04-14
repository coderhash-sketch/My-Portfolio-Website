import React, { useState } from 'react';
import { IMPACT_MARKERS } from '../constants';
import { ImpactMarker } from '../types';

const ImpactMap: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState<ImpactMarker | null>(null);

  const getTypeStyles = (type: ImpactMarker['type']) => {
    switch (type) {
      case 'cese': return 'bg-cyan-500 neonic-shadow-cyan';
      case 'community': return 'bg-lime-500 neonic-shadow-green';
      case 'vision': return 'bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.5)]';
      default: return 'bg-white';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">Geographic <span className="text-rainbow-gradient">Impact Map</span></h2>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto">Visualizing leadership scale and community footprint across the Indian subcontinent.</p>
      </div>

      <div className="relative glass-panel rounded-[40px] border border-white/5 overflow-hidden aspect-[4/5] md:aspect-[16/10] bg-slate-950/40 p-4 md:p-12">
        {/* India Map Stylized SVG - Accurate Outline */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none p-4 md:p-8">
          <svg className="w-full h-full text-white fill-current" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid meet">
            <path d="M245 20 L260 30 L280 15 L295 40 L285 60 L290 85 L280 100 L270 125 L260 145 L255 160 L275 165 L300 170 L320 180 L350 185 L375 200 L400 215 L430 215 L460 225 L475 240 L460 260 L440 270 L420 280 L400 295 L385 305 L365 295 L345 290 L325 300 L305 320 L295 340 L290 370 L280 400 L270 430 L260 460 L250 490 L240 520 L220 550 L200 580 L180 550 L160 520 L150 490 L140 460 L130 430 L120 400 L110 370 L105 340 L110 310 L100 280 L80 260 L60 240 L40 220 L30 190 L50 160 L70 140 L90 120 L110 100 L130 80 L150 60 L170 45 L190 35 L210 25 Z" />
          </svg>
        </div>

        {/* Dynamic Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

        {/* Legend */}
        <div className="absolute top-8 left-8 space-y-4 z-10 hidden md:block glass-panel p-4 rounded-2xl border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">CESE Operations</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)]"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Community</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">National Strategy</span>
          </div>
        </div>

        {/* Interactive Markers Container */}
        <div className="relative w-full h-full">
          {IMPACT_MARKERS.map((marker) => (
            <div
              key={marker.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              onMouseEnter={() => setActiveMarker(marker)}
              onMouseLeave={() => setActiveMarker(null)}
            >
              {/* Pulsing Aura */}
              <div className={`absolute -inset-4 rounded-full animate-ping opacity-10 ${getTypeStyles(marker.type)}`}></div>
              
              {/* The Marker Dot */}
              <div className={`relative w-4 h-4 rounded-full border-2 border-slate-950 transition-all duration-300 group-hover:scale-150 group-hover:border-white shadow-xl ${getTypeStyles(marker.type)}`}></div>

              {/* Tooltip */}
              {activeMarker?.id === marker.id && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 glass-panel p-6 rounded-[24px] border border-white/20 shadow-2xl z-50 animate-in fade-in zoom-in slide-in-from-bottom-2 duration-300 pointer-events-none">
                  <div className="mb-3 flex items-center justify-between">
                    <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${getTypeStyles(marker.type)} text-slate-950`}>
                      {marker.type}
                    </span>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Zone</span>
                  </div>
                  <h4 className="text-white font-black text-sm mb-1 leading-tight">{marker.initiative}</h4>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{marker.location}</p>
                  <p className="text-slate-300 text-[11px] leading-relaxed italic border-l-2 border-white/10 pl-3">"{marker.summary}"</p>
                  
                  {/* Tooltip Arrow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 glass-panel border-b border-r border-white/20 bg-slate-950"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Map Footer Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Zones Covered', value: '09+' },
          { label: 'Events Led', value: '45+' },
          { label: 'Impact Reach', value: '15K+' },
          { label: 'Future Ambition', value: 'National' }
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl border-white/5 text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactMap;