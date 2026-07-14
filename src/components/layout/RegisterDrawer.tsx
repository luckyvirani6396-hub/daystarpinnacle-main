import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClipboardList, X } from 'lucide-react';
import ContactForm from '../forms/ContactForm';

const AUTO_CLOSE_MS = 2200;

export default function RegisterDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const close = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => setFormKey((k) => k + 1), 320);
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
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: [1, 1.03, 1],
            }}
            exit={{ opacity: 0, x: 20 }}
            transition={{
              opacity: { duration: 0.3 },
              x: { duration: 0.3 },
              scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
            }}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.94, x: -1 }}
            onClick={open}
            aria-label="Open registration form"
            data-cursor-hover
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[9990] flex items-center gap-2 pl-3 pr-2 py-4 rounded-l-2xl bg-[#004B57] text-white shadow-[-4px_0_24px_rgba(0,75,87,0.25)] border border-r-0 border-white/10 hover:bg-[#003840] hover:pl-4 transition-all duration-300 group"
          >
            <span className="flex flex-col items-center gap-1.5">
              <motion.span
                className="w-8 h-8 rounded-xl bg-[#FF7A1A] flex items-center justify-center shadow-lg shadow-[#FF7A1A]/30 group-hover:scale-105 transition-transform"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(255,122,26,0.35)',
                    '0 0 0 8px rgba(255,122,26,0)',
                  ],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              >
                <ClipboardList className="w-4 h-4" strokeWidth={2.2} />
              </motion.span>
              <span
                className="text-[10px] font-extrabold uppercase tracking-[0.18em] [writing-mode:vertical-rl] rotate-180"
                style={{ letterSpacing: '0.14em' }}
              >
                Register
              </span>
            </span>
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-10 rounded-full bg-[#FF7A1A] opacity-80 group-hover:h-14 transition-all duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Backdrop + slide-in panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[9991] bg-[#004B57]/40 backdrop-blur-[2px]"
              onClick={close}
              aria-hidden="true"
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="register-drawer-title"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              className="fixed top-0 right-0 z-[9992] h-full w-full max-w-md sm:max-w-lg bg-white shadow-[-8px_0_40px_rgba(0,75,87,0.15)] flex flex-col"
            >
              {/* Header */}
              <div className="shrink-0 px-5 sm:px-6 pt-5 pb-4 border-b border-[#E2E8E4] bg-[#FAF9F5]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex text-[10px] font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-[#FEF3E8] border border-[#FF7A1A]/25 text-[#FF7A1A] mb-2">
                      Quick Register
                    </span>
                    <h2
                      id="register-drawer-title"
                      className="text-xl sm:text-2xl font-serif font-semibold text-[#004B57] leading-tight"
                    >
                      Register Your Interest
                    </h2>
                    <p className="text-[13px] text-[#5F6B6E] font-medium mt-1">
                      Share your details — we&apos;ll design a wellness plan for your team.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close registration form"
                    data-cursor-hover
                    className="shrink-0 w-9 h-9 rounded-xl border border-[#E2E8E4] bg-white flex items-center justify-center text-[#004B57] hover:bg-[#004B57] hover:text-white hover:border-[#004B57] transition-colors"
                  >
                    <X className="w-4.5 h-4.5" strokeWidth={2.2} />
                  </button>
                </div>
              </div>

              {/* Scrollable form */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6 py-5">
                <ContactForm
                  key={formKey}
                  idPrefix="drawer"
                  compact
                  autoCloseAfterMs={AUTO_CLOSE_MS}
                  onSuccess={handleSuccess}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
