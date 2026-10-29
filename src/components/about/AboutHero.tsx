import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Building2, ChevronRight } from 'lucide-react';
import {
  btnPrimary,
  btnSecondary,
  sectionBody,
  sectionDotGrid,
  sectionIntroBadge,
} from '../home/sectionStyles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden isolate">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[8%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[5%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-1"
          >
            <motion.nav
              variants={childVariants}
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#5F6B6E] mb-4"
            >
              <Link to="/" className="hover:text-[#FF7A1A] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#004B57]/30" />
              <span className="text-[#FF7A1A]">About Us</span>
            </motion.nav>

            <motion.span
              variants={childVariants}
              className={`${sectionIntroBadge} items-center gap-2`}
            >
              <Building2 className="w-3.5 h-3.5" strokeWidth={2.5} />
              Who We Are
            </motion.span>

            <motion.h1
              variants={childVariants}
              className="text-2xl sm:text-4xl lg:text-[2.65rem] font-serif font-medium text-[#004B57] leading-[1.15] tracking-tight mb-3 sm:mb-4 max-w-2xl"
            >
              Building Healthier{' '}
              <span className="text-[#FF7A1A] italic font-normal">Workplaces</span> Together
            </motion.h1>

            <motion.div variants={childVariants} className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="h-px w-10 bg-[#FF7A1A]/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
              <div className="h-px flex-1 max-w-[120px] bg-[#004B57]/15" />
            </motion.div>

            <motion.p variants={childVariants} className={`${sectionBody} mb-3.5 max-w-2xl`}>
              We empower modern organizations to create high-performing workplaces where employees thrive physically, mentally, and nutritionally.
            </motion.p>

            <motion.p variants={childVariants} className={`${sectionBody} mb-7 max-w-2xl`}>
              By combining clinical expertise with seamless corporate delivery, we help HR teams reduce burnout, boost retention, and drive lasting wellness impact.
            </motion.p>

            <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact" className={btnPrimary}>
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
              <Link to="/programs" className={btnSecondary}>
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 relative order-2"
          >
            <div className="absolute left-[-10px] top-[10%] bottom-[10%] w-7 bg-[#FF7A1A] rounded-r-full z-20 shadow-lg shadow-[#FF7A1A]/20" />
            <div className="absolute -right-2 top-[10%] bottom-[10%] w-9 bg-[#004B57] rounded-l-full z-20 shadow-lg" />

            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#FF7A1A]/10 to-[#004B57]/5 rounded-[28px] blur-xl" />

              <div className="relative rounded-[24px] overflow-hidden border-[3px] border-white shadow-[0_24px_60px_rgba(0,75,87,0.12)]">
                <img
                  src="/images/about-hero-new.png"
                  alt="Corporate wellness team building session"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004B57]/30 via-transparent to-transparent" />
              </div>

              {/* Experienced Wellness Specialists Floating Badge (No specific numbers) */}
              <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-[0_12px_40px_rgba(0,75,87,0.10)] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3 z-30">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#FF7A1A]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-[#004B57] leading-tight">
                    Experienced Wellness Specialists
                  </p>
                  <p className="text-[10.5px] sm:text-xs text-[#2c4033]/70 font-medium mt-0.5 truncate">
                    Customized health &amp; wellbeing solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8E4] to-transparent" />
    </section>
  );
}
