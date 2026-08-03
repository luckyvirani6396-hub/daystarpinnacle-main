import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';

const corporateServices = [
  { slug: 'physical-wellness', title: 'Physical Wellness' },
  { slug: 'mental-wellbeing', title: 'Mental Wellbeing' },
  { slug: 'nutrition-healthy-living', title: 'Nutrition & Healthy Living' },
  { slug: 'emotional-wellness', title: 'Emotional Wellness' },
  { slug: 'social-wellbeing', title: 'Social Wellbeing' },
  { slug: 'work-life-balance', title: 'Work-Life Balance' },
  { slug: 'financial-wellness', title: 'Financial Wellness' },
  { slug: 'preventive-healthcare', title: 'Preventive Healthcare' },
  { slug: 'environmental-wellness', title: 'Environmental Wellness' },
  { slug: 'holistic-wellness', title: 'Holistic Wellness' },
];

const easeSoft = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10, x: -6 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.28, ease: easeSoft },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.16, ease: easeSoft },
  },
};

interface ServicesDropdownProps {
  isActive: boolean;
  isLight?: boolean;
  isCapsule?: boolean;
}

export default function ServicesDropdown({ isActive, isLight = false, isCapsule = false }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  const closeDropdown = () => setIsOpen(false);

  const linkClass = isCapsule
    ? `inline-flex items-center gap-1 px-3 py-1.5 text-[14.5px] font-semibold transition-all duration-200 ${
        isActive ? 'text-[#FF7A1A]' : 'text-[#1a2e32] hover:text-[#FF7A1A]'
      }`
    : `inline-flex items-center gap-1 px-3.5 xl:px-4.5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
        isActive
          ? isLight
            ? 'text-[#FF7A1A] bg-white/10'
            : 'text-[#FF7A1A] bg-[#FF7A1A]/10'
          : isLight
          ? 'text-white/85 hover:text-[#FF7A1A] hover:bg-white/5'
          : 'text-dark/70 hover:text-[#FF7A1A] hover:bg-[#FF7A1A]/5'
      }`;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link to="/services" className={linkClass}>
        Services
        <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: easeSoft }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[280px] z-50"
          >
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-xl shadow-black/10 border border-border overflow-hidden"
            >
              {corporateServices.map((service, index) => (
                <motion.div key={service.slug} variants={itemVariants}>
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={closeDropdown}
                    className={`block px-5 py-3.5 text-sm text-dark hover:bg-[#FF7A1A]/10 hover:text-[#FF7A1A] transition-colors ${
                      index !== corporateServices.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    {service.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  to="/services"
                  onClick={closeDropdown}
                  className="block px-5 py-3.5 text-sm font-semibold text-[#004B57] bg-[#004B57]/5 hover:bg-[#004B57]/10 border-t border-border transition-colors text-center"
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileServicesListProps {
  isServicesActive: boolean;
  onNavigate: () => void;
}

export function MobileServicesList({ isServicesActive, onNavigate }: MobileServicesListProps) {
  const [expanded, setExpanded] = useState(false);

  const handleNavigate = () => {
    setExpanded(false);
    onNavigate();
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-colors ${
          isServicesActive
            ? 'text-[#FF7A1A] bg-[#FF7A1A]/5'
            : 'text-[#1a2e32] hover:text-[#FF7A1A] hover:bg-gray-50'
        }`}
      >
        Services
        <HiChevronDown className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeSoft }}
            className="overflow-hidden pl-4 mt-1"
          >
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {corporateServices.map((service) => (
                <motion.div key={service.slug} variants={itemVariants}>
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={handleNavigate}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#1a2e32]/85 hover:text-[#FF7A1A] transition-colors"
                  >
                    <HiChevronRight className="w-4 h-4 shrink-0" />
                    {service.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  to="/services"
                  onClick={handleNavigate}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#FF7A1A] hover:text-[#E86800] transition-colors"
                >
                  <HiChevronRight className="w-4 h-4 shrink-0" />
                  View All Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
