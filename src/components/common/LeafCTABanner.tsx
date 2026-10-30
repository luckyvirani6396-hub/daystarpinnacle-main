import { motion, MotionConfig } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Full-width light-green consultation banner with outlined leaf sprays on both edges.

const LEAF = 'M0 0 C 17 -18, 19 -52, 0 -76 C -19 -52, -17 -18, 0 0 Z';

const leaves = [
  { x: 52, y: 190, r: -62, s: 1.15 },
  { x: 70, y: 150, r: -28, s: 1.05 },
  { x: 92, y: 112, r: 18, s: 1 },
  { x: 104, y: 74, r: -14, s: 0.85 },
  { x: 122, y: 44, r: 30, s: 0.7 },
];

function LeafSpray({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 220" fill="none" aria-hidden="true" className={className}>
      <path
        d="M30 222 C 50 170, 76 120, 132 22"
        stroke="#72A93B"
        strokeOpacity="0.5"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
          <path d={LEAF} fill="#72A93B" fillOpacity="0.06" stroke="#72A93B" strokeOpacity="0.6" strokeWidth="1.4" />
          <g stroke="#72A93B" strokeOpacity="0.45" strokeWidth="1" strokeLinecap="round">
            <path d="M0 -3 L0 -70" />
            <path d="M0 -22 L9 -33 M0 -22 L-9 -33 M0 -42 L8 -52 M0 -42 L-8 -52" />
          </g>
        </g>
      ))}
    </svg>
  );
}

interface LeafCTABannerProps {
  title?: [string, string];
  description?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export default function LeafCTABanner({
  title = ['Let’s Build a Healthier,', 'Happier Workplace Together'],
  description = 'Partner with Daystar Pinnacle for customized wellness programs that create real impact.',
  ctaLabel = 'Book a Consultation',
  ctaTo = '/contact',
}: LeafCTABannerProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#EAF3E2] via-[#F3F8EE] to-[#EAF3E2] border-y border-[#72A93B]/10">
        {/* Leaf sprays, gently swaying */}
        <motion.div
          animate={{ rotate: [0, 3, 0, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'bottom left' }}
          className="absolute left-0 bottom-0 h-[90%] max-h-[170px] pointer-events-none"
        >
          <LeafSpray className="h-full w-auto opacity-70 sm:opacity-100" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -3, 0, 2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'bottom right' }}
          className="absolute right-0 bottom-0 h-[90%] max-h-[170px] pointer-events-none"
        >
          <LeafSpray className="h-full w-auto -scale-x-100 opacity-70 sm:opacity-100" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-[95%] max-w-6xl mx-auto px-6 sm:px-16 md:px-24 lg:px-28 py-7 md:py-8 flex flex-col md:flex-row items-center justify-between gap-7 md:gap-10 text-center md:text-left"
        >
          <div>
            <h2 className="text-[26px] sm:text-3xl lg:text-[36px] font-serif font-medium text-[#004B57] leading-[1.15] tracking-tight">
              <span className="block">{title[0]}</span>
              <span className="block">{title[1]}</span>
            </h2>
            <p className="text-sm md:text-[15px] text-[#004B57]/70 leading-relaxed font-medium mt-2 max-w-md mx-auto md:mx-0">
              {description}
            </p>
          </div>

          <Link
            to={ctaTo}
            className="btn-shine group shrink-0 inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-xl bg-[#FF7A1A] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#FF7A1A]/30 hover:shadow-xl hover:shadow-[#FF7A1A]/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.2} />
          </Link>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
