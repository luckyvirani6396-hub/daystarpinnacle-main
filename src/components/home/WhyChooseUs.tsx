import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Headphones,
  Layers,
  MapPin,
  Shield,
  Users,
  Zap,
} from 'lucide-react';
import {
  btnPrimary,
  cardOnCream,
  iconAccentCycle,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
  cardTitle,
} from './sectionStyles';

const reasons = [
  { label: 'Customized wellness strategies', icon: Layers },
  { label: 'Certified wellness professionals', icon: Shield },
  { label: 'Virtual, onsite, and hybrid delivery', icon: MapPin },
  { label: 'Easy implementation', icon: Zap },
  { label: 'Flexible scheduling', icon: Calendar },
  { label: 'Scalable for organizations of any size', icon: Users },
  { label: 'Employee engagement tracking', icon: BarChart3 },
  { label: 'Dedicated support from planning to execution', icon: Headphones },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[12%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/5 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[12%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={sectionIntroBadge}>Why Choose Us</span>

            <h2 className={sectionIntroHeading}>
              A Corporate Wellness Partner{' '}
              <span className={sectionHeadingAccent}>You Can Trust</span>
            </h2>

            <p className={`${sectionBody} mb-4`}>
              We don&apos;t offer one-size-fits-all wellness sessions.
            </p>
            <p className={`${sectionBody} mb-8`}>
              We build customized wellness experiences aligned with your company culture, employee
              needs, and business objectives.
            </p>

            <Link to="/contact" className={btnPrimary}>
              <span>Book a Corporate Consultation</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {reasons.map((reason, index) => {
              const colors = iconAccentCycle[index % iconAccentCycle.length];
              return (
                <motion.div
                  key={reason.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={`flex items-start gap-3 p-4 ${cardOnCream}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: colors.accentBg, color: colors.accent }}
                  >
                    <reason.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <p className={`${cardTitle} leading-snug pt-0.5`}>{reason.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
