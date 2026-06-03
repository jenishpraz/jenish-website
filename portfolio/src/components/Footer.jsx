import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const socials = [
  { icon:FiGithub,    href:'https://github.com/jenishpraz' },
  { icon:FiLinkedin,  href:'https://linkedin.com/in/jenishprajapati' },
  { icon:FiFacebook,  href:'https://facebook.com' },
  { icon:FiInstagram, href:'https://instagram.com' },
];
const links = ['Home','About','Skills','Experience','Projects','Services','Contact'];

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer className={`border-t ${isDark?'bg-dark border-dark-border':'bg-white border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl" style={{fontWeight:900,letterSpacing:'-0.03em'}}>
              <span className="accent-gradient">Jenish</span>
              <span className={isDark?'text-white':'text-gray-900'}> Prajapati</span>
            </span>
            <p className={`font-body text-xs mt-1 ${isDark?'text-dark-text':'text-gray-400'}`}>Junior Full Stack Developer · Bhaktapur, Nepal</p>
          </div>
          <div className="hidden md:flex gap-5">
            {links.map(l => (
              <button key={l} onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior:'smooth' })}
                className={`font-body text-xs font-medium transition-colors hover:text-accent ${isDark?'text-dark-text':'text-gray-400'}`}>{l}</button>
            ))}
          </div>
          <div className="flex gap-2">
            {socials.map(({ icon:Icon, href }, i) => (
              <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale:1.1, y:-2 }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  isDark?'text-dark-text hover:text-white hover:bg-dark-card border border-dark-border':'text-gray-400 hover:text-accent hover:bg-accent-light'
                }`}>
                <Icon size={15}/>
              </motion.a>
            ))}
          </div>
        </div>
        <div className={`mt-8 pt-6 border-t text-center ${isDark?'border-dark-border':'border-gray-100'}`}>
          <p className={`font-body text-xs ${isDark?'text-[#333]':'text-gray-300'}`}>
            © 2026 <span style={{color: isDark?'#818CF8':'#6366F1'}}>Jenish Prajapati</span>. All Rights Reserved. Built with React.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
