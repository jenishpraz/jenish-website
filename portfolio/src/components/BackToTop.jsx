import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button initial={{ opacity:0, scale:0.5 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.5 }}
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
          style={{ background:'#6366F1' }}
          whileHover={{ scale:1.1, background:'#4F46E5', y:-2 }} whileTap={{ scale:0.9 }}>
          <FiArrowUp className="text-white" size={18}/>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
