import { motion } from 'framer-motion';
import {
  ArrowRight,
  ClipboardList,
  FileText,
  Lightbulb,
  MessageSquare,
  Rocket,
} from 'lucide-react';
import {
  btnPrimary,
  cardDescription,
  cardTitle,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from './sectionStyles';

const steps = [
  {
    step: 1,
    title: 'Submit Your Company Details',
    description:
      'Fill out our quick registration or inquiry form with your company information, employee count, and wellness requirements.',
    icon: ClipboardList,
  },
  {
    step: 2,
    title: 'Sales Team Consultation',
    description:
      'Our wellness consultant or sales representative will contact you to understand your needs, goals, and challenges.',
    icon: MessageSquare,
  },
  {
    step: 3,
    title: 'Program Recommendation',
    description:
      'We suggest the best-fit wellness programs based on your company size, industry, and objectives.',
    icon: Lightbulb,
  },
  {
    step: 4,
    title: 'Customized Proposal',
    description:
      'Receive a tailored wellness plan with pricing, schedule, and program details.',
    icon: FileText,
  },
  {
    step: 5,
    title: 'Program Launch',
    description:
      'Once approved, we begin your wellness program with expert-led sessions and ongoing support.',
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${sectionIntroBlock} max-w-2xl`}
        >
          <span className={sectionIntroBadge}>How It Works</span>
          <h2 className={sectionIntroHeading}>
            Your Path to a{' '}
            <span className={sectionHeadingAccent}>Healthier Workplace</span>
          </h2>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="absolute top-[2.75rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FF7A1A]/30 to-transparent" />
          <div className="grid grid-cols-5 gap-4">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-[#FF7A1A]/30 shadow-md flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#FF7A1A]" strokeWidth={2} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#004B57] text-white text-[10px] font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className={`${cardTitle} mb-2 leading-snug px-1`}>{item.title}</h3>
                <p className={cardDescription}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-6 max-w-xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#FF7A1A]/25 shadow-sm flex items-center justify-center shrink-0 relative">
                  <item.icon className="w-5 h-5 text-[#FF7A1A]" strokeWidth={2} />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#004B57] text-white text-[9px] font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[2rem] bg-[#FF7A1A]/20 mt-2" />
                )}
              </div>
              <div className="pb-4">
                <h3 className={`${cardTitle} text-base mb-1`}>{item.title}</h3>
                <p className={cardDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-14"
        >
          <a
            href="#register"
            className={`${btnPrimary} shadow-sm inline-flex items-center gap-2`}
          >
            <span>Start With Step 1 — Register Interest</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
