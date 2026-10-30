import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiPhone, HiMail, HiClock, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { NAV_ITEMS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, WHATSAPP_NUMBER } from '../../constants';
import Logo from '../common/Logo';
import ServicesDropdown, { MobileServicesList } from './ServicesDropdown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = NAV_ITEMS.filter((item) => item.path !== '/faq');
  const SHOW_TOP_BAR = false; // Set to true to re-enable the top info bar

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 pointer-events-none">
      {/* Top Info Bar (Hidden, retained for future use) */}
      {SHOW_TOP_BAR && !isScrolled && !isOpen && (
        <div className="hidden lg:block bg-[#FAF9F5] text-[#004B57] text-xs py-2.5 px-6 border-b border-[#FAF9F5]/60 font-semibold pointer-events-auto select-none shadow-sm">
          <div className="max-w-8xl mx-auto flex items-center justify-between">
            {/* Left Contact Info */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="flex items-center gap-2 hover:text-[#FF7A1A] transition-colors"
              >
                <HiPhone className="w-3.5 h-3.5 text-[#FF7A1A]" />
                <span>{CONTACT_PHONE}</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 hover:text-[#FF7A1A] transition-colors"
              >
                <HiMail className="w-3.5 h-3.5 text-[#FF7A1A]" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <span className="flex items-center gap-2 text-[#004B57]/80">
                <HiClock className="w-3.5 h-3.5 text-[#FF7A1A]" />
                <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
              </span>
            </div>

            {/* Right Socials & Consultation */}
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2 text-[#004B57]/80">
                <HiLocationMarker className="w-3.5 h-3.5 text-[#FF7A1A]" />
                <span>Noida, Uttar Pradesh</span>
              </span>
              <span className="h-3.5 w-[1px] bg-gray-300" />
              <div className="flex items-center gap-2.5">
                <span className="text-[#004B57]/65 text-[11px] font-bold">Follow Us:</span>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#004B57] hover:text-[#FF7A1A] transition-colors"
                >
                  <FaFacebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#004B57] hover:text-[#FF7A1A] transition-colors"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#004B57] hover:text-[#FF7A1A] transition-colors"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#004B57] hover:text-[#FF7A1A] transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating White Capsule Navbar */}
      <div
        className={`transition-all duration-300 w-[95%] max-w-8xl mx-auto pointer-events-auto ${isScrolled ? 'my-2' : 'my-4'
          }`}
      >
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`bg-white/95 backdrop-blur-md rounded-xl border border-[#FAF9F5] px-3 xl:px-5 2xl:px-6 py-1.5 xl:py-2 flex items-center justify-between gap-2 xl:gap-4 transition-shadow duration-300 ${isScrolled ? 'shadow-xl shadow-[#004B57]/10' : 'shadow-lg'}`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0 min-w-0">
            <Logo compact />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 min-w-0 gap-0 xl:gap-0.5 2xl:gap-1.5">
            {navItems.map((item, idx) => {
              const isActive =
                location.pathname === item.path ||
                (item.path === '/services' && location.pathname.startsWith('/services')) ||
                ((item.path === '/health-hub' || item.path === '/resources') &&
                  (location.pathname.startsWith('/health-hub') || location.pathname.startsWith('/resources')));

              const entrance = {
                initial: { opacity: 0, y: -8 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.25 + idx * 0.06, duration: 0.4 },
              };

              if (item.path === '/services') {
                return (
                  <motion.div key={item.path} {...entrance}>
                    <ServicesDropdown isActive={isActive} isCapsule={true} />
                  </motion.div>
                );
              }

              const shortLabel =
                item.label === 'Corporate Programs'
                  ? 'Programs'
                  : item.label === 'About Us'
                    ? 'About'
                    : item.label === 'Contact Us'
                      ? 'Contact'
                      : item.label;

              return (
                <motion.div key={item.path} {...entrance} className="relative flex flex-col items-center">
                  <Link
                    to={item.path}
                    className={`group relative px-1.5 xl:px-2.5 2xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] 2xl:text-[14.5px] font-semibold whitespace-nowrap transition-all duration-200 ${isActive ? 'text-[#FF7A1A]' : 'text-[#004B57] hover:text-[#FF7A1A]'
                      }`}
                  >
                    <span className="2xl:hidden">{shortLabel}</span>
                    <span className="hidden 2xl:inline">{item.label}</span>
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] rounded-full bg-[#FF7A1A] transition-all duration-300 ease-out ${isActive ? 'w-[60%]' : 'w-0 group-hover:w-[60%]'
                        }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <Link
              to="/contact"
              className="btn-shine group bg-[#FF7A1A] text-white hover:bg-[#FF7A1A] font-semibold text-[12px] xl:text-[13px] 2xl:text-[13.5px] px-3 xl:px-4 2xl:px-5 py-2 xl:py-2.5 rounded-full transition-all duration-300 flex items-center gap-1 shadow-md shadow-[#FF7A1A]/10 hover:shadow-lg hover:shadow-[#FF7A1A]/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span className="hidden xl:inline">Book Consultation</span>
              <span className="xl:hidden">Book Now</span>
              <span className="font-sans font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Mobile Menu & WhatsApp Icons */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#004B57] hover:text-[#FF7A1A] p-2 flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100 text-[#004B57] transition-colors cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden w-[95%] mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-[#FAF9F5] overflow-hidden mt-1 p-5 absolute left-1/2 -translate-x-1/2 pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.path === '/services' && location.pathname.startsWith('/services')) ||
                  ((item.path === '/health-hub' || item.path === '/resources') &&
                    (location.pathname.startsWith('/health-hub') || location.pathname.startsWith('/resources')));
                const label = item.label;

                if (item.path === '/services') {
                  return (
                    <MobileServicesList
                      key={item.path}
                      isServicesActive={isActive}
                      onNavigate={() => setIsOpen(false)}
                    />
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${isActive
                        ? 'text-[#FF7A1A] bg-[#FF7A1A]/5'
                        : 'text-[#004B57] hover:text-[#FF7A1A] hover:bg-gray-50'
                      }`}
                  >
                    {label}
                  </Link>
                );
              })}

              <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-3">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm text-gray-500 font-medium">Quick Contact</span>
                  <a
                    href={`tel:${CONTACT_PHONE_TEL}`}
                    className="text-sm font-bold text-[#004B57] flex items-center gap-1 hover:text-[#FF7A1A] transition-colors"
                  >
                    <HiPhone className="w-4 h-4 text-[#FF7A1A]" />
                    {CONTACT_PHONE}
                  </a>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#FF7A1A] text-white text-center font-bold py-3.5 rounded-2xl hover:bg-[#FF7A1A] transition-colors shadow-md shadow-[#FF7A1A]/10"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
