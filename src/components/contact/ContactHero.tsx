import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, MessageCircle, Clock, Users } from 'lucide-react';
import Container from '../common/Container';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '../../constants';
import { fadeUp } from '../../utils/animations';
import {
  sectionIntroBadge,
  sectionHeadingAccent,
  btnPrimary,
  sectionDotGrid,
} from '../home/sectionStyles';

const contactQuickInfo = [
  {
    label: 'Phone',
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE_TEL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Gandhi Nagar, Jaipur, Rajasthan 302015',
    href: '#map',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ContactHero() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden isolate">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[8%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[5%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <Container className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#5F6B6E] mb-5 flex-wrap"
            >
              <Link to="/" className="hover:text-[#FF7A1A] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#004B57]/30" />
              <span className="text-[#FF7A1A]">Contact</span>
            </motion.nav>

            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`${sectionIntroBadge} items-center gap-2`}
            >
              Get In Touch
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[2.25rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] font-serif font-medium text-[#004B57] leading-[1.1] tracking-tight mb-4 sm:mb-5 max-w-2xl"
            >
              Contact Us
            </motion.h1>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-px w-10 bg-[#FF7A1A]/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
              <div className="h-px flex-1 max-w-[120px] bg-[#004B57]/15" />
            </motion.div>

            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-xl md:text-2xl font-bold text-[#FF7A1A] mb-4 leading-snug">
              We&apos;re Here to <span className={sectionHeadingAccent}>Help You Thrive</span>.
            </motion.h2>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-[#5F6B6E] text-sm md:text-[15.5px] leading-relaxed max-w-xl mb-8 font-medium">
              Ready to start your B2B corporate health journey? Reach out for a free consultation, program details, or custom proposals — our team responds within 24 hours.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative flex items-start justify-between w-full max-w-[340px] sm:max-w-[420px] mb-10 px-2">
              <div className="absolute top-7 left-12 right-12 sm:top-8 sm:left-14 sm:right-14 h-[1.8px] bg-[#FF7A1A]/20 z-0" />
              {[
                { key: 'consult', icon: Users, label: <>Free<br />Consultation</> },
                { key: 'response', icon: Clock, label: <>Quick<br />Response</> },
                { key: 'support', icon: MessageCircle, label: <>Expert<br />Support</> },
              ].map(({ key, icon: Icon, label }) => (
                <div key={key} className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FEF3E8] rounded-full flex items-center justify-center text-[#FF7A1A] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FDF2E9] border border-[#FF7A1A]/10 shadow-[0_4px_12px_rgba(255,122,26,0.08)]">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.8} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#004B57] text-center mt-3.5 leading-snug tracking-wide">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <a href="#contact-form" className={btnPrimary}>
                <span>Send a Message</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right curved image crescent column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 relative order-2 mt-8 lg:mt-0"
          >
            <div className="absolute left-[-10px] top-[10%] bottom-[10%] w-7 bg-[#FF7A1A] rounded-r-full z-20 shadow-lg shadow-[#FF7A1A]/20" />
            <div className="absolute -right-2 top-[10%] bottom-[10%] w-9 bg-[#004B57] rounded-l-full z-20 shadow-lg" />

            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#FF7A1A]/10 to-[#004B57]/5 rounded-[28px] blur-xl" />

              <div className="relative rounded-[24px] overflow-hidden border-[3px] border-white shadow-[0_24px_60px_rgba(0,75,87,0.12)]">
                <img
                  src={PAGE_HERO_IMAGES.contact}
                  alt="Healthcare consultation"
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004B57]/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl p-5 sm:p-6 lg:p-7 w-full z-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-[#E2E8E4]/70">
            {contactQuickInfo.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 px-2 sm:px-6 py-2 sm:py-1 group hover:opacity-90 transition-opacity"
              >
                <div className="w-11 h-11 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center shrink-0 text-[#FF7A1A] group-hover:bg-[#FF7A1A]/15 border border-[#FF7A1A]/5 shadow-sm transition-colors">
                  {icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-extrabold text-[#FF7A1A] uppercase tracking-widest block mb-0.5">
                    {label}
                  </span>
                  <p className="text-sm text-[#004B57] font-semibold leading-snug truncate sm:whitespace-normal">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </Container>

      <img
        src="/images/leaf.png"
        alt=""
        className="absolute right-0 bottom-0 w-36 sm:w-48 lg:w-60 h-auto pointer-events-none select-none opacity-95 z-0 translate-y-6"
      />
    </section>
  );
}
