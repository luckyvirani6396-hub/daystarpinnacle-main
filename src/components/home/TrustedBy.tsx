import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
  statLabel,
  statValue,
  quoteText,
} from './sectionStyles';

const privateLogoBase = '/clients/private/';
const govtLogoBase = '/clients/gov/';

interface LogoItem {
  name: string;
  path?: string;
  dept?: string;
  fullCard?: boolean;
}

const companyLogos: LogoItem[] = [
  { name: 'Airtel', path: `${privateLogoBase}airtel.webp` },
  { name: 'Amdocs', path: `${privateLogoBase}amdocs.webp` },
  { name: 'Amnex', path: `${privateLogoBase}amnex.webp` },
  { name: 'Anchor Panasonic', path: `${privateLogoBase}anchor-panasonic.webp` },
  { name: 'Arceus Infotech', path: `${privateLogoBase}arceus-infotech.webp` },
  { name: 'Bosch', path: `${privateLogoBase}bosch.webp` },
  { name: 'Britannia', path: `${privateLogoBase}britannia.webp` },
  { name: 'Camedu', path: `${privateLogoBase}camedu.webp` },
  { name: 'Capgemini', path: `${privateLogoBase}capgemini.webp` },
  { name: 'Check Point', path: `${privateLogoBase}checkpoint.webp` },
  { name: 'Cisco', path: `${privateLogoBase}cisco.webp` },
  { name: 'CommScope', path: `${privateLogoBase}commscope.webp` },
  { name: 'CP Plus', path: `${privateLogoBase}cpplus.webp` },
  { name: 'Delta Electronics', path: `${privateLogoBase}delta-electronics.webp` },
  { name: 'D-Link', path: `${privateLogoBase}dlink.webp` },
  { name: 'GIZ', path: `${privateLogoBase}giz.webp` },
  { name: 'Goodyear', path: `${privateLogoBase}goodyear.webp` },
  { name: 'Hitachi', path: `${privateLogoBase}hitachi.webp` },
  { name: 'Honeywell', path: `${privateLogoBase}honeywell.webp` },
  { name: 'Ingram Micro', path: `${privateLogoBase}ingram.webp` },
  { name: 'Maple Logistics', path: `${privateLogoBase}maple-logistics.webp` },
  { name: 'Mavenir', path: `${privateLogoBase}mavenir.webp` },
  { name: 'Microsoft', path: `${privateLogoBase}microsoft.webp` },
  { name: 'Motadata', path: `${privateLogoBase}motadata.webp` },
  { name: 'Netrack', path: `${privateLogoBase}netrack.webp` },
  { name: 'Nokia', path: `${privateLogoBase}nokia.webp` },
  { name: 'Panasonic', path: `${privateLogoBase}panasonic.webp` },
  { name: 'Prime Cabs', path: `${privateLogoBase}prime-cabs.webp` },
  { name: 'PV Lumens', path: `${privateLogoBase}pv-lumens.webp` },
  { name: 'RAH Infotech', path: `${privateLogoBase}rah-infotech.webp` },
  { name: 'Redington', path: `${privateLogoBase}redington.webp` },
  { name: 'Rittal', path: `${privateLogoBase}rittal.webp` },
  { name: 'Synergy', path: `${privateLogoBase}synergy.webp` },
  { name: 'Vehant Technologies', path: `${privateLogoBase}vehant.webp` },
  { name: 'VMware', path: `${privateLogoBase}vmware.webp` },
];

const governmentLogosBase: LogoItem[] = [
  { name: 'Bharat Electronics Limited', dept: 'BEL', path: `${govtLogoBase}bel.webp` },
  { name: 'TCIL', dept: 'TCIL', path: `${govtLogoBase}tcil.webp` },
  { name: 'National Rural Health Mission', dept: 'NRHM', path: `${govtLogoBase}nrhm.webp` },
];

const governmentLogos: LogoItem[] = [
  ...governmentLogosBase,
  ...governmentLogosBase,
  ...governmentLogosBase,
  ...governmentLogosBase,
];

const ngoLogos: LogoItem[] = [
  { name: 'SMILE Foundation', dept: 'SMILE' },
  { name: 'HelpAge India', dept: 'HelpAge' },
  { name: 'CRY – Child Rights', dept: 'CRY' },
  { name: 'Pratham Education', dept: 'PRATHAM' },
  { name: 'Akshaya Patra', dept: 'AkshayaPatra' },
  { name: 'Aga Khan Foundation', dept: 'AKF' },
  { name: 'SEWA – Self Employed', dept: 'SEWA' },
  { name: 'Nanhi Kali', dept: 'NanhiKali' },
  { name: 'GiveIndia Foundation', dept: 'GiveIndia' },
  { name: 'Teach For India', dept: 'TFI' },
  { name: 'Magic Bus India', dept: 'MagicBus' },
  { name: 'Goonj Foundation', dept: 'GOONJ' },
  { name: 'iCall – NIMHANS', dept: 'iCALL' },
  { name: 'Sammaan Foundation', dept: 'SAMMAAN' },
];

const stats = [
  { value: '50+', label: 'Enterprise Clients' },
  { value: '12+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

function LogoCard({ logo }: { logo: LogoItem }) {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 bg-white rounded-xl border border-[#E2E8E4] shadow-[0_2px_12px_rgba(0,75,87,0.05)] select-none hover:border-[#004B57]/20 transition-colors overflow-hidden ${logo.fullCard ? 'p-0' : 'px-4'
        }`}
      style={{ width: '200px', height: '88px' }}
    >
      {logo.path ? (
        <img
          src={logo.path}
          alt={`${logo.name} logo`}
          className={logo.fullCard
            ? 'w-full h-full object-cover rounded-xl'
            : 'max-h-[56px] max-w-[168px] object-contain'
          }
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]" />
            <span className="text-[14px] font-extrabold uppercase tracking-widest text-[#004B57]">
              {logo.dept}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#72A93B]" />
          </div>
          <span className="text-[10px] text-[#5F6B6E] font-semibold leading-tight max-w-[170px] truncate px-1">
            {logo.name}
          </span>
        </div>
      )}
    </div>
  );
}

function MarqueeRow({
  logos,
  direction = 'left',
  speed = 35,
  prefix,
}: {
  logos: LogoItem[];
  direction?: 'left' | 'right';
  speed?: number;
  prefix: string;
}) {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="marquee-row relative overflow-hidden py-2">
      <div className="flex overflow-hidden">
        {[1, 2].map((set) => (
          <div
            key={`${prefix}-set-${set}`}
            className={`flex items-center shrink-0 ${animationClass}`}
            style={{ gap: '32px', paddingRight: '32px', animationDuration: `${speed}s` }}
          >
            {logos.map((logo, idx) => (
              <LogoCard key={`${prefix}-s${set}-${idx}`} logo={logo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrustedBy() {
  const [activeTab, setActiveTab] = useState<'private' | 'government' | 'ngo'>('private');

  const currentLogos =
    activeTab === 'private' ? companyLogos :
      activeTab === 'government' ? governmentLogos :
        ngoLogos;
  const mid = Math.ceil(currentLogos.length / 2);
  const row1 = currentLogos.slice(0, mid);
  const row2 = [...currentLogos.slice(mid)].reverse();

  return (
    <section id="trusted" className="relative w-full bg-white select-none overflow-hidden py-16 md:py-24">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
          will-change: transform;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
          will-change: transform;
        }
        .marquee-row:hover .animate-marquee-left,
        .marquee-row:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[12%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-full flex flex-col gap-4 md:gap-9 py-6 md:py-5">
        <div className="w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-4 md:mb-10 max-w-3xl mx-auto"
          >
            <span className={sectionIntroBadge}>
              Trusted by Forward-Thinking Organizations
            </span>

            <h2 className={sectionIntroHeading}>
              Partnering with{' '}
              <span className={sectionHeadingAccent}>Industry Leaders</span>
            </h2>

            <p className={`${sectionBody} max-w-2xl mx-auto`}>
              We partner with businesses of all sizes to create meaningful wellness experiences
              that improve employee engagement, morale, and long-term organizational success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center min-w-[110px]">
                <p className={statValue}>{stat.value}</p>
                <p className={statLabel}>{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Elegant Tabs Switcher */}
          <div className="flex justify-center mt-8 mb-4 md:mt-10 md:mb-6">
            <div className="inline-flex bg-[#FAF9F5] p-1.5 rounded-full border border-[#E2E8E4] relative shadow-[0_2px_12px_rgba(0,75,87,0.03)]">
              {(['private', 'government', 'ngo'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 z-10 ${activeTab === tab ? 'text-white' : 'text-[#5F6B6E] hover:text-[#004B57]'
                    }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-[#004B57] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {tab === 'private' ? 'Private Sector' : tab === 'government' ? 'Government' : 'NGOs'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Container with AnimatePresence for smooth fade transitions when tab switches */}
        <div className="w-full space-y-2 md:space-y-2.5 shrink-0 overflow-hidden min-h-[192px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full space-y-2 md:space-y-2.5 shrink-0"
            >
              <MarqueeRow logos={row1} direction="left" speed={38} prefix={`${activeTab}-row1`} />
              <MarqueeRow logos={row2} direction="right" speed={42} prefix={`${activeTab}-row2`} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 shrink-0 mt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative max-w-2xl mx-auto text-center w-full"
          >
            <div className="bg-[#FAF9F5] rounded-xl border border-[#E2E8E4] shadow-[0_2px_16px_rgba(0,75,87,0.05)] px-4 py-3 md:px-5 md:py-4">
              <p className={quoteText}>
                &ldquo;Trusted by HR leaders and people teams who believe employee wellbeing is
                the foundation of lasting business success.&rdquo;
              </p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <div className="h-px w-6 bg-[#FF7A1A]/30" />
                <span className="text-[13px] uppercase tracking-[0.18em] text-[#FF7A1A] font-bold">
                  {activeTab === 'private' ? 'Corporate Wellness Partners' : activeTab === 'government' ? 'Government Wellness Partners' : 'NGO & Social Sector Partners'}
                </span>
                <div className="h-px w-6 bg-[#FF7A1A]/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}