import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import {
  Activity,
  Brain,
  Apple,
  Smile,
  Users,
  Clock,
  Coins,
  ShieldCheck,
  Leaf,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const corporateServices = [
  { slug: 'physical-wellness', title: 'Physical Wellness', desc: 'Fitness, ergonomics & movement', icon: Activity },
  { slug: 'mental-wellbeing', title: 'Mental Wellbeing', desc: 'Meditation, focus & mindfulness', icon: Brain },
  { slug: 'nutrition-healthy-living', title: 'Nutrition & Living', desc: 'Diet coaching, meals & hydration', icon: Apple },
  { slug: 'emotional-wellness', title: 'Emotional Wellness', desc: 'Resilience & positive psychology', icon: Smile },
  { slug: 'social-wellbeing', title: 'Social Wellbeing', desc: 'Team bonding & healthy culture', icon: Users },
  { slug: 'work-life-balance', title: 'Work-Life Balance', desc: 'Hybrid boundaries & schedules', icon: Clock },
  { slug: 'financial-wellness', title: 'Financial Wellness', desc: 'Literacy, budgeting & security', icon: Coins },
  { slug: 'preventive-healthcare', title: 'Preventive Healthcare', desc: 'Screenings, checkups & audits', icon: ShieldCheck },
  { slug: 'environmental-wellness', title: 'Environmental Wellness', desc: 'Ergonomic & eco-friendly office', icon: Leaf },
  { slug: 'holistic-wellness', title: 'Holistic Wellness', desc: 'Retreats, therapy & rejuvenation', icon: Sparkles },
];

const easeSoft = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.04,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: easeSoft },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.14, ease: easeSoft },
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
    ? `inline-flex items-center gap-0.5 px-1.5 xl:px-2.5 2xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] 2xl:text-[14.5px] font-semibold whitespace-nowrap transition-all duration-200 ${
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
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[580px] xl:w-[620px] z-50 pointer-events-auto"
          >
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl shadow-2xl shadow-black/15 border border-[#E2E8E4] overflow-hidden"
            >
              {/* Top micro-header */}
              <div className="px-5 py-2.5 bg-[#FAF9F5] border-b border-[#E2E8E4] flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#004B57]">
                  Corporate Wellness Dimensions
                </span>
                <span className="text-[11px] font-bold text-[#FF7A1A] bg-[#FEF3E8] px-2 py-0.5 rounded-full">
                  10 Programs
                </span>
              </div>

              {/* Horizontal 2-Column Grid */}
              <div className="grid grid-cols-2 gap-1.5 p-3.5 bg-white">
                {corporateServices.map((service) => {
                  const Icon = service.icon;
                  const isCurrentService = location.pathname === `/services/${service.slug}`;

                  return (
                    <motion.div key={service.slug} variants={itemVariants}>
                      <Link
                        to={`/services/${service.slug}`}
                        onClick={closeDropdown}
                        className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 border ${
                          isCurrentService
                            ? 'bg-[#FEF3E8] border-[#FF7A1A]/40 shadow-xs'
                            : 'hover:bg-[#FAF9F5] border-transparent hover:border-[#E2E8E4]/70'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                            isCurrentService
                              ? 'bg-[#FF7A1A] text-white shadow-sm shadow-[#FF7A1A]/25'
                              : 'bg-[#FEF3E8] group-hover:bg-[#FF7A1A] text-[#FF7A1A] group-hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4" strokeWidth={2.2} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <p
                              className={`text-[13px] font-bold transition-colors leading-snug truncate ${
                                isCurrentService ? 'text-[#FF7A1A]' : 'text-[#1A2E32] group-hover:text-[#FF7A1A]'
                              }`}
                            >
                              {service.title}
                            </p>
                            {isCurrentService && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A] shrink-0" />
                            )}
                          </div>
                          <p
                            className={`text-[11px] font-medium leading-tight truncate mt-0.5 ${
                              isCurrentService ? 'text-[#004B57]/80' : 'text-[#5F6B6E]'
                            }`}
                          >
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Footer Action */}
              <div className="px-5 py-3 bg-[#FAF9F5] border-t border-[#E2E8E4] flex items-center justify-between">
                <span className="text-[12px] text-[#5F6B6E] font-medium">
                  Looking for customized wellness strategies?
                </span>
                <Link
                  to="/services"
                  onClick={closeDropdown}
                  className={`text-[12.5px] font-extrabold flex items-center gap-1 transition-colors ${
                    location.pathname === '/services'
                      ? 'text-[#FF7A1A]'
                      : 'text-[#004B57] hover:text-[#FF7A1A]'
                  }`}
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
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
  const location = useLocation();

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
              {corporateServices.map((service) => {
                const isCurrentService = location.pathname === `/services/${service.slug}`;
                return (
                  <motion.div key={service.slug} variants={itemVariants}>
                    <Link
                      to={`/services/${service.slug}`}
                      onClick={handleNavigate}
                      className={`flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-colors ${
                        isCurrentService
                          ? 'text-[#FF7A1A] font-bold bg-[#FEF3E8]'
                          : 'text-[#1a2e32]/85 hover:text-[#FF7A1A]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <HiChevronRight className="w-4 h-4 shrink-0" />
                        {service.title}
                      </span>
                      {isCurrentService && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div variants={itemVariants}>
                <Link
                  to="/services"
                  onClick={handleNavigate}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    location.pathname === '/services'
                      ? 'text-[#FF7A1A] bg-[#FEF3E8]'
                      : 'text-[#FF7A1A] hover:text-[#E86800]'
                  }`}
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
