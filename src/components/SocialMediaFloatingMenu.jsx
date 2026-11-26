import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiShare2 } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './SocialMediaFloatingMenu.css';

const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/jenish.prajapati.716',
  instagram: 'https://www.instagram.com/zenpjpt/',
  tiktok: 'https://www.tiktok.com/@YOUR_TIKTOK_USERNAME',
  whatsapp: 'https://wa.me/9779863443359',
};

const SOCIALS = [
  { name: 'Facebook', href: SOCIAL_LINKS.facebook, icon: FaFacebookF, className: 'facebook' },
  { name: 'Instagram', href: SOCIAL_LINKS.instagram, icon: FaInstagram, className: 'instagram' },
  { name: 'TikTok', href: SOCIAL_LINKS.tiktok, icon: FaTiktok, className: 'tiktok' },
  { name: 'WhatsApp', href: SOCIAL_LINKS.whatsapp, icon: FaWhatsapp, className: 'whatsapp' },
];

export default function SocialMediaFloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="social-menu">
      <div className="social-menu__links" id="social-media-links">
        <AnimatePresence>
          {isOpen && SOCIALS.map(({ name, href, icon: Icon, className }, index) => (
            <motion.a
              key={name}
              className={`social-menu__link social-menu__link--${className}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name}${name === 'WhatsApp' ? ' chat' : ' profile'} in a new tab`}
              title={name}
              initial={{ opacity: 0, y: 18, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.8 }}
              transition={{ duration: 0.2, delay: isOpen ? index * 0.045 : 0 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                setIsOpen(false);
                toggleRef.current?.focus();
              }}
            >
              <Icon aria-hidden="true" size={21} />
              <span className="social-menu__tooltip" aria-hidden="true">{name}</span>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        ref={toggleRef}
        className="social-menu__toggle"
        type="button"
        aria-label={isOpen ? 'Close social media menu' : 'Open social media menu'}
        aria-expanded={isOpen}
        aria-controls="social-media-links"
        onClick={() => setIsOpen((open) => !open)}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.94 }}
      >
        <motion.span
          className="social-menu__toggle-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
        >
          <FiShare2 aria-hidden="true" size={23} />
        </motion.span>
      </motion.button>
    </div>
  );
}
