import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Compass,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Globe2,
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

const steps = [
  {
    step: '01',
    title: 'Workplace Health Audit',
    subtitle: 'Diagnostic Assessment',
    description:
      'We evaluate your workforce demographics, hybrid work patterns, and key stress factors through confidential baseline surveys and HR discovery.',
    icon: ClipboardCheck,
    color: '#004B57',
    badge: 'Discovery Phase',
    points: [
      'Confidential employee wellbeing survey',
      'HR alignment & organizational goal setting',
      'Identification of team burnout triggers',
    ],
  },
  {
    step: '02',
    title: 'Custom Program Architecture',
    subtitle: 'Tailored Execution Blueprint',
    description:
      'Our team crafts a structured annual or quarterly wellness calendar blending interactive workshops, fitness drives, and clinical health days.',
    icon: Compass,
    color: '#FF7A1A',
    badge: 'Program Design',
    points: [
      'Tailored hybrid, virtual, or onsite formats',
      'Curated calendar synced with work cycles',
      'Turnkey internal communication kits',
    ],
  },
  {
    step: '03',
    title: 'Expert-Led Delivery',
    subtitle: 'Certified Faculty Masterclasses',
    description:
      'Sessions are led by registered dietitians, licensed psychologists, and ergonomic specialists — designed to be practical, interactive, and jargon-free.',
    icon: GraduationCap,
    color: '#72A93B',
    badge: 'Live Execution',
    points: [
      'Actionable micro-habits for desk workers',
      'Live Q&A and interactive demonstrations',
      'Downloadable toolkits & health guides',
    ],
  },
  {
    step: '04',
    title: 'Outcomes & ROI Analytics',
    subtitle: 'Continuous Measurement',
    description:
      'Detailed participation metrics, employee satisfaction feedback, and measurable wellbeing trends delivered directly to HR leadership.',
    icon: TrendingUp,
    color: '#0066CC',
    badge: 'Review & Optimize',
    points: [
      'Session attendance & engagement metrics',
      'Employee Net Promoter Score (eNPS)',
      'Quarterly executive summary & roadmap',
    ],
  },
];

const standards = [
  {
    icon: ShieldCheck,
    title: '100% Anonymized & Confidential',
    description: 'Individual employee health responses and consultation queries remain strictly confidential.',
  },
  {
    icon: Headphones,
    title: 'Zero HR Administrative Burden',
    description: 'We handle speaker logistics, invitations, interactive materials, and calendar coordination end-to-end.',
  },
  {
    icon: Globe2,
    title: 'Pan-India & Hybrid Flexibility',
    description: 'Seamlessly delivered across enterprise headquarters, regional branch offices, and remote distributed teams.',
  },
];

export default function AboutMethodology() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
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
          <span className={sectionIntroBadge}>Our Framework</span>
          <h2 className={sectionIntroHeading}>
            A Disciplined 4-Stage{' '}
            <span className={sectionHeadingAccent}>Execution Methodology</span>
          </h2>
          <p className={sectionBody}>
            From workplace diagnostic audits to certified masterclasses and executive reporting, our proven
            delivery model guarantees measurable health outcomes with zero friction for your HR team.
          </p>
        </motion.div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${cardOnCream} p-6 sm:p-7 flex flex-col justify-between border border-[#E2E8E4]/80 shadow-[0_4px_20px_rgba(12,29,55,0.03)] hover:shadow-[0_8px_30px_rgba(12,29,55,0.06)] hover:-translate-y-1 transition-all duration-300 relative`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      Step {item.step}
                    </span>
                    <span className="text-xs font-semibold text-[#1A2E32]/60">
                      {item.badge}
                    </span>
                  </div>

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-lg font-bold text-[#1A2E32] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#004B57] uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#1A2E32]/75 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8E4]/70 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#1A2E32]/80">
                      <CheckCircle2
                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                        style={{ color: item.color }}
                      />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Delivery Standards Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-[#FAF9F5] via-[#F4F2EC] to-[#EAE7DC] border border-[#E2E8E4] p-6 sm:p-8"
        >
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h4 className="text-base sm:text-lg font-bold text-[#1A2E32]">
              Enterprise Corporate Delivery Standards
            </h4>
            <p className="text-xs sm:text-sm text-[#1A2E32]/70 mt-1">
              Engineered specifically for fast-paced corporate environments, ensuring seamless engagement and total compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {standards.map((std, idx) => {
              const StdIcon = std.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-[#E2E8E4]/80 flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#004B57]/10 text-[#004B57] flex items-center justify-center shrink-0">
                    <StdIcon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#1A2E32] mb-1">
                      {std.title}
                    </h5>
                    <p className="text-xs text-[#1A2E32]/70 leading-relaxed">
                      {std.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

