import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  FileDown, 
  Download,
  Zap, 
  ShieldCheck, 
  Cpu, 
  Smartphone, 
  ExternalLink,
  Code2,
  Sparkles,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PhoneSimulator } from './PhoneSimulator';
import { playSound } from '../utils/soundEffects';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onSelectProject: (projectId: string) => void;
}

/* Animated counter for stats */
function StatCard({ value, label, color }: { value: string; label: string; sub: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-4 transition-all duration-400 group cursor-default hover:border-white/[0.12]"
    >
      <div className={`text-2xl font-black font-mono tracking-tight ${color}`}>{value}</div>
      <div className="text-[11px] text-white/50 mt-1">{label}</div>
    </motion.div>
  );
}

const statColors = [
  'text-cyan-400',
  'text-emerald-400',
  'text-violet-400',
  'text-amber-400',
];

const enterpriseTags = [
  { label: 'Amazon DSPs' },
  { label: 'Comdata / Corpay' },
  { label: 'PHILIPS Signify' },
  { label: 'Ashok Leyland' },
  { label: 'JK Lakshmi Cement' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenContact,
  onSelectProject,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f0f0f]" />

      {/* Single subtle radial glow — no orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* ── Left Column ── */}
          <div className="lg:col-span-7 space-y-7 text-left">

            {/* Status chip */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-xs font-mono text-white/40"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for hire · 5+ Years Flutter</span>
            </motion.div>

            {/* Name + Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {/* Big name */}
              <div className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.5rem] font-black tracking-[-0.04em] text-white leading-[1.0]">
                Anil Kumar
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.08] text-white/80">
                Crafting{' '}
                <span className="text-shimmer">Fluid, High-Speed</span>
                <br />
                Mobile Apps.
              </h1>

              {/* Sub */}
              <p className="text-sm text-white/35 max-w-lg leading-relaxed">
                5+ years shipping production Flutter apps across 6 global app stores.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {PERSONAL_INFO.quickStats.map((stat, i) => (
                <StatCard
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  sub={stat.sub}
                  color={statColors[i % statColors.length]}
                />
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={() => playSound('click')}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 transition-all duration-300 cursor-pointer hover:scale-[1.03] active:scale-[0.97]"
              >
                <span>Explore Featured Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#lab"
                onClick={() => playSound('tap')}
                className="flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:bg-white/[0.08] text-slate-200 font-semibold text-sm transition-all duration-300 cursor-pointer border border-white/[0.08] hover:border-white/20"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Interactive Flutter Lab</span>
              </a>

              <button
                onClick={() => { playSound('tap'); onOpenResume(); }}
                className="flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-slate-300 font-semibold text-sm transition-all duration-300 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>Interactive CV</span>
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound('tap')}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-300 font-bold text-sm transition-all duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Enterprise strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 border-t border-white/[0.05] flex flex-wrap items-center gap-1.5"
            >
              {enterpriseTags.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-medium border border-white/[0.07] text-white/40 bg-white/[0.02]">
                  {t.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Phone Simulator ── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="simulator"
              className="w-full flex flex-col items-center relative"
            >
              <PhoneSimulator onSelectProject={(id) => onSelectProject(id)} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
