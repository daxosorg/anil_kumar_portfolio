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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase"
                  style={{ backgroundColor: `${project.accentColor}25`, color: project.accentColor, border: `1px solid ${project.accentColor}50` }}
                >
                  {project.client}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-bold">
                  {project.roleTitle}
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  {project.stateManagement}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 font-medium">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={() => {
                playSound('tap');
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Tab Navigation */}
          <div className="flex border-b border-slate-800 bg-slate-950/50 px-6">
            <button
              onClick={() => {
                playSound('tap');
                setActiveTab('overview');
              }}
              className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Architecture & Engineering Deep Dive</span>
            </button>

            <button
              onClick={() => {
                playSound('tap');
                setActiveTab('screenshots');
              }}
              className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'screenshots'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Real Store Screenshots ({project.screenshots.length})</span>
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-200 flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                
                {/* Metrics Highlight Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                      <div className="text-xl sm:text-2xl font-extrabold font-mono text-cyan-400">
                        {metric.value}
                      </div>
                      <div className="text-xs font-bold text-slate-300">{metric.label}</div>
                      <p className="text-[11px] text-slate-400">{metric.description}</p>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-2">
                    <div className="text-xs font-bold font-mono text-rose-400 uppercase tracking-wider">
                      Technical Challenge & Constraint
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                    <div className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider">
                      Architectural Solution & Delivery
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Business Impact Banner */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-slate-900 border border-cyan-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-bold uppercase">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span>Measurable Business Impact</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {project.businessImpact}
                  </p>
                </div>

                {/* Key Features & Architecture Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>Production Feature Deliverables</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span>Clean Architecture Highlights</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {project.architectureHighlights.map((arch, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Screenshots Quick Strip */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-cyan-400" />
                        <h4 className="text-xs sm:text-sm font-bold text-white font-mono uppercase">
                          Verified App Store & Google Play Screenshots ({project.screenshots.length})
                        </h4>
                      </div>
                      <button
                        onClick={() => {
                          playSound('tap');
                          setActiveTab('screenshots');
                        }}
                        className="text-xs text-cyan-400 hover:text-cyan-300 font-bold underline cursor-pointer"
                      >
                        View Interactive Showcase →
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {project.screenshots.slice(0, 4).map((sn, idx) => (
                        <div
                          key={sn.id}
                          onClick={() => {
                            playSound('tap');
                            setSelectedScreenshotIndex(idx);
                            setActiveTab('screenshots');
                          }}
                          className="group relative rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-400 bg-slate-900 cursor-pointer transition-all hover:scale-[1.02]"
                        >
                          {sn.imageUrl ? (
                            <img
                              src={sn.imageUrl}
                              alt={sn.title}
                              className="w-full h-36 object-cover object-top transition-transform group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-36 flex items-center justify-center bg-slate-950 text-xs text-slate-500 font-mono">
                              {sn.tag}
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-2 flex flex-col justify-end">
                            <span className="text-[10px] font-bold text-white truncate">{sn.title}</span>
                            <span className="text-[9px] text-cyan-400 font-mono">{sn.storeSource}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}

            {activeTab === 'screenshots' && (
              <div className="space-y-6">
                
                {/* Screenshot Header & Selector */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      Official Play Store Screenshots
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-emerald-400 font-mono font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {currentScreenshot.storeSource} Verified
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.screenshots.map((sn, idx) => (
                      <button
                        key={sn.id}
                        onClick={() => {
                          playSound('tap');
                          setSelectedScreenshotIndex(idx);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          selectedScreenshotIndex === idx
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>{sn.tag}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Screenshot Interactive Stage */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Phone Screen Preview Display with Real Screenshot */}
                  <div className="md:col-span-6 flex flex-col items-center">
                    <div className="relative group">
                      {/* Phone Hardware Mockup Bezel */}
                      <div className="w-[260px] sm:w-[280px] bg-slate-950 rounded-[44px] p-3 border-2 border-slate-700 shadow-2xl shadow-cyan-950/80 ring-1 ring-slate-800">
                        
                        {/* Dynamic Island / Notch */}
                        <div className="w-24 h-5 bg-black rounded-full mx-auto mb-2 flex items-center justify-center gap-1.5 shadow-inner">
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
                        </div>

                        {/* Screen Content Graphic / Real Image Display */}
                        <div className="rounded-[32px] overflow-hidden bg-[#0d121f] border border-slate-800 relative aspect-[9/19.5] flex items-center justify-center">
                          {currentScreenshot.imageUrl ? (
                            <img
                              src={currentScreenshot.imageUrl}
                              alt={currentScreenshot.title}
                              className="w-full h-full object-cover object-top select-none transition-transform duration-300 group-hover:scale-102"
                            />
                          ) : (
                            <div className="p-4 text-center text-xs text-slate-400">
                              {currentScreenshot.title}
                            </div>
                          )}

                          {/* Hover Overlay to Expand Lightbox */}
                          <div 
                            onClick={() => {
                              playSound('click');
                              setIsLightboxOpen(true);
                            }}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white cursor-zoom-in"
                          >
                            <Maximize2 className="w-8 h-8 text-cyan-400 animate-pulse" />
                            <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 shadow-lg">
                              Inspect Full Size
                            </span>
                          </div>
                        </div>

                        {/* Home Indicator Bar */}
                        <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
                      </div>
                    </div>

                    {/* Quick Lightbox Button */}
                    <button
                      onClick={() => {
                        playSound('click');
                        setIsLightboxOpen(true);
                      }}
                      className="mt-3 text-xs text-cyan-400 hover:text-cyan-300 font-mono font-semibold flex items-center gap-1.5 cursor-pointer py-1 px-3 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click phone or here for Fullscreen High-Res View</span>
                    </button>
                  </div>

                  {/* Right: Screenshot Breakdown & Store Context */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold border border-cyan-500/30">
                            Screenshot #{selectedScreenshotIndex + 1} of {project.screenshots.length}
                          </span>
                          <span className="text-xs text-slate-400">{currentScreenshot.tag}</span>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                          {currentScreenshot.storeSource}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white">{currentScreenshot.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {currentScreenshot.caption}
                      </p>

                      <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                        <div className="font-bold text-cyan-400 font-mono text-[11px] uppercase">
                          Production UI & Flutter Implementation:
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          This screen represents live, verified production Flutter UI delivered by Anil Kumar for {project.client}, adhering to pixel-perfect design standards, state decoupling, and responsive scaling across Android & iOS handhelds.
                        </p>
                      </div>
                    </div>

                    {/* Screenshot Pagination Buttons */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => {
                          playSound('tap');
                          setSelectedScreenshotIndex((prev) => (prev > 0 ? prev - 1 : project.screenshots.length - 1));
                        }}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous Screenshot</span>
                      </button>

                      <button
                        onClick={() => {
                          playSound('tap');
                          setSelectedScreenshotIndex((prev) => (prev < project.screenshots.length - 1 ? prev + 1 : 0));
                        }}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Next Screenshot</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="pt-2">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                        All Project Screenshots:
                      </div>
                      <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        {project.screenshots.map((sn, idx) => (
                          <button
                            key={sn.id}
                            onClick={() => {
                              playSound('tap');
                              setSelectedScreenshotIndex(idx);
                            }}
                            className={`relative rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer w-16 h-24 ${
                              selectedScreenshotIndex === idx
                                ? 'border-cyan-400 ring-2 ring-cyan-500/50 scale-105'
                                : 'border-slate-800 opacity-60 hover:opacity-100'
                            }`}
                          >
                            {sn.imageUrl ? (
                              <img src={sn.imageUrl} alt={sn.title} className="w-full h-full object-cover object-top" />
                            ) : (
                              <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                                {idx + 1}
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            )}
          </div>

          {/* Fullscreen Lightbox Modal */}
          {isLightboxOpen && (
            <div 
              className="fixed inset-0 z-60 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6"
              onClick={() => setIsLightboxOpen(false)}
            >
              {/* Top Bar */}
              <div 
                className="w-full max-w-4xl flex items-center justify-between text-white py-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <h4 className="text-base sm:text-lg font-bold">{currentScreenshot.title}</h4>
                  <p className="text-xs text-slate-400 font-mono">{project.title} • {currentScreenshot.storeSource}</p>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white cursor-pointer transition-all"
                  title="Close Fullscreen"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Center Image */}
              <div 
                className="relative max-h-[80vh] flex items-center justify-center my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentScreenshot.imageUrl}
                  alt={currentScreenshot.title}
                  className="max-h-[78vh] w-auto max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-slate-700"
                />

                {/* Left/Right Prev/Next in Lightbox */}
                <button
                  onClick={() => setSelectedScreenshotIndex((prev) => (prev > 0 ? prev - 1 : project.screenshots.length - 1))}
                  className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all cursor-pointer shadow-xl"
                  title="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setSelectedScreenshotIndex((prev) => (prev < project.screenshots.length - 1 ? prev + 1 : 0))}
                  className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all cursor-pointer shadow-xl"
                  title="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div 
                className="w-full max-w-2xl text-center py-2 text-xs sm:text-sm text-slate-300 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                {currentScreenshot.caption}
              </div>
            </div>
          )}

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
