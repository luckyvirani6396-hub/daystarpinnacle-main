import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, PhoneCall, HelpCircle, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import { CONTACT_PHONE, CONTACT_PHONE_TEL } from '../../constants';
import {
  sectionIntroBadge,
  sectionIntroHeading,
  sectionHeadingAccent,
  sectionBody,
  cardOnCream,
  btnPrimary,
  btnSecondary,
} from '../home/sectionStyles';

const blogFaqList = [
  {
    q: 'How do corporate wellness programs tangibly improve office productivity?',
    a: 'Structured corporate wellness initiatives reduce chronic fatigue, alleviate ergonomic discomfort, and support mental resilience. Organizations implementing regular wellness sessions report up to 38% fewer unplanned sick leaves, elevated employee engagement, and lower turnover rates.',
  },
  {
    q: 'Can our company request workshops based on the topics featured in these articles?',
    a: 'Absolutely. Every topic featured in our knowledge hub—from Desk Ergonomics and 3 PM Energy Nutrition to Stress Resilience and Executive Sleep—can be delivered as an interactive on-site workshop or live virtual webinar tailored to your teams.',
  },
  {
    q: 'Are all wellness guides and workshop curriculums clinically vetted?',
    a: 'Yes. All health frameworks, nutrition protocols, and mindfulness exercises are developed and reviewed by certified clinical nutritionists, certified yoga masters, and experienced corporate wellness facilitators.',
  },
  {
    q: 'How do you measure employee participation and program success?',
    a: 'After each session and quarterly campaign, we compile participation counts, feedback sentiment scores, and behavioral habit adherence metrics into an executive summary report for your HR leadership team.',
  },
  {
    q: 'Can programs be delivered to hybrid and remote workforces across multiple cities?',
    a: 'Yes. We offer seamless omnichannel delivery. Sessions can be conducted on-site at your headquarters while simultaneously live-streamed with interactive Q&A for remote and regional branch teams across India.',
  },
];

export default function BlogFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAF9F5]/70 z-10 border-t border-[#E2E8E4]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-left lg:sticky lg:top-28"
          >
            <span className={sectionIntroBadge}>
              <HelpCircle className="w-3.5 h-3.5 mr-1" />
              Corporate Health FAQ
            </span>
            <h2 className={sectionIntroHeading}>
              Frequently Asked <span className={sectionHeadingAccent}>Questions</span>
            </h2>
            <p className={`${sectionBody} mb-8`}>
              Clear answers on how our corporate wellness articles translate into actionable on-site and virtual workforce programs.
            </p>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8E4] shadow-sm">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-xl bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center shrink-0 border border-[#FF7A1A]/15">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#004B57]">Need Direct Assistance?</h4>
                  <p className="text-xs text-[#5F6B6E] font-medium">Speak with our wellness consultant</p>
                </div>
              </div>

              <p className="text-xs text-[#5F6B6E] leading-relaxed mb-5 font-medium">
                Have specific workforce requirements or multi-city team needs? Our corporate team is ready to assist.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <Link to="/contact" className={`${btnPrimary} text-xs py-2.5 px-4 w-full justify-center`}>
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className={`${btnSecondary} text-xs py-2.5 px-4 w-full justify-center text-center`}
                >
                  <span>{CONTACT_PHONE}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {blogFaqList.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`${cardOnCream} overflow-hidden ${
                    isOpen ? 'border-[#FF7A1A]/30 shadow-[0_8px_32px_rgba(255,122,26,0.08)]' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-start gap-4 p-5 md:p-6 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#FF7A1A] text-white'
                          : 'bg-[#E6F2F4] text-[#004B57] group-hover:bg-[#FEF3E8] group-hover:text-[#FF7A1A]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1 min-w-0 pt-0.5">
                      <span className="block text-base font-bold text-[#004B57] leading-snug group-hover:text-[#FF7A1A] transition-colors">
                        {item.q}
                      </span>
                    </span>

                    <span
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#FF7A1A]/10 text-[#FF7A1A] rotate-180'
                          : 'bg-[#FAF9F5] text-[#5F6B6E] group-hover:bg-[#FEF3E8] group-hover:text-[#FF7A1A]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                          <div className="ml-12 border-t border-[#E2E8E4]/80 pt-3.5">
                            <p className="text-xs sm:text-sm text-[#5F6B6E] leading-relaxed font-medium">
                              {item.a}
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
      </Container>
    </section>
  );
}
