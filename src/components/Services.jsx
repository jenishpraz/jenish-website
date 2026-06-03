import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayers, FiLayout } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const services = [
  {
    icon:FiCode, title:'Full Stack Development', color:'#6366F1',
    desc:'End-to-end web applications using Laravel, React.js, Node.js and REST APIs — from database design to deployment.',
    features:['Laravel & PHP Backend','REST API Design','Auth & Security','Production Deployment'],
  },
  {
    icon:FiLayers, title:'React & Next.js Apps', color:'#6366F1', featured:true,
    desc:'Scalable, SEO-friendly applications built with React.js and Next.js — component-driven, performant, and ready for real users.',
    features:['Next.js SSR / SSG','React.js SPA','Redux State Mgmt','API Integration'],
  },
  {
    icon:FiLayout, title:'UI/UX & Frontend', color:'#6366F1',
    desc:'Pixel-perfect, responsive interfaces designed with Tailwind CSS and Figma — clean, modern, and fast to ship.',
    features:['Tailwind CSS','Figma Prototyping','Responsive Design','Component Systems'],
  },
];

export default function Services() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  return (
    <section id="services" ref={ref} className={`py-24 ${isDark?'bg-dark-secondary':'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} className="text-center mb-14">
          <div className="section-tag inline-flex"><span className="glow-dot"/>Services</div>
          <h2 className={`section-heading ${isDark?'text-white':'text-gray-950'}`}>What I <span className="accent-gradient">Offer</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div key={i}
                initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}}
                transition={{ delay:i*0.13, duration:0.65 }}
                whileHover={{ y:-7 }}
                className={`relative p-8 rounded-3xl border transition-all overflow-hidden ${
                  svc.featured
                    ? isDark
                      ? 'bg-dark-card border-accent/35 shadow-lg shadow-accent/10'
                      : 'bg-white border-accent/35 shadow-lg shadow-accent/8'
                    : isDark
                    ? 'bg-dark-card border-dark-border hover:border-accent/25'
                    : 'bg-white border-gray-100 hover:border-accent/30 shadow-sm'
                }`}>
                {svc.featured && (
                  <div className="absolute top-5 right-5">
                    <span className="font-body text-[11px] font-700 px-2.5 py-1 rounded-full bg-accent text-white" style={{fontWeight:700}}>In Demand</span>
                  </div>
                )}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: isDark?'rgba(99,102,241,0.12)':'#EEF2FF' }}>
                  <Icon size={24} style={{ color: isDark?'#818CF8':'#6366F1' }}/>
                </div>
                <h3 className={`font-display text-xl mb-3 ${isDark?'text-white':'text-gray-950'}`} style={{fontWeight:800}}>{svc.title}</h3>
                <p className={`font-body text-sm leading-relaxed mb-6 ${isDark?'text-dark-text':'text-gray-600'}`}>{svc.desc}</p>
                <ul className="space-y-2.5">
                  {svc.features.map((f,j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: isDark?'#818CF8':'#6366F1' }}/>
                      <span className={`font-body text-sm ${isDark?'text-dark-text':'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
