import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Zap, 
  Smartphone, 
  Fuel, 
  CreditCard, 
  ShieldCheck, 
  ShoppingBag, 
  Award,
  ArrowUpRight,
  Filter,
  TrendingUp,
  Image as ImageIcon,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { playSound } from '../utils/soundEffects';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
  onViewSnippet?: (project: Project) => void;
  onViewScreenshots?: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProject,
  onViewSnippet,
  onViewScreenshots,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStateMgmt, setSelectedStateMgmt] = useState<string>('All');
  const [viewLayout, setViewLayout] = useState<'bento' | 'detailed'>('detailed');

  const categories = ['All', 'Logistics & Fuel', 'Warranty & IoT', 'Loyalty & Rewards'];
  const stateManagements = ['All', 'BLoC', 'GetX', 'Riverpod'];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchState = selectedStateMgmt === 'All' || p.stateManagement === selectedStateMgmt;
    return matchCategory && matchState;
  });

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'amazon': return Fuel;
      case 'comdata': return CreditCard;
      case 'signify': return ShieldCheck;
      case 'ashok': return ShoppingBag;
      case 'sky': return Award;
      default: return Smartphone;
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle section glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-white">Projects</h2>
          </div>

          {/* Layout Toggle */}
          <div className="flex items-center gap-1 p-1 glass-card rounded-full border border-white/[0.08] self-start md:self-auto">
            <button
              onClick={() => { playSound('tap'); setViewLayout('bento'); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewLayout === 'bento'
                  ? 'bg-white/10 text-white shadow-sm border border-white/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bento Grid
            </button>
            <button
              onClick={() => { playSound('tap'); setViewLayout('detailed'); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewLayout === 'detailed'
                  ? 'bg-white/10 text-white shadow-sm border border-white/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Impact View
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 mb-8 glass-card rounded-2xl border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Domain:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { playSound('tap'); setSelectedCategory(cat); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-white/[0.05] text-slate-400 hover:text-white hover:bg-white/10 border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Layers className="w-3 h-3" /> Architecture:
            </span>
            {stateManagements.map((sm) => (
              <button
                key={sm}
                onClick={() => { playSound('tap'); setSelectedStateMgmt(sm); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedStateMgmt === sm
                    ? 'bg-violet-500 text-white font-bold shadow-lg shadow-violet-500/20'
                    : 'bg-white/[0.05] text-slate-400 hover:text-white hover:bg-white/10 border border-white/[0.06]'
                }`}
              >
                {sm}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = getProjectIcon(project.phoneMockupType);
              const isLargeCard = viewLayout === 'bento' && (index === 0 || index === 2);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group relative rounded-3xl glass-card-hover border border-white/[0.08] flex flex-col justify-between overflow-hidden ${
                    isLargeCard ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Accent glow top-right */}
                  <div
                    className="absolute top-0 right-0 w-52 h-52 rounded-full blur-3xl opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity duration-500"
                    style={{ backgroundColor: project.accentColor }}
                  />

                  {/* Gradient top border on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}60, transparent)` }}
                  />

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4 relative">
                    {/* Top: Icon + title + state pill */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${project.accentColor}18`, border: `1px solid ${project.accentColor}40` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: project.accentColor }} />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: project.accentColor }}>
                            {project.client}
                          </span>
                          <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono font-bold text-slate-300 flex-shrink-0">
                        {project.stateManagement}
                      </span>
                    </div>


                    {/* Metrics badges */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, mi) => (
                        <div key={mi} className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-center">
                          <div className="text-xs sm:text-sm font-extrabold font-mono text-cyan-400">{metric.value}</div>
                          <div className="text-[9px] text-slate-500 font-medium truncate mt-0.5">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.07] text-[10px] font-semibold text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>


                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    {/* Store links */}
                    <div className="flex items-center gap-2">
                      {project.storeLinks.playStore && (
                        <a
                          href={project.storeLinks.playStore}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => playSound('click')}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-emerald-500/15 border border-white/[0.08] hover:border-emerald-500/30 text-[11px] font-bold text-emerald-400 transition-all"
                        >
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 01-.61-1.428V3.242c0-.53.21-1.04.61-1.428zM15.206 13.414l2.76 2.76-12.723 7.348 9.963-10.108zm2.76-2.828l-2.76 2.76L5.243.478 17.966 10.586zm1.196.69l3.415 1.972a1.442 1.442 0 010 2.504l-3.415 1.972-2.348-2.224 2.348-2.224z" />
                          </svg>
                          <span>Play Store</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      )}
                      {project.storeLinks.appStore && (
                        <a
                          href={project.storeLinks.appStore}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => playSound('click')}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-slate-500/15 border border-white/[0.08] hover:border-slate-400/30 text-[11px] font-bold text-slate-300 transition-all"
                        >
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8.92-2.85-.9.04-1.99.6-2.64 1.35-.58.67-1.09 1.74-.95 2.77 1 .08 2.05-.52 2.67-1.27z" />
                          </svg>
                          <span>App Store</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {onViewScreenshots && (
                        <button
                          onClick={() => { playSound('tap'); onViewScreenshots(project); }}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-cyan-500/10 border border-white/[0.08] hover:border-cyan-500/20 text-cyan-400 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all"
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>Screenshots ({project.screenshots.length})</span>
                        </button>
                      )}
                      <button
                        onClick={() => { playSound('click'); onSelectProject(project); }}
                        className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all shadow-md shadow-cyan-500/20"
                      >
                        <span>Deep Dive</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
