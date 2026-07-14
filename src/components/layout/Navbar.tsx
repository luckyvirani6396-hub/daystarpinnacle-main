import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiPhone, HiMail, HiClock, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { NAV_ITEMS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, WHATSAPP_NUMBER } from '../../constants';
import Logo from '../common/Logo';
import ServicesDropdown, { MobileServicesList } from './ServicesDropdown';
import ResourcesDropdown, { MobileResourcesList } from './ResourcesDropdown';

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 pointer-events-none">
      {/* Top Info Bar (Off-White Background with Orange Icons matching Reference Mockup) */}
      {!isScrolled && !isOpen && (
        <div className="hidden lg:block bg-[#FCFBF7] text-[#2c4033] text-xs py-2.5 px-6 border-b border-[#e2e8e4]/60 font-semibold pointer-events-auto select-none shadow-sm">
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
              <span className="flex items-center gap-2 text-[#2c4033]/80">
                <HiClock className="w-3.5 h-3.5 text-[#FF7A1A]" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </span>
            </div>

            {/* Right Socials & Consultation */}
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2 text-[#2c4033]/80">
                <HiLocationMarker className="w-3.5 h-3.5 text-[#FF7A1A]" />
                <span>Jaipur, Rajasthan</span>
              </span>
              <span className="h-3.5 w-[1px] bg-gray-300" />
              <div className="flex items-center gap-2.5">
                <span className="text-[#2c4033]/65 text-[11px] font-bold">Follow Us:</span>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2c4033] hover:text-[#FF7A1A] transition-colors"
                >
                  <FaFacebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2c4033] hover:text-[#FF7A1A] transition-colors"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2c4033] hover:text-[#FF7A1A] transition-colors"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>
              </div>
              <Link
                to="/contact"
                className="bg-[#FF7A1A] text-white hover:bg-[#E86800] font-extrabold text-[10px] uppercase tracking-wider px-4.5 py-2 rounded transition-all duration-300 flex items-center gap-1.5"
              >
                <span>Book Free Consultation</span>
                <span className="font-sans font-bold">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating White Capsule Navbar */}
      <div
        className={`transition-all duration-300 w-[95%] max-w-8xl mx-auto pointer-events-auto ${
          isScrolled ? 'my-2' : 'my-4'
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md shadow-lg rounded-xl border border-[#e8efe9] px-6 py-2 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4 shrink-0">
            <Logo />
            <span className="hidden xl:block h-8 w-[1.5px] bg-[#e2e8e4]" />
            <span className="hidden xl:block text-[11px] font-bold text-[#5c6860] max-w-[130px] leading-tight text-left">
              Corporate Health &amp; <br /> Wellness Solutions
            </span>
          </div>

          {/* Desktop Navigation Links (Clean text active states matching Mockup) */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path === '/services' && location.pathname.startsWith('/services'));
              const label = item.label;

              if (item.path === '/services') {
                return <ServicesDropdown key={item.path} isActive={isActive} isCapsule={true} />;
              }

              if (item.path === '/resources') {
                return <ResourcesDropdown key={item.path} isActive={isActive} isCapsule={true} />;
              }

              return (
                <div key={item.path} className="relative flex flex-col items-center py-1">
                  <Link
                    to={item.path}
                    className={`px-3 py-1.5 text-[14.5px] font-semibold transition-all duration-200 ${
                      isActive ? 'text-[#FF7A1A]' : 'text-[#1a2e32] hover:text-[#FF7A1A]'
                    }`}
                  >
                    {label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Section: WhatsApp circle outline, Separator, Pill CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a2e32] hover:text-[#FF7A1A] hover:scale-105 transition-all w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer shrink-0"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>

            <Link
              to="/contact"
              className="bg-[#FF7A1A] text-white hover:bg-[#E86800] font-semibold text-[13.5px] px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-[#FF7A1A]/10"
            >
              <span>Book Consultation</span>
              <span className="font-sans font-bold">→</span>
            </Link>
          </div>

          {/* Mobile Menu & WhatsApp Icons */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a2e32] hover:text-[#FF7A1A] p-2 flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100 text-[#1a2e32] transition-colors cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden w-[95%] mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-[#e8efe9] overflow-hidden mt-1 p-5 absolute left-1/2 -translate-x-1/2 pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.path === '/services' && location.pathname.startsWith('/services'));
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

                if (item.path === '/resources') {
                  return (
                    <MobileResourcesList
                      key={item.path}
                      isResourcesActive={isActive}
                      onNavigate={() => setIsOpen(false)}
                    />
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-[#FF7A1A] bg-[#FF7A1A]/5'
                        : 'text-[#1a2e32] hover:text-[#FF7A1A] hover:bg-gray-50'
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
                    className="text-sm font-bold text-[#1a2e32] flex items-center gap-1 hover:text-[#FF7A1A] transition-colors"
                  >
                    <HiPhone className="w-4 h-4 text-[#FF7A1A]" />
                    {CONTACT_PHONE}
                  </a>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#FF7A1A] text-white text-center font-bold py-3.5 rounded-2xl hover:bg-[#E86800] transition-colors shadow-md shadow-[#FF7A1A]/10"
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
