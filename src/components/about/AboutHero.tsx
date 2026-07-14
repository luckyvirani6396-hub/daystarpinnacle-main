import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Calendar, ChevronRight } from 'lucide-react';
import {
  btnPrimary,
  btnSecondary,
  sectionBody,
  sectionDotGrid,
  sectionIntroBadge,
  statLabel,
  statValue,
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

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-1"
          >
            <motion.nav
              variants={childVariants}
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#5F6B6E] mb-5"
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
              className="text-[2rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] font-serif font-medium text-[#004B57] leading-[1.1] tracking-tight mb-4 sm:mb-5 max-w-2xl"
            >
              Building Healthier{' '}
              <span className="text-[#FF7A1A] italic font-normal">Workplaces</span>
            </motion.h1>

            <motion.div variants={childVariants} className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-px w-10 bg-[#FF7A1A]/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
              <div className="h-px flex-1 max-w-[120px] bg-[#004B57]/15" />
            </motion.div>

            <motion.p variants={childVariants} className={`${sectionBody} mb-4 max-w-2xl`}>
              Our mission is to help organizations create workplaces where employees can thrive
              physically, mentally, and emotionally.
            </motion.p>

            <motion.p variants={childVariants} className={`${sectionBody} mb-8 max-w-2xl`}>
              We specialize in designing corporate wellness programs that are practical, scalable,
              and aligned with business goals — with long-term impact through consistent engagement
              and measurable outcomes.
            </motion.p>

            <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/#register" className={btnPrimary}>
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </a>
              <Link to="/contact" className={btnSecondary}>
                <Calendar className="w-4 h-4" strokeWidth={2.2} />
                <span>Book a Consultation</span>
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
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004B57]/30 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-[0_12px_40px_rgba(0,75,87,0.08)] px-5 py-4 flex items-center justify-around gap-3 z-30">
                {[
                  { value: '500+', label: 'Corporate Clients' },
                  { value: '50K+', label: 'Employees Impacted' },
                  { value: '98%', label: 'Satisfaction' },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center flex-1 relative">
                    {i > 0 && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-[#E2E8E4]" />
                    )}
                    <p className={`${statValue} text-xl sm:text-2xl`}>{stat.value}</p>
                    <p className={`${statLabel} mt-1`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8E4] to-transparent" />
    </section>
  );
}
