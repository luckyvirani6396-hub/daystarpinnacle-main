import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Globe,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import {
  btnPrimary,
  iconAccentCycle,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
  sectionBody,
} from './sectionStyles';

const reasons = [
  {
    title: 'Customized Wellness Roadmaps',
    description:
      'No cookie-cutter templates. Every program is purposefully tailored to your team size, workplace culture, and company health goals.',
    icon: Layers,
    highlight: 'Tailored for your workforce',
  },
  {
    title: 'Experienced & Certified Experts',
    description:
      'Led by certified clinical nutritionists, licensed mental health counselors, and ergonomic specialists with proven workplace track records.',
    icon: ShieldCheck,
    highlight: 'Certified clinical specialists',
  },
  {
    title: 'Flexible Hybrid & Onsite Delivery',
    description:
      'Interactive onsite workshops, live webinars, and digital sessions designed to engage both in-office and remote teams seamlessly.',
    icon: Globe,
    highlight: 'Onsite, virtual & hybrid',
  },
  {
    title: 'Zero-Hassle Implementation',
    description:
      'We handle employee invitations, calendar scheduling, and tech coordination so your HR team experiences zero administrative burden.',
    icon: Zap,
    highlight: 'Zero HR administrative strain',
  },
  {
    title: 'Measurable Impact & ROI Reports',
    description:
      'Track real participation metrics, anonymous employee feedback, and wellbeing satisfaction with actionable post-session analytics.',
    icon: BarChart3,
    highlight: 'Tangible wellness outcomes',
  },
  {
    title: 'Dedicated Wellness Partnership',
    description:
      'A dedicated account manager handles your scheduling, speaker logistics, and ongoing program evolution from day one.',
    icon: HeartHandshake,
    highlight: 'Ongoing account management',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[12%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[12%] w-[38%] h-[38%] rounded-full bg-[#004B57]/4 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Streamlined, elegant header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Why Choose Us</span>

          <h2 className={sectionIntroHeading}>
            A Corporate Wellness Partner{' '}
            <span className={sectionHeadingAccent}>You Can Trust</span>
          </h2>

          <p className={`${sectionBody} max-w-2xl mx-auto`}>
            We don&apos;t offer one-size-fits-all sessions. Every experience is purposefully tailored
            to your company culture, employee needs, and business objectives.
          </p>
        </motion.div>

        {/* Meaningful, rich benefit cards with icons, descriptions & highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {reasons.map((reason, index) => {
            const colors = iconAccentCycle[index % iconAccentCycle.length];
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative bg-white border border-[#FAF9F5] rounded-2xl p-6 md:p-7 shadow-[0_2px_16px_rgba(0,75,87,0.05)] hover:shadow-[0_12px_36px_rgba(0,75,87,0.1)] hover:border-[#FF7A1A]/35 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                      style={{ backgroundColor: colors.accentBg, color: colors.accent }}
                    >
                      <reason.icon className="w-6 h-6" strokeWidth={2.1} />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#004B57] group-hover:text-[#FF7A1A] transition-colors mb-2.5 leading-snug">
                    {reason.title}
                  </h3>

                  <p className="text-[13px] sm:text-sm text-[#004B57]/75 leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#FAF9F5]/70 flex items-center text-xs font-bold text-[#004B57]/80 group-hover:text-[#FF7A1A] transition-colors">
                  <span
                    className="w-1.5 h-1.5 rounded-full mr-2 shrink-0"
                    style={{ backgroundColor: colors.accent }}
                  />
                  <span>{reason.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cohesive, logical bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 md:mt-16 bg-white border border-[#FAF9F5] rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,75,87,0.06)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-serif font-bold text-[#004B57]">
              Ready to build a healthier, more engaged workforce?
            </h3>
            <p className="text-xs sm:text-sm text-[#004B57] font-medium mt-1">
              Speak with our corporate wellness consultants to craft a plan for your organization.
            </p>
          </div>

          <Link to="/contact" className={`${btnPrimary} shrink-0`}>
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
