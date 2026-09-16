import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { SKILL_CATEGORIES, GLOBAL_STORES } from '../data/portfolioData';

function Bar({ level, inView }: { level: number; inView: boolean }) {
  return (
    <div className="progress-track w-24 shrink-0">
      <div
        className="progress-fill"
        style={{ width: inView ? `${level}%` : '0%' }}
      />
    </div>
  );
}

export const SkillsEcosystem: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section" ref={ref}>
      <h2 className="section-title">Skills</h2>

      <div className="space-y-10">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.05 }}
          >
            <div className="text-[10px] mono text-white/30 font-bold uppercase tracking-wider mb-3">
              {cat.name}
            </div>
            <div className="space-y-0">
              {cat.skills.map((skill, si) => (
                <div key={si} className="flex items-center justify-between py-2.5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3 min-w-0">
                    {skill.isPrimary && (
                      <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                    )}
                    <span className="text-sm text-white/70 truncate">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <Bar level={skill.level} inView={inView} />
                    <span className="text-xs mono text-white/30 w-8 text-right">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stores grid */}
      <div className="mt-12">
        <div className="text-[10px] mono text-white/30 font-bold uppercase tracking-wider mb-4">
          Published On
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {GLOBAL_STORES.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="py-3 px-3 border border-white/[0.07] rounded-md text-center"
            >
              <div className="text-[10px] font-semibold text-white/60">{store.name}</div>
              <div className="text-[9px] mono text-cyan-400 mt-0.5">{store.status}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
