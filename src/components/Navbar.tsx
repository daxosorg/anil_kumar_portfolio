import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Send,
  Code2
} from 'lucide-react';
import { isSoundEnabled, setSoundEnabled, playSound } from '../utils/soundEffects';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playSound('switch');
  };

  const navLinks = [
    { name: 'Projects',      href: '#projects' },
    { name: 'Flutter Lab',   href: '#lab' },
    { name: 'Architecture',  href: '#architecture' },
    { name: 'Skills',        href: '#skills' },
    { name: 'Experience',    href: '#experience' },
    { name: 'Contact',       href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    playSound('click');
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2.5 bg-[#020817]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand */}
          <a
            href="#"
            onClick={() => playSound('tap')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Flutter logo icon */}
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.006 11.086l-6.32 6.32L14.32 23.72h7.374L14.32 16.32l5.093-5.234h-5.093z" />
              </svg>
              {/* pulse ring */}
              <span className="absolute inset-0 rounded-xl animate-ping bg-cyan-400/20 pointer-events-none" style={{ animationDuration: '3s' }} />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
                  ANIL.DEV
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Flutter Lead
                </span>
              </div>
              <span className="hidden sm:block text-[10px] text-slate-500 font-medium">5+ Yrs · Cross-Platform Mobile</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Sound toggle */}
            <button
              id="sound-toggle-btn"
              onClick={toggleSound}
              className={`p-2 rounded-full border transition-all duration-200 cursor-pointer ${
                soundOn
                  ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-500 hover:text-slate-300'
              }`}
              title={soundOn ? 'Sound On' : 'Sound Off'}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Resume */}
            <button
              id="navbar-resume-btn"
              onClick={() => { playSound('tap'); onOpenResume(); }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white text-xs font-semibold transition-all duration-200 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            {/* CTA */}
            <button
              id="navbar-contact-btn"
              onClick={() => { playSound('tap'); onOpenContact(); }}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>LET'S TALK</span>
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => { playSound('tap'); setMobileMenuOpen(!mobileMenuOpen); }}
              className="p-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 border-b border-white/[0.06] bg-[#020817]/95 backdrop-blur-xl px-4 py-4 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/20 transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-bold text-slate-300"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              Resume
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold"
            >
              <Send className="w-3.5 h-3.5" />
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
