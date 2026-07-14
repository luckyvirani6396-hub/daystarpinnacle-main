import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { Building2, ClipboardList } from 'lucide-react';
import ContactForm from '../forms/ContactForm';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
} from '../../constants';
import {
  cardOnWhite,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
} from './sectionStyles';

const highlights = [
  'Tailored wellness strategy for your team size',
  'Response within one business day',
  'Virtual, onsite, and hybrid delivery options',
];

export default function HomeRegistration() {
  return (
    <section
      id="register"
      className="relative w-full bg-white overflow-hidden py-16 md:py-24 scroll-mt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[8%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[8%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
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
            <span className={sectionIntroBadge}>Registration / Inquiry</span>

            <h2 className={sectionIntroHeading}>
              Let&apos;s Build a{' '}
              <span className={sectionHeadingAccent}>Healthier Workplace</span>{' '}
              Together
            </h2>

            <p className={`${sectionBody} mb-6`}>
              Ready to invest in your employees? Share your company details and wellness
              goals — our team will design a strategy tailored to your organization.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center shrink-0 mt-0.5">
                    <ClipboardList className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  <span className={`${sectionBody} text-[#1A2E32]/90`}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2E8E4] hover:border-[#FF7A1A]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E6F2F4] flex items-center justify-center text-[#004B57] shrink-0">
                  <HiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#5F6B6E]">
                    Call Us
                  </p>
                  <p className="text-sm font-bold text-[#004B57]">{CONTACT_PHONE}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2E8E4] hover:border-[#FF7A1A]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FEF3E8] flex items-center justify-center text-[#FF7A1A] shrink-0">
                  <HiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#5F6B6E]">
                    Email Us
                  </p>
                  <p className="text-sm font-bold text-[#004B57] break-all">{CONTACT_EMAIL}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className={`${cardOnWhite} p-6 md:p-8 lg:p-10`}>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E2E8E4]">
                <div className="w-11 h-11 rounded-xl bg-[#E6F2F4] flex items-center justify-center text-[#004B57]">
                  <Building2 className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-serif font-semibold text-[#004B57] leading-tight">
                    Register Your Interest
                  </h3>
                  <p className="text-sm md:text-base text-[#1A2E32]/80 leading-relaxed font-medium mt-1">
                    Complete the form below and we&apos;ll be in touch shortly.
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
