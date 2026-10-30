import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollTopArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 260);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          data-cursor-hover
          className="fixed bottom-6 right-5 sm:right-6 z-[9989] w-12 h-12 rounded-2xl bg-[#FF7A1A] text-white border border-[#FF7A1A] shadow-[0_10px_28px_rgba(255,122,26,0.35)] hover:bg-[#FF7A1A] hover:border-[#FF7A1A] transition-colors duration-300 flex items-center justify-center"
        >
          <ChevronUp className="w-6 h-6" strokeWidth={2.6} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
