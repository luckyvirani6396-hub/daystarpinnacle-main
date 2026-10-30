import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import Container from '../common/Container';
import SectionDecorations from '../common/SectionDecorations';
import ContactForm from '../forms/ContactForm';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  COMPANY_NAME,
  STREET_ADDRESS,
} from '../../constants';
import { fadeUp } from '../../utils/animations';

const contactMethods = [
  {
    icon: HiLocationMarker,
    title: 'Visit Us',
    detail: (
      <>
        <span className="font-bold text-dark block mb-1">
          {COMPANY_NAME}
        </span>
        <span>
          {STREET_ADDRESS}
        </span>
      </>
    ),
    href: undefined,
  },
  {
    icon: HiPhone,
    title: 'Call Us',
    detail: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE_TEL}`,
  },
  {
    icon: HiMail,
    title: 'Email Us',
    detail: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

export default function ContactSection() {
  return (
    <section id="contact-form" className="py-10 md:py-14 relative overflow-hidden z-10 bg-[#F3F8EE]">
      <SectionDecorations />

      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <span className="inline-block text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full text-[#FF7A1A] bg-[#FAF9F5] border border-[#FF7A1A]/20 shadow-sm mb-4">
                Corporate Consultation
              </span>
              <h2 className="text-3xl md:text-[38px] font-serif font-medium text-[#004B57] leading-tight mb-4">
                Let&apos;s Build a <span className="text-[#FF7A1A] italic font-normal">Healthier Workplace</span> Together
              </h2>
              <p className="text-[#004B57] text-sm leading-relaxed font-medium">
                Ready to invest in your employees? Schedule a consultation and let our team design a wellness strategy tailored to your organization.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, title, detail, href }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#FAF9F5]/60 hover:border-[#FF7A1A]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7A1A]/5"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center shrink-0 text-[#FF7A1A] border border-[#FF7A1A]/5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#004B57] text-sm">{title}</p>
                    {href ? (
                      <a href={href} className="text-[#004B57] text-xs mt-1 leading-relaxed hover:text-[#FF7A1A] transition-colors block font-semibold">
                        {detail}
                      </a>
                    ) : (
                      <p className="text-[#004B57] text-xs mt-1 leading-relaxed font-semibold">{detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-[24px] p-6 sm:p-7 md:p-8 border border-[#FAF9F5]/80 shadow-sm hover:shadow-xl hover:shadow-[#FF7A1A]/5 transition-shadow duration-500">
              <div className="mb-5 pb-4 border-b border-[#FAF9F5]/60">
                <span className="inline-block text-[10px] sm:text-[11px] font-extrabold tracking-[0.18em] uppercase px-3 py-1 rounded-full text-[#FF7A1A] bg-[#FAF9F5] border border-[#FF7A1A]/20 shadow-sm mb-2.5">
                  Registration / Inquiry Form
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#004B57]">Register Your Interest</h3>
                <p className="text-[#004B57] text-xs sm:text-sm mt-1 font-medium">Fill out the brief details below and our team will design a custom wellness proposal for your team.</p>
              </div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
