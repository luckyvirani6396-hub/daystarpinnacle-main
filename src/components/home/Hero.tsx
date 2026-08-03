import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Shield, Heart, Calendar, Sparkles } from 'lucide-react';

const easeSoft = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: easeSoft,
    },
  },
};

const highlightContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const highlightItem = {
  hidden: { opacity: 0, y: 16, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: easeSoft },
  },
};

const highlights = [
  { label: 'Healthier Workforce', icon: Users, color: '#FF7A1A', bg: '#FEF3E8' },
  { label: 'Higher Productivity', icon: TrendingUp, color: '#0066CC', bg: '#E6F0FA' },
  { label: 'Reduced Absenteeism', icon: Shield, color: '#008080', bg: '#E6F4F6' },
  { label: 'Better Work Culture', icon: Heart, color: '#E74C3C', bg: '#FDEDEC' },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden pt-36 lg:pt-48 pb-16 lg:pb-24">
      {/* Animated ambient glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.4, ease: easeSoft }}
        className="absolute left-[-10%] top-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#EAF2E1] to-transparent blur-[130px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.15, ease: easeSoft }}
        className="absolute right-[-10%] bottom-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#FFF3CD] to-transparent blur-[130px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute left-[35%] bottom-[-5%] w-[30%] h-[35%] rounded-full bg-[#FF7A1A]/10 blur-[100px] pointer-events-none"
      />

      <div className="w-[95%] max-w-8xl mx-auto px-6 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center text-left relative pr-4 lg:pr-8">
            {/* Dot grid accent — staggered pop-in */}
            <div className="absolute -right-2 top-[8%] grid grid-cols-4 gap-2 pointer-events-none hidden sm:grid">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.45, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.03, duration: 0.35, ease: easeSoft }}
                  className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"
                />
              ))}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start w-full"
            >
              {/* Badge */}
              <motion.div variants={childVariants} className="mb-4">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-widest text-[#FF7A1A] uppercase bg-[#FF7A1A]/5 px-3.5 py-2 rounded-full border border-[#FF7A1A]/15 shadow-sm"
                >
                  <motion.span
                    animate={{ rotate: [0, 12, -8, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  >
                    <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </motion.span>
                  Corporate Health &amp; Wellness Solutions
                </motion.span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={childVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] leading-[1.12] text-[#0c222d] font-serif font-medium mb-5 max-w-2xl tracking-tight"
              >
                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: easeSoft }}
                  className="block"
                >
                  Healthier Employees.
                </motion.span>
                <span className="block mt-1">
                  <motion.span
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.38, duration: 0.75, ease: easeSoft }}
                    className="inline-block text-[#FF7A1A] italic font-normal"
                  >
                    Stronger
                  </motion.span>{' '}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7, ease: easeSoft }}
                    className="inline-block"
                  >
                    Organizations.
                  </motion.span>
                </span>
              </motion.h1>

              {/* Accent line under headline */}
              <motion.div
                variants={childVariants}
                className="flex items-center gap-2.5 mb-5"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.65, duration: 0.7, ease: easeSoft }}
                  className="h-px w-14 origin-left bg-gradient-to-r from-[#FF7A1A] to-transparent"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.85, type: 'spring', stiffness: 320, damping: 16 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#72A93B]"
                />
              </motion.div>

              {/* Subheadline */}
              <motion.p
                variants={childVariants}
                className="text-sm sm:text-base md:text-[15.5px] text-[#2c4033]/80 max-w-xl mb-8 leading-relaxed font-medium"
              >
                Comprehensive corporate wellness programs that improve employee health, boost
                productivity, and create a positive workplace culture.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={childVariants}
                className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
              >
                <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF7A1A] hover:bg-[#E86800] text-white font-bold text-sm transition-colors duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF7A1A]/20"
                  >
                    <Calendar className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
                    <span>Schedule Consultation</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/programs"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-[#0c222d]/20 text-[#0c222d] hover:border-[#FF7A1A] hover:text-[#FF7A1A] font-bold text-sm transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4.5 h-4.5" strokeWidth={2.2} />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Highlights — one by one */}
              <motion.div
                variants={highlightContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-gray-200 w-full"
              >
                {highlights.map((hl, idx) => (
                  <motion.div
                    key={hl.label}
                    variants={highlightItem}
                    whileHover={{ y: -2 }}
                    className={`flex items-center gap-3 w-full ${
                      idx !== 3 ? 'md:border-r md:border-gray-200 md:pr-4 lg:pr-6' : ''
                    }`}
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 0 0 ${hl.color}00`,
                          `0 0 0 6px ${hl.color}18`,
                          `0 0 0 0 ${hl.color}00`,
                        ],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: 1.4 + idx * 0.35,
                        ease: 'easeOut',
                      }}
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: hl.bg, color: hl.color }}
                    >
                      <hl.icon className="w-4.5 h-4.5" strokeWidth={2.2} />
                    </motion.div>
                    <span className="text-xs font-bold text-[#0c222d] leading-tight">
                      {hl.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right image column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -18, scaleY: 0.7 }}
              animate={{ opacity: 1, x: 0, scaleY: 1 }}
              transition={{ delay: 0.45, duration: 0.8, ease: easeSoft }}
              className="absolute left-[-16px] top-6 bottom-6 w-8 bg-[#FF7A1A] rounded-r-full z-10 pointer-events-none shadow-md shadow-[#FF7A1A]/20 origin-center"
            />
            <motion.div
              initial={{ opacity: 0, x: 18, scaleY: 0.7 }}
              animate={{ opacity: 1, x: 0, scaleY: 1 }}
              transition={{ delay: 0.55, duration: 0.8, ease: easeSoft }}
              className="absolute -right-4 top-6 bottom-6 w-11 bg-[#0c222d] rounded-l-full z-10 pointer-events-none shadow-md origin-center"
            />

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.92, rotate: 1.5 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: easeSoft }}
              className="relative w-full"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full rounded-[24px] overflow-hidden border-4 border-white shadow-2xl bg-white"
              >
                <motion.img
                  src="/images/corporate-hero.png"
                  alt="Corporate Wellness Team Collaboration"
                  className="w-full aspect-[4/3] object-cover"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 1.2, ease: easeSoft }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#0c222d]/20 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>

              {/* Floating satisfaction badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.05, type: 'spring', stiffness: 260, damping: 18 }}
                className="absolute -bottom-4 left-4 sm:left-6 right-4 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-[0_12px_36px_rgba(12,34,45,0.12)] px-4 py-3 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" fill="currentColor" strokeWidth={0} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0c222d] leading-none">98% Satisfaction</p>
                  <p className="text-[11px] font-medium text-[#5F6B6E] mt-1">Trusted by HR teams</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
