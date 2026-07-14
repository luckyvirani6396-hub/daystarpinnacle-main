import { Link } from 'react-router-dom';
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

const solutions = [
  { label: 'Corporate Wellness Programs', to: '/programs' },
  { label: 'Wellness Workshops', to: '/services' },
  { label: 'Wellness Events', to: '/programs' },
  { label: 'Employee Engagement', to: '/#industries' },
  { label: 'Team Building', to: '/services' },
];

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Industries', to: '/#industries' },
  { label: 'Resources', to: '/health-hub' },
  { label: 'Careers', to: '/contact' },
  { label: 'Contact', to: '/contact' },
];

const resources = [
  { label: 'Blog', to: '/health-hub' },
  { label: 'Wellness Guides', to: '/why-wellness' },
  { label: 'Case Studies', to: '/success-stories' },
  { label: 'FAQs', to: '/faq' },
];

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex items-center gap-2 text-[13px] text-white/60 hover:text-[#FF7A1A] transition-colors duration-300"
      >
        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FF7A1A] shrink-0" />
        <span className="group-hover:translate-x-0.5 transition-transform duration-300">{label}</span>
      </Link>
    </li>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF7A1A] mb-5">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#004B57] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-5%] top-[-10%] w-[40%] h-[50%] rounded-full bg-[#FF7A1A]/10 blur-[120px]" />
        <div className="absolute left-[-5%] bottom-[-10%] w-[35%] h-[45%] rounded-full bg-[#72A93B]/8 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo className="mb-5" light />
            <p className="text-[#FF7A1A] text-xs font-bold uppercase tracking-wider mb-3">
              {SITE_TAGLINE}
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Helping organizations build healthier, happier, and more productive workplaces
              through engaging corporate wellness programs.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center text-white/70 hover:bg-[#FF7A1A] hover:border-[#FF7A1A] hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <FooterHeading>Solutions</FooterHeading>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <FooterLink key={item.label} to={item.to} label={item.label} />
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-3">
              {company.map((item) => (
                <FooterLink key={item.label} to={item.to} label={item.label} />
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <FooterHeading>Resources</FooterHeading>
            <ul className="space-y-3">
              {resources.map((item) => (
                <FooterLink key={item.label} to={item.to} label={item.label} />
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <FooterHeading>Contact</FooterHeading>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#FF7A1A]/15 border border-[#FF7A1A]/25 flex items-center justify-center shrink-0 group-hover:bg-[#FF7A1A] transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[#FF7A1A] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white mb-0.5">{COMPANY_NAME}</p>
                  <p className="text-[13px] text-white/55 leading-relaxed">{STREET_ADDRESS}</p>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FF7A1A]/15 border border-[#FF7A1A]/25 flex items-center justify-center shrink-0 group-hover:bg-[#FF7A1A] transition-colors duration-300">
                    <Phone className="w-4 h-4 text-[#FF7A1A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[13px] text-white/60 group-hover:text-white transition-colors duration-300 font-medium">
                    {CONTACT_PHONE}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FF7A1A]/15 border border-[#FF7A1A]/25 flex items-center justify-center shrink-0 group-hover:bg-[#FF7A1A] transition-colors duration-300">
                    <Mail className="w-4 h-4 text-[#FF7A1A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[13px] text-white/60 group-hover:text-white transition-colors duration-300 break-all font-medium">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="text-white/60">{SITE_NAME}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <a href="#" className="hover:text-[#FF7A1A] transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-white/15">·</span>
            <a href="#" className="hover:text-[#FF7A1A] transition-colors duration-300">
              Terms of Service
            </a>
            <span className="text-white/15">·</span>
            <a href="#" className="hover:text-[#FF7A1A] transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
