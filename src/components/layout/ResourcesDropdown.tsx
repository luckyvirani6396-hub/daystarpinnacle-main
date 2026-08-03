import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';

interface ResourcesDropdownProps {
  isActive: boolean;
  isLight?: boolean;
  isCapsule?: boolean;
}

const resourcesItems = [
  { label: 'Blog', path: '/health-hub' },
  { label: 'FAQs', path: '/faq' },
];

export default function ResourcesDropdown({ isActive, isLight = false, isCapsule = false }: ResourcesDropdownProps) {
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
            ? 'text-[#D2F154] bg-white/10'
            : 'text-secondary bg-secondary/10'
          : isLight
          ? 'text-white/85 hover:text-[#D2F154] hover:bg-white/5'
          : 'text-dark/70 hover:text-secondary hover:bg-secondary/5'
      }`;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`${linkClass} cursor-pointer`}>
        Resources
        <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scaleY: 0.95, originY: 0 }}
            animate={{ opacity: 1, y: 0, scaleY: 1, originY: 0 }}
            exit={{ opacity: 0, y: -16, scaleY: 0.95, originY: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[200px] z-50 pointer-events-auto"
          >
            <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-border overflow-hidden">
              {resourcesItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={closeDropdown}
                  className={`block px-5 py-3 text-sm text-dark hover:bg-[#FF7A1A]/10 hover:text-[#FF7A1A] transition-colors ${
                    index !== resourcesItems.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileResourcesListProps {
  isResourcesActive: boolean;
  onNavigate: () => void;
}

export function MobileResourcesList({ isResourcesActive, onNavigate }: MobileResourcesListProps) {
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
          isResourcesActive
            ? 'text-[#FF7A1A] bg-[#FF7A1A]/5'
            : 'text-[#1a2e32] hover:text-[#FF7A1A] hover:bg-gray-50'
        }`}
      >
        Resources
        <HiChevronDown className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 mt-1"
          >
            {resourcesItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={handleNavigate}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#1a2e32]/85 hover:text-[#FF7A1A] transition-colors"
              >
                <HiChevronRight className="w-4 h-4 shrink-0" />
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
