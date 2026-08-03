import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  Users,
} from 'lucide-react';
import {
  btnPrimary,
  btnSecondary,
  cardDescription,
  cardOnCream,
  cardTitle,
  iconAccentCycle,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
  statLabel,
  statValue,
} from './sectionStyles';

const pillars = [
  {
    title: 'Certified Wellness Experts',
    description: 'Programs led by trained professionals across physical, mental, and nutritional wellbeing.',
    icon: Award,
  },
  {
    title: 'HR-Aligned Strategy',
    description: 'Custom plans designed with leadership teams to match company culture and goals.',
    icon: Building2,
  },
  {
    title: 'Engaging Employee Experiences',
    description: 'Practical sessions and initiatives that drive participation and lasting impact.',
    icon: Users,
  },
];

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

export default function AboutPreview() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden isolate py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/5 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="absolute left-[-10px] top-[10%] bottom-[10%] w-7 bg-[#FF7A1A] rounded-r-full z-20 shadow-lg shadow-[#FF7A1A]/20" />
            <div className="absolute -right-2 top-[10%] bottom-[10%] w-9 bg-[#004B57] rounded-l-full z-20 shadow-lg" />

            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#FF7A1A]/10 to-[#004B57]/5 rounded-[28px] blur-xl" />

              <div className="relative rounded-[24px] overflow-hidden border-[3px] border-white shadow-[0_24px_60px_rgba(0,75,87,0.12)]">
                <img
                  src="/images/about-preview-new.png"
                  alt="Daystar Pinnacle corporate wellness team consultation workshop"
                  className="w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004B57]/25 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-[0_12px_40px_rgba(0,75,87,0.08)] px-5 py-4 flex items-center justify-around gap-3 z-30">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '3K+', label: 'Lives Impacted' },
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <motion.span variants={childVariants} className={`${sectionIntroBadge} items-center gap-2`}>
              <Building2 className="w-3.5 h-3.5" strokeWidth={2.5} />
              About Us
            </motion.span>

            <motion.h2 variants={childVariants} className={sectionIntroHeading}>
              Your Trusted{' '}
              <span className={sectionHeadingAccent}>Corporate Wellness</span> Partner
            </motion.h2>

            <motion.p variants={childVariants} className={`${sectionBody} mb-4 max-w-2xl`}>
              We are dedicated to helping organizations build healthier, happier, and more
              productive workplaces. Our team of certified wellness experts works closely with HR
              leaders and management teams to design customized wellness programs that align with
              company goals and employee needs.
            </motion.p>

            <motion.p variants={childVariants} className={`${sectionBody} mb-6 max-w-2xl`}>
              We believe that employee wellbeing is the foundation of business success. By combining
              practical wellness strategies with engaging experiences, we help organizations create
              a culture where employees thrive.
            </motion.p>

            <motion.div variants={childVariants} className="space-y-3 mb-8">
              {pillars.map((pillar, index) => {
                const colors = iconAccentCycle[index % iconAccentCycle.length];
                return (
                  <div
                    key={pillar.title}
                    className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl ${cardOnCream}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: colors.accentBg, color: colors.accent }}
                    >
                      <pillar.icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className={`${cardTitle} mb-0.5`}>{pillar.title}</h3>
                      <p className={cardDescription}>{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/about" className={btnPrimary}>
                <span>Learn About Us</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
              <Link to="/contact" className={btnSecondary}>
                <Calendar className="w-4 h-4" strokeWidth={2.2} />
                <span>Book a Consultation</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8E4] to-transparent" />
    </section>
  );
}
