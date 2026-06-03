import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title:'Sayumi Global', label:'Laravel — Full Stack', emoji:'🌐',
    desc:'Full-stack conversion platform with scalable backend architecture. Implemented REST API integration, authentication, and responsive UI design.',
    tags:['Laravel','Full Stack','REST API','Auth'],
    live:'https://sayumiglobal.com', color:'#6366F1',
  },
  {
    title:'ConvertTree', label:'Laravel — Full Stack', emoji:'📄',
    desc:'Free online PDF tools — merge, compress, convert any PDF files from any browser. Responsive frontend with optimized workflows.',
    tags:['Laravel','PDF Tools','Responsive UI'],
    live:'https://converttree.com', color:'#818CF8',
  },
  {
    title:'Tour & Travel Project', label:'Next.js — Tailwind CSS', emoji:'✈️',
    desc:'Modern travel and tourism website using Next.js and Tailwind CSS, deployed on Vercel. Responsive layouts and smooth UX.',
    tags:['Next.js','Tailwind CSS','Vercel'],
    live:'https://tour-travel-project-seven.vercel.app/', color:'#6366F1',
  },
  {
    title:'AKELTOR BRAND', label:'React.js — Tailwind CSS', emoji:'💼',
    desc:'Responsive business website using React.js and Tailwind CSS. Optimized UI performance and reusable frontend component library.',
    tags:['React.js','Tailwind CSS','Performance'],
    live:'https://akeltorbrands.com/', color:'#818CF8',
  },
  {
    title:'Kurus Collections', label:'Next.js — E-commerce', emoji:'🧶',
    desc:'Handcrafted e-commerce platform for crochet products. Focused on responsive design, user experience, and performance.',
    tags:['Next.js','E-commerce','UX'],
    live:'https://kuruscollections.com/', color:'#6366F1',
  },
  {
    title:'YTS Movie App', label:'Next.js — API Integration', emoji:'🎬',
    desc:'Movie browsing application with external API integration. Dynamic data fetching and responsive UI features.',
    tags:['Next.js','API Integration','Dynamic Data'],
    live:'https://next-js-yts-bz-movie-project-kkrp.vercel.app/', color:'#818CF8',
  },
];

export default function Projects() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  return (
    <section id="projects" ref={ref} className={`py-24 ${isDark?'bg-dark':'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} className="text-center mb-14">
          <div className="section-tag inline-flex"><span className="glow-dot"/>Projects</div>
          <h2 className={`section-heading ${isDark?'text-white':'text-gray-950'}`}>Featured <span className="accent-gradient">Work</span></h2>
          <p className={`font-body mt-3 text-sm max-w-md mx-auto ${isDark?'text-dark-text':'text-gray-500'}`}>6 live projects across Laravel, React.js & Next.js — built for real users.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}}
              transition={{ delay:i*0.09, duration:0.6, ease:[0.23,1,0.32,1] }}
              whileHover={{ y:-6, transition:{ duration:0.25 } }}
              className={`group relative p-6 rounded-3xl border overflow-hidden transition-all flex flex-col ${
                isDark
                  ? 'bg-dark-card border-dark-border hover:border-accent/35'
                  : 'bg-gray-50 border-gray-100 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5'
              }`}>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: isDark ? 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.06), transparent 60%)' : 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.04), transparent 60%)' }}/>

              <span className="font-mono text-[10px] mb-4 self-start px-2.5 py-1 rounded-full"
                style={{ background: isDark?'rgba(99,102,241,0.12)':'#EEF2FF', color: isDark?'#818CF8':'#6366F1' }}>{p.label}</span>

              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className={`font-display text-lg mb-2 ${isDark?'text-white':'text-gray-950'}`} style={{fontWeight:800}}>{p.title}</h3>
              <p className={`font-body text-sm leading-relaxed mb-5 flex-1 ${isDark?'text-dark-text':'text-gray-600'}`}>{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t,j) => (
                  <span key={j} className="font-mono text-[10px] px-2 py-1 rounded-md"
                    style={{ background: isDark?'rgba(99,102,241,0.1)':'#EEF2FF', color: isDark?'#818CF8':'#6366F1' }}>{t}</span>
                ))}
              </div>

              <div className="flex gap-2">
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-body text-xs font-semibold px-3.5 py-2 rounded-xl transition-all"
                  style={{ background: isDark?'rgba(99,102,241,0.12)':'#EEF2FF', color: isDark?'#818CF8':'#6366F1' }}
                  onMouseEnter={e => { e.currentTarget.style.background='#6366F1'; e.currentTarget.style.color='#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background=isDark?'rgba(99,102,241,0.12)':'#EEF2FF'; e.currentTarget.style.color=isDark?'#818CF8':'#6366F1'; }}>
                  <FiExternalLink size={12}/> Live
                </a>
                <a href="https://github.com/jenishpraz" target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 font-body text-xs font-semibold px-3.5 py-2 rounded-xl transition-all ${
                    isDark?'text-dark-text bg-dark-border hover:bg-[#222] hover:text-white':'text-gray-500 bg-gray-200 hover:bg-gray-300 hover:text-gray-900'
                  }`}>
                  <FiGithub size={12}/> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
