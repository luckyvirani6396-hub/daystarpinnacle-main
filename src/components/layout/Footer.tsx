import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import {
  SITE_NAME,
  SITE_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  COMPANY_NAME,
  STREET_ADDRESS,
  WHATSAPP_NUMBER,
} from '../../constants';
import Logo from '../common/Logo';
import { sectionDotGrid } from '../home/sectionStyles';

const socialIcons = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp' },
];

const services = [
  { label: 'Physical Wellness', to: '/services/physical-wellness' },
  { label: 'Mental Wellbeing', to: '/services/mental-wellbeing' },
  { label: 'Nutrition & Healthy Living', to: '/services/nutrition-healthy-living' },
  { label: 'Emotional Wellness', to: '/services/emotional-wellness' },
  { label: 'Social Wellbeing', to: '/services/social-wellbeing' },
  { label: 'Work-Life Balance', to: '/services/work-life-balance' },
];

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Corporate Programs', to: '/programs' },
  { label: 'Wellness Blog', to: '/health-hub' },
  { label: 'Book Consultation', to: '/contact' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] as const },
  },
};

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#004B57] mb-6 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#FF7A1A] shadow-sm" />
      <span>{children}</span>
    </h3>
  );
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex items-center gap-2 text-sm text-[#004B57]/75 hover:text-[#FF7A1A] transition-all duration-200 font-medium py-1"
      >
        <ArrowRight className="w-3.5 h-3.5 text-[#FF7A1A] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
        <span className="transition-transform duration-200 group-hover:translate-x-1">{label}</span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FAF9F5] text-[#004B57] border-t border-[#FAF9F5]">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-6%] top-[-15%] w-[45%] h-[55%] rounded-full bg-[#FF7A1A]/5 blur-[120px]" />
        <div className="absolute left-[-6%] bottom-[-15%] w-[40%] h-[50%] rounded-full bg-[#004B57]/5 blur-[110px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.12)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="pt-16 sm:pt-20 pb-12 sm:pb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column (4 cols on lg) */}
            <motion.div variants={columnVariants} className="sm:col-span-2 lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
              <Logo className="mb-5 hover:opacity-90 transition-opacity" />

              <span className="inline-flex text-[10px] font-extrabold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#FF7A1A]/25 text-[#FF7A1A] mb-4 shadow-sm">
                {SITE_TAGLINE}
              </span>

              <p className="text-[#004B57] text-sm leading-relaxed mb-6 font-medium">
                Empowering organizations to build healthier, happier, and more productive workplaces through scientifically designed, expert-led wellness programs.
              </p>

              {/* Social Buttons */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#004B57] mb-3">
                  Connect With Us
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {socialIcons.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-white border border-[#FAF9F5] flex items-center justify-center text-[#004B57] hover:bg-[#FF7A1A] hover:border-[#FF7A1A] hover:text-white hover:scale-105 transition-all duration-200 shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services Column (3 cols on lg) */}
            <motion.div variants={columnVariants} className="lg:col-span-3">
              <FooterHeading>Services</FooterHeading>
              <ul className="space-y-2">
                {services.map((item) => (
                  <FooterLink key={item.label} to={item.to} label={item.label} />
                ))}
              </ul>
            </motion.div>

            {/* Company Column (2 cols on lg) */}
            <motion.div variants={columnVariants} className="lg:col-span-2">
              <FooterHeading>Company</FooterHeading>
              <ul className="space-y-2">
                {company.map((item) => (
                  <FooterLink key={item.label} to={item.to} label={item.label} />
                ))}
              </ul>
            </motion.div>

            {/* Contact Column (3 cols on lg) */}
            <motion.div variants={columnVariants} className="sm:col-span-2 lg:col-span-3">
              <FooterHeading>Contact Us</FooterHeading>
              <ul className="space-y-4">
                {/* Address */}
                <li className="flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#FAF9F5] flex items-center justify-center shrink-0 text-[#FF7A1A] shadow-sm group-hover:border-[#FF7A1A]/40 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#004B57] mb-0.5 leading-snug">{COMPANY_NAME}</p>
                    <p className="text-xs text-[#004B57] leading-relaxed font-medium">{STREET_ADDRESS}</p>
                  </div>
                </li>

                {/* Phone */}
                <li>
                  <a
                    href={`tel:${CONTACT_PHONE_TEL}`}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#FAF9F5] flex items-center justify-center shrink-0 text-[#FF7A1A] shadow-sm group-hover:border-[#FF7A1A]/40 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#004B57]">Call Us</p>
                      <p className="text-sm font-bold text-[#004B57] group-hover:text-[#FF7A1A] transition-colors">
                        {CONTACT_PHONE}
                      </p>
                    </div>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#FAF9F5] flex items-center justify-center shrink-0 text-[#FF7A1A] shadow-sm group-hover:border-[#FF7A1A]/40 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#004B57]">Email Us</p>
                      <p className="text-sm font-bold text-[#004B57] group-hover:text-[#FF7A1A] transition-colors break-all">
                        {CONTACT_EMAIL}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 pb-12 border-t border-[#FAF9F5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#004B57] text-center sm:text-left font-medium">
            © {new Date().getFullYear()}{' '}
            <span className="text-[#004B57] font-bold">{SITE_NAME}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-[#004B57] font-medium sm:mr-20 lg:mr-24">
            <Link to="/privacy-policy" className="hover:text-[#FF7A1A] transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-[#FAF9F5]">·</span>
            <Link to="/terms-of-service" className="hover:text-[#FF7A1A] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
