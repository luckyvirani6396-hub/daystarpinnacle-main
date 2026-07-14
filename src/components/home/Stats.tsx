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
  calloutBox,
  cardOnCream,
  iconAccentCycle,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
  statLabel,
  statValue,
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
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[45%] h-[45%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] w-[40%] h-[40%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.18)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <span className={sectionIntroBadge}>Why Invest in Wellness</span>

            <h2 className={sectionIntroHeading}>
              Employee Wellbeing Is a{' '}
              <span className={sectionHeadingAccent}>Business Strategy</span>
            </h2>

            <p className={`${sectionBody} mb-6`}>
              Employee wellbeing is no longer a workplace perk — it&apos;s a business strategy.
              Organizations that invest in wellness often experience measurable improvements across
              engagement, culture, and performance.
            </p>

            <div className={calloutBox}>
              <p className="text-sm text-[#004B57] font-semibold leading-relaxed">
                <span className="text-[#FF7A1A] italic">
                  A healthier workforce is more motivated, more innovative, and more committed
                </span>{' '}
                to organizational success.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-[#E2E8E4]">
              {[
                { value: '500+', label: 'Corporate Clients' },
                { value: '50K+', label: 'Employees Impacted' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className={statValue}>{stat.value}</p>
                  <p className={statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {benefits.map((benefit, index) => {
              const colors = iconAccentCycle[index % iconAccentCycle.length];
              return (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={`group ${cardOnCream} p-5`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: colors.accentBg, color: colors.accent }}
                    >
                      <benefit.icon className="w-5 h-5" strokeWidth={2.2} />
                    </div>
                    <p className={`${cardTitle} leading-snug`}>{benefit.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
