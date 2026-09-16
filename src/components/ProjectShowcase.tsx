import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { playSound } from '../utils/soundEffects';

interface Props {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<Props> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div>
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="py-5 border-b border-white/[0.07] group cursor-pointer"
            onClick={() => { playSound('click'); onSelectProject(project); }}
          >
            <div className="flex items-start justify-between gap-4">
              {/* Left */}
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </span>
                  <span className="tag">{project.category}</span>
                  <span className="tag">{project.stateManagement}</span>
                </div>

                <div className="text-xs text-white/40 font-medium">{project.client} · {project.roleTitle}</div>

                {/* Metrics */}
                <div className="flex items-center gap-4 pt-1">
                  {project.metrics.map((m, mi) => (
                    <div key={mi}>
                      <span className="text-sm font-bold text-cyan-400">{m.value}</span>
                      <span className="text-[10px] text-white/30 ml-1.5">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex items-start gap-2 shrink-0 pt-0.5">
                {project.storeLinks?.playStore && (
                  <a
                    href={project.storeLinks.playStore}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => { e.stopPropagation(); playSound('tap'); }}
                    className="p-1.5 rounded-md border border-white/[0.07] hover:border-white/20 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 text-white/40 hover:text-white" />
                  </a>
                )}
                <div className="p-1.5 rounded-md border border-white/[0.07] group-hover:border-cyan-400/30 transition-colors">
                  <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
