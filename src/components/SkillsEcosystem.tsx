import React, { useState } from 'react';
import { motion } from 'motion/react';
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

export const SkillsEcosystem: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Boxes': return Boxes;
      case 'Flame': return Flame;
      case 'Rocket': return Rocket;
      case 'ShieldCheck': return ShieldCheck;
      default: return Code2;
    }
  };

  const getStoreIcon = (icon: string) => {
    switch (icon) {
      case 'Play': return Play;
      case 'Apple': return Apple;
      case 'Smartphone': return Smartphone;
      case 'ShoppingBag': return ShoppingBag;
      case 'Globe': return Globe;
      case 'Zap': return Zap;
      default: return Smartphone;
    }
  };

  const currentCategoryData = SKILL_CATEGORIES.find((c) => c.id === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-mono text-indigo-700 font-bold">
          <Boxes className="w-3.5 h-3.5" />
          <span>TECHNICAL ARSENAL & DISTRIBUTION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Skills, Architecture & Multi-Store Ecosystem
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Deep mastery in Dart & Flutter internals, reactive state management, Firebase telemetry, and verified distribution across 6 major global app platforms.
        </p>
      </div>

      {/* 6 Global Stores Publishing Showcase Strip */}
      <div className="mb-14 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-700 flex items-center gap-2">
            <Globe className="w-4 h-4 text-indigo-600" />
            <span>Multi-Store Production Deployment Ecosystem (6 Stores)</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">OEM & Enterprise Compliant</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {GLOBAL_STORES.map((store, i) => {
            const Icon = getStoreIcon(store.icon);
            return (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {store.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{store.name}</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-tight font-medium">{store.metrics}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Skills Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Category Tabs */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 px-1">
            Proficiency Domains:
          </div>
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playSound('tap');
                  setActiveCategory(cat.id);
                }}
                className={`w-full p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center gap-3 border ${
                  isActive
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-xs'
                }`}
              >
                <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>{cat.name}</div>
                  <div className={`text-[10px] line-clamp-1 ${isActive ? 'text-indigo-100' : 'text-slate-500'}`}>{cat.description}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Skills Breakdown Gauge Cards */}
        <div className="lg:col-span-8 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl shadow-slate-100/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">{currentCategoryData.name}</h3>
              <p className="text-xs text-slate-500">{currentCategoryData.description}</p>
            </div>
            <span className="text-[11px] font-mono text-indigo-600 font-bold self-start sm:self-auto">
              5+ Years Production Tested
            </span>
          </div>

          <div className="space-y-4">
            {currentCategoryData.skills.map((skill, si) => (
              <div key={si} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">{skill.name}</span>
                    {skill.isPrimary && (
                      <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[9px] font-mono font-bold border border-indigo-200">
                        Primary Stack
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-600">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.6, delay: si * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-rose-500"
                  />
                </div>

                {skill.highlight && (
                  <div className="text-[11px] text-slate-600 flex items-center gap-1.5 pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{skill.highlight}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
