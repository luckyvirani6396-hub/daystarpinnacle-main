import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClipboardList, X } from 'lucide-react';
import ContactForm from '../forms/ContactForm';

const AUTO_CLOSE_MS = 2200;

const easeSoft = [0.22, 1, 0.36, 1] as const;

const panelVariants = {
  hidden: { x: '100%', opacity: 0.85, scale: 0.98 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      damping: 28,
      stiffness: 260,
      mass: 0.9,
    },
  },
  exit: {
    x: '100%',
    opacity: 0.9,
    scale: 0.985,
    transition: { duration: 0.32, ease: easeSoft },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: easeSoft },
  },
};

export default function RegisterDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const close = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => setFormKey((k) => k + 1), 360);
  }, []);

  const open = useCallback(() => setIsOpen(true), []);

  const handleSuccess = useCallback(() => {
    close();
  }, [close]);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <>
      {/* Right-edge engagement tab */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40, scale: 0.92 }}
            transition={{ duration: 0.35, ease: easeSoft }}
            whileHover={{ x: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={open}
            aria-label="Open registration form"
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[10000] flex items-center gap-2.5 pl-3.5 pr-2.5 py-5 rounded-l-2xl rounded-r-none bg-[#004B57] text-white shadow-[-6px_0_28px_rgba(0,75,87,0.35)] border border-r-0 border-white/20 hover:bg-[#003840] transition-colors duration-300 group"
          >
            <span className="flex flex-col items-center gap-2">
              <motion.span
                className="w-10 h-10 rounded-xl bg-[#FF7A1A] flex items-center justify-center shadow-lg shadow-[#FF7A1A]/40"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(255,122,26,0.45)',
                    '0 0 0 10px rgba(255,122,26,0)',
                  ],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              >
                <ClipboardList className="w-5 h-5" strokeWidth={2.3} />
              </motion.span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180">
                Register
              </span>
            </span>
            <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-14 rounded-full bg-[#FF7A1A] group-hover:h-18 transition-all duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Backdrop + slide-in panel */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              key="register-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: easeSoft }}
              className="fixed inset-0 z-[10001] bg-[#004B57]/45 backdrop-blur-[3px]"
              onClick={close}
              aria-hidden="true"
            />

            <motion.aside
              key="register-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="register-drawer-title"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-[10002] h-full w-full max-w-md sm:max-w-lg bg-white shadow-[-16px_0_48px_rgba(0,75,87,0.18)] flex flex-col origin-right"
            >
              {/* Soft brand glow */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[#FF7A1A]/10 blur-3xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="absolute -left-10 bottom-20 w-44 h-44 rounded-full bg-[#004B57]/8 blur-3xl"
                />
              </div>

              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col h-full"
              >
                {/* Header */}
                <div className="shrink-0 px-5 sm:px-6 pt-5 pb-4 border-b border-[#E2E8E4] bg-[#FAF9F5]/95 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <motion.span
                        variants={itemVariants}
                        className="inline-flex text-[10px] font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-[#FEF3E8] border border-[#FF7A1A]/25 text-[#FF7A1A] mb-2"
                      >
                        Quick Register
                      </motion.span>
                      <motion.h2
                        variants={itemVariants}
                        id="register-drawer-title"
                        className="text-xl sm:text-2xl font-serif font-semibold text-[#004B57] leading-tight"
                      >
                        Register Your Interest
                      </motion.h2>
                      <motion.p
                        variants={itemVariants}
                        className="text-sm text-[#5F6B6E] font-medium mt-1.5"
                      >
                        Share your details — we&apos;ll design a wellness plan for your team.
                      </motion.p>
                    </div>
                    <motion.button
                      variants={itemVariants}
                      type="button"
                      onClick={close}
                      aria-label="Close registration form"
                      whileHover={{ rotate: 90, scale: 1.05 }}
                      whileTap={{ scale: 0.92 }}
                      className="shrink-0 w-10 h-10 rounded-xl border border-[#E2E8E4] bg-white flex items-center justify-center text-[#004B57] hover:bg-[#004B57] hover:text-white hover:border-[#004B57] transition-colors"
                    >
                      <X className="w-5 h-5" strokeWidth={2.2} />
                    </motion.button>
                  </div>
                </div>

                {/* Scrollable form */}
                <motion.div
                  variants={itemVariants}
                  className="no-scrollbar flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6 py-5"
                >
                  <ContactForm
                    key={formKey}
                    idPrefix="drawer"
                    compact
                    autoCloseAfterMs={AUTO_CLOSE_MS}
                    onSuccess={handleSuccess}
                  />
                </motion.div>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
