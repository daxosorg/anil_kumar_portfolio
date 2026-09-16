import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Boxes, 
  Flame, 
  Rocket, 
  ShieldCheck, 
  Globe, 
  Smartphone, 
  Play, 
  Apple, 
  ShoppingBag, 
  Zap,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES, GLOBAL_STORES } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

/* ── Circular Progress Ring ── */
function CircularProgress({
  percentage,
  size = 80,
  strokeWidth = 6,
  color = '#22d3ee',
  label,
  sub,
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label: string;
  sub?: string;
}) {
  const ref = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-60px' });
  const [animated, setAnimated] = useState(false);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animated ? percentage / 100 : 0) * circumference;

  useEffect(() => {
    if (inView && !animated) {
      const timer = setTimeout(() => setAnimated(true), 100);
      return () => clearTimeout(timer);
    }
  }, [inView, animated]);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-2 group cursor-default">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={strokeWidth}
          />
          {/* Fill */}
          <circle
            ref={ref}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </svg>
        {/* Percentage label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-black font-mono" style={{ color }}>
            {animated ? `${percentage}%` : '0%'}
          </span>
        </div>
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none"
          style={{ boxShadow: `0 0 20px ${color}40` }}
        />
      </div>
      <div className="text-center">
        <div className="text-xs font-bold text-white/90 leading-tight max-w-[90px] text-center">{label}</div>
        {sub && <div className="text-[9px] text-slate-500 mt-0.5 leading-tight max-w-[90px] text-center">{sub}</div>}
      </div>
    </div>
  );
}

const ringColors = ['#22d3ee', '#a78bfa', '#34d399', '#f59e0b', '#f472b6', '#60a5fa'];

export const SkillsEcosystem: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':      return Code2;
      case 'Boxes':      return Boxes;
      case 'Flame':      return Flame;
      case 'Rocket':     return Rocket;
      case 'ShieldCheck':return ShieldCheck;
      default:           return Code2;
    }
  };

  const getStoreIcon = (icon: string) => {
    switch (icon) {
      case 'Play':       return Play;
      case 'Apple':      return Apple;
      case 'Smartphone': return Smartphone;
      case 'ShoppingBag':return ShoppingBag;
      case 'Globe':      return Globe;
      case 'Zap':        return Zap;
      default:           return Smartphone;
    }
  };

  const currentCategoryData = SKILL_CATEGORIES.find((c) => c.id === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="space-y-4 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-violet-500/20 text-xs font-mono text-violet-400 font-bold">
            <Boxes className="w-3.5 h-3.5" />
            <span>TECHNICAL ARSENAL &amp; DISTRIBUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Skills, Architecture &amp;{' '}
            <span className="text-shimmer">Multi-Store Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Deep mastery in Dart &amp; Flutter internals, reactive state management, Firebase telemetry, and verified distribution across 6 major global app platforms.
          </p>
        </div>

        {/* 6 Global Stores Strip */}
        <div className="mb-14 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Multi-Store Production Deployment Ecosystem (6 Stores)</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">OEM &amp; Enterprise Compliant</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {GLOBAL_STORES.map((store, i) => {
              const Icon = getStoreIcon(store.icon);
              return (
                <motion.div
                  key={store.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass-card-hover rounded-2xl p-4 flex flex-col items-center gap-2 text-center cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-xs font-bold text-white/90">{store.name}</div>
                  <div className="text-[9px] text-slate-500 leading-tight">{store.metrics}</div>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    {store.status}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills with Circular Progress */}
        <div className="glass-card rounded-3xl border border-white/[0.08] overflow-hidden">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-5 border-b border-white/[0.06]">
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat.iconName);
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => { playSound('tap'); setActiveCategory(cat.id); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Skills Content */}
          <AnimatedSkillPanel category={currentCategoryData} />
        </div>

      </div>
    </section>
  );
};

function AnimatedSkillPanel({ category }: { category: typeof SKILL_CATEGORIES[0] }) {
  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 sm:p-8"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white">{category.name}</h3>
        <p className="text-sm text-slate-400 mt-1">{category.description}</p>
      </div>

      {/* Circular Progress Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center mb-8">
        {category.skills.map((skill, i) => (
          <CircularProgress
            key={skill.name}
            percentage={skill.level}
            size={88}
            strokeWidth={7}
            color={ringColors[i % ringColors.length]}
            label={skill.name}
            sub={skill.highlight}
          />
        ))}
      </div>

      {/* Skill Detail Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {category.skills.map((skill, i) => (
          <div
            key={skill.name}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-all"
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
              style={{ backgroundColor: ringColors[i % ringColors.length], boxShadow: `0 0 8px ${ringColors[i % ringColors.length]}60` }}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white/90">{skill.name}</span>
                {skill.isPrimary && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">CORE</span>
                )}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{skill.highlight}</div>
            </div>
            <span
              className="ml-auto text-xs font-black font-mono flex-shrink-0"
              style={{ color: ringColors[i % ringColors.length] }}
            >
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}


