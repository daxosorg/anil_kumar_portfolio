import React from 'react';
import { ChevronUp, Smartphone, Mail, Phone, Linkedin, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playSound('tap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#020817] py-12 px-4 sm:px-6 lg:px-8 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.006 11.086l-6.32 6.32L14.32 23.72h7.374L14.32 16.32l5.093-5.234h-5.093z" />
            </svg>
          </div>
          <div>
            <div className="font-extrabold text-white text-sm">Anil Kumar</div>
            <div className="text-[11px] text-slate-500">Senior Flutter &amp; Mobile App Developer • 5+ Years Experience</div>
          </div>
        </div>

        {/* Quick Contacts */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 font-medium">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Mail className="w-3.5 h-3.5" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <span className="text-white/10">•</span>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
          <span className="text-white/10">•</span>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-white/10">•</span>
          <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors flex items-center gap-1">
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="px-3.5 py-2 rounded-full glass-card hover:bg-white/10 border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer font-semibold"
          title="Scroll to Top"
        >
          <span className="text-[11px]">Back to Top</span>
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.04] text-center text-[11px] text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Anil Kumar. Engineered with Flutter principles &amp; high-speed reactive architecture.</span>
        <span className="flex items-center gap-1">
          Crafted with 💙 for cross-platform mobile engineering
        </span>
      </div>
    </footer>
  );
};
