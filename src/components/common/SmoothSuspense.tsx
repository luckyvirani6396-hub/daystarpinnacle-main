import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from './Loading';

const MIN_VISIBLE_MS = 1000;
const FADE_OUT_MS = 650;

function SuspendMarker({ onSuspend }: { onSuspend: () => void }) {
  useEffect(() => {
    onSuspend();
  }, [onSuspend]);

  return null;
}

function ResolveMarker({ onResolve }: { onResolve: () => void }) {
  useEffect(() => {
    onResolve();
  }, [onResolve]);

  return null;
}

interface SmoothSuspenseProps {
  children: React.ReactNode;
}

export default function SmoothSuspense({ children }: SmoothSuspenseProps) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const shownAt = useRef(Date.now());
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleSuspend = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    shownAt.current = Date.now();
    setExiting(false);
    setVisible(true);
  }, []);

  const handleResolve = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const elapsed = Date.now() - shownAt.current;
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);

    timerRef.current = setTimeout(() => setExiting(true), wait);
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  return (
    <>
      <Suspense fallback={<SuspendMarker onSuspend={handleSuspend} />}>
        <>
          {children}
          <ResolveMarker onResolve={handleResolve} />
        </>
      </Suspense>

      <AnimatePresence>
        {visible && (
          <motion.div
            key="page-loader"
            className="fixed inset-0 z-[100]"
            initial={{ opacity: 1 }}
            animate={{ opacity: exiting ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: FADE_OUT_MS / 1000,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={() => {
              if (exiting) setVisible(false);
            }}
            style={{ pointerEvents: exiting ? 'none' : 'auto' }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
