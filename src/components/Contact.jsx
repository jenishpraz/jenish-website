import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const FORMSPREE_ID = 'mvznpqnb';

export default function Contact() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const info = [
    { icon: FiMail, label: 'Email', value: 'prajapatijenish37@gmail.com', href: 'mailto:prajapatijenish37@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+977-9863443359', href: 'tel:+9779863443359' },
    { icon: FiMapPin, label: 'Location', value: 'Bhaktapur, Nepal', href: '#' },
  ];

  const socials = [
    { icon: FiGithub, href: 'https://github.com/jenishpraz' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/prajapati-jenish-b9a3bb191/' },
    { icon: FiFacebook, href: 'https://facebook.com' },
    { icon: FiInstagram, href: 'https://instagram.com' },
  ];

  const inp = `w-full px-4 py-3.5 rounded-xl font-body text-sm outline-none transition-all border ${isDark
    ? 'bg-dark border-dark-border text-white placeholder-[#444] focus:border-accent/50 focus:bg-dark-card'
    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-accent/50 focus:ring-2 focus:ring-accent/10'
    }`;

  const isSending = status === 'sending';

  return (
    <section id="contact" ref={ref} className={`py-24 ${isDark ? 'bg-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag inline-flex"><span className="glow-dot" />Contact</div>
          <h2 className={`section-heading ${isDark ? 'text-white' : 'text-gray-950'}`}>
            Let's <span className="accent-gradient">Work Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left — info ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}
          >
            <p className={`font-body text-[15px] leading-relaxed mb-8 ${isDark ? 'text-dark-text' : 'text-gray-600'}`}>
              I'm currently open to full-time roles, freelance projects, and exciting collaborations.
              Whether you have a project idea or want to discuss an opportunity, feel free to reach out.
            </p>

            <div className="space-y-3 mb-8">
              {info.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a key={i} href={href}
                  initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.18 + i * 0.09 }}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${isDark ? 'bg-dark-card border-dark-border hover:border-accent/30' : 'bg-gray-50 border-gray-100 hover:border-accent/30'
                    }`}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: isDark ? 'rgba(99,102,241,0.12)' : '#EEF2FF' }}>
                    <Icon size={16} style={{ color: isDark ? '#818CF8' : '#6366F1' }} />
                  </div>
                  <div>
                    <p className={`font-body text-[10px] uppercase tracking-widest mb-0.5 ${isDark ? 'text-dark-text' : 'text-gray-400'}`}
                      style={{ fontWeight: 700 }}>{label}</p>
                    <p className={`font-body text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${isDark
                    ? 'bg-dark-card border border-dark-border text-dark-text hover:border-accent-dark hover:text-accent-dark'
                    : 'bg-gray-100 text-gray-500 hover:bg-accent-light hover:text-accent'
                    }`}>
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right — Formspree form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
            className={`p-8 rounded-3xl border ${isDark ? 'bg-dark-card border-dark-border' : 'bg-gray-50 border-gray-100'}`}
          >
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text" name="name" placeholder="Your Name"
                value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                required disabled={isSending} className={inp}
              />
              <input
                type="email" name="email" placeholder="Email Address"
                value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                required disabled={isSending} className={inp}
              />
            </div>

            {/* Subject */}
            <input
              type="text" name="subject" placeholder="Subject"
              value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
              required disabled={isSending} className={`${inp} mb-4`}
            />

            {/* Message */}
            <textarea
              name="message" rows={5} placeholder="Your message..."
              value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              required disabled={isSending} className={`${inp} resize-none mb-5`}
            />

            {/* Success banner */}
            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl mb-4 text-sm font-semibold"
                style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#22c55e' }}>
                <FiCheckCircle size={16} />
                Message sent! I'll get back to you soon.
              </motion.div>
            )}

            {/* Error banner */}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl mb-4 text-sm font-semibold"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#ef4444' }}>
                <FiAlertCircle size={16} />
                Something went wrong. Please try again.
              </motion.div>
            )}

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={!isSending ? { scale: 1.02, y: -1 } : {}}
              whileTap={!isSending ? { scale: 0.98 } : {}}
              className="w-full btn-primary justify-center font-body text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontWeight: 600 }}
            >
              {isSending ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </span>
              ) : (
                <><FiSend size={15} /> Send Message</>
              )}
            </motion.button>

            <p className={`font-body text-xs text-center mt-3 ${isDark ? 'text-dark-text' : 'text-gray-400'}`}>
              Powered by <a href="https://formspree.io" target="_blank" rel="noopener noreferrer"
                className="underline hover:text-accent transition-colors">Formspree</a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}