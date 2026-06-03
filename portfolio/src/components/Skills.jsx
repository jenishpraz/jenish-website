import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiBootstrap,
  SiLaravel, SiPhp, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiVercel, SiPostman, SiFigma
} from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const categories = [
  { title:'Frontend', skills:[
    { name:'HTML5',       icon:SiHtml5,      color:'#E34F26', level:94 },
    { name:'CSS3',        icon:SiCss,        color:'#1572B6', level:90 },
    { name:'JavaScript',  icon:SiJavascript, color:'#F7DF1E', level:85 },
    { name:'React.js',    icon:SiReact,      color:'#61DAFB', level:88 },
    { name:'Next.js',     icon:SiNextdotjs,  color:'#888',    level:82 },
    { name:'Redux',       icon:SiRedux,      color:'#764ABC', level:72 },
    { name:'Tailwind',    icon:SiTailwindcss,color:'#06B6D4', level:90 },
    { name:'Bootstrap',   icon:SiBootstrap,  color:'#7952B3', level:85 },
  ]},
  { title:'Backend', skills:[
    { name:'Laravel',    icon:SiLaravel,   color:'#FF2D20', level:80 },
    { name:'PHP',        icon:SiPhp,       color:'#777BB4', level:78 },
    { name:'Node.js',    icon:SiNodedotjs, color:'#339933', level:74 },
    { name:'Express.js', icon:SiExpress,   color:'#888',    level:72 },
  ]},
  { title:'Database', skills:[
    { name:'MongoDB', icon:SiMongodb, color:'#47A248', level:76 },
    { name:'MySQL',   icon:SiMysql,   color:'#4479A1', level:80 },
  ]},
  { title:'Tools & Platforms', skills:[
    { name:'Git',     icon:SiGit,     color:'#F05032', level:84 },
    { name:'GitHub',  icon:SiGithub,  color:'#888',    level:86 },
    { name:'Vercel',  icon:SiVercel,  color:'#888',    level:80 },
    { name:'Postman', icon:SiPostman, color:'#FF6C37', level:78 },
    { name:'Figma',   icon:SiFigma,   color:'#F24E1E', level:68 },
  ]},
];

function SkillCard({ name, icon:Icon, color, level, delay, isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  const ic = isDark && (color === '#888' || color === '#ffffff') ? '#A1A1AA' : color;
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay, duration:0.5 }}
      whileHover={{ y:-4, scale:1.02 }}
      className={`p-4 rounded-2xl border transition-all cursor-default ${
        isDark?'bg-dark-card border-dark-border hover:border-accent/30':'bg-white border-gray-100 hover:border-accent/30 shadow-sm hover:shadow-md'
      }`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background:`${ic}18` }}>
          <Icon size={18} style={{ color:ic }}/>
        </div>
        <div className="min-w-0">
          <p className={`font-body text-sm font-semibold truncate ${isDark?'text-white':'text-gray-900'}`}>{name}</p>
          <p className={`font-mono text-[10px] ${isDark?'text-dark-text':'text-gray-400'}`}>{level}%</p>
        </div>
      </div>
      <div className={`h-1 rounded-full overflow-hidden ${isDark?'bg-dark-border':'bg-gray-100'}`}>
        <motion.div initial={{ width:0 }} animate={inView?{ width:`${level}%` }:{}}
          transition={{ delay:delay+0.3, duration:0.9, ease:'easeOut' }}
          className="h-full rounded-full"
          style={{ background:`linear-gradient(90deg, #6366F1, #818CF8)` }}/>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  return (
    <section id="skills" ref={ref} className={`py-24 ${isDark?'bg-dark':'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} className="text-center mb-14">
          <div className="section-tag inline-flex"><span className="glow-dot"/>Tech Stack</div>
          <h2 className={`section-heading ${isDark?'text-white':'text-gray-950'}`}>Skills & <span className="accent-gradient">Technologies</span></h2>
        </motion.div>
        <div className="space-y-9">
          {categories.map((cat, ci) => (
            <div key={ci}>
              <motion.div initial={{ opacity:0, x:-14 }} animate={inView?{opacity:1,x:0}:{}} transition={{ delay:ci*0.07 }}
                className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent"/>
                <h3 className={`font-display text-xs uppercase tracking-[0.15em] ${isDark?'text-dark-text':'text-gray-400'}`} style={{fontWeight:800}}>{cat.title}</h3>
                <div className={`flex-1 h-px ${isDark?'bg-dark-border':'bg-gray-100'}`}/>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {cat.skills.map((s, si) => <SkillCard key={si} {...s} delay={ci*0.07+si*0.05} isDark={isDark}/>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
