import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Fuel, 
  CreditCard, 
  ShieldCheck, 
  ShoppingBag, 
  Award,
  ArrowUpRight,
  Filter,
  Check,
  TrendingUp,
  Image as ImageIcon,
  Star
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory, StateManagementType } from '../types';
import { playSound } from '../utils/soundEffects';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
  onViewScreenshots: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProject,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-xs font-mono text-cyan-800 font-bold">
            <Smartphone className="w-3.5 h-3.5 text-cyan-600" />
            <span>VERIFIED PRODUCTION MOBILE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Featured Enterprise & Commercial Applications
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            High-impact mobile products engineered for Fortune 500 & enterprise industry leaders, delivering 99.9% crash-free SLAs, +30% performance gains, and verified multi-store publishing.
          </p>
        </div>

        {/* View Layout Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-slate-200 shadow-sm self-start md:self-auto">
          <button
            onClick={() => {
              playSound('tap');
              setViewLayout('bento');
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              viewLayout === 'bento'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Bento Grid View
          </button>
          <button
            onClick={() => {
              playSound('tap');
              setViewLayout('detailed');
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              viewLayout === 'detailed'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Business Impact View
          </button>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="p-4 mb-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Domain:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playSound('tap');
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-600 text-white shadow-sm font-bold'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* State Management Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Layers className="w-3 h-3" /> Architecture:
          </span>
          {stateManagements.map((sm) => (
            <button
              key={sm}
              onClick={() => {
                playSound('tap');
                setSelectedStateMgmt(sm);
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedStateMgmt === sm
                  ? 'bg-slate-900 text-white shadow-sm font-bold'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
              }`}
            >
              {sm}
            </button>
          ))}
        </div>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const Icon = getProjectIcon(project.phoneMockupType);
            const isLargeCard = viewLayout === 'bento' && (index === 0 || index === 2);

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group relative rounded-3xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-100/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm ${
                  isLargeCard ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Accent Gradient Glow */}
                <div 
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Card Header & Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  
                  {/* Top Bar: Icon, Client, State Management Pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: `${project.accentColor}18`, border: `1px solid ${project.accentColor}40` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: project.accentColor }} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: project.accentColor }}>
                          {project.client}
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-cyan-700 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold text-slate-700">
                      {project.stateManagement}
                    </span>
                  </div>

                  {/* Subtitle & Summary */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-slate-700">{project.subtitle}</div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {project.metrics.map((metric, mi) => (
                      <div key={mi} className="p-2.5 rounded-xl bg-slate-50 border border-slate-150">
                        <div className="text-xs sm:text-sm font-extrabold font-mono text-cyan-900">{metric.value}</div>
                        <div className="text-[10px] text-slate-500 font-medium truncate">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Professional Deliverables & Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-semibold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Measurable Business Impact (detailed view) */}
                  {viewLayout === 'detailed' && (
                    <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1">
                      <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Measurable Impact Delivered:</span>
                      </div>
                      <p className="text-xs text-emerald-900 leading-relaxed">
                        {project.businessImpact}
                      </p>
                    </div>
                  )}

                </div>

                {/* Card Footer: Verified Store Links & Action Buttons */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  
                  {/* Verified Store Buttons */}
                  <div className="flex items-center gap-2">
                    {project.storeLinks.playStore && (
                      <a
                        href={project.storeLinks.playStore}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playSound('click')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 transition-all shadow-xs"
                        title="View on Google Play Store"
                      >
                        <svg className="w-3 h-3 fill-current text-emerald-600" viewBox="0 0 24 24">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 01-.61-1.428V3.242c0-.53.21-1.04.61-1.428zM15.206 13.414l2.76 2.76-12.723 7.348 9.963-10.108zm2.76-2.828l-2.76 2.76L5.243.478 17.966 10.586zm1.196.69l3.415 1.972a1.442 1.442 0 010 2.504l-3.415 1.972-2.348-2.224 2.348-2.224z" />
                        </svg>
                        <span>Google Play</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                      </a>
                    )}

                    {project.storeLinks.appStore && (
                      <a
                        href={project.storeLinks.appStore}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playSound('click')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-800 transition-all shadow-xs"
                        title="View on Apple App Store"
                      >
                        <svg className="w-3 h-3 fill-current text-slate-900" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.58.67-1.09 1.74-.95 2.77 1 .08 2.05-.52 2.67-1.27z" />
                        </svg>
                        <span>App Store</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                      </a>
                    )}
                  </div>

                  {/* Actions: View Official Screenshots & Impact Deep Dive */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        playSound('tap');
                        onViewScreenshots(project);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-cyan-800 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all border border-slate-200 shadow-xs"
                      title="View Official Store Screenshots & Mockups"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Screenshots ({project.screenshots.length})</span>
                    </button>

                    <button
                      onClick={() => {
                        playSound('click');
                        onSelectProject(project);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all shadow-sm"
                    >
                      <span>Impact Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

    </section>
  );
};
