import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Factory,
  GraduationCap,
  Headphones,
  HeartPulse,
  Landmark,
  Laptop,
  Rocket,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  Shield,
  Train,
  Globe,
  Zap,
  Heart,
  Users,
  BookOpen,
  Leaf,
  Baby,
  HandHelping,
} from 'lucide-react';
import {
  cardOnCream,
  iconAccentCycle,
  cardTitle,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from './sectionStyles';

const privateIndustries = [
  { name: 'Information Technology', icon: Laptop },
  { name: 'Finance & Banking', icon: Landmark },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Hospitality', icon: UtensilsCrossed },
  { name: 'Startups', icon: Rocket },
  { name: 'BPO & Customer Support', icon: Headphones },
  { name: 'Professional Services', icon: Briefcase },
  { name: 'Logistics', icon: Truck },
];

const governmentIndustries = [
  { name: 'Government Administration', icon: Building2 },
  { name: 'Public Healthcare', icon: HeartPulse },
  { name: 'State & Central Education', icon: GraduationCap },
  { name: 'Defense & Security', icon: Shield },
  { name: 'Public Transport & Railways', icon: Train },
  { name: 'Space Research & Science', icon: Globe },
  { name: 'Public Infrastructure', icon: Landmark },
  { name: 'Energy & Utilities', icon: Zap },
];

const ngoIndustries = [
  { name: 'Child Welfare & Rights', icon: Baby },
  { name: 'Rural Health Outreach', icon: HeartPulse },
  { name: 'Education & Literacy', icon: BookOpen },
  { name: 'Women Empowerment', icon: Users },
  { name: 'Environmental NGOs', icon: Leaf },
  { name: 'Mental Health & Counseling', icon: Heart },
  { name: 'Community Development', icon: HandHelping },
  { name: 'Livelihood & Skilling', icon: Briefcase },
  { name: 'Disability & Inclusion', icon: Globe },
];

export default function IndustriesWeServe() {
  const [activeTab, setActiveTab] = useState<'private' | 'government' | 'ngo'>('private');

  const currentIndustries =
    activeTab === 'private' ? privateIndustries :
      activeTab === 'government' ? governmentIndustries :
        ngoIndustries;

  return (
    <section
      id="industries"
      className="relative w-full bg-white overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.16)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Industries We Serve</span>
          <h2 className={sectionIntroHeading}>
            Wellness for{' '}
            <span className={sectionHeadingAccent}>Every Industry</span>
          </h2>
          <p className={sectionBody}>
            Our wellness solutions support organizations across multiple industries — tailored
            to your workforce, culture, and business goals.
          </p>
        </motion.div>

        {/* Tabs switcher matching TrustedBy component design */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="inline-flex bg-[#FAF9F5] p-1.5 rounded-full border border-[#FAF9F5] relative shadow-[0_2px_12px_rgba(0,75,87,0.03)]">
            {(['private', 'government', 'ngo'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 z-10 ${activeTab === tab ? 'text-white' : 'text-[#004B57] hover:text-[#004B57]'
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="industriesActiveIndicator"
                    className="absolute inset-0 bg-[#004B57] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {tab === 'private' ? 'Private Sector' : tab === 'government' ? 'Government' : 'NGOs'}
              </button>
            ))}
          </div>
        </div>

        {/* Industries Grid with AnimatePresence */}
        <div className="min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {currentIndustries.map((industry, index) => {
                const colors = iconAccentCycle[index % iconAccentCycle.length];
                return (
                  <div
                    key={industry.name}
                    className={`group ${cardOnCream} p-4 md:p-5 text-center`}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: colors.accentBg, color: colors.accent }}
                    >
                      <industry.icon className="w-5 h-5" strokeWidth={2.2} />
                    </div>
                    <p className={`${cardTitle} leading-snug`}>
                      {industry.name}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
