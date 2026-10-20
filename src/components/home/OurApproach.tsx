import { motion } from 'framer-motion';
import {
  calloutBox,
  cardOnWhite,
  iconAccentCycle,
  sectionBody,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
} from './sectionStyles';
import {
  AlertTriangle,
  BatteryLow,
  Briefcase,
  Clock,
  TrendingDown,
  Users,
} from 'lucide-react';

const challenges = [
  {
    title: 'Employee Burnout & Chronic Stress',
    description: 'Overburdened schedules lead to fatigue, low motivation, and elevated mental strain.',
    icon: BatteryLow,
    image: '/images/challenge-burnout.png',
  },
  {
    title: 'Low Engagement & Declining Morale',
    description: 'Disconnected teams see lower output quality, weaker collaboration, and poor alignment.',
    icon: TrendingDown,
    image: '/images/challenge-morale.png',
  },
  {
    title: 'Hybrid Work Fatigue',
    description: 'Blurred boundaries between work and personal life create isolation and burnout.',
    icon: Users,
    image: '/images/challenge-hybrid.png',
  },
  {
    title: 'Higher Absenteeism',
    description: 'Health-related absences disrupt workflows and reduce overall team productivity.',
    icon: Clock,
    image: '/images/challenge-burnout.png',
  },
  {
    title: 'Poor Work-Life Balance',
    description: 'Employees struggle to recharge, leading to sustained stress and disengagement.',
    icon: AlertTriangle,
    image: '/images/challenge-hybrid.png',
  },
  {
    title: 'Talent Attraction & Retention',
    description: 'Organizations without strong wellbeing culture lose top performers to competitors.',
    icon: Briefcase,
    image: '/images/challenge-morale.png',
  },
];

export default function OurApproach() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden isolate py-16 md:py-24">
      {/* Soft logo-color glows on white */}
      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <span className={sectionIntroBadge}>The Challenge</span>

            <h2 className={sectionIntroHeading}>
              Today&apos;s Workplace Faces{' '}
              <span className={sectionHeadingAccent}>New Wellness</span> Challenges
            </h2>

            <p className={`${sectionBody} mb-6`}>
              Modern organizations are navigating increased workplace stress, employee burnout,
              disengagement, and rising healthcare costs. Employee wellbeing has become one of the
              most important drivers of productivity, retention, and company culture.
            </p>

            <div className={calloutBox}>
              <p className="text-sm text-[#004B57] font-semibold leading-relaxed">
                <span className="text-[#FF7A1A] italic">
                  Ignoring employee wellbeing doesn&apos;t just affect individuals
                </span>
                {' '}— it impacts business performance.
              </p>
            </div>
          </motion.div>

          {/* Challenge cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {challenges.map((item, index) => {
              const colors = iconAccentCycle[index % iconAccentCycle.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group ${cardOnWhite} overflow-hidden flex flex-col h-full shadow-[0_4px_25px_rgba(12,29,55,0.04)] border border-[#E2E8E4]/60 hover:shadow-[0_12px_35px_rgba(12,29,55,0.08)] hover:-translate-y-1 transition-all duration-300`}
                >
                  {/* Card Image Banner */}
                  <div className="w-full h-44 relative overflow-hidden shrink-0 bg-gray-50 border-b border-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                    {/* Floating badge for card index number */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-extrabold uppercase tracking-widest text-[#FF7A1A] px-2.5 py-1 rounded-md shadow-sm border border-white/50">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col gap-3">
                    {/* Icon & Title Row */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                        style={{ backgroundColor: colors.accentBg, color: colors.accent }}
                      >
                        <item.icon className="w-4.5 h-4.5" strokeWidth={2.2} />
                      </div>
                      <h3 className="text-base sm:text-[17px] font-bold text-[#0C1D37] leading-snug tracking-tight group-hover:text-[#FF7A1A] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13.5px] text-[#2c4033]/80 leading-relaxed font-medium pl-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004B57]/15 to-transparent" />
    </section>
  );
}
