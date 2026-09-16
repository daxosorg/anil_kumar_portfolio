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
function StatCard({ value, label, sub, color }: { value: string; label: string; sub: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card rounded-2xl p-4 hover:border-white/20 transition-all duration-300 group cursor-default"
    >
      <div className={`text-2xl font-black font-mono tracking-tight ${color}`}>{value}</div>
      <div className="text-xs font-bold text-white/90 mt-0.5">{label}</div>
      <div className="text-[10px] text-slate-500 truncate mt-0.5">{sub}</div>
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
  { label: 'Amazon DSPs',    color: 'text-amber-300  border-amber-500/20 bg-amber-500/10' },
  { label: 'Comdata',        color: 'text-emerald-300 border-emerald-500/20 bg-emerald-500/10' },
  { label: 'PHILIPS Signify',color: 'text-blue-300    border-blue-500/20 bg-blue-500/10' },
  { label: 'Ashok Leyland',  color: 'text-rose-300    border-rose-500/20 bg-rose-500/10' },
  { label: 'JK Lakshmi',     color: 'text-purple-300  border-purple-500/20 bg-purple-500/10' },
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
      {/* Background: deep dark with gradient radial spots */}
      <div className="absolute inset-0 bg-[#020817]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none animate-orb-drift" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" style={{ animationDelay: '4s', animation: 'orb-drift 16s ease-in-out infinite' }} />
      <div className="absolute top-3/4 left-1/4 w-[300px] h-[300px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" style={{ animation: 'orb-drift 20s ease-in-out infinite reverse' }} />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-100 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* ── Left Column ── */}
          <div className="lg:col-span-7 space-y-7 text-left">

            {/* Status chip */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono text-slate-300 border border-white/[0.08]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">Senior Flutter &amp; Dart Specialist</span>
              <span className="text-white/20">|</span>
              <span className="text-cyan-400 font-bold">5+ Years Experience</span>
            </motion.div>

            {/* Name + Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {/* Big name */}
              <div className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.5rem] font-black tracking-tight text-white leading-[1.05]">
                Anil Kumar
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.5rem] font-black tracking-tight leading-[1.08] text-white/90">
                Crafting{' '}
                <span className="text-shimmer">Fluid, High-Speed</span>
                <br />
                Mobile Apps.
              </h1>

              {/* Sub */}
              <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
                I architect production-grade cross-platform apps for global enterprise leaders —{' '}
                {enterpriseTags.map((t, i) => (
                  <span key={i}>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-semibold ${t.color}`}>
                      {t.label}
                    </span>
                    {i < enterpriseTags.length - 1 ? ' ' : ''}
                  </span>
                ))}
                .
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

            {/* Verified enterprises strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-4 border-t border-white/[0.06] space-y-2.5"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Production Apps Shipped For</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {enterpriseTags.map((t, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold border ${t.color}`}>
                    {t.label}
                  </span>
                ))}
              </div>
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
