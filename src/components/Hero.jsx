import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const roles = ['Full Stack Developer', 'React.js Developer', 'Next.js Developer', 'Laravel Developer'];

function useTyping(words, speed = 75, pause = 2200) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[idx];
    let t;
    if (!del && text === w)       { t = setTimeout(() => setDel(true), pause); }
    else if (del && text === '')  { setDel(false); setIdx(i => (i+1) % words.length); }
    else { t = setTimeout(() => setText(p => del ? p.slice(0,-1) : w.slice(0, p.length+1)), del ? 38 : speed); }
    return () => clearTimeout(t);
  }, [text, del, idx, words, speed, pause]);
  return text;
}

const ease = [0.23, 1, 0.32, 1];

export default function Hero() {
  const { isDark } = useTheme();
  const typed = useTyping(roles);

  return (
    <section id="home" className={`relative min-h-screen flex items-center overflow-hidden ${
      isDark ? 'bg-dark grid-bg' : 'bg-white'
    }`}>
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #6366F1, transparent 70%)' }}/>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.03] blur-[80px]"
          style={{ background: 'radial-gradient(circle, #818CF8, transparent 70%)' }}/>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        {/* Tighter grid — gap reduced, cols balanced */}
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-8 lg:gap-10 items-center">

          {/* ─── LEFT ─── */}
          <div className="order-2 lg:order-1">
            {/* Tag */}
            <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
              className="section-tag mb-5">
              <span className="glow-dot"/> Open to Opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.07 }}
              className={`font-body text-base font-medium mb-1 ${isDark ? 'text-dark-text' : 'text-gray-500'}`}>
              Hello 👋 I'm
            </motion.p>

            {/* Name */}
            <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.12, ease }}
              className={`font-display mb-4 ${isDark ? 'text-white' : 'text-gray-950'}`}
              style={{ fontSize:'clamp(3rem,6vw,5rem)', fontWeight:900, letterSpacing:'-0.04em', lineHeight:1.0 }}>
              Jenish<br/>Prajapati
            </motion.h1>

            {/* Typing */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.22 }}
              className="flex items-center gap-2 mb-5 h-8">
              <span className="font-mono text-[15px] font-500" style={{ color: isDark ? '#818CF8' : '#6366F1' }}>
                {typed}<span className="cursor-blink">|</span>
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, duration:0.6 }}
              className={`font-body text-[15px] leading-[1.75] mb-8 max-w-[460px] ${isDark ? 'text-dark-text' : 'text-gray-600'}`}>
              Junior Full Stack Developer at{' '}
              <span className="font-semibold" style={{ color: isDark ? '#818CF8' : '#6366F1' }}>Softsaro Nepal</span>,
              building production-grade React.js, Next.js &amp; Laravel applications.
              Computer Engineering graduate from Khwopa Engineering College.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.38 }}
              className="flex flex-wrap gap-3 mb-9">
              <a href="https://prajapatijenish.com.np" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FiArrowRight size={15}/> View Portfolio
              </a>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })} className="btn-outline">
                <FiMail size={15}/> Hire Me
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.46 }}
              className="flex gap-2.5">
              {[
                { icon:FiGithub,    href:'https://github.com/jenishpraz' },
                { icon:FiLinkedin,  href:'https://www.linkedin.com/in/prajapati-jenish-b9a3bb191/' },
                { icon:FiInstagram, href:'https://instagram.com' },
              ].map(({ icon:Icon, href }, i) => (
                <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale:1.12, y:-2 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-dark-card border border-dark-border text-dark-text hover:border-accent-dark hover:text-accent-dark'
                      : 'bg-gray-100 text-gray-500 hover:bg-accent-light hover:text-accent'
                  }`}>
                  <Icon size={16}/>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT — Avatar ─── */}
          <motion.div
            initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, ease, delay:0.1 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            {/* Glow behind avatar */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-80 h-80 rounded-full blur-3xl opacity-20"
                style={{ background: 'radial-gradient(circle, #6366F1, transparent 65%)' }}/>
            </div>

            {/* Avatar container — floating */}
            <motion.div
              animate={{ y:[0,-14,0] }}
              transition={{ duration:5.5, repeat:Infinity, ease:'easeInOut' }}
              className="relative z-10 flex items-center justify-center w-full max-w-[360px] lg:max-w-[420px]"
              style={{ aspectRatio:'4 / 5' }}
            >
              {/* Soft indigo plate behind figure */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-72 lg:w-72 lg:h-80 rounded-[2.5rem] ${
                isDark ? 'bg-dark-card' : 'bg-accent-light'
              }`} style={{ filter:'blur(0px)', zIndex:0 }}/>

              <div className="relative z-10 w-full h-full overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent shadow-[0_35px_80px_-30px_rgba(99,102,241,0.7)]">
                <img
                  src="/avatar.png"
                  alt="Jenish Prajapati"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
                  style={{ filter: isDark ? 'drop-shadow(0 20px 60px rgba(99,102,241,0.45))' : 'drop-shadow(0 18px 52px 0 rgba(99,102,241,0.2))' }}
                  loading="eager"
                  draggable={false}
                />
              </div>
            </motion.div>

            {/* Badge — current job */}
            <motion.div
              animate={{ y:[0,-6,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut', delay:0.8 }}
              className={`absolute bottom-4 left-0 lg:-left-4 px-4 py-3 rounded-2xl shadow-xl z-20 ${isDark ? 'glass' : 'glass-light'}`}>
              <p className={`font-body text-[10px] font-700 uppercase tracking-widest mb-0.5 ${isDark?'text-dark-text':'text-gray-400'}`} style={{fontWeight:700}}>Currently At</p>
              <p className="font-display text-sm" style={{ color: isDark?'#818CF8':'#6366F1', fontWeight:800 }}>Softsaro Nepal</p>
            </motion.div>

            {/* Badge — projects */}
            <motion.div
              animate={{ y:[0,-6,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut', delay:2.2 }}
              className={`absolute top-4 right-0 lg:-right-2 px-4 py-3 rounded-2xl shadow-xl z-20 ${isDark ? 'glass' : 'glass-light'}`}>
              <p className={`font-body text-[10px] font-700 uppercase tracking-widest mb-0.5 ${isDark?'text-dark-text':'text-gray-400'}`} style={{fontWeight:700}}>Projects</p>
              <p className="font-display text-xl" style={{ color: isDark?'#818CF8':'#6366F1', fontWeight:900, letterSpacing:'-0.03em' }}>6+</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y:[0,7,0] }} transition={{ duration:1.6, repeat:Infinity }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '2px solid rgba(99,102,241,0.35)' }}>
          <div className="w-1 h-2 rounded-full" style={{ background:'#6366F1' }}/>
        </motion.div>
      </motion.div>
    </section>
  );
}
