import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Eye, Headphones, Leaf, ShieldCheck, Target, Users } from 'lucide-react';
import {
  calloutBox,
  cardDescription,
  cardOnCream,
  cardTitle,
  iconAccentCycle,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
} from '../home/sectionStyles';

const approaches = [
  {
    title: 'Understand Culture',
    description: 'We take the time to understand your company culture and employee needs.',
    icon: Users,
  },
  {
    title: 'Custom Strategies',
    description: 'We design customized wellness strategies aligned with your business objectives.',
    icon: Target,
  },
  {
    title: 'Expert Delivery',
    description: 'We deliver highly engaging, expert-led onsite, virtual, or hybrid sessions.',
    icon: Leaf,
  },
  {
    title: 'Measure Outcomes',
    description: 'We track participation, feedback, and wellness metrics for transparency.',
    icon: ShieldCheck,
  },
  {
    title: 'Continuous Iteration',
    description: 'We continuously improve programs based on quarterly review reports.',
    icon: BookOpen,
  },
  {
    title: 'Dedicated Partnership',
    description: 'Dedicated account manager and proactive coordination from start to finish.',
    icon: Headphones,
  },
];

export default function AboutVisionApproach() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={sectionDotGrid(0.1)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className={`${cardOnCream} p-8 md:p-10 h-full bg-[#FAF9F5] border border-[#FAF9F5]/60 shadow-[0_4px_20px_rgba(12,29,55,0.02)]`}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#FAF9F5', color: '#FF7A1A' }}
              >
                <Eye className="w-6 h-6" strokeWidth={2.2} />
              </div>

              <span className={sectionIntroBadge}>Our Vision</span>
              <h2 className={`${sectionIntroHeading} text-left`}>
                A Trusted <span className={sectionHeadingAccent}>Wellness Partner</span>
              </h2>

              <p className={`${sectionBody} mb-6`}>
                To become a trusted wellness partner for organizations across industries by
                delivering high-quality, impactful wellness solutions.
              </p>

              <div className={calloutBox}>
                <p className="text-sm text-[#004B57] font-semibold leading-relaxed">
                  <span className="text-[#FF7A1A] italic">
                    Employee wellbeing is the foundation of business success
                  </span>
                  {' '}— and we help organizations build it with intention.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className={sectionIntroBadge}>Our Methodology</span>
            <h2 className={`${sectionIntroHeading} text-left`}>
              Our Structured <span className={sectionHeadingAccent}>Approach</span>
            </h2>
            <p className={`${sectionBody} mb-8 max-w-2xl`}>
              A proven framework that aligns wellness initiatives with your culture, goals, and
              measurable outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {approaches.map((item, index) => {
                const colors = iconAccentCycle[index % iconAccentCycle.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className={`group ${cardOnCream} p-5 border border-[#FAF9F5]/65 hover:border-[#FF7A1A]/30 hover:shadow-md transition-all duration-300 cursor-default`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: colors.accentBg, color: colors.accent }}
                      >
                        <item.icon className="w-5 h-5" strokeWidth={2.2} />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF7A1A] mb-1 block">
                          0{index + 1}
                        </span>
                        <h3 className={`${cardTitle} mb-1 group-hover:text-[#FF7A1A] transition-colors`}>{item.title}</h3>
                        <p className={cardDescription}>{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-[#FAF9F5]/80 flex items-center justify-between">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7A1A] hover:text-[#FF7A1A] transition-colors group"
              >
                <span>Speak With Our Wellness Strategy Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
