import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES, EDUCATION_AWARDS } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      {/* Jobs */}
      <div className="space-y-0">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="py-5 border-b border-white/[0.07] grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3"
          >
            {/* Date */}
            <div className="text-[11px] mono text-white/30 pt-0.5 shrink-0">{exp.period}</div>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-white">{exp.role}</span>
                {exp.isCurrent && (
                  <span className="text-[9px] mono font-bold text-cyan-400 border border-cyan-400/30 px-1.5 py-0.5 rounded">
                    CURRENT
                  </span>
                )}
              </div>
              <div className="text-xs text-white/40">{exp.company}</div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.techStack.slice(0, 6).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education + Award */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Award */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <div className="text-[10px] mono text-cyan-400 font-bold uppercase tracking-wider">Award</div>
          <div className="text-sm font-semibold text-white">{EDUCATION_AWARDS.award.title}</div>
          <div className="text-xs text-white/40">{EDUCATION_AWARDS.award.company} · {EDUCATION_AWARDS.award.year}</div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-1"
        >
          <div className="text-[10px] mono text-cyan-400 font-bold uppercase tracking-wider">Education</div>
          <div className="text-sm font-semibold text-white">{EDUCATION_AWARDS.education[0].degree}</div>
          <div className="text-xs text-white/40">{EDUCATION_AWARDS.education[0].institution}</div>
        </motion.div>
      </div>
    </section>
  );
};
