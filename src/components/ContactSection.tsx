import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Download,
  FileDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (text: string, field: string) => {
    playSound('tap');
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    playSound('tap');
    setIsSubmitting(true);

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(
      `Hello Anil,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}\n\nSent from your Portfolio Website.`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      playSound('success');
      setIsSubmitting(false);
      setIsSent(true);

      // Trigger user's mail client directly
      window.location.href = mailtoUrl;

      // Keep form filled temporarily in case user wants to re-verify or reset after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-mono text-indigo-700 font-bold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>LET'S CONNECT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Ready to Build Your Next High-Performance Mobile App?
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Whether you need a Senior Flutter Lead for an enterprise cross-platform product or contract optimization, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info & Instant Copy */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-100/80 space-y-6">
            <div>
              <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider">Direct Channels</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Get in Touch with Anil</h3>
              <p className="text-xs text-slate-500 mt-1">
                Available for full-time senior mobile roles, architecture audits, and high-stakes contract work.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-medium">Email Address</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all cursor-pointer shadow-2xs"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-medium">Phone & WhatsApp</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all cursor-pointer shadow-2xs"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium">Location</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">{PERSONAL_INFO.location}</div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound('tap')}
                className="flex-1 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-xs font-semibold text-slate-800 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound('tap')}
                className="flex-1 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-xs font-semibold text-slate-800 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat WhatsApp</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* Direct Resume Download Link */}
            <div className="pt-1">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound('tap')}
                className="w-full py-3 px-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200 text-xs font-bold text-indigo-900 flex items-center justify-between transition-all cursor-pointer shadow-xs group"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                  <span>Download Resume</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-500 opacity-80" />
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Interactive Send Message Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-100/80 space-y-5">
            <div>
              <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider">Quick Inquiry</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Send a Message</h3>
              <p className="text-xs text-slate-500 mt-1">
                Drop your project requirements or interview inquiry and I'll respond within 24 hours.
              </p>
            </div>

            {isSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold">Message prepared & email client triggered!</span>
                    <div className="text-[11px] text-emerald-700 mt-0.5">
                      Your message will be sent directly to anilshrivastav.official@gmail.com.
                    </div>
                  </div>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20via%20Portfolio`}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px] text-center hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-1 shrink-0"
                >
                  <span>Open Email App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Subject / Project Scope</label>
                <input
                  type="text"
                  placeholder="e.g. Flutter Senior Engineer Role / Mobile App Development"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Message / Requirements *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your mobile product, timeline, or team requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-600 to-rose-500 hover:from-indigo-500 hover:to-rose-400 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-200 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Anil</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>

    </section>
  );
};
