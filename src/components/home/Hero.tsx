import { motion, MotionConfig } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  BarChart3,
  ShieldCheck,
  Heart,
} from 'lucide-react';

const easeSoft = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: easeSoft,
    },
  },
};

const slideFromBottom = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easeSoft,
    },
  },
};

const highlights = [
  { line1: 'Healthier', line2: 'Workforce', icon: Users, color: '#72A93B', filled: false },
  { line1: 'Higher', line2: 'Productivity', icon: BarChart3, color: '#72A93B', filled: false },
  { line1: 'Reduced', line2: 'Absenteeism', icon: ShieldCheck, color: '#72A93B', filled: true },
  { line1: 'Better', line2: 'Work Culture', icon: Heart, color: '#72A93B', filled: true },
];

const HERO_BG = '#F3F8EE';

function CornerLeaves({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" fill="none" aria-hidden="true" className={className}>
      <path d="M118 4 C 96 30, 84 70, 92 136" stroke="#5E8F2E" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 30 C 70 18, 46 30, 34 48 C 62 56, 86 50, 100 30 Z" fill="#72A93B" />
      <path d="M93 72 C 70 70, 52 88, 48 108 C 74 104, 90 92, 93 72 Z" fill="#72A93B" fillOpacity="0.85" />
      <path d="M108 12 C 108 0, 96 -6, 84 -4 C 84 8, 94 16, 108 12 Z" fill="#8BC34A" />
    </svg>
  );
}

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
    <section
      className="relative w-full lg:min-h-[92vh] overflow-hidden flex flex-col justify-center pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24"
      style={{ backgroundColor: HERO_BG }}
    >
      {/* Desktop photo: anchored right, fading into the light background on the left */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-[70%] overflow-hidden">
          <motion.img
            src="/images/Fresh Green Office Stretch.png?v=2"
            alt="Corporate health and wellness program employees stretching at desk"
            loading="eager"
            decoding="async"
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: easeSoft }}
            className="h-full w-full object-cover object-[62%_center] select-none"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${HERO_BG} 0%, ${HERO_BG} 32%, ${HERO_BG}d9 42%, ${HERO_BG}4d 54%, transparent 64%)`,
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{ background: `linear-gradient(180deg, ${HERO_BG}99, transparent)` }}
        />
      </div>

      {/* Soft background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-24 top-10 w-[420px] h-[420px] rounded-full bg-white/60 blur-[90px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[20%] bottom-0 w-[380px] h-[200px] rounded-full bg-[#72A93B]/10 blur-[80px]"
        />
      </div>

      {/* Corner leaves, gently swaying */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0, rotate: [0, -5, 0, 3, 0] }}
        transition={{
          opacity: { delay: 0.6, duration: 0.8 },
          x: { delay: 0.6, duration: 0.8, ease: easeSoft },
          rotate: { delay: 1.4, duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ transformOrigin: 'top right' }}
        className="hidden lg:block absolute right-0 top-20 w-[70px] xl:w-[86px] z-10 pointer-events-none"
      >
        <CornerLeaves className="w-full h-auto" />
      </motion.div>

      {/* Bottom wave */}
      <motion.svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.1, ease: easeSoft }}
        className="absolute bottom-0 left-0 w-full h-14 sm:h-20 lg:h-24 z-10 pointer-events-none"
      >
        <path d="M0 70 C 320 10, 760 120, 1440 40 L1440 120 L0 120 Z" fill="#E4EFD9" fillOpacity="0.75" />
        <path d="M0 95 C 420 50, 900 125, 1440 80 L1440 120 L0 120 Z" fill={HERO_BG} />
      </motion.svg>

      {/* Main Content Area */}
      <div className="relative z-20 w-[95%] max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl lg:max-w-[620px] xl:max-w-[660px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Top Eyebrow: Horizontal Line + Tagline */}
            <motion.div variants={slideFromLeft} className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-5">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25, duration: 0.7, ease: easeSoft }}
                style={{ transformOrigin: 'left' }}
                className="h-[2px] w-6 sm:w-8 bg-[#72A93B] rounded-full inline-block"
              />
              <span className="text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#004B57]/80">
                Corporate Health &amp; Wellness Solutions
              </span>
            </motion.div>

            {/* Headline with staggered slide-in from left */}
            <motion.h1
              variants={slideFromLeft}
              className="text-[32px] sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.12] sm:leading-[1.08] text-[#004B57] font-serif font-normal mb-3.5 sm:mb-5 tracking-tight"
            >
              <span className="block">Healthier Employees.</span>
              <span className="block mt-1 sm:mt-2">
                <span className="relative inline-block text-[#72A93B] italic font-normal">
                  Stronger
                  <svg
                    viewBox="0 0 200 16"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-2.5 sm:h-3.5 overflow-visible"
                  >
                    <motion.path
                      d="M3 11 C 50 3, 120 2, 197 8"
                      fill="none"
                      stroke="#72A93B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeOpacity="0.55"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1, duration: 0.9, ease: 'easeInOut' }}
                    />
                  </svg>
                </span>{' '}
                Organizations.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={slideFromLeft}
              className="text-[13px] sm:text-base md:text-[17px] text-[#004B57]/75 max-w-xl mb-5 sm:mb-8 leading-relaxed font-normal"
            >
              Comprehensive corporate wellness programs that improve employee health, boost
              productivity, and create a positive workplace culture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={slideFromBottom}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="btn-shine group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#FF7A1A] hover:bg-[#FF7A1A] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF7A1A]/25 hover:shadow-xl hover:shadow-[#FF7A1A]/35 transition-shadow duration-300"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.2}
                  />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/programs"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/70 hover:bg-[#004B57] backdrop-blur-sm border border-[#004B57]/30 hover:border-[#004B57] text-[#004B57] hover:text-white font-semibold text-sm sm:text-base flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <span>Explore Programs</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* 4 Feature Highlights */}
            <motion.div
              variants={slideFromBottom}
              className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-4 sm:gap-x-7 lg:gap-x-8 mt-8 sm:mt-12"
            >
              {highlights.map((hl, idx) => (
                <motion.div
                  key={hl.line1 + hl.line2}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + idx * 0.08, duration: 0.5, ease: easeSoft }}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-2.5 sm:gap-3 cursor-default"
                >
                  <div
                    className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full bg-white group-hover:bg-[#72A93B] text-[#72A93B] group-hover:text-white border border-[#72A93B]/15 flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(0,75,87,0.08)] group-hover:shadow-[0_8px_20px_rgba(114,169,59,0.35)] transition-all duration-300 [--hl-check:#FFFFFF] group-hover:[--hl-check:#72A93B]"
                  >
                    <hl.icon
                      className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      strokeWidth={2.2}
                      fill={hl.filled ? 'currentColor' : 'none'}
                      stroke={hl.filled && hl.icon === ShieldCheck ? 'var(--hl-check)' : 'currentColor'}
                    />
                  </div>
                  <div className="text-[12px] sm:text-[13px] font-medium text-[#004B57] leading-[1.3]">
                    <span className="block">{hl.line1}</span>
                    <span className="block">{hl.line2}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile / tablet photo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: easeSoft }}
          className="lg:hidden mt-8 sm:mt-10 rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,75,87,0.12)] aspect-[4/5] sm:aspect-[16/10]"
        >
          <picture className="w-full h-full block">
            <source media="(max-width: 639px)" srcSet="/images/hero-corporate-wellness-mobile.jpg" />
            <motion.img
              src="/images/Fresh Green Office Stretch.png?v=2"
              alt="Corporate health and wellness program employees stretching at desk"
              loading="eager"
              decoding="async"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 1.8, ease: easeSoft }}
              className="w-full h-full object-cover object-[center_30%] sm:object-[65%_center] select-none"
            />
          </picture>
        </motion.div>

      </div>

    </section>
    </MotionConfig>
  );
}
