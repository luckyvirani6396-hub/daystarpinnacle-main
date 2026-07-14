import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Shield, Heart, Calendar } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1.0] as const,
    },
  },
};

export default function Hero() {
  const highlights = [
    { label: 'Healthier Workforce', icon: Users, color: '#FF7A1A', bg: '#FEF3E8' },
    { label: 'Higher Productivity', icon: TrendingUp, color: '#0066CC', bg: '#E6F0FA' },
    { label: 'Reduced Absenteeism', icon: Shield, color: '#008080', bg: '#E6F4F6' },
    { label: 'Better Work Culture', icon: Heart, color: '#E74C3C', bg: '#FDEDEC' },
  ];

  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden pt-36 lg:pt-48 pb-16 lg:pb-24">
      {/* Background radial gradient sweeps for high-end feel */}
      <div className="absolute left-[-10%] top-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#EAF2E1] to-transparent blur-[130px] opacity-50 pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#FFF3CD] to-transparent blur-[130px] opacity-40 pointer-events-none" />

      {/* Main Container Aligned Pixel-Perfectly with Floating Navbar */}
      <div className="w-[95%] max-w-8xl mx-auto px-6 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Typography & CTAs Column */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center text-left relative pr-4 lg:pr-8">
            {/* Elegant Background Dotted Accent matching mockup */}
            <div className="absolute -right-2 top-[8%] grid grid-cols-4 gap-2 opacity-40 pointer-events-none hidden sm:grid">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]/50" />
              ))}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start w-full"
            >
              {/* Tagline */}
              <motion.div variants={childVariants} className="mb-4">
                <span className="text-[11px] font-extrabold tracking-widest text-[#FF7A1A] uppercase bg-[#FF7A1A]/5 px-3 py-1.5 rounded-md border border-[#FF7A1A]/10">
                  Corporate Health &amp; Wellness Solutions
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={childVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] leading-[1.12] text-[#0c222d] font-serif font-medium mb-5 max-w-2xl tracking-tight"
              >
                Healthier Employees. <br />
                <span className="text-[#FF7A1A] italic font-normal">Stronger</span> Organizations.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={childVariants}
                className="text-sm sm:text-base md:text-[15.5px] text-[#2c4033]/80 max-w-xl mb-8 leading-relaxed font-medium"
              >
                Comprehensive corporate wellness programs that improve employee health, boost productivity, and create a positive workplace culture.
              </motion.p>

              {/* Call-to-Actions (CTAs) */}
              <motion.div
                variants={childVariants}
                className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
              >
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF7A1A] hover:bg-[#E86800] text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF7A1A]/15 hover:shadow-xl hover:shadow-[#FF7A1A]/20 hover:-translate-y-0.5"
                >
                  <Calendar className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
                  <span>Schedule Consultation</span>
                </Link>
                <Link
                  to="/programs"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-[#0c222d]/20 text-[#0c222d] hover:border-[#FF7A1A] hover:text-[#FF7A1A] font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4.5 h-4.5" strokeWidth={2.2} />
                </Link>
              </motion.div>

              {/* Highlights Row using a balanced responsive grid */}
              <motion.div
                variants={childVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-gray-200 w-full"
              >
                {highlights.map((hl, idx) => (
                  <div
                    key={hl.label}
                    className={`flex items-center gap-3 w-full ${
                      idx !== 3 ? 'md:border-r md:border-gray-200 md:pr-4 lg:pr-6' : ''
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: hl.bg, color: hl.color }}
                    >
                      <hl.icon className="w-4.5 h-4.5" strokeWidth={2.2} />
                    </div>
                    <span className="text-xs font-bold text-[#0c222d] leading-tight">
                      {hl.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Framed curved crescents with professional layout consistency */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Orange sweep crescent behind the left edge of the image */}
            <div className="absolute left-[-16px] top-6 bottom-6 w-8 bg-[#FF7A1A] rounded-r-full z-10 pointer-events-none shadow-md shadow-[#FF7A1A]/10" />

            {/* Navy blue sweep crescent behind the right edge of the image */}
            <div className="absolute -right-4 top-6 bottom-6 w-11 bg-[#0c222d] rounded-l-full z-10 pointer-events-none shadow-md" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="relative w-full rounded-[24px] overflow-hidden border-4 border-white shadow-2xl bg-white"
            >
              <img
                src="/images/corporate-hero.png"
                alt="Corporate Wellness Team Collaboration"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
