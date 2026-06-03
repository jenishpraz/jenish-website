import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const links = ['Home','About','Skills','Experience','Projects','Services','Contact'];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1)); }),
      { threshold: 0.35 }
    );
    links.forEach(l => { const el = document.getElementById(l.toLowerCase()); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:'smooth' }); setMenuOpen(false); };

  return (
    <motion.nav initial={{ y:-80 }} animate={{ y:0 }} transition={{ duration:0.6, ease:[0.23,1,0.32,1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-black/90 backdrop-blur-2xl border-b border-dark-border shadow-2xl'
            : 'bg-white/90 backdrop-blur-2xl border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <motion.button onClick={() => scrollTo('home')} whileHover={{ scale:1.02 }}
          className="font-display text-[17px]" style={{fontWeight:900, letterSpacing:'-0.03em'}}>
          <span className="accent-gradient">Jenish</span>
          <span className={isDark?'text-white':'text-gray-900'}> Prajapati</span>
        </motion.button>

        <div className="hidden md:flex items-center gap-0.5">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className={`relative px-3.5 py-2 font-body text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                active===l
                  ? isDark ? 'text-accent-dark' : 'text-accent'
                  : isDark ? 'text-dark-text hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}>
              {active===l && <motion.span layoutId="nav-pill" className={`absolute inset-0 rounded-lg ${isDark?'bg-accent/10':'bg-accent-light'}`}/>}
              <span className="relative z-10">{l}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <motion.button onClick={toggle} whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              isDark ? 'bg-dark-card border border-dark-border text-yellow-300 hover:border-accent-dark' : 'bg-gray-100 text-gray-600 hover:bg-accent-light hover:text-accent'
            }`}>
            {isDark ? <FiSun size={15}/> : <FiMoon size={15}/>}
          </motion.button>
          <button onClick={() => setMenuOpen(p=>!p)}
            className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center ${isDark?'bg-dark-card border border-dark-border':'bg-gray-100'}`}>
            {menuOpen ? <FiX size={17} className={isDark?'text-white':'text-gray-900'}/> : <FiMenu size={17} className={isDark?'text-white':'text-gray-900'}/>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }}
            className={`md:hidden border-t overflow-hidden ${isDark?'bg-black border-dark-border':'bg-white/98 border-gray-100'}`}>
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map(l => (
                <button key={l} onClick={() => scrollTo(l)}
                  className={`text-left px-4 py-3 rounded-xl font-body text-sm font-semibold transition-all ${
                    active===l
                      ? isDark ? 'text-accent-dark bg-accent/10' : 'text-accent bg-accent-light'
                      : isDark ? 'text-dark-text hover:bg-dark-card' : 'text-gray-600 hover:bg-gray-50'
                  }`}>{l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
