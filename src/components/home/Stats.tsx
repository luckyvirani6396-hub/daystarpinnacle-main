import { motion } from 'framer-motion';
import {
  Award,
  Building2,
  Heart,
  Leaf,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import {
  cardOnCream,
  iconAccentCycle,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
  cardTitle,
} from './sectionStyles';

const benefits = [
  { label: 'Higher employee engagement', icon: Users },
  { label: 'Improved workplace morale', icon: Heart },
  { label: 'Better collaboration', icon: Sparkles },
  { label: 'Reduced absenteeism', icon: Shield },
  { label: 'Lower stress and burnout', icon: Target },
  { label: 'Increased productivity', icon: TrendingUp },
  { label: 'Improved employee retention', icon: Award },
  { label: 'Stronger employer branding', icon: Building2 },
  { label: 'Healthier workplace culture', icon: Leaf },
];

export default function Stats() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[45%] h-[45%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.18)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Top Header: Standardized clean top heading and intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Why Invest in Wellness</span>

          <h2 className={`${sectionIntroHeading} text-center`}>
            Employee Wellbeing Is a{' '}
            <span className={sectionHeadingAccent}>Business Strategy</span>
          </h2>

          <p className={`${sectionBody} text-center max-w-2xl`}>
            Employee wellbeing is no longer just a perk — organizations that invest in wellness experience
            measurable gains across morale, retention, and business performance.
          </p>
        </motion.div>

        {/* Bottom Benefits Cards: 3 columns (3x3 grid for 9 benefits) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {benefits.map((benefit, index) => {
            const colors = iconAccentCycle[index % iconAccentCycle.length];
            return (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className={`group ${cardOnCream} p-5 hover:border-[#FF7A1A]/30 hover:shadow-md transition-all duration-300 cursor-default`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: colors.accentBg, color: colors.accent }}
                  >
                    <benefit.icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <p className={`${cardTitle} leading-snug group-hover:text-[#FF7A1A] transition-colors`}>
                    {benefit.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
