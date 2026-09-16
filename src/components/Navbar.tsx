import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Layers, 
  Sparkles, 
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) {
      playSound('switch');
    }
  };

  const navLinks = [
    { name: 'Featured Apps', href: '#projects' },
    { name: 'Live Simulator', href: '#simulator' },
    { name: 'Flutter Lab', href: '#lab' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills & Stores', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  const handleNavClick = (href: string) => {
    playSound('click');
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2.5 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-100' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Flutter Badge */}
          <a 
            href="#" 
            onClick={() => playSound('tap')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center transform rotate-6 group-hover:rotate-12 transition-transform shadow-md shadow-indigo-200">
              {/* Flutter stylized vector shape */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.006 11.086l-6.32 6.32L14.32 23.72h7.374L14.32 16.32l5.093-5.234h-5.093z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  ANIL.DEV
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-[10px] font-mono text-indigo-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Flutter Lead
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">5+ Years • Cross-Platform Mobile</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm shadow-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-all cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Actions: Sound, Resume, Contact */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              id="sound-toggle-btn"
              onClick={toggleSound}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                soundOn
                  ? 'bg-indigo-50 border-indigo-200 text-indigo-600 hover:bg-indigo-100 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
              }`}
              title={soundOn ? 'Sound Effects Enabled' : 'Sound Effects Muted'}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              id="navbar-resume-btn"
              onClick={() => {
                playSound('tap');
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-sm hover:border-slate-300"
            >
              <FileDown className="w-3.5 h-3.5 text-indigo-600" />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <button
              id="navbar-contact-btn"
              onClick={() => {
                playSound('tap');
                onOpenContact();
              }}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-all shadow-md shadow-slate-900/10 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>LET'S TALK</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-indigo-600" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                playSound('tap');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 py-4 space-y-3 shadow-lg shadow-slate-200/50">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800"
            >
              <FileDown className="w-3.5 h-3.5 text-indigo-600" />
              <span>Resume PDF</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
