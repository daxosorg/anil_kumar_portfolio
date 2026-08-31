import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Award, 
  Download,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION_AWARDS } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    playSound('tap');
    const resumeText = `
ANIL KUMAR
Senior Flutter & Mobile App Developer
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

SKILLS
- Language & Framework: Dart, Flutter, TypeScript, Swift, Kotlin
- State Management: BLoC, Riverpod, Provider, GetX
- Firebase Services: Firestore, Realtime DB, Auth, Phone Auth, Crashlytics, Remote Config, FCM, Analytics
- Architecture: Clean Architecture, MVVM, SOLID Principles, Feature-First
- Testing: Widget, Unit, Integration Testing
- Publishing: Google Play Store, Apple App Store, Samsung Galaxy Store, Amazon Appstore, Huawei AppGallery, Xiaomi MI Store
- CI/CD Tools: Fastlane, Codemagic, Circle CI
- Monetization: AdMob with Facebook Bidding
- Additional: Chrome Extension and pub.dev package author

PROFESSIONAL EXPERIENCE
- 3Frames Software Labs Pvt. Ltd. (August 2024 – Present) | Software Engineer
- Vinove Software & Service Pvt. Ltd. (Oct 2023 – April 2024) | Software Developer-E2
- OnGraph Technologies (April 2021 – August 2023) | Software Engineer (Star Performer 2022)

FEATURED PROJECTS
- Powered by Amazon (Amazon DSPs / Corpay): Play Store & App Store (+30% Performance Optimization)
- Driven for Comdata (Fleet Management & Fuel Solutions): GetX & Module Architecture
- Signify DIGI Shield (PHILIPS Lighting): Warranty Management & RBAC Program
- AL Retailer Club (Ashok Leyland): Parts purchasing & loyalty rewards
- SKY - Rewards, Benefits & Privileges (JK Lakshmi Cement): Member loyalty & points redemption

EDUCATION & AWARDS
- BCA: Dr. B. R. Ambedkar University, Agra, India
- Star Performer 2022: OnGraph Technologies
- Flutter Bootcamp (Angela Yu) & Flutter Complete Guide (Maximilian Schwarzmüller)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playSound('tap');
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-4 flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:rounded-none print:bg-white print:text-black"
        >
          {/* Top Bar Actions */}
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-slate-900 text-sm sm:text-base">Anil Kumar - Official Curriculum Vitae</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound('tap')}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                onClick={handleCopyText}
                className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={() => {
                  playSound('tap');
                  onClose();
                }}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all cursor-pointer ml-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div 
            id="resume-printable-content"
            className="printable-resume p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 print:text-black print:p-6 print:overflow-visible text-xs sm:text-sm"
          >
            
            {/* Header: Name & Contact */}
            <div className="border-b border-slate-200 pb-5 space-y-2 text-center print:border-black">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase print:text-black">
                ANIL KUMAR
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 print:text-neutral-700">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-indigo-600 text-indigo-700 font-semibold print:text-black">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.phone}</span>
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
              <div className="pt-0.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-indigo-700 hover:underline flex items-center justify-center gap-1 font-semibold print:text-black"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.linkedin}</span>
                </a>
                <span className="print:hidden text-slate-300">|</span>
                <a 
                  href={PERSONAL_INFO.resumeUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-emerald-700 hover:underline flex items-center justify-center gap-1 font-semibold print:hidden"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 print:text-black print:border-black font-mono">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-slate-700 leading-relaxed print:text-neutral-800">
                5 years of experience building cross-platform mobile apps using Flutter and Dart with clean and scalable code with a strong focus on performance and user experience. Proven track record of optimizing app code to boost execution speed by 30% and publishing applications across 6 global app stores.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 print:text-black print:border-black font-mono">
                SKILLS
              </h2>
              <div className="space-y-1 text-slate-700 print:text-neutral-800">
                <div><strong className="text-slate-900 print:text-black">Language & Framework:</strong> Dart, Flutter, TypeScript, Swift, Kotlin</div>
                <div><strong className="text-slate-900 print:text-black">State Managements:</strong> BLoC, Riverpod, provider and GetX</div>
                <div><strong className="text-slate-900 print:text-black">Firebase Services:</strong> Cloud Firestore, Realtime Database, Storage, Authentication, Phone Verification, App Distribution, Remote Config, Crashlytics, Analytics, Realtime Analytics, Messaging (FCM), Dynamic Links and Hosting</div>
                <div><strong className="text-slate-900 print:text-black">Architecture & Design:</strong> Clean Architecture, MVVM, SOLID Principles, Feature-First</div>
                <div><strong className="text-slate-900 print:text-black">Testing:</strong> Widget, Unit and Integration</div>
                <div><strong className="text-slate-900 print:text-black">Publishing:</strong> Play Store, App Store, Samsung, Amazon, Huawei and MI Stores</div>
                <div><strong className="text-slate-900 print:text-black">CI/CD Tools:</strong> Circle CI, Fastlane and Codemagic</div>
                <div><strong className="text-slate-900 print:text-black">Monetization:</strong> AdMob with Facebook bidding</div>
                <div><strong className="text-slate-900 print:text-black">Additional:</strong> Chrome Extension and pub.dev author</div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 print:text-black print:border-black font-mono">
                PROFESSIONAL EXPERIENCE
              </h2>

              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 print:text-black">
                    <span>{exp.role} | {exp.company}</span>
                    <span className="text-slate-500 font-mono text-xs print:text-neutral-700">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 print:text-neutral-800">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 print:text-black print:border-black font-mono">
                FEATURED PRODUCTION PROJECTS
              </h2>

              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="font-bold text-slate-900 print:text-black">
                    {proj.title} - {proj.subtitle} | ({proj.client})
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 print:text-neutral-800">
                    {proj.keyFeatures.slice(0, 3).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                    {proj.storeLinks.playStore && (
                      <li className="text-indigo-700 font-medium print:text-black">
                        Play Store: <a href={proj.storeLinks.playStore} target="_blank" rel="noreferrer" className="underline">{proj.storeLinks.playStore}</a>
                      </li>
                    )}
                    {proj.storeLinks.appStore && (
                      <li className="text-indigo-700 font-medium print:text-black">
                        App Store: <a href={proj.storeLinks.appStore} target="_blank" rel="noreferrer" className="underline">{proj.storeLinks.appStore}</a>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education & Awards */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 print:text-black print:border-black font-mono">
                EDUCATION & HONORS
              </h2>
              <div className="space-y-1 text-slate-700 print:text-neutral-800">
                <div>• Bachelors in Computer Application (BCA) from Dr. B. R. Ambedkar University, Agra, India.</div>
                <div>• Star Performer 2022 at OnGraph Technologies for outstanding contributions & mentoring.</div>
                <div>• Flutter Bootcamp (Angela Yu) & Flutter & Dart Complete Guide (Maximilian Schwarzmüller).</div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
