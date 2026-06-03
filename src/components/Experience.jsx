import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCode, FiMonitor, FiUsers, FiPenTool } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    role:'Junior Full Stack Developer', company:'Softsaro Nepal', period:'Apr 2026 – Present',
    type:'Full-time', current:true, icon:FiBriefcase, color:'#6366F1',
    desc:'Working on React.js, Next.js, and Laravel-based full-stack applications. Building scalable frontend interfaces and RESTful APIs for production projects. Collaborating with team using clean architecture and Git workflows.',
    tags:['React.js','Next.js','Laravel','REST APIs','Git'],
  },
  {
    role:'Junior Developer', company:'Next In Tech Pvt. Ltd', period:'Dec 2025 – Mar 2026',
    type:'Full-time', icon:FiCode, color:'#818CF8',
    desc:'Developed reusable UI components using React.js and Next.js. Worked on responsive web applications with collaborative development practices.',
    tags:['React.js','Next.js','UI Components','Responsive Design'],
  },
  {
    role:'Frontend Developer Intern', company:'AMNIL Technology', period:'Sep 2025 – Nov 2025',
    type:'Internship', icon:FiMonitor, color:'#A5B4FC',
    desc:'Built reusable React components and interactive frontend features. Worked with API integration and frontend state management.',
    tags:['React.js','API Integration','State Management'],
  },
  {
    role:'IT Officer / Membership Chair', company:'Rotaract Club of Madhyapur', period:'2021 – 2025',
    type:'Volunteer', icon:FiUsers, color:'#6B7280',
    desc:'Managed digital platforms and technical operations. Coordinated membership activities and organized technical events.',
    tags:['IT Management','Digital Platforms','Events'],
  },
  {
    role:'Graphics Designer', company:'Hult Prize, Khwopa Engineering College', period:'2023 – 2024',
    type:'Competition', icon:FiPenTool, color:'#6B7280',
    desc:'Designed visual materials, posters, and branding assets for the Hult Prize social entrepreneurship competition.',
    tags:['Graphic Design','Figma','Branding'],
  },
];

export default function Experience() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  return (
    <section id="experience" ref={ref} className={`py-24 ${isDark?'bg-dark-secondary':'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} className="text-center mb-14">
          <div className="section-tag inline-flex"><span className="glow-dot"/>Experience</div>
          <h2 className={`section-heading ${isDark?'text-white':'text-gray-950'}`}>Career <span className="accent-gradient">Timeline</span></h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[23px] top-2 bottom-2 w-px hidden sm:block"
            style={{ background:'linear-gradient(to bottom, #6366F1, rgba(99,102,241,0.1))' }}/>
          <div className="space-y-5">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity:0, x:-32 }} animate={inView?{opacity:1,x:0}:{}}
                  transition={{ delay:i*0.11, duration:0.65, ease:[0.23,1,0.32,1] }}
                  className="sm:pl-16 relative">
                  <div className="absolute left-0 top-[22px] w-12 h-12 rounded-2xl border-2 items-center justify-center hidden sm:flex"
                    style={{
                      background: isDark?'#000':'#fff',
                      borderColor: exp.current ? '#6366F1' : isDark?'#1A1A1A':'#e5e7eb',
                      boxShadow: exp.current ? '0 0 20px rgba(99,102,241,0.3)' : 'none',
                    }}>
                    <Icon size={17} style={{ color: exp.current?'#6366F1': isDark?'#4B5563':'#9CA3AF' }}/>
                  </div>
                  <motion.div whileHover={{ x:4 }}
                    className={`p-6 rounded-2xl border transition-all ${
                      isDark?'bg-dark-card border-dark-border hover:border-accent/25':'bg-white border-gray-100 hover:border-accent/30 shadow-sm'
                    } ${exp.current ? (isDark?'border-accent/30':'border-accent/30') : ''}`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className={`font-display text-[17px] mb-0.5 ${isDark?'text-white':'text-gray-950'}`} style={{fontWeight:800}}>{exp.role}</h3>
                        <p className="font-body text-sm font-semibold" style={{ color: isDark?'#818CF8':'#6366F1' }}>{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`font-mono text-[11px] px-2.5 py-1 rounded-full ${
                          exp.current
                            ? isDark?'bg-accent/15 text-accent-dark':'bg-accent-light text-accent'
                            : isDark?'bg-dark-border text-dark-text':'bg-gray-100 text-gray-500'
                        }`}>{exp.current ? '🟢 Current' : exp.type}</span>
                        <span className={`font-mono text-[11px] ${isDark?'text-dark-text':'text-gray-400'}`}>{exp.period}</span>
                      </div>
                    </div>
                    <p className={`font-body text-sm leading-relaxed mb-4 ${isDark?'text-dark-text':'text-gray-600'}`}>{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((t,j) => (
                        <span key={j} className={`font-mono text-[11px] px-2.5 py-1 rounded-lg ${
                          isDark?'bg-dark-border text-dark-text':'bg-gray-100 text-gray-600'
                        }`}>{t}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
