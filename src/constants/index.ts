import type { NavItem } from '../types';

export const SITE_NAME = 'Daystar Pinnacle';
export const SITE_TAGLINE = 'Corporate Wellness & Employee Productivity';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Corporate Programs', path: '/programs' },
  // { label: 'Industries', path: '/#industries' },
  { label: 'Blog', path: '/health-hub' },
  { label: 'Contact Us', path: '/contact' },
];

export const WHATSAPP_NUMBER = '1204414400';
export const CONTACT_EMAIL = 'info@daystarpinnacle.in';
export const CONTACT_PHONE = '0120 - 4414400';
export const CONTACT_PHONE_TEL = '01204414400';
export const COMPANY_NAME = 'Daystar Pinnacle Pvt. Ltd.';
export const STREET_ADDRESS = 'Plot No.46, Lal Kothi, Satya Vihar Colony, Gandhi Naga, Jaipur - 302015, Rajasthan';
export const CONTACT_ADDRESS = `${COMPANY_NAME} ${STREET_ADDRESS}`;

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'FaFacebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'FaInstagram' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'FaTwitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'FaLinkedin' },
  { label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: 'FaWhatsapp' },
];

export const HEALTH_CATEGORIES = [
  'All',
  'Workplace Wellness',
  'Corporate Nutrition',
  'Stress & Burnout',
  'Ergonomics',
  'Leadership Health',
] as const;
