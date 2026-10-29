import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import {
  btnPrimary,
  cardOnCream,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
} from './sectionStyles';

const faqItems = [
  {
    question: 'Can programs be customized?',
    answer:
      'Yes. Every organization has different goals, and we tailor programs accordingly — from session formats and topics to scheduling and delivery mode.',
  },
  {
    question: 'Do you offer virtual sessions?',
    answer:
      'Yes. We provide onsite, virtual, and hybrid wellness programs so your team can participate wherever they work.',
  },
  {
    question: 'How many employees can participate?',
    answer:
      'Our programs scale from small teams to enterprise organizations with thousands of employees across multiple locations.',
  },
  {
    question: 'Can we combine different wellness services?',
    answer:
      'Absolutely. We create customized wellness calendars that include multiple services — yoga, nutrition, mental wellness, and more — throughout the year.',
  },
  {
    question: 'How long are the sessions?',
    answer:
      'Programs typically range from 30 to 90 minutes, depending on the activity, audience size, and your wellness objectives.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-8%] bottom-[8%] w-[38%] h-[38%] rounded-full bg-[#FF7A1A]/4 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.16)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <span className={sectionIntroBadge}>FAQ</span>
            <h2 className={sectionIntroHeading}>
              Questions{' '}
              <span className={sectionHeadingAccent}>HR Teams</span> Ask
            </h2>
            <p className={`${sectionBody} mb-6`}>
              Clear answers about how our corporate wellness programs work — from customization
              and delivery to scale and scheduling.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E2E8E4] shadow-[0_4px_24px_rgba(0,75,87,0.06)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3E8] flex items-center justify-center text-[#FF7A1A]">
                  <MessageCircle className="w-5 h-5" strokeWidth={2} />
                </div>
                <p className="text-sm font-bold text-[#004B57]">Still have questions?</p>
              </div>
              <p className="text-xs text-[#5F6B6E] leading-relaxed mb-4">
                Our team is happy to walk you through program options and help design a plan
                for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className={`${btnPrimary} text-xs sm:text-sm px-6 py-3.5`}>
                  <span>Ask a Question</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`${cardOnCream} overflow-hidden ${isOpen ? 'border-[#FF7A1A]/30 shadow-[0_8px_32px_rgba(255, 122, 26, 0.08)]' : ''
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-start gap-4 p-5 md:p-6 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-extrabold tracking-wider transition-colors duration-300 ${isOpen
                        ? 'bg-[#FF7A1A] text-white'
                        : 'bg-[#E6F2F4] text-[#004B57] group-hover:bg-[#FEF3E8] group-hover:text-[#FF7A1A]'
                        }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1 min-w-0 pt-1">
                      <span className="block text-base md:text-[17px] font-bold text-[#004B57] leading-snug pr-2">
                        {item.question}
                      </span>
                    </span>

                    <span
                      className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen
                        ? 'bg-[#FF7A1A]/10 text-[#FF7A1A] rotate-180'
                        : 'bg-[#FAF9F5] text-[#5F6B6E] group-hover:bg-[#FEF3E8] group-hover:text-[#FF7A1A]'
                        }`}
                    >
                      <ChevronDown className="w-5 h-5" strokeWidth={2.2} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                          <div className="ml-[52px] border-t border-[#E2E8E4]/80 pt-4">
                            <p className="text-sm text-[#5F6B6E] leading-relaxed font-medium">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
