import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Users, TrendingUp, Shield, Heart, Calendar } from 'lucide-react';

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
  { line1: 'Healthier', line2: 'Workforce', icon: Users, color: '#FF7A1A', bg: '#FEECE0' },
  { line1: 'Higher', line2: 'Productivity', icon: TrendingUp, color: '#2B7FFF', bg: '#E5F0FD' },
  { line1: 'Reduced', line2: 'Absenteeism', icon: Shield, color: '#2E7D52', bg: '#E3F2E9' },
  { line1: 'Better', line2: 'Work Culture', icon: Heart, color: '#E04F4F', bg: '#FDE8E8' },
];

export default function Hero() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#FAF9F5] overflow-hidden flex flex-col justify-between pt-32 sm:pt-36 lg:pt-44 pb-6 sm:pb-8">
      {/* Background Image: Clean, high-definition office wellness photographic plate */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-corporate-wellness-new.jpg?v=2"
          alt="Corporate health and wellness program employees stretching at desk"
          className="w-full h-full object-cover object-[center_top] lg:object-[center_right] select-none"
        />

        {/* Very subtle transparent gradient only on the extreme left edge so text stays crisp without darkening the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Top Eyebrow: Horizontal Line + Tagline */}
            <motion.div variants={slideFromLeft} className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="h-[2px] w-5 bg-[#FF7A1A] rounded-full inline-block" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white drop-shadow-sm">
                Corporate Health &amp; Wellness Solutions
              </span>
            </motion.div>

            {/* Headline with staggered slide-in from left */}
            <motion.h1
              variants={slideFromLeft}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.08] text-white font-serif font-normal mb-5 tracking-tight drop-shadow-sm"
            >
              <span className="block">Healthier Employees.</span>
              <span className="block mt-1 sm:mt-2">
                <span className="text-[#FF7A1A] italic font-normal">Stronger</span> Organizations.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={slideFromLeft}
              className="text-sm sm:text-base md:text-[17px] text-white/90 max-w-xl mb-7 sm:mb-9 leading-relaxed font-normal drop-shadow-xs"
            >
              Comprehensive corporate wellness programs that improve employee health, boost
              productivity, and create a positive workplace culture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={slideFromBottom}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#FF7A1A] hover:bg-[#E86800] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF7A1A]/25 transition-colors duration-300"
                >
                  <Calendar className="w-4.5 h-4.5" strokeWidth={2.2} />
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4.5 h-4.5" strokeWidth={2.2} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/programs"
                  className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-black/35 hover:bg-black/55 backdrop-blur-xs border border-white/25 text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4.5 h-4.5" strokeWidth={2.2} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating 98% Satisfaction Card: Clean slide-in on load, perfectly stationary once loaded */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: easeSoft }}
          className="hidden md:flex absolute right-6 lg:right-14 bottom-24 lg:bottom-28 z-20 select-none bg-white rounded-2xl p-4 sm:p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/90 items-center gap-3.5"
        >
          <div className="w-11 h-11 rounded-xl bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 fill-[#FF7A1A] text-[#FF7A1A]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#0c222d] font-sans leading-none">98%</span>
              <div className="flex items-end gap-1 h-3.5 mb-0.5">
                <span className="w-1 h-1.5 bg-[#FF7A1A] rounded-t-xs" />
                <span className="w-1 h-2.5 bg-[#FF7A1A] rounded-t-xs" />
                <span className="w-1 h-3.5 bg-[#FF7A1A] rounded-t-xs" />
              </div>
            </div>
            <p className="text-[11px] font-semibold text-[#5F6B6E] mt-1">Employee Satisfaction</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Feature Strip (Matching Reference Mockup with Interactive Workable Scroll) */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.8, ease: easeSoft }}
        className="relative z-20 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 mt-12 sm:mt-16 pb-4"
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          {/* Workable Interactive Scroll Indicator — Clean & Stationary */}
          <motion.button
            onClick={handleScrollDown}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center justify-center gap-1.5 shrink-0 self-start lg:self-center pr-2 cursor-pointer focus:outline-none"
            aria-label="Scroll to next section"
            title="Scroll down"
          >
            <span className="w-px h-7 bg-white/50 group-hover:bg-[#FF7A1A] transition-colors" />
            <span className="text-[11px] font-normal text-white/75 group-hover:text-white transition-colors">
              Scroll
            </span>
            <div className="w-6 h-6 rounded-full border border-white/40 group-hover:border-[#FF7A1A] group-hover:bg-[#FF7A1A]/20 flex items-center justify-center text-white/80 group-hover:text-white transition-all shadow-sm">
              <ArrowDown className="w-3 h-3" />
            </div>
          </motion.button>

          {/* 4 Feature Items with Vertical Divider Lines and Staggered Animations */}
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-7 lg:gap-8 overflow-x-auto no-scrollbar">
            {highlights.map((hl, idx) => (
              <motion.div
                key={hl.line1 + hl.line2}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + idx * 0.08, duration: 0.5, ease: easeSoft }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-5 sm:gap-7 lg:gap-8 shrink-0 cursor-default"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 hover:scale-105"
                    style={{ backgroundColor: hl.bg, color: hl.color }}
                  >
                    <hl.icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-[13px] font-medium text-white leading-[1.25] tracking-normal">
                    <span className="block">{hl.line1}</span>
                    <span className="block">{hl.line2}</span>
                  </div>
                </div>

                {/* Vertical Divider Line after items (except last) */}
                {idx !== highlights.length - 1 && (
                  <div className="h-8 w-px bg-white/20 shrink-0 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
