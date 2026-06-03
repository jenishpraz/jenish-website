import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function Loader() {
  const { isDark } = useTheme();
  return (
    <motion.div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center ${isDark?'bg-dark':'bg-white'}`}
      exit={{ opacity:0 }} transition={{ duration:0.5 }}>
      <motion.div initial={{ scale:0.7, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.5 }} className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ background:'#6366F1' }}>
          <span className="font-display text-white text-2xl" style={{fontWeight:900}}>JP</span>
        </div>
        <p className={`font-body text-xs uppercase tracking-[0.2em] mb-4 ${isDark?'text-dark-text':'text-gray-400'}`}>Loading Portfolio</p>
        <div className="w-44 h-[2px] rounded-full overflow-hidden mx-auto" style={{ background: isDark?'#1A1A1A':'#EEF2FF' }}>
          <motion.div className="h-full rounded-full" style={{ background:'linear-gradient(90deg,#6366F1,#818CF8)' }}
            initial={{ width:'0%' }} animate={{ width:'100%' }} transition={{ duration:1.3, ease:'easeInOut' }}/>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AppInner() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1700); return () => clearTimeout(t); }, []);
  return (
    <>
      <AnimatePresence>{loading && <Loader/>}</AnimatePresence>
      {!loading && (
        <>
          <ScrollProgress/>
          <Navbar/>
          <main>
            <Hero/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Services/>
            <Contact/>
          </main>
          <Footer/>
          <BackToTop/>
        </>
      )}
    </>
  );
}

export default function App() {
  return <ThemeProvider><AppInner/></ThemeProvider>;
}
