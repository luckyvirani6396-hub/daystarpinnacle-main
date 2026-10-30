import { motion } from 'framer-motion';
import {
  Heart,
  ShieldCheck,
  Laptop,
  Smile,
  Layers,
  Clock,
  Sparkles,
} from 'lucide-react';
import {
  cardOnWhite,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from '../home/sectionStyles';

const supportPillars = [
  {
    title: 'Zero Guilt & Sustainable Habits',
    description:
      'We reject rigid diets and extreme fitness mandates. Instead, we introduce simple, actionable 2-to-5 minute daily habits that employees actually sustain.',
    icon: Heart,
    color: '#FF7A1A',
    bg: '#FAF9F5',
  },
  {
    title: '100% Confidential & Safe',
    description:
      'Employees can openly discuss personal stress, burnout, and health queries. Individual feedback and biometric queries are never disclosed to management.',
    icon: ShieldCheck,
    color: '#004B57',
    bg: '#FAF9F5',
  },
  {
    title: 'Inclusive for Hybrid & Desk Teams',
    description:
      'Whether your teams work from an office desk, home setup, or on-field roles, our sessions adapt seamlessly with live virtual and onsite formats.',
    icon: Laptop,
    color: '#72A93B',
    bg: '#FAF9F5',
  },
  {
    title: 'Empathetic, Jargon-Free Delivery',
    description:
      'Our clinical faculty speaks the language of everyday workplace life. We prioritize warm empathy and practical advice over dry medical lectures.',
    icon: Smile,
    color: '#004B57',
    bg: '#FAF9F5',
  },
  {
    title: 'Tailored for Diverse Demographics',
    description:
      'From young associates to senior leadership, our modules respect varied fitness levels, dietary backgrounds, and individual work pressures.',
    icon: Layers,
    color: '#FF7A1A',
    bg: '#FAF9F5',
  },
  {
    title: 'Continuous Follow-Through',
    description:
      'Workshops include downloadable micro-habit guides, desk stretch cards, and weekly nudges so wellness awareness translates into lasting culture.',
    icon: Clock,
    color: '#004B57',
    bg: '#FAF9F5',
  },
];

export default function AboutEmployeeFirst() {
  return (
    <section className="relative w-full bg-[#F3F8EE] overflow-hidden py-12 md:py-16 border-t border-[#FAF9F5]/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-6%] top-[10%] w-[38%] h-[38%] rounded-full bg-[#004B57]/4 blur-[100px]" />
        <div className="absolute right-[-6%] bottom-[10%] w-[38%] h-[38%] rounded-full bg-[#FF7A1A]/4 blur-[90px]" />
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
            Our Employee-First Approach
          </span>
          <h2 className={sectionIntroHeading}>
            How We Support Your{' '}
            <span className={sectionHeadingAccent}>Workforce</span>
          </h2>
          <p className={sectionBody}>
            Corporate wellness is only effective when employees feel respected, supported, and heard.
            Here is how Daystar Pinnacle puts people at the center of every initiative.
          </p>
        </motion.div>

        {/* 6 Support Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`${cardOnWhite} p-6 sm:p-7 flex flex-col justify-between border border-[#FAF9F5]/80 shadow-[0_4px_20px_rgba(12,29,55,0.03)] hover:shadow-[0_8px_30px_rgba(12,29,55,0.07)] hover:border-[#FF7A1A]/30 transition-all duration-300`}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ backgroundColor: item.bg, color: item.color }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#004B57] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#004B57]/75 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

