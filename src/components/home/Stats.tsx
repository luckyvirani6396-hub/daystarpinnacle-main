import { motion, MotionConfig } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Building2,
  ChevronRight,
  Heart,
  Leaf,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import {
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from './sectionStyles';

interface Benefit {
  label: string;
  desc: string;
  icon: LucideIcon;
  accent: string;
}

const ORANGE = '#FF7A1A';
const TEAL = '#004B57';
const GREEN = '#72A93B';

const employeeBenefits: Benefit[] = [
  { label: 'Higher employee engagement', desc: 'Employees feel more connected, valued and motivated.', icon: Users, accent: ORANGE },
  { label: 'Reduced absenteeism', desc: 'Fewer unscheduled absences and better attendance.', icon: Shield, accent: TEAL },
  { label: 'Improved employee retention', desc: 'Employees are more likely to stay for the long term.', icon: Award, accent: GREEN },
  { label: 'Lower stress and burnout', desc: 'Employees feel calmer, more balanced and less burned out.', icon: Target, accent: ORANGE },
];

const employerBenefits: Benefit[] = [
  { label: 'Improved workplace morale', desc: 'A positive and supportive environment for everyone.', icon: Heart, accent: ORANGE },
  { label: 'Better collaboration', desc: 'Teams work together more effectively and share ideas freely.', icon: Sparkles, accent: TEAL },
  { label: 'Increased productivity', desc: 'Employees perform better and achieve more.', icon: TrendingUp, accent: ORANGE },
  { label: 'Healthier workplace culture', desc: 'A more inclusive, respectful and supportive workplace.', icon: Leaf, accent: GREEN },
];

// Small hand-drawn accent strokes beside the group titles
function SparkStrokes({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 30 30" fill="none" aria-hidden="true" className={className}>
      <path d="M4 26 L10 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 14 L20 4" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 22 L27 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function GroupHeader({
  icon: Icon,
  iconColor,
  first,
  accent,
  accentColor,
  subtitle,
}: {
  icon: LucideIcon;
  iconColor: string;
  first: string;
  accent: string;
  accentColor: string;
  subtitle: string;
}) {
  return (
    <div className="relative flex items-start gap-3.5 mb-5 md:mb-6">
      <Icon className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 mt-1" style={{ color: iconColor }} strokeWidth={1.8} />
      <div>
        <h3 className="text-2xl sm:text-[1.7rem] font-serif font-medium text-[#004B57] leading-[1.1] tracking-tight">
          {first} <span className={sectionHeadingAccent} style={{ color: accentColor }}>{accent}</span>
        </h3>
        <p className="text-[13px] sm:text-sm text-[#004B57]/70 font-medium mt-1.5">{subtitle}</p>
      </div>
      <SparkStrokes color={accentColor} className="w-6 h-6 -mt-1 shrink-0 opacity-80" />
    </div>
  );
}

function BenefitCard({ item, index }: { item: Benefit; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group flex items-center gap-4 bg-white rounded-2xl border border-[#FAF9F5] shadow-[0_2px_16px_rgba(0,75,87,0.06)] hover:shadow-[0_10px_30px_rgba(0,75,87,0.1)] hover:border-[#FF7A1A]/20 p-4 sm:p-5 transition-[box-shadow,border-color] duration-300 cursor-default"
    >
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
      >
        <item.icon className="w-5.5 h-5.5 sm:w-6 sm:h-6" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm sm:text-[15px] font-bold text-[#004B57] leading-snug">{item.label}</p>
        <p className="text-xs sm:text-[13px] text-[#004B57]/70 leading-relaxed font-medium mt-0.5">{item.desc}</p>
      </div>
      <span
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        style={{ backgroundColor: `${item.accent}12`, color: item.accent }}
      >
        <ChevronRight className="w-4 h-4" strokeWidth={2.4} />
      </span>
    </motion.div>
  );
}

const bubbles = [
  { icon: Users, color: ORANGE, pos: 'left-[6%] top-[4%]', delay: 0 },
  { icon: TrendingUp, color: GREEN, pos: 'right-[6%] top-[4%]', delay: 0.6 },
  { icon: Heart, color: ORANGE, pos: 'left-[-2%] top-[58%]', delay: 1.2 },
  { icon: Leaf, color: GREEN, pos: 'right-[-2%] top-[58%]', delay: 1.8 },
];

function ConnectedCircle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[340px] sm:max-w-[460px] aspect-square mx-auto"
    >
      {/* Slowly rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[3%] rounded-full border-2 border-dashed border-[#FF7A1A]/25"
      />
      <div className="absolute inset-[9%] rounded-full bg-gradient-to-br from-[#FF7A1A]/10 via-[#FAF9F5] to-[#72A93B]/12" />

      {/* Photo */}
      <div className="absolute inset-[12%] rounded-full overflow-hidden ring-[6px] ring-white shadow-[0_16px_40px_rgba(0,75,87,0.15)]">
        <img
          src="/images/blog-participation.png"
          alt="Employees engaged in a workplace wellness session"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-[42%_45%] select-none"
        />
      </div>

      {/* Floating icon bubbles */}
      {bubbles.map(({ icon: Icon, color, pos, delay }) => (
        <motion.div
          key={pos}
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
          className={`absolute ${pos} w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-[0_8px_24px_rgba(0,75,87,0.12)] flex items-center justify-center`}
          style={{ color }}
        >
          <Icon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2} />
        </motion.div>
      ))}

      {/* Curved arrows pointing to the caption pill */}
      <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none">
        <path d="M30 306 C 44 350, 80 374, 122 380" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" />
        <path d="M109 370 L123 380 L108 388" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M370 306 C 356 350, 320 374, 278 380" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
        <path d="M291 370 L277 380 L292 388" stroke={GREEN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Caption pill */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2%] flex items-center gap-2.5 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,75,87,0.12)] px-4 sm:px-5 py-2.5 sm:py-3 whitespace-nowrap">
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7A1A] shrink-0" strokeWidth={2} />
        <p className="text-[12px] sm:text-sm font-bold text-[#004B57] leading-tight">
          Connected People
          <span className="block">Build Brighter Futures</span>
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-8%] top-[10%] w-[45%] h-[45%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
          <div className="absolute left-[-8%] bottom-[5%] w-[40%] h-[40%] rounded-full bg-[#72A93B]/6 blur-[100px]" />
          <div className="absolute inset-0" style={sectionDotGrid(0.18)} />
        </div>

        <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
          {/* Top Header: Standardized clean top heading and intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className={sectionIntroBlock}
          >
            <span className={sectionIntroBadge}>Why Invest in Wellness</span>

            <h2 className={`${sectionIntroHeading} text-center`}>
              Employee Wellbeing Is a{' '}
              <span className={sectionHeadingAccent}>Business Strategy</span>
            </h2>

            <p className={`${sectionBody} text-center max-w-2xl`}>
              Employee wellbeing is no longer just a perk — organizations that invest in wellness experience
              measurable gains across morale, retention, and business performance.
            </p>
          </motion.div>

          {/* Employee benefits | connected-people circle | employer benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-start">
            <div className="lg:col-span-4">
              <GroupHeader
                icon={Users}
                iconColor={ORANGE}
                first="Employee"
                accent="Engagement"
                accentColor={ORANGE}
                subtitle="Happier people. Stronger teams."
              />
              <div className="space-y-4">
                {employeeBenefits.map((item, i) => (
                  <BenefitCard key={item.label} item={item} index={i} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 order-first lg:order-none pb-4 lg:pb-0 lg:self-center">
              <ConnectedCircle />
            </div>

            <div className="lg:col-span-4">
              <GroupHeader
                icon={Building2}
                iconColor={TEAL}
                first="Employer"
                accent="Benefits"
                accentColor={GREEN}
                subtitle="A productive, positive and future-ready organization."
              />
              <div className="space-y-4">
                {employerBenefits.map((item, i) => (
                  <BenefitCard key={item.label} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
