import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  Sparkles, 
  Star,
  BookOpen,
  FileDown, 
  Download,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EXPERIENCES, EDUCATION_AWARDS, PERSONAL_INFO } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

export const ExperienceTimeline: React.FC = () => {
  const triggerAwardCelebration = () => {
    playSound('success');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#22d3ee', '#a78bfa', '#ffd700', '#34d399'],
    });
  };

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="space-y-4 mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-violet-500/20 text-xs font-mono text-violet-400 font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE &amp; RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            5+ Years of <span className="text-shimmer">Engineering Track Record</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Consistent delivery across enterprise mobile squads — mentoring teams, leading architecture, shipping on time.
          </p>
        </div>

        {/* Star Performer Award Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-amber-500/20"
          style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(10,8,23,0) 60%)' }}
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 animate-glow-pulse" style={{ animationName: 'glow-pulse' }}>
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold font-mono border border-amber-500/25 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    HONORARY RECOGNITION
                  </span>
                  <span className="text-xs text-amber-400/70 font-mono font-bold">Year 2022</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {EDUCATION_AWARDS.award.title} • {EDUCATION_AWARDS.award.company}
                </h3>
                <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                  {EDUCATION_AWARDS.award.description}
                </p>
              </div>
            </div>

            <button
              onClick={triggerAwardCelebration}
              className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/25 transition-all active:scale-95 shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Celebrate Milestone</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left: Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Work Experience</span>
            </h3>

            {/* Timeline */}
            <div className="relative pl-6 space-y-8">
              {/* Vertical cyan gradient line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent" />

              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-[31px] top-4 w-4 h-4 rounded-full border-2 border-[#020817] transition-all duration-300 group-hover:scale-125 ${
                    exp.isCurrent
                      ? 'bg-cyan-400 ring-4 ring-cyan-500/20 shadow-lg shadow-cyan-500/30'
                      : 'bg-slate-600'
                  }`} />

                  {/* Experience Card */}
                  <div className="glass-card-hover rounded-2xl p-5 sm:p-6 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h4>
                        <div className="text-xs sm:text-sm font-semibold text-cyan-400 flex items-center gap-1.5 mt-0.5">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-400 text-xs font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {exp.period}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/25">
                            Present
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-1.5 pt-1">
                      {exp.achievements.slice(0, 2).map((ach, ai) => (
                        <li key={ai} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.07] text-[10px] font-mono font-semibold text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Education & Courses */}
          <div className="lg:col-span-4 space-y-6">

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-violet-400" />
                <span>Education</span>
              </h3>
              <div className="space-y-3">
                {EDUCATION_AWARDS.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card rounded-2xl p-4 space-y-1 hover:border-white/20 transition-all"
                  >
                    <h4 className="text-xs sm:text-sm font-bold text-white">{edu.degree}</h4>
                    <div className="text-xs text-slate-500">{edu.institution}</div>
                    <span className="inline-block text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {edu.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Courses &amp; Specialization</span>
              </h3>
              <div className="space-y-3">
                {EDUCATION_AWARDS.certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card rounded-2xl p-4 space-y-1.5 hover:border-white/20 transition-all"
                  >
                    <h4 className="text-xs sm:text-sm font-bold text-white">{cert.name}</h4>
                    <div className="text-xs text-cyan-400 font-bold">{cert.instructor}</div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{cert.focus}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download Banner */}
        <div className="mt-12 p-6 rounded-3xl glass-card border border-cyan-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base text-white">Need the Complete Official Curriculum Vitae?</div>
              <div className="text-xs text-slate-500">Download the official, verified resume directly.</div>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => playSound('tap')}
            className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-cyan-500/25 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
};
