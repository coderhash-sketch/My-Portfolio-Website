import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Blog from './Blog';
import Contact from './Contact';
import Education from './Education';
import Achievements from './Achievements';
import ResumeView from './ResumeView';
import SkillDashboard from './SkillDashboard';
import Constitution from './Constitution';
import HiringSuite from './HiringSuite';
import ThemeSelector from './ThemeSelector';
import ImpactMap from './ImpactMap';
import MentalFrameworks from './MentalFrameworks';
import InterviewSimulator from './InterviewSimulator';
import EndCredits from './EndCredits';
import ant from './Ant.png';
import eagle from './Eagle.png';
import cheetah from './Cheetah.png';
import lion from './Lion.png';
import wolf from './Wolf.png';
import AURORA from './AURORA.png';
import RCB from './RCB_FanPortal.png';
import AeronicX from './AeronicX.png';
import Checkfirst from './CheckFirst.png';
import Ecograph from './Ecograph_Engine.png';
import LogicLockdown from './LogicLockdown.png';
import FounderPilot from './FounderPilot.png';
import BuiltFI from './BuiltFI.png';
import Learn from './LearnR.png';
import Discipline from './DisciplineOM.png';
import System from './SystemOS.png';
import Think from './ThinkLT.png';
import { PERSONAL_INFO, THEMES } from './constants';
import { ThemeID } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [themeId, setThemeId] = useState<ThemeID>(() => {
    try {
      return (localStorage.getItem('agrim_portfolio_theme') as ThemeID) || 'visionary';
    } catch (e) {
      return 'visionary';
    }
  });

  const currentTheme = useMemo(() => {
    return THEMES.find(t => t.id === themeId) || THEMES[3];
  }, [themeId]);

  useEffect(() => {
    try {
      localStorage.setItem('agrim_portfolio_theme', themeId);
    } catch (e) {
      console.warn("LocalStorage not accessible", e);
    }
  }, [themeId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-100px 0px -40% 0px',
        threshold: [0.2] 
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const themeStyles = useMemo(() => {
    const { colors } = currentTheme;
    return `
      :root {
        --primary: ${colors.primary};
        --secondary: ${colors.secondary};
        --accent: ${colors.accent};
        --bg-base: ${colors.bgBase};
        --bg-card: ${colors.bgCard};
        --text-primary: ${colors.textPrimary};
        --text-secondary: ${colors.textSecondary};
        --glow: ${colors.glow};
        --font-main: ${currentTheme.fontFamily};
      }
      body {
        background-color: var(--bg-base);
        color: var(--text-primary);
        font-family: var(--font-main);
        transition: background-color 0.5s ease, color 0.5s ease;
      }
      .glass-panel {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      .text-rainbow-gradient {
        background: linear-gradient(to right, var(--primary), var(--secondary), var(--accent), var(--primary));
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: rainbow-shift 5s linear infinite;
      }
      .bg-rainbow-gradient {
        background: linear-gradient(to right, var(--primary), var(--secondary), var(--accent), var(--primary));
        background-size: 200% auto;
        animation: rainbow-shift 5s linear infinite;
      }
      @keyframes rainbow-shift {
        to { background-position: 200% center; }
      }
      .neonic-shadow-pink { box-shadow: 0 0 20px var(--glow); }
      .neonic-shadow-cyan { box-shadow: 0 0 20px var(--glow); }
      .neonic-shadow-green { box-shadow: 0 0 20px var(--glow); }
    `;
  }, [currentTheme]);

  return (
    <div className="relative min-h-screen selection:bg-fuchsia-500/30 overflow-x-hidden">
      <style>{themeStyles}</style>
      
      {/* Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--bg-base)]"></div>
        
        {/* Subtle Micro-dot Grid Layer */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Thematic Glows */}
        <div className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_center,var(--glow)_0%,transparent_70%)] blur-[80px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vh] bg-[radial-gradient(circle_at_center,var(--glow)_0%,transparent_60%)] blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--glow)_0%,transparent_80%)] opacity-20"></div>
      </div>

      <div className="fixed top-6 right-6 z-[20000] print:hidden">
        <ThemeSelector currentThemeId={themeId} onThemeChange={setThemeId} />
      </div>

      <main className="relative z-10 print:hidden">
        <section id="hero" className="scroll-mt-0">
          <Hero />
        </section>

        <section id="constitution" className="py-24 px-6 md:px-12 scroll-mt-32">
          <Constitution />
        </section>

        <section id="projects" className="py-24 px-6 md:px-12 bg-white/[0.02] scroll-mt-32">
          <Projects />
        </section>

        <section id="strategy" className="py-24 px-6 md:px-12 scroll-mt-32">
          <MentalFrameworks />
        </section>

        <section id="skills" className="py-24 px-6 md:px-12 scroll-mt-32">
          <Skills />
        </section>
        
        <section id="stats" className="py-24 px-6 md:px-12 bg-white/[0.01] scroll-mt-32">
          <SkillDashboard />
        </section>

        <section id="interview" className="py-24 px-6 md:px-12 bg-white/[0.02] scroll-mt-32">
          <InterviewSimulator />
        </section>

        <section id="experience" className="py-24 px-6 md:px-12 scroll-mt-32">
          <Experience />
        </section>

        <section id="education" className="py-24 px-6 md:px-12 bg-white/[0.02] scroll-mt-32">
          <Education />
        </section>

        <section id="resume-section" className="py-24 px-6 md:px-12 scroll-mt-32">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden group hover:border-[var(--primary)] transition-all duration-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:neonic-shadow-pink transition-all">
                  <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tighter">Official Resume</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl font-medium">
                  Open the ATS-optimized technical document for review and high-fidelity viewing.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <button 
                    type="button"
                    onClick={() => setIsPreviewOpen(true)}
                    className="relative z-[100] w-full md:w-auto px-12 py-5 bg-rainbow-gradient text-slate-950 font-black rounded-2xl transition-all flex items-center justify-center gap-4 shadow-[0_10px_40px_var(--glow)] hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    <span>RESUME</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="py-24 px-6 md:px-12 scroll-mt-32">
          <Achievements />
        </section>

        <section id="impact" className="py-24 px-6 md:px-12 bg-white/[0.01] scroll-mt-32">
          <ImpactMap />
        </section>

        <section id="blog" className="py-24 px-6 md:px-12 bg-white/[0.02] scroll-mt-32">
          <Blog />
        </section>

        <section id="hiring" className="py-24 px-6 md:px-12 scroll-mt-32">
          <HiringSuite />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 bg-white/[0.02] scroll-mt-32 mb-24">
          <Contact />
        </section>

        <section id="credits" className="scroll-mt-0">
          <EndCredits />
        </section>
      </main>

      {/* Professional Resume Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-[11000] flex items-center justify-center p-4 print:p-0">
          <div 
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl print:hidden"
            onClick={() => setIsPreviewOpen(false)}
          ></div>
          <div className="relative w-full max-w-5xl h-[90vh] print:h-auto overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in zoom-in duration-300 print:rounded-none print:shadow-none print:static">
            <div className="sticky top-0 right-0 p-4 flex justify-between items-center bg-slate-100 border-b border-slate-200 print:hidden">
               <span className="text-slate-500 font-black text-xs uppercase tracking-widest pl-4">ATS Professional Document View</span>
               <div className="flex gap-4">
                <button 
                  onClick={() => setIsPreviewOpen(false)}
                  className="text-slate-400 hover:text-slate-900 transition-colors p-2"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
               </div>
            </div>
            <div className="p-2 md:p-8 bg-white">
              <ResumeView />
            </div>
          </div>
        </div>
      )}

      {/* Separate Print-Only Hidden Section (Backup for direct calls) */}
      <div className="hidden print:block">
        <ResumeView />
      </div>

      <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/5 print:hidden relative z-10 bg-black/80">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. <span className="text-rainbow-gradient font-bold">Neonic Engineering Mastery.</span></p>
      </footer>

      <Navbar activeSection={activeSection} />

      <style>{`
        @media print {
          html, body { 
            background: white !important; 
            color: black !important;
            margin: 0 !important; 
            padding: 0 !important;
            width: 100%;
          }
          #root > main, 
          #root > nav, 
          #root > footer, 
          .fixed:not(.print\\:block) { 
            display: none !important; 
          }
          .print\\:hidden, .print\\:hidden * { 
            display: none !important; 
          }
          .print\\:block {
            display: block !important;
          }
          #root { background: white !important; }
          @page {
            size: A4;
            margin: 0.5cm;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
