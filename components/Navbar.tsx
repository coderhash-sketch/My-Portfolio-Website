import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'constitution', label: 'Core' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'stats', label: 'Stats' },
    { id: 'interview', label: 'Interview' }, // New item
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Awards' },
    { id: 'impact', label: 'Impact' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
    { id: 'credits', label: 'Credits' },
  ];

  // Split items into two rows: Row 1 has 7, Row 2 has 6
  const row1 = navItems.slice(0, 7);
  const row2 = navItems.slice(7);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 160; // Slightly larger offset for dual row navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const renderNavRow = (items: typeof navItems) => (
    <div className="glass-panel px-3 py-1.5 rounded-full flex justify-center items-center gap-1 md:gap-2 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-3xl overflow-x-auto no-scrollbar">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => scrollToSection(e, item.id)}
          className={`text-[9px] md:text-[12px] font-bold transition-all duration-500 px-3 md:px-4 py-1.5 rounded-full cursor-pointer flex items-center justify-center whitespace-nowrap ${
            activeSection === item.id 
              ? 'text-white bg-rainbow-gradient neonic-shadow-cyan' 
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[10000] w-full flex flex-col items-center gap-3 px-4 print:hidden">
      {renderNavRow(row1)}
      {renderNavRow(row2)}
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;