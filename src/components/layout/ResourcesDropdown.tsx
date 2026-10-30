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
  { label: 'Wellness Blog', path: '/health-hub' },
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
    ? `inline-flex items-center gap-0.5 px-1.5 xl:px-2.5 2xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] 2xl:text-[14.5px] font-semibold whitespace-nowrap transition-all duration-200 ${
        isActive ? 'text-[#FF7A1A]' : 'text-[#004B57] hover:text-[#FF7A1A]'
      }`
    : `inline-flex items-center gap-1 px-3.5 xl:px-4.5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
        isActive
          ? isLight
            ? 'text-[#72A93B] bg-white/10'
            : 'text-secondary bg-secondary/10'
          : isLight
          ? 'text-white/85 hover:text-[#72A93B] hover:bg-white/5'
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
              {resourcesItems.map((item, index) => {
                const isCurrentItem = location.pathname === item.path || (item.path === '/health-hub' && location.pathname.startsWith('/health-hub'));
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={closeDropdown}
                    className={`flex items-center justify-between px-5 py-3 text-sm transition-colors ${
                      isCurrentItem
                        ? 'bg-[#FAF9F5] text-[#FF7A1A] font-bold'
                        : 'text-dark hover:bg-[#FF7A1A]/10 hover:text-[#FF7A1A]'
                    } ${
                      index !== resourcesItems.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <span>{item.label}</span>
                    {isCurrentItem && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]" />
                    )}
                  </Link>
                );
              })}
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
          isResourcesActive
            ? 'text-[#FF7A1A] bg-[#FF7A1A]/5'
            : 'text-[#004B57] hover:text-[#FF7A1A] hover:bg-gray-50'
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
            {resourcesItems.map((item) => {
              const isCurrentItem = location.pathname === item.path || (item.path === '/health-hub' && location.pathname.startsWith('/health-hub'));
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={handleNavigate}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-colors ${
                    isCurrentItem
                      ? 'text-[#FF7A1A] font-bold bg-[#FAF9F5]'
                      : 'text-[#004B57]/85 hover:text-[#FF7A1A]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <HiChevronRight className="w-4 h-4 shrink-0" />
                    {item.label}
                  </span>
                  {isCurrentItem && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]" />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
