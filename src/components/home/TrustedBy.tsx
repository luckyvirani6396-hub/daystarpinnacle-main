import { motion } from 'framer-motion';
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

const logoBase = '/Partner Images/';

function logoPath(filename: string) {
  return encodeURI(`${logoBase}${filename}`);
}

const companyLogos = [
  { name: 'Panasonic', path: logoPath('Anchor_by_Panasonic_logo.svg 1.png') },
  { name: 'Bosch', path: logoPath('img_bosch_logo_svg_1.png') },
  { name: 'Check Point', path: logoPath('img_check_point_logo_2022_svg.png') },
  { name: 'Cisco', path: logoPath('img_cisco_partner_logo.png') },
  { name: 'Commscope', path: logoPath('Commscope 1.png') },
  { name: 'CP Plus', path: logoPath('CP Plus 1.png') },
  { name: 'D-Link', path: logoPath('D-Link-Logo 1.png') },
  { name: 'Delta Electronics', path: logoPath('img_delta_electronics_logo.png') },
  { name: 'Hitachi', path: logoPath('img_hitachi_1.png') },
  { name: 'Honeywell', path: logoPath('Honeywell 1.png') },
  { name: 'Ingram', path: logoPath('Ingram 1.png') },
  { name: 'Microsoft', path: logoPath('img_microsoft_logo.png') },
  { name: 'Motadata', path: logoPath('motadata-logo 1.png') },
  { name: 'Netrack', path: logoPath('netrack-logo-trans 1.png') },
  { name: 'Nokia', path: logoPath('img_nokia_logo_1.png') },
  { name: 'RAH Infotech', path: logoPath('RAH-Infotech-1536x257-1 1.png') },
  { name: 'Rittal', path: logoPath('rittal-logo-6ACACE401C-seeklogo.com 1.png') },
  { name: 'Vehant', path: logoPath('Vehant Logo 1200x1200 - Vehant Technologies 1.png') },
  { name: 'VMware', path: logoPath('img_vmware_logo_transparent.png') },
];

const stats = [
  { value: '50+', label: 'Enterprise Clients' },
  { value: '12+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

function LogoCard({ logo }: { logo: (typeof companyLogos)[0] }) {
  return (
    <div
      className="inline-flex items-center justify-center shrink-0 bg-white rounded-xl border border-[#E2E8E4] shadow-[0_2px_12px_rgba(0,75,87,0.05)] px-4"
      style={{ width: '200px', height: '88px' }}
    >
      <img
        src={logo.path}
        alt={`${logo.name} logo`}
        className="max-h-[56px] max-w-[168px] object-contain"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

function MarqueeRow({
  logos,
  direction = 'left',
  speed = 35,
  prefix,
}: {
  logos: typeof companyLogos;
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
  const mid = Math.ceil(companyLogos.length / 2);
  const row1 = companyLogos.slice(0, mid);
  const row2 = [...companyLogos.slice(mid)].reverse();

  return (
    <section id="trusted" className="relative w-full min-h-[100dvh] flex flex-col justify-center bg-white select-none overflow-hidden scroll-mt-28">
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
        <div className="absolute right-[-8%] top-[12%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/5 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[12%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center gap-4 md:gap-9 py-6 md:py-5">
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full space-y-2 md:space-y-2.5 shrink-0"
        >
          <MarqueeRow logos={row1} direction="left" speed={38} prefix="row1" />
          <MarqueeRow logos={row2} direction="right" speed={42} prefix="row2" />
        </motion.div>

        <div className="w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 shrink-0">
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
                  Corporate Wellness Partners
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