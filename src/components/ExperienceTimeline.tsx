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
      colors: ['#00d2ff', '#3a7bd5', '#ffd700', '#ff007f'],
    });
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-mono text-indigo-700 font-bold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE & RECOGNITION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          5+ Years of Engineering Track Record
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Consistent history of delivering complex client deliverables, mentoring teams, and leading mobile cross-platform squads.
        </p>
      </div>

      {/* Star Performer 2022 Award Spotlight Card */}
      <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-50/40 border-2 border-amber-300 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold font-mono border border-amber-300 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  HONORARY RECOGNITION
                </span>
                <span className="text-xs text-amber-800 font-mono font-bold">Year 2022</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {EDUCATION_AWARDS.award.title} • {EDUCATION_AWARDS.award.company}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                {EDUCATION_AWARDS.award.description}
              </p>
            </div>
          </div>

          <button
            onClick={triggerAwardCelebration}
            className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md shadow-amber-300 transition-all active:scale-95 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Celebrate Milestone</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Work Experience Timeline */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-600" />
            <span>Work Experience</span>
          </h3>

          <div className="relative pl-6 border-l-2 border-slate-200 space-y-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Dot */}
                <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  exp.isCurrent
                    ? 'bg-indigo-600 border-white ring-4 ring-indigo-100 shadow-sm'
                    : 'bg-slate-300 border-white'
                }`} />

                {/* Experience Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50 transition-all space-y-3 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="text-xs sm:text-sm font-semibold text-indigo-600 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {exp.period}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                          Present
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet Achievements */}
                  <ul className="space-y-1.5 pt-1">
                    {exp.achievements.map((ach, ai) => (
                      <li key={ai} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Specialized Courses */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Education</span>
            </h3>

            <div className="space-y-3">
              {EDUCATION_AWARDS.education.map((edu, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{edu.degree}</h4>
                  <div className="text-xs text-slate-500">{edu.institution}</div>
                  <span className="inline-block text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Master Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Courses & Specialization</span>
            </h3>

            <div className="space-y-3">
              {EDUCATION_AWARDS.certifications.map((cert, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{cert.name}</h4>
                  </div>
                  <div className="text-xs text-indigo-600 font-bold">{cert.instructor}</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{cert.focus}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Download Complete Resume Banner */}
      <div className="mt-12 p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
            <FileDown className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm sm:text-base text-white">Need the Complete Official Curriculum Vitae?</div>
            <div className="text-xs text-slate-400">Download the official, verified resume directly.</div>
          </div>
        </div>

        <a
          href={PERSONAL_INFO.resumeUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => playSound('tap')}
          className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/30 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>

    </section>
  );
};
