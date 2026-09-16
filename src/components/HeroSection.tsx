import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PhoneSimulator } from './PhoneSimulator';
import { playSound } from '../utils/soundEffects';

interface HeroSectionProps {
  onSelectProject: (id: string) => void;
  onOpenResume: () => void;
}

const enterpriseTags = [
  { label: 'Amazon DSPs' },
  { label: 'Comdata / Corpay' },
  { label: 'PHILIPS Signify' },
  { label: 'Ashok Leyland' },
  { label: 'JK Lakshmi Cement' },
];

const stats = [
  { value: '5+', label: 'Years' },
  { value: '+30%', label: 'Perf. Gain' },
  { value: '6', label: 'App Stores' },
  { value: '99.9%', label: 'Crash-Free' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectProject, onOpenResume }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-[960px] mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left */}
        <div className="space-y-8">

          {/* Name + role */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs mono muted">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for hire</span>
              <span className="opacity-30">·</span>
              <MapPin className="w-3 h-3" />
              <span>India · Remote</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-[1.0]">
              Anil Kumar
            </h1>

            <p className="text-lg text-white/50 font-medium">
              Senior Flutter &amp; Mobile Engineer
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 py-6 border-t border-b border-white/[0.07]">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-white tracking-tight">{s.value}</div>
                <div className="text-[10px] text-white/40 mt-0.5 mono">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Enterprise clients */}
          <div className="flex flex-wrap gap-1.5">
            {enterpriseTags.map((t, i) => (
              <span key={i} className="tag">{t.label}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" onClick={() => playSound('click')} className="btn-primary">
              View Projects <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSound('tap')}
              className="btn-ghost"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </a>
          </div>
        </div>

        {/* Right — Phone */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <PhoneSimulator onSelectProject={onSelectProject} />
        </motion.div>
      </motion.div>
    </section>
  );
};
