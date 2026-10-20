import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Utensils, Brain, ArrowRight, Calendar, ClipboardList } from 'lucide-react';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';
import { fadeUp } from '../../utils/animations';
import {
  btnPrimary,
  sectionBody,
  sectionDotGrid,
  sectionIntroBadge,
} from '../home/sectionStyles';

export default function WellnessHubHero() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden isolate">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[8%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[5%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 pt-8 sm:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left relative z-10">
            <motion.nav
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#5F6B6E] mb-5 flex-wrap"
            >
              <Link to="/" className="hover:text-[#FF7A1A] transition-colors">
                Home
              </Link>
              <span className="text-[#004B57]/30">/</span>
              <span className="text-[#FF7A1A]">Blog</span>
            </motion.nav>

            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`${sectionIntroBadge} items-center gap-2`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Wellness &amp; Nutrition Hub
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[2rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] font-serif font-medium text-[#004B57] leading-[1.1] tracking-tight mb-4 sm:mb-5 max-w-2xl"
            >
              Wellness Hub
            </motion.h1>

            {/* Separator Accent */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-px w-10 bg-[#FF7A1A]/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
              <div className="h-px flex-1 max-w-[120px] bg-[#004B57]/15" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl font-bold text-[#FF7A1A] mb-4 leading-snug font-heading"
            >
              Workplace Vitality &amp; Employee Performance.
            </motion.h2>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" className={`${sectionBody} mb-6 max-w-2xl`}>
              Expert frameworks, workplace nutrition strategies, and stress resilience guides to elevate corporate productivity and workforce health.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="relative flex items-start justify-between w-full max-w-[340px] sm:max-w-[420px] mb-10 px-2 mt-6"
            >
              <div className="absolute top-7 left-12 right-12 sm:top-8 sm:left-14 sm:right-14 h-[1.8px] bg-[#FF7A1A]/20 z-0" />
              {[
                { key: 'workplace', icon: ClipboardList, label: <>Corporate<br />Wellness</> },
                { key: 'stress', icon: Brain, label: <>Stress &amp;<br />Resilience</> },
                { key: 'nutrition', icon: Utensils, label: <>Desk<br />Nutrition</> },
              ].map(({ key, icon: Icon, label }) => (
                <div key={key} className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FEF3E8] rounded-full flex items-center justify-center text-[#FF7A1A] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FDF2E9] border border-[#FF7A1A]/10 shadow-[0_4px_12px_rgba(255,122,26,0.08)]">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.8} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#004B57] text-center mt-3.5 leading-snug tracking-wide">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#featured" className={btnPrimary}>
                <span>Explore Articles</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </a>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0 z-10">
            <div className="absolute left-[-10px] top-[10%] bottom-[10%] w-7 bg-[#FF7A1A] rounded-r-full z-20 shadow-lg shadow-[#FF7A1A]/20" />
            <div className="absolute -right-2 top-[10%] bottom-[10%] w-9 bg-[#004B57] rounded-l-full z-20 shadow-lg" />
            
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#FF7A1A]/10 to-[#004B57]/5 rounded-[28px] blur-xl" />
              
              <div className="relative rounded-[24px] overflow-hidden border-[3px] border-white shadow-[0_24px_60px_rgba(0,75,87,0.12)]">
                <img
                  src={PAGE_HERO_IMAGES.wellnessHub}
                  alt="Corporate wellness team"
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004B57]/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl p-6 lg:p-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full z-20 md:divide-x md:divide-gray-150"
        >
          {[
            { icon: ClipboardList, title: 'Corporate Wellness', desc: 'Strategic roadmaps that reduce sick leaves.' },
            { icon: Utensils, title: 'Workplace Nutrition', desc: 'Sustained energy and metabolic health at work.' },
            { icon: Brain, title: 'Stress & Resilience', desc: 'Mindfulness tools to prevent team burnout.' },
            { icon: Calendar, title: 'Desk Ergonomics', desc: 'Posture habits and mobility for screen work.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className={`flex items-center gap-4.5 px-2 ${i > 0 ? 'md:pl-6' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center shrink-0 text-[#FF7A1A]">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#004B57] uppercase tracking-wider">{title}</span>
                <p className="text-xs text-[#5F6B6E] font-semibold mt-0.5 leading-relaxed max-w-[190px]">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
