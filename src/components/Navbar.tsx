import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Lab', href: '#lab' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/[0.07] bg-[#0a0a0a]/90 backdrop-blur-md' : ''
      }`}
    >
      <nav className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="text-sm font-bold text-white tracking-tight">
          AK<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => playSound('tap')}
              className="text-xs text-white/50 hover:text-white transition-colors duration-150 font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => playSound('tap')}
            className="btn-primary text-[11px] py-1.5 px-3"
          >
            <Download className="w-3 h-3" /> Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/50 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/[0.07] px-6 pb-4 space-y-3"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => { playSound('tap'); setMenuOpen(false); }}
                className="block text-sm text-white/60 hover:text-white py-1"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
