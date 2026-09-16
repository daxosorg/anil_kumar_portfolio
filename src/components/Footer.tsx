import React from 'react';
import { ChevronUp, Smartphone, Mail, Phone, Linkedin, Heart, FileDown, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playSound('tap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-rose-500 to-amber-400 p-0.5 flex items-center justify-center shadow-xs">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-indigo-600">
              <Smartphone className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-sm">Anil Kumar</div>
            <div className="text-[11px] text-slate-500">Senior Flutter & Mobile App Developer • 5+ Years Experience</div>
          </div>
        </div>

        {/* Quick Contacts */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 font-medium">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-600 transition-colors flex items-center gap-1">
            <Mail className="w-3.5 h-3.5" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <span className="text-slate-300">•</span>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-emerald-600 transition-colors flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
          <span className="text-slate-300">•</span>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-300">•</span>
          <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noreferrer" className="text-indigo-700 hover:text-indigo-900 font-bold transition-colors flex items-center gap-1">
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="px-3.5 py-2 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs font-semibold"
          title="Scroll to Top"
        >
          <span className="text-[11px]">Back to Top</span>
          <ChevronUp className="w-3.5 h-3.5" />
        </button>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-100 text-center text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Anil Kumar. Engineered with Flutter principles & high-speed reactive architecture.</span>
        <span className="flex items-center gap-1">
          Crafted with 💙 for cross-platform mobile engineering
        </span>
      </div>
    </footer>
  );
};
