import { motion } from 'framer-motion';
import { ArrowRight, Check, Crown, Sparkles, Star } from 'lucide-react';
import {
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from './sectionStyles';

const packages = [
  {
    id: 'kickstart',
    name: 'Kickstart Package',
    bestFor: '20–50 Employees',
    icon: Sparkles,
    accent: '#FF7A1A',
    includes: [
      'Monthly Yoga Session',
      'Guided Meditation',
      'Wellness Newsletter',
      'Monthly Fitness Challenge',
      'Employee Wellness Resources',
      'Basic Reporting',
    ],
    cta: 'Book Consultation',
    featured: false,
  },
  {
    id: 'growth',
    name: 'Growth Package',
    bestFor: '50–250 Employees',
    icon: Star,
    accent: '#FF7A1A',
    includes: [
      'Everything in Kickstart, plus:',
      'Nutrition Workshop',
      'Mental Wellness Workshop',
      'Quarterly Wellness Events',
      'Health Awareness Campaigns',
      'Employee Participation Reports',
      'Wellness Challenges',
    ],
    cta: 'Book Consultation',
    featured: true,
  },
  {
    id: 'transformation',
    name: 'Total Transformation',
    bestFor: '250+ Employees',
    icon: Crown,
    accent: '#004B57',
    includes: [
      'Everything in Growth, plus:',
      'Dedicated Wellness Consultant',
      'Monthly Wellness Calendar',
      'Leadership Wellbeing Coaching',
      'Executive Wellness Sessions',
      'Company-wide Challenges',
      'Annual Wellness Strategy',
      'Advanced Reporting & Analytics',
    ],
    cta: 'Book Consultation',
    featured: false,
  },
];

export default function Programs() {
  return (
    <section className="relative w-full bg-[#F3F8EE] overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-5%] top-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-bl from-[#FAF9F5]/60 to-transparent blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.12)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Corporate Packages</span>
          <h2 className={sectionIntroHeading}>
            Wellness Plans for{' '}
            <span className={sectionHeadingAccent}>Every Team Size</span>
          </h2>
          <p className={sectionBody}>
            Scalable packages designed to fit your workforce size, culture, and health goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 md:items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-6 md:p-8 transition-all duration-300 ${pkg.featured
                  ? 'bg-[#004B57] border-[#004B57] text-white shadow-[0_20px_60px_rgba(0,75,87,0.2)] md:scale-[1.03] z-10 pt-8'
                  : 'bg-white border-[#FAF9F5] hover:border-[#FF7A1A]/25 hover:shadow-lg'
                }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-extrabold uppercase tracking-[0.14em] bg-[#FF7A1A] text-white px-4 py-1.5 rounded-full shadow-md shadow-[#FF7A1A]/30 whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div
                className={`mb-6 pb-5 border-b ${pkg.featured ? 'border-white/15' : 'border-[#FAF9F5]/80'
                  }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${pkg.featured ? 'bg-white/12' : ''
                    }`}
                  style={
                    !pkg.featured
                      ? { backgroundColor: `${pkg.accent}18`, color: pkg.accent }
                      : { color: '#FF7A1A' }
                  }
                >
                  <pkg.icon className="w-6 h-6" strokeWidth={2.2} />
                </div>

                <h3
                  className={`text-xl sm:text-2xl font-serif font-semibold tracking-tight leading-tight mb-2 ${pkg.featured ? 'text-white' : 'text-[#004B57]'
                    }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-[11px] font-extrabold uppercase tracking-[0.16em] ${pkg.featured ? 'text-[#FF7A1A]' : 'text-[#004B57]/70'
                    }`}
                >
                  Best for {pkg.bestFor}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#FF7A1A]" strokeWidth={2.5} />
                    <span className={pkg.featured ? 'text-white/80' : 'text-[#004B57]/75'}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#register"
                className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${pkg.featured
                    ? 'bg-[#FF7A1A] hover:bg-[#FF7A1A] text-white shadow-lg'
                    : 'bg-[#FAF9F5] hover:bg-[#FF7A1A] hover:text-white text-[#004B57] border border-[#FAF9F5]'
                  }`}
              >
                <span>{pkg.cta}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
