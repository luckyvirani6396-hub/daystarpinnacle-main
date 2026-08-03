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
];

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Industries', to: '/#industries' },
  { label: 'Resources', to: '/health-hub' },
  { label: 'Careers', to: '/contact' },
  { label: 'Contact', to: '/contact' },
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const },
  },
};

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex items-center gap-2.5 text-[13px] text-[#B7C5C9] hover:text-[#F7F4EF] transition-colors duration-300 font-medium"
      >
        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FF9A4A] shrink-0" />
        <span className="link-underline-anim transition-transform duration-300 group-hover:translate-x-0.5">{label}</span>
      </Link>
    </li>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F7F4EF] mb-7 flex items-center gap-2.5">
      <span className="w-5 h-px bg-[#FF9A4A]/80" />
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#003C46] via-[#002E35] to-[#001F24] text-white font-['Poppins',_sans-serif]">
      {/* Eye-catching CSS Floating Ambient Glows */}
      <style>{`
        @keyframes float-slow-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -40px) scale(1.15); }
        }
        @keyframes float-slow-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 30px) scale(1.1); }
        }
        @keyframes float-slow-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 40px) scale(1.05); }
        }
        .animate-float-slow-1 {
          animation: float-slow-1 18s ease-in-out infinite;
        }
        .animate-float-slow-2 {
          animation: float-slow-2 22s ease-in-out infinite;
        }
        .animate-float-slow-3 {
          animation: float-slow-3 26s ease-in-out infinite;
        }
        @keyframes pulse-dots {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.09; }
        }
        .animate-pulse-dots {
          animation: pulse-dots 8s ease-in-out infinite;
        }
        .link-underline-anim {
          position: relative;
        }
        .link-underline-anim::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1.5px;
          bottom: -2.5px;
          left: 0;
          background-color: #FF9A4A;
          transform-origin: bottom right;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .group:hover .link-underline-anim::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic, floating gradient light leaks */}
        <div className="absolute right-[-10%] top-[-25%] w-[60%] h-[70%] rounded-full bg-[#FF7A1A]/12 blur-[140px] animate-float-slow-1" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[55%] h-[65%] rounded-full bg-[#72A93B]/9 blur-[120px] animate-float-slow-2" />
        <div className="absolute left-[35%] top-[20%] w-[30%] h-[40%] rounded-full bg-[#004B57]/15 blur-[100px] animate-float-slow-3" />
        
        <div
          className="absolute inset-0 animate-pulse-dots"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 pt-20 pb-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div variants={columnVariants} className="sm:col-span-2 lg:col-span-4 flex flex-col items-start">
            <Logo className="mb-6 hover:scale-103 transition-transform duration-300" light />
            <span className="inline-flex text-[9.5px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5 rounded-lg bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-[#FF9A4A] mb-5">
              {SITE_TAGLINE}
            </span>
            <p className="text-[#A8B8BC] text-[13.5px] leading-relaxed mb-7 max-w-sm font-normal">
              Helping organizations build healthier, happier, and more productive workplaces
              through engaging corporate wellness programs.
            </p>

            {/* Glowing Glassmorphism Social Buttons */}
            <div className="flex flex-wrap gap-3.5">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#A8B8BC] hover:bg-[#FF7A1A] hover:border-[#FF7A1A] hover:text-white hover:scale-110 hover:-translate-y-1 hover:rotate-3 hover:shadow-[0_0_20px_rgba(255,122,26,0.35)] transition-all duration-300"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={columnVariants} className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-3.5">
              {services.map((item) => (
                <FooterLink key={item.label} to={item.to} label={item.label} />
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={columnVariants} className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-3.5">
              {company.map((item) => (
                <FooterLink key={item.label} to={item.to} label={item.label} />
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={columnVariants} className="sm:col-span-2 lg:col-span-3">
            <FooterHeading>Contact</FooterHeading>
            <ul className="space-y-5">
              <li className="flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF7A1A] group-hover:border-[#FF7A1A] group-hover:shadow-[0_0_16px_rgba(255,122,26,0.3)] hover:scale-105 transition-all duration-300">
                  <MapPin className="w-[18px] h-[18px] text-[#FF9A4A] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F7F4EF] mb-0.5 leading-snug">{COMPANY_NAME}</p>
                  <p className="text-[12px] text-[#8FA3A8] leading-relaxed font-normal">{STREET_ADDRESS}</p>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF7A1A] group-hover:border-[#FF7A1A] group-hover:shadow-[0_0_16px_rgba(255,122,26,0.3)] hover:scale-105 transition-all duration-300">
                    <Phone className="w-[18px] h-[18px] text-[#FF9A4A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[13px] text-[#B7C5C9] group-hover:text-[#F7F4EF] transition-colors duration-300 font-medium tracking-wide">
                    {CONTACT_PHONE}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF7A1A] group-hover:border-[#FF7A1A] group-hover:shadow-[0_0_16px_rgba(255,122,26,0.3)] hover:scale-105 transition-all duration-300">
                    <Mail className="w-[18px] h-[18px] text-[#FF9A4A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[13px] text-[#B7C5C9] group-hover:text-[#F7F4EF] transition-colors duration-300 break-all font-medium">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider with high-end fade */}
        <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[#6F8388] text-[11.5px] text-center md:text-left font-normal">
            © {new Date().getFullYear()}{' '}
            <span className="text-[#C5D0D3] hover:text-[#FF9A4A] transition-colors duration-300 font-medium">{SITE_NAME}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11.5px] text-[#6F8388] font-medium">
            <a href="#" className="hover:text-[#F7F4EF] transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-white/15">·</span>
            <a href="#" className="hover:text-[#F7F4EF] transition-colors duration-300">
              Terms of Service
            </a>
            <span className="text-white/15">·</span>
            <a href="#" className="hover:text-[#F7F4EF] transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
