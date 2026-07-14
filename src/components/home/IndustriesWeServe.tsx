import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Factory,
  GraduationCap,
  Headphones,
  HeartPulse,
  Landmark,
  Laptop,
  Rocket,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';
import {
  cardOnCream,
  iconAccentCycle,
  cardTitle,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from './sectionStyles';

const industries = [
  { name: 'Information Technology', icon: Laptop },
  { name: 'Finance & Banking', icon: Landmark },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Hospitality', icon: UtensilsCrossed },
  { name: 'Government', icon: Building2 },
  { name: 'Logistics', icon: Truck },
  { name: 'Startups', icon: Rocket },
  { name: 'BPO & Customer Support', icon: Headphones },
  { name: 'Professional Services', icon: Briefcase },
];

export default function IndustriesWeServe() {
  return (
    <section
      id="industries"
      className="relative w-full bg-white overflow-hidden py-16 md:py-24 scroll-mt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[42%] h-[42%] rounded-full bg-[#004B57]/5 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] w-[38%] h-[38%] rounded-full bg-[#72A93B]/6 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.16)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Industries We Serve</span>
          <h2 className={sectionIntroHeading}>
            Wellness for{' '}
            <span className={sectionHeadingAccent}>Every Industry</span>
          </h2>
          <p className={sectionBody}>
            Our wellness solutions support organizations across multiple industries — tailored
            to your workforce, culture, and business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {industries.map((industry, index) => {
            const colors = iconAccentCycle[index % iconAccentCycle.length];
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`group ${cardOnCream} p-4 md:p-5 text-center`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: colors.accentBg, color: colors.accent }}
                >
                  <industry.icon className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <p className={`${cardTitle} leading-snug`}>
                  {industry.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
