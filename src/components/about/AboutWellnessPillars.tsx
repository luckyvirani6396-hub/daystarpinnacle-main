import { motion } from 'framer-motion';
import {
  Activity,
  Brain,
  Apple,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import {
  cardOnCream,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from '../home/sectionStyles';

const pillars = [
  {
    title: 'Physical Vitality & Ergonomics',
    tag: 'Physical Health',
    description:
      'Counteracting sedentary desk habits through biomechanical posture corrections, chair yoga, and movement breaks that eliminate musculoskeletal fatigue.',
    icon: Activity,
    color: '#FF7A1A',
    bg: '#FAF9F5',
    highlights: [
      'Desk posture & ergonomic alignment',
      'Chair mobility & micro-stretch breaks',
      'Repetitive Strain Injury (RSI) relief',
    ],
  },
  {
    title: 'Mental Resilience & Mindfulness',
    tag: 'Mental Wellbeing',
    description:
      'Equipping employees with practical psychological tools to decompress high-stress cycles, avoid chronic burnout, and restore mental focus.',
    icon: Brain,
    color: '#004B57',
    bg: '#FAF9F5',
    highlights: [
      'Stress mitigation & breathwork toolkits',
      'Burnout detection & boundary management',
      'Mindfulness for high-demand workdays',
    ],
  },
  {
    title: 'Clinical Nutrition & Metabolic Energy',
    tag: 'Nutritional Science',
    description:
      'Translating nutritional science into sustainable workday eating habits that stabilize blood glucose, eliminate afternoon crashes, and boost clarity.',
    icon: Apple,
    color: '#72A93B',
    bg: '#FAF9F5',
    highlights: [
      'Sustained afternoon focus meal plans',
      'Healthy office snacking & hydration habits',
      'Metabolic wellness & gut health guidance',
    ],
  },
  {
    title: 'Preventative Care & Sleep Hygiene',
    tag: 'Preventative Health',
    description:
      'Focusing on root-cause health preservation through circadian sleep optimization, lifestyle disease awareness, and proactive self-care.',
    icon: ShieldCheck,
    color: '#004B57',
    bg: '#FAF9F5',
    highlights: [
      'Circadian rhythm & restorative sleep habits',
      'Lifestyle risk factors & preventive habits',
      'Seasonal immunity & vitality routines',
    ],
  },
];

export default function AboutWellnessPillars() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-12 md:py-16 border-t border-[#FAF9F5]/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-6%] top-[15%] w-[40%] h-[40%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
        <div className="absolute left-[-6%] bottom-[15%] w-[38%] h-[38%] rounded-full bg-[#004B57]/4 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.08)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>
            <Sparkles className="w-3.5 h-3.5 inline mr-1" />
            Holistic Health Framework
          </span>
          <h2 className={sectionIntroHeading}>
            Our Four Core{' '}
            <span className={sectionHeadingAccent}>Wellness Pillars</span>
          </h2>
          <p className={sectionBody}>
            True workplace health extends beyond sporadic checkups. Our interconnected framework addresses
            the whole individual — harmonizing body, mind, nutrition, and daily recovery.
          </p>
        </motion.div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${cardOnCream} p-6 sm:p-7 flex flex-col justify-between border border-[#FAF9F5]/80 shadow-[0_4px_20px_rgba(12,29,55,0.03)] hover:shadow-[0_10px_30px_rgba(12,29,55,0.07)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: pillar.color }}
                    >
                      {pillar.tag}
                    </span>
                    <span className="text-xs font-semibold text-[#004B57]/40">
                      0{index + 1}
                    </span>
                  </div>

                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ backgroundColor: pillar.bg, color: pillar.color }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-lg font-bold text-[#004B57] mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#004B57]/75 leading-relaxed mb-6 font-medium">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FAF9F5]/70 space-y-2">
                  {pillar.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#004B57]/85">
                      <CheckCircle2
                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                        style={{ color: pillar.color }}
                      />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

