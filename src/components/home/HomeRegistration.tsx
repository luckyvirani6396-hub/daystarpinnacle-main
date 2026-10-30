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
      className="relative w-full bg-white overflow-hidden py-12 md:py-16 scroll-mt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[8%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/4 blur-[120px]" />
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
                  <span className="w-5 h-5 rounded-md bg-[#FAF9F5] text-[#FF7A1A] flex items-center justify-center shrink-0 mt-0.5">
                    <ClipboardList className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  <span className={`${sectionBody} text-[#004B57]/90`}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF9F5] border border-[#FAF9F5] hover:border-[#FF7A1A]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] flex items-center justify-center text-[#FF7A1A] shrink-0">
                  <HiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#004B57]">
                    Call Us
                  </p>
                  <p className="text-sm font-bold text-[#004B57]">{CONTACT_PHONE}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF9F5] border border-[#FAF9F5] hover:border-[#FF7A1A]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] flex items-center justify-center text-[#FF7A1A] shrink-0">
                  <HiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#004B57]">
                    Email Us
                  </p>
                  <p className="text-sm font-bold text-[#004B57] break-all">{CONTACT_EMAIL}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-8"
          >
            <div className={`${cardOnWhite} p-6 sm:p-7 md:p-8`}>
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[#FAF9F5]">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] flex items-center justify-center text-[#FF7A1A] shrink-0">
                  <Building2 className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#004B57] leading-tight">
                    Register Your Interest
                  </h3>
                  <p className="text-xs sm:text-sm text-[#004B57]/75 leading-relaxed font-medium mt-0.5">
                    Share your company details and we&apos;ll prepare a customized wellness proposal.
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
