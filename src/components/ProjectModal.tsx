import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Smartphone,
  Award,
  TrendingUp,
  Image as ImageIcon,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { Project, AppScreenshot } from '../types';
import { playSound } from '../utils/soundEffects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'screenshots'>('overview');
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number>(0);

  if (!project) return null;

  const currentScreenshot = project.screenshots[selectedScreenshotIndex] || project.screenshots[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playSound('tap');
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl shadow-cyan-950/40 overflow-hidden z-10 my-4 sm:my-8 flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: project.accentColor }}>
                  {project.client}
                </span>
                <span className="text-slate-600">•</span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono text-cyan-300 font-bold border border-slate-700">
                  {project.stateManagement}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-[10px] font-mono text-emerald-400 font-bold border border-emerald-500/30">
                  Production Verified
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300">{project.subtitle}</p>
            </div>

            <button
              onClick={() => {
                playSound('tap');
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-all shrink-0"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Tabs */}
          <div className="flex items-center gap-2 px-6 sm:px-8 py-2.5 bg-slate-950/80 border-b border-slate-800">
            <button
              onClick={() => {
                playSound('tap');
                setActiveTab('overview');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Business Impact & Architecture</span>
            </button>

            <button
              onClick={() => {
                playSound('tap');
                setActiveTab('screenshots');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'screenshots'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Store Screenshots & Live Views ({project.screenshots.length})</span>
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                
                {/* Measurable Results & Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 relative overflow-hidden">
                      <div className="text-2xl font-extrabold font-mono text-cyan-300">{m.value}</div>
                      <div className="text-xs font-bold text-slate-200 mt-1">{m.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">{m.description}</div>
                    </div>
                  ))}
                </div>

                {/* Business Impact Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-slate-950 to-slate-950 border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Measurable Business & Operational Impact:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {project.businessImpact}
                  </p>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      The Engineering Challenge
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Anil's Technical Solution
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Key Implemented Deliverables:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.keyFeatures.map((feat, fi) => (
                      <div key={fi} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hiring Manager & Architectural Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono text-cyan-300 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architectural Pillars:</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.architectureHighlights.map((arch, ai) => (
                        <li key={ai} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono text-emerald-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Hiring Manager Criteria Met:</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.hiringHighlights.map((hh, hi) => (
                        <li key={hi} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hh}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            )}

            {activeTab === 'screenshots' && (
              <div className="space-y-6">
                
                {/* Screenshot Header & Selector */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      Verified Store Preview
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400 font-medium">
                      {currentScreenshot.storeSource}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {project.screenshots.map((sn, idx) => (
                      <button
                        key={sn.id}
                        onClick={() => {
                          playSound('tap');
                          setSelectedScreenshotIndex(idx);
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          selectedScreenshotIndex === idx
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {sn.tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Screenshot Interactive Stage */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Phone Screen Preview Display */}
                  <div className="md:col-span-6 flex justify-center">
                    <div className="w-[260px] sm:w-[280px] bg-slate-950 rounded-[38px] p-3 border-2 border-slate-700 shadow-2xl shadow-cyan-950/60 ring-1 ring-slate-800">
                      
                      {/* Notch */}
                      <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-slate-800" />
                      </div>

                      {/* Screen Content Graphic */}
                      <div className="rounded-[28px] overflow-hidden bg-[#0d121f] border border-slate-800 p-3.5 space-y-3 min-h-[380px] flex flex-col justify-between text-xs text-white">
                        
                        {/* Status bar */}
                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold">
                          <span>09:41</span>
                          <span className="text-cyan-400 font-mono">5G • Verified</span>
                        </div>

                        {/* Visual Badge for Store source */}
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-[10px] font-bold" style={{ color: project.accentColor }}>
                            {project.client}
                          </span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                            {currentScreenshot.storeSource}
                          </span>
                        </div>

                        {/* Dynamic Screen Graphic Presentation */}
                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-2 flex-1 flex flex-col justify-center">
                          <div className="text-xs font-extrabold text-white">{currentScreenshot.title}</div>
                          <p className="text-[11px] text-slate-400 leading-relaxed">
                            {currentScreenshot.caption}
                          </p>

                          <div className="pt-3 flex flex-wrap gap-1.5">
                            <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] font-mono">
                              {project.stateManagement}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="text-center text-[9px] text-slate-500 font-mono">
                          Official Store Asset • {project.title}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Right: Screenshot Breakdown & Store Context */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold border border-cyan-500/30">
                          Screenshot #{selectedScreenshotIndex + 1} of {project.screenshots.length}
                        </span>
                        <span className="text-xs text-slate-400">{currentScreenshot.storeSource}</span>
                      </div>

                      <h4 className="text-lg font-bold text-white">{currentScreenshot.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {currentScreenshot.caption}
                      </p>

                      <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                        <div className="font-bold text-cyan-400 font-mono text-[11px] uppercase">
                          Hiring Manager Evaluation:
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          This screen demonstrates Anil's end-to-end craftsmanship in real-time responsive Flutter UI, state persistence, exception handling, and native OS guideline compliance.
                        </p>
                      </div>
                    </div>

                    {/* Screenshot Pagination Buttons */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          playSound('tap');
                          setSelectedScreenshotIndex((prev) => (prev > 0 ? prev - 1 : project.screenshots.length - 1));
                        }}
                        className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous Screenshot</span>
                      </button>

                      <button
                        onClick={() => {
                          playSound('tap');
                          setSelectedScreenshotIndex((prev) => (prev < project.screenshots.length - 1 ? prev + 1 : 0));
                        }}
                        className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Next Screenshot</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            )}
          </div>

          {/* Footer Store Actions */}
          <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {project.storeLinks.playStore && (
                <a
                  href={project.storeLinks.playStore}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound('click')}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-emerald-600/20"
                >
                  <span>Verified Google Play Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.storeLinks.appStore && (
                <a
                  href={project.storeLinks.appStore}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound('click')}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-cyan-600/20"
                >
                  <span>Verified Apple App Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={() => {
                playSound('tap');
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
