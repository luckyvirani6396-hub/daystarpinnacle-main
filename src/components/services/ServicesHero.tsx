import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, ChevronRight, Calendar, Target, Users, TrendingUp, Building2, Shield } from 'lucide-react';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';
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

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden isolate">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[8%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[5%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 pt-8 sm:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Typography & CTAs Column */}
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
              <span className="text-[#FF7A1A]">Services</span>
            </motion.nav>

            <motion.span
              variants={childVariants}
              className={`${sectionIntroBadge} items-center gap-2`}
            >
              <Leaf className="w-3.5 h-3.5 text-[#FF7A1A]" strokeWidth={2.5} />
              Our Solutions
            </motion.span>

            <motion.h1
              variants={childVariants}
              className="text-[2rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] font-serif font-medium text-[#004B57] leading-[1.1] tracking-tight mb-4 sm:mb-5 max-w-2xl"
            >
              Our Wellness <span className="text-[#FF7A1A] italic font-normal">Services</span>
            </motion.h1>

            <motion.div variants={childVariants} className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-px w-10 bg-[#FF7A1A]/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
              <div className="h-px flex-1 max-w-[120px] bg-[#004B57]/15" />
            </motion.div>

            <motion.p variants={childVariants} className={`${sectionBody} mb-4 max-w-2xl`}>
              Personalized wellness and nutrition support programs designed specifically for your corporate workforce — from clinical conditions to holistic workplace wellness campaign solutions.
            </motion.p>

            {/* Feature quick icons */}
            <motion.div variants={childVariants} className="relative flex items-start justify-between w-full max-w-[340px] sm:max-w-[420px] mb-10 px-2 mt-6">
              <div className="absolute top-7 left-12 right-12 sm:top-8 sm:left-14 sm:right-14 h-[1.8px] bg-[#FF7A1A]/20 z-0" />
              {[
                { key: 'strategy', icon: Target, label: <>Corporate<br />Strategy</> },
                { key: 'team', icon: Users, label: <>Team<br />Programs</> },
                { key: 'analytics', icon: TrendingUp, label: <>Engagement<br />Analytics</> },
              ].map(({ key, icon: Icon, label }) => (
                <div key={key} className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FEF3E8] rounded-full flex items-center justify-center text-[#FF7A1A] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FDF2E9] shadow-[0_4px_12px_rgba(255,122,26,0.08)] border border-[#FF7A1A]/10">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.8} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#004B57] text-center mt-3.5 leading-snug tracking-wide">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#services-list" className={btnPrimary}>
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </a>
              <Link to="/contact" className={btnSecondary}>
                <Calendar className="w-4.5 h-4.5 text-[#004B57]" strokeWidth={2.2} />
                <span>Book a Consultation</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right curved image crescent column */}
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
                  src={PAGE_HERO_IMAGES.services}
                  alt="Corporate wellness checkup services"
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004B57]/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature stats blocks bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl p-6 lg:p-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full z-20 md:divide-x md:divide-gray-150"
        >
          {[
            { icon: Building2, title: 'Tailored Programs', desc: 'Programs designed for your workforce size.' },
            { icon: Users, title: 'Expert Coaching', desc: 'Guidance from certified professionals.' },
            { icon: Shield, title: 'Proactive Care', desc: 'Workshops and screenings that prevent risks.' },
            { icon: TrendingUp, title: 'Measurable Impact', desc: 'Track engagement levels and feedback.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className={`flex items-center gap-4.5 px-2 ${i > 0 ? 'md:pl-6' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center shrink-0 text-[#FF7A1A]">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider">{title}</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
