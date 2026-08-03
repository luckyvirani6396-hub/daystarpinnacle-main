import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import { SITE_NAME } from '../../constants';

export default function Loading() {
  return (
    <div
      className="h-full w-full flex items-center justify-center bg-[#FAF9F5]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <motion.img
        src={logo}
        alt={`${SITE_NAME} logo`}
        draggable={false}
        className="w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 object-contain"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{
          opacity: [0.55, 1, 0.55],
          scale: [0.98, 1, 0.98],
        }}
        transition={{
          opacity: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
          default: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
      />
    </div>
  );
}
