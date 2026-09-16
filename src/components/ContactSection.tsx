import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Send, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const contacts = [
  { icon: Mail, label: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
  { icon: Phone, label: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
  { icon: Linkedin, label: 'LinkedIn', href: PERSONAL_INFO.linkedin },
  { icon: MessageCircle, label: 'WhatsApp', href: PERSONAL_INFO.whatsappUrl },
];

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound('success');
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

        {/* Left — links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-0"
        >
          {contacts.map(({ icon: Icon, label, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSound('tap')}
              className="flex items-center gap-3 py-4 border-b border-white/[0.07] hover:opacity-60 transition-opacity"
            >
              <Icon className="w-4 h-4 text-white/30" />
              <span className="text-sm text-white/70">{label}</span>
            </a>
          ))}
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {sent ? (
            <div className="text-sm text-cyan-400 font-medium pt-4">Message sent ✓</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email', 'message'].map((field) => (
                <div key={field}>
                  <label className="text-[10px] mono text-white/30 uppercase tracking-wider block mb-1.5">
                    {field}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border border-white/[0.07] rounded-md px-3 py-2 text-sm text-white/80 focus:outline-none focus:border-cyan-400/40 resize-none transition-colors"
                      required
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={form[field as 'name' | 'email']}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full bg-transparent border border-white/[0.07] rounded-md px-3 py-2 text-sm text-white/80 focus:outline-none focus:border-cyan-400/40 transition-colors"
                      required
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="w-3.5 h-3.5" /> Send
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
