import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Layers, 
  ArrowRight, 
  FileDown, 
  Download,
  Zap, 
  ShieldCheck, 
  Cpu, 
  Smartphone, 
  Star,
  ExternalLink,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PhoneSimulator } from './PhoneSimulator';
import { playSound } from '../utils/soundEffects';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onSelectProject: (projectId: string) => void;
}

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
      {/* Background Decorative Gradient Orbs for Vibrant Palette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Chip */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-700 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Senior Flutter & Dart Specialist</span>
              <span className="text-slate-300">•</span>
              <span className="text-indigo-600 font-mono font-bold">5+ Years Experience</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-rose-500 to-amber-500">Fluid, High-Speed</span> Mobile Apps.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                Hi, I'm <strong className="text-slate-900 font-bold">Anil Kumar</strong>. I architect production-grade cross-platform mobile apps for global enterprise leaders including <span className="text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-semibold border border-amber-200">Amazon DSPs</span>, <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold border border-emerald-200">Comdata</span>, <span className="text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded font-semibold border border-indigo-200">PHILIPS Signify</span>, <span className="text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded font-semibold border border-rose-200">Ashok Leyland</span>, and <span className="text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded font-semibold border border-purple-200">JK Lakshmi</span>.
              </p>
            </motion.div>

            {/* Core Capability Highlights - Vibrant Bento Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1"
            >
              {PERSONAL_INFO.quickStats.map((stat, i) => {
                const colorSchemes = [
                  { bg: 'bg-indigo-50/70', border: 'border-indigo-100', text: 'text-indigo-600' },
                  { bg: 'bg-emerald-50/70', border: 'border-emerald-100', text: 'text-emerald-600' },
                  { bg: 'bg-rose-50/70', border: 'border-rose-100', text: 'text-rose-500' },
                  { bg: 'bg-amber-50/70', border: 'border-amber-100', text: 'text-amber-600' },
                ];
                const scheme = colorSchemes[i % colorSchemes.length];

                return (
                  <div 
                    key={i} 
                    className={`p-3.5 rounded-2xl bg-white border ${scheme.border} shadow-md shadow-slate-100 hover:shadow-lg transition-all`}
                  >
                    <div className={`text-2xl font-black font-mono ${scheme.text}`}>{stat.value}</div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">{stat.label}</div>
                    <div className="text-[10px] text-slate-500 truncate">{stat.sub}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                onClick={() => playSound('click')}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Featured Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#lab"
                onClick={() => playSound('tap')}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-md shadow-slate-900/10"
              >
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>Interactive Flutter Lab</span>
              </a>

              <button
                onClick={() => {
                  playSound('tap');
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer shadow-sm hover:border-slate-300"
              >
                <FileDown className="w-4 h-4 text-indigo-600" />
                <span>Interactive CV</span>
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound('tap')}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-800 font-bold text-sm transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Verified Enterprise Brands Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 border-t border-slate-200 space-y-2.5"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Trusted Production Apps Shipped For</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 shadow-xs">
                  Amazon DSPs
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-xs">
                  Comdata (Corpay)
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 shadow-xs">
                  PHILIPS Signify
                </span>
                <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 shadow-xs">
                  Ashok Leyland
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 shadow-xs">
                  JK Lakshmi Cement
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Live Interactive 3D Phone Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div id="simulator" className="w-full flex flex-col items-center">
              <PhoneSimulator 
                onSelectProject={(id) => onSelectProject(id)} 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
