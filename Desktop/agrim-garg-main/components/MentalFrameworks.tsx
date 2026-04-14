import React, { useState } from "react";
import { MENTAL_FRAMEWORKS } from "../constants";
import { Framework } from "../types";

const MentalFrameworks: React.FC = () => {
  const [selectedFramework, setSelectedFramework] =
    useState<Framework | null>(null);

  return (
    <div className="max-w-6xl mx-auto py-24">
      {/* HEADER */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
          Mental{" "}
          <span className="text-rainbow-gradient">Frameworks</span>
        </h2>

        <p className="text-slate-500 font-medium max-w-2xl mx-auto">
          Operating systems for the mind. Click each module to see how I align
          these mindsets with my core abilities.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MENTAL_FRAMEWORKS.map((framework) => (
          <div
            key={framework.id}
            onClick={() => setSelectedFramework(framework)}
            className="glass-panel p-8 rounded-[32px] border border-white/5 
                       hover:border-[var(--primary)] transition-all 
                       group relative overflow-hidden flex flex-col 
                       items-center text-center hover:-translate-y-2 
                       duration-500 cursor-pointer"
          >
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 w-full h-1 
                            bg-gradient-to-r from-transparent 
                            via-[var(--primary)] to-transparent 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity" />

            {/* ICON */}
            <div className="mb-8 transform transition-transform duration-500 
                            group-hover:scale-110 group-hover:rotate-6">
              <img
                src={framework.icon}
                alt={framework.title}
                className="w-20 h-20 object-contain mx-auto"
              />
            </div>

            {/* MINDSET TAG */}
            {framework.mindset && (
              <span
                className="text-[10px] font-black text-[var(--primary)] 
                           uppercase tracking-[0.2em] mb-4 
                           bg-[var(--primary)]/10 px-4 py-1.5 
                           rounded-full"
              >
                {framework.mindset}
              </span>
            )}

            {/* TITLE */}
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
              {framework.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              {framework.description}
            </p>

            {/* HOVER CTA */}
            <div className="mt-8 flex items-center gap-2 
                            text-[var(--primary)] font-black 
                            text-[10px] uppercase tracking-widest 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity">
              <span>View Alignment</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedFramework && (
        <div className="fixed inset-0 z-[20000] flex items-center justify-center p-4 md:p-12">
          
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
            onClick={() => setSelectedFramework(null)}
          />

          {/* MODAL CARD */}
          <div
            className="relative glass-panel w-full max-w-2xl 
                       rounded-3xl overflow-hidden border 
                       border-white/10 animate-in zoom-in duration-300"
          >
            <div className="h-2 bg-rainbow-gradient" />

            <div className="p-10 md:p-16">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedFramework(null)}
                className="absolute top-8 right-8 text-slate-500 
                           hover:text-white transition-all 
                           hover:scale-125"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col items-center text-center">

                {/* MODAL ICON */}
                <div className="mb-10 transform hover:scale-110 transition-transform">
                  <img
                    src={selectedFramework.icon}
                    alt={selectedFramework.title}
                    className="w-32 h-32 object-contain mx-auto"
                  />
                </div>

                {/* TAG */}
                <span className="text-xs font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
                  {selectedFramework.mindset} Alignment
                </span>

                {/* TITLE */}
                <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">
                  {selectedFramework.title}
                </h3>

                <div className="w-20 h-1 bg-rainbow-gradient mb-10 opacity-30" />

                {/* CONTENT */}
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                  {selectedFramework.detailedContent}
                </p>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedFramework(null)}
                  className="mt-12 px-10 py-4 bg-white/5 hover:bg-white/10 
                             text-white font-black rounded-2xl 
                             border border-white/10 transition-all 
                             uppercase tracking-widest text-xs"
                >
                  Close Framework
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentalFrameworks;