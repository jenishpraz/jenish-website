import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayers, FiAward, FiBriefcase } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const stats = [
  { icon:FiCode,      value:'6+',   label:'Live Projects',        sub:'In production' },
  { icon:FiLayers,    value:'10+',  label:'Technologies',         sub:'Frontend & Backend' },
  { icon:FiBriefcase, value:'3',    label:'Work Experiences',     sub:'Intern to Full-time' },
  { icon:FiAward,     value:'B.E.', label:'Computer Engineering', sub:'Khwopa Eng. College' },
];

export default function About() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-100px' });
  const ease = [0.23,1,0.32,1];

  return (
    <section id="about" ref={ref} className={`py-24 ${isDark?'bg-dark-secondary':'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity:0, x:-36 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.8, ease }}>
            <div className="section-tag"><span className="glow-dot"/>About Me</div>
            <h2 className={`section-heading mb-5 ${isDark?'text-white':'text-gray-950'}`}>
              Building Real-World<br/><span className="accent-gradient">Digital Products</span>
            </h2>
            <div className={`space-y-4 font-body text-[15px] leading-[1.8] ${isDark?'text-dark-text':'text-gray-600'}`}>
              <p>I'm a <strong className={isDark?'text-white font-semibold':'text-gray-900 font-semibold'}>Junior Full Stack Developer at Softsaro Nepal</strong>, working on React.js, Next.js, and Laravel-based production applications.</p>
              <p>With hands-on experience across AMNIL Technology, Next In Tech, and Softsaro Nepal, I specialize in scalable frontends, RESTful APIs, and clean UI components that ship to real users.</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['React.js','Next.js','Laravel','Node.js','Tailwind CSS','REST APIs'].map((t,i) => (
                <span key={i} className={`font-mono text-xs px-3 py-1.5 rounded-lg border ${
                  isDark?'bg-dark-card border-dark-border text-dark-text':'bg-white border-gray-200 text-gray-600'
                }`}>{t}</span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a href="mailto:prajapatijenish37@gmail.com" className="btn-primary text-sm">Get In Touch</a>
              <a href="https://github.com/jenishpraz" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">GitHub Profile</a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon:Icon, value, label, sub }, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
                transition={{ delay:0.2+i*0.1, duration:0.6 }}
                whileHover={{ y:-5, scale:1.02 }}
                className={`p-6 rounded-2xl border transition-all cursor-default ${
                  isDark?'bg-dark-card border-dark-border hover:border-accent/30':'bg-white border-gray-100 hover:border-accent/40 shadow-sm'
                }`}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: isDark?'rgba(99,102,241,0.12)':'#EEF2FF' }}>
                  <Icon size={18} style={{ color: isDark?'#818CF8':'#6366F1' }}/>
                </div>
                <p className="font-display text-3xl mb-0.5" style={{ color: isDark?'#818CF8':'#6366F1', fontWeight:900, letterSpacing:'-0.04em' }}>{value}</p>
                <p className={`font-body text-sm mb-0.5 ${isDark?'text-white':'text-gray-900'}`} style={{fontWeight:600}}>{label}</p>
                <p className={`font-body text-xs ${isDark?'text-dark-text':'text-gray-400'}`}>{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
