import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, HeartHandshake, Zap, BarChart3 } from 'lucide-react';
import {
  cardOnWhite,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from '../home/sectionStyles';

const coreValues = [
  {
    title: 'Clinical & Scientific Rigor',
    description:
      'All our programs are authored and delivered by certified nutritionists, licensed psychologists, and ergonomic specialists.',
    icon: ShieldCheck,
    color: '#FF7A1A',
    bg: '#FAF9F5',
  },
  {
    title: 'Human-Centric Empathy',
    description:
      'We treat employees as whole humans — addressing real-life stress, hybrid fatigue, and nutrition without unrealistic restrictions.',
    icon: HeartHandshake,
    color: '#004B57',
    bg: '#FAF9F5',
  },
  {
    title: 'Zero HR Administrative Burden',
    description:
      'We handle speaker logistics, invitations, interactive materials, and calendar coordination so HR teams experience seamless execution.',
    icon: Zap,
    color: '#72A93B',
    bg: '#FAF9F5',
  },
  {
    title: 'Measurable Outcomes & ROI',
    description:
      'Transparent quarterly reporting on attendance, satisfaction, and tangible health metrics to demonstrate real organizational impact.',
    icon: BarChart3,
    color: '#004B57',
    bg: '#FAF9F5',
  },
];

export default function AboutMissionVision() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-16 border-t border-[#FAF9F5]/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[45%] h-[45%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Standard Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Our Purpose &amp; Values</span>
          <h2 className={sectionIntroHeading}>
            Driven by a Mission to{' '}
            <span className={sectionHeadingAccent}>Transform Workplaces</span>
          </h2>
          <p className={sectionBody}>
            We believe healthy employees build resilient organizations. Our vision and values guide every
            workshop, consultation, and wellness roadmap we create.
          </p>
        </motion.div>

        {/* Dual Cards: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 md:mb-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="group bg-white rounded-3xl p-7 sm:p-9 border border-[#FAF9F5] shadow-[0_4px_24px_rgba(0,75,87,0.06)] hover:shadow-xl hover:border-[#FF7A1A]/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF9F5] rounded-bl-full pointer-events-none -mr-8 -mt-8 opacity-60" />
            
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] text-[#FF7A1A] flex items-center justify-center shrink-0 shadow-sm border border-[#FF7A1A]/20">
                  <Target className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF7A1A] block">
                    Our Core Mission
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#004B57]">
                    Why We Exist
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] text-[#004B57]/85 leading-relaxed font-medium mb-6">
                To integrate preventative healthcare, mental resilience, and certified nutritional science into
                everyday corporate culture — empowering employees to thrive and helping businesses maximize productivity.
              </p>
            </div>

            <div className="pt-4 border-t border-[#FAF9F5]/70 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#004B57]">
              <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#FAF9F5]">Preventative Health</span>
              <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#FAF9F5]">Burnout Reduction</span>
              <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#FAF9F5]">Sustained Focus</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group bg-white rounded-3xl p-7 sm:p-9 border border-[#FAF9F5] shadow-[0_4px_24px_rgba(0,75,87,0.06)] hover:shadow-xl hover:border-[#004B57]/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF9F5] rounded-bl-full pointer-events-none -mr-8 -mt-8 opacity-60" />

            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] text-[#004B57] flex items-center justify-center shrink-0 shadow-sm border border-[#004B57]/20">
                  <Eye className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#004B57] block">
                    Our Long-Term Vision
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#004B57]">
                    Where We Are Going
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] text-[#004B57]/85 leading-relaxed font-medium mb-6">
                To become India&apos;s most trusted corporate wellbeing partner, empowering over 1,000,000 workforce
                professionals with holistic wellness habits and helping leaders create thriving, burnout-free workplaces.
              </p>
            </div>

            <div className="pt-4 border-t border-[#FAF9F5]/70 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#004B57]">
              <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#FAF9F5]">Pan-India Coverage</span>
              <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#FAF9F5]">1M+ Impact Goal</span>
              <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#FAF9F5]">Culture Transformation</span>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`p-5 rounded-2xl ${cardOnWhite} border border-[#FAF9F5]/80 hover:shadow-md hover:border-[#FF7A1A]/30 transition-all duration-300`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mb-3.5"
                  style={{ backgroundColor: val.bg, color: val.color }}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <h4 className="text-sm font-bold text-[#004B57] mb-1.5 leading-snug">
                  {val.title}
                </h4>
                <p className="text-xs text-[#004B57] leading-relaxed font-medium">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
