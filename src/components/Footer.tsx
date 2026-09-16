import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => (
  <footer className="border-t border-white/[0.07] py-6 px-6 max-w-[960px] mx-auto flex items-center justify-between">
    <span className="text-xs text-white/20 mono">© 2025 Anil Kumar</span>
    <div className="flex items-center gap-4">
      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-xs text-white/20 hover:text-white/60 transition-colors">GitHub</a>
      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-xs text-white/20 hover:text-white/60 transition-colors">LinkedIn</a>
      <a href={PERSONAL_INFO.pubDev} target="_blank" rel="noreferrer" className="text-xs text-white/20 hover:text-white/60 transition-colors">pub.dev</a>
    </div>
  </footer>
);
