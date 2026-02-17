import React, { useState, useEffect } from 'react';
import { INTERVIEW_QUESTIONS } from '../constants';

const InterviewSimulator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const currentQ = INTERVIEW_QUESTIONS[currentIndex];

  useEffect(() => {
    let i = 0;
    setTypingText('');
    setIsTyping(true);
    setShowAnswer(false);
    
    const interval = setInterval(() => {
      setTypingText(currentQ.question.slice(0, i));
      i++;
      if (i > currentQ.question.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < INTERVIEW_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleShuffle = () => {
    const randomIdx = Math.floor(Math.random() * INTERVIEW_QUESTIONS.length);
    setCurrentIndex(randomIdx);
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
          Interview <span className="text-rainbow-gradient">Me Live</span>
        </h2>
        <p className="text-slate-500 font-medium">Interactive SDE Hiring Simulation: Test my technical depth and ownership mindset.</p>
      </div>

      <div className="glass-panel rounded-[40px] border border-white/5 overflow-hidden relative shadow-2xl">
        {/* Header Indicator */}
        <div className="bg-slate-950/80 px-8 py-4 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse neonic-shadow-pink"></div>
            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Live Simulation Active</span>
          </div>
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
            Module {currentIndex + 1} / {INTERVIEW_QUESTIONS.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-full bg-slate-900/50">
          <div 
            className="h-full bg-rainbow-gradient transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / INTERVIEW_QUESTIONS.length) * 100}%` }}
          ></div>
        </div>

        {/* Interview Arena */}
        <div className="p-8 md:p-16 min-h-[500px] flex flex-col">
          <div className="mb-12">
            <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-[0.3em] block mb-4">
              Recruiter Inquiry • {currentQ.category}
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tighter">
              {typingText}
              {isTyping && <span className="inline-block w-1 h-8 md:h-10 bg-[var(--primary)] ml-2 animate-pulse"></span>}
            </h3>
          </div>

          <div className={`flex-1 transition-all duration-700 transform ${showAnswer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {currentQ.answerSummary.map((point, idx) => (
                  <span key={idx} className="px-4 py-2 bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-xl text-[11px] font-black text-[var(--primary)] uppercase tracking-widest">
                    {point}
                  </span>
                ))}
              </div>
              
              <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/5">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Detailed Response Architecture</h4>
                <p className="text-slate-200 text-lg leading-relaxed font-medium">
                  {currentQ.answerDetail}
                </p>
              </div>
            </div>
          </div>

          {!showAnswer && !isTyping && (
            <div className="mt-auto flex justify-center">
              <button 
                onClick={() => setShowAnswer(true)}
                className="px-12 py-5 bg-rainbow-gradient text-slate-950 font-black rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl flex items-center gap-3 group"
              >
                <span>REVEAL STRUCTURED ANSWER</span>
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          )}

          {showAnswer && (
            <div className="mt-12 flex flex-wrap justify-between items-center gap-6 border-t border-white/5 pt-8">
              <div className="flex gap-4">
                <button 
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="p-4 rounded-xl bg-slate-900 border border-white/10 text-white disabled:opacity-30 hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <button 
                  onClick={handleNext}
                  disabled={currentIndex === INTERVIEW_QUESTIONS.length - 1}
                  className="px-8 py-4 rounded-xl bg-slate-900 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors flex items-center gap-3"
                >
                  Next Question
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={handleShuffle}
                  className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  Shuffle
                </button>
                <button 
                  onClick={handleReset}
                  className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors"
                >
                  Replay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="mt-12 text-center">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">Candidate ID: AGR-813-060-SDE</p>
      </div>
    </div>
  );
};

export default InterviewSimulator;