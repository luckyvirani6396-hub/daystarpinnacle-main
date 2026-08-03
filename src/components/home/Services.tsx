import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Brain,
  DollarSign,
  Flame,
  Heart,
  HeartHandshake,
  Leaf,
  RefreshCw,
  Shield,
  Smile,
} from 'lucide-react';
import {
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from './sectionStyles';

const dimensions = [
  {
    id: 'physical',
    title: 'Physical Wellness',
    tagline: 'Encourage active lifestyles',
    icon: Activity,
    color: '#FF7A1A',
    bg: '#FEF3E8',
    image: '/images/solution-physical.png',
    bullets: ['Corporate Yoga Sessions', 'Fitness Classes', 'Stretch & Mobility Workshops', 'Office Ergonomics', 'Walking Challenges', 'Workplace Fitness Campaigns'],
  },
  {
    id: 'mental',
    title: 'Mental Wellbeing',
    tagline: 'Support emotional resilience',
    icon: Brain,
    color: '#0066CC',
    bg: '#E6F0FA',
    image: '/images/solution-mental.png',
    bullets: ['Meditation Sessions', 'Mindfulness Training', 'Stress Management Workshops', 'Burnout Prevention Programs', 'Mental Health Awareness Campaigns', 'Employee Assistance Resources'],
  },
  {
    id: 'nutrition',
    title: 'Nutrition & Healthy Living',
    tagline: 'Promote healthier habits',
    icon: Flame,
    color: '#72A93B',
    bg: '#F1F9EB',
    image: '/images/solution-nutrition.png',
    bullets: ['Nutrition Workshops', 'Healthy Cooking Demonstrations', 'Meal Planning Guidance', 'Hydration Awareness', 'Healthy Eating Challenges'],
  },
  {
    id: 'emotional',
    title: 'Emotional Wellness',
    tagline: 'Build employee resilience',
    icon: Heart,
    color: '#E74C3C',
    bg: '#FDEDEC',
    image: '/images/solution-social.png',
    bullets: ['Emotional Intelligence Training', 'Confidence Building', 'Positive Psychology Workshops', 'Stress Coping Techniques'],
  },
  {
    id: 'social',
    title: 'Social Wellbeing',
    tagline: 'Strengthen workplace relationships',
    icon: HeartHandshake,
    color: '#8E44AD',
    bg: '#F5EEF8',
    image: '/images/solution-social.png',
    bullets: ['Team Building Activities', 'Wellness Days', 'Volunteer Programs', 'Corporate Challenges', 'Employee Recognition Events'],
  },
  {
    id: 'balance',
    title: 'Work-Life Balance',
    tagline: 'Support healthier work habits',
    icon: Smile,
    color: '#2980B9',
    bg: '#EBF5FB',
    image: '/images/solution-holistic.png',
    bullets: ['Flexible Wellness Programs', 'Hybrid Wellness Sessions', 'Time Management Workshops', 'Wellness Break Initiatives'],
  },
  {
    id: 'financial',
    title: 'Financial Wellness',
    tagline: 'Build financial confidence',
    icon: DollarSign,
    color: '#27AE60',
    bg: '#EAFAF1',
    image: '/images/solution-preventive.png',
    bullets: ['Budget Planning Workshops', 'Retirement Planning Sessions', 'Financial Literacy Programs', 'Debt Management Education'],
  },
  {
    id: 'preventive',
    title: 'Preventive Healthcare',
    tagline: 'Encourage proactive health',
    icon: Shield,
    color: '#F39C12',
    bg: '#FEF9E7',
    image: '/images/solution-preventive.png',
    bullets: ['Health Screenings', 'Vaccination Drives', 'Wellness Checkups', 'Preventive Health Campaigns'],
  },
  {
    id: 'environmental',
    title: 'Environmental Wellness',
    tagline: 'Create healthier workplaces',
    icon: Leaf,
    color: '#16A085',
    bg: '#E8F8F5',
    image: '/images/solution-holistic.png',
    bullets: ['Ergonomic Assessments', 'Healthy Office Design', 'Green Workplace Initiatives', 'Sustainability Awareness'],
  },
  {
    id: 'holistic',
    title: 'Holistic Wellness',
    tagline: 'Support complete wellbeing',
    icon: RefreshCw,
    color: '#004B57',
    bg: '#E6F2F4',
    image: '/images/solution-holistic.png',
    bullets: ['Massage Therapy', 'Relaxation Sessions', 'Alternative Wellness Practices', 'Guided Recovery Programs'],
  },
];

export default function Services() {
  const [active, setActive] = useState(dimensions[0].id);
  const activeDim = dimensions.find((d) => d.id === active) ?? dimensions[0];

  return (
    <section id="services" className="relative w-full bg-[#FAF9F5] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[15%] w-[45%] h-[45%] rounded-full bg-[#FF7A1A]/5 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] w-[40%] h-[40%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Our Solution</span>
          <h2 className={sectionIntroHeading}>
            Comprehensive{' '}
            <span className={sectionHeadingAccent}>Corporate Wellness</span>{' '}
            Solutions
          </h2>
          <p className={sectionBody}>
            Our wellness solutions help HR teams and business leaders create healthier workplaces
            through flexible, engaging, and measurable initiatives — scalable from 25 to 5,000
            employees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Category tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {dimensions.map((dim) => (
              <button
                key={dim.id}
                type="button"
                onClick={() => setActive(dim.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left shrink-0 lg:shrink transition-all duration-300 ${active === dim.id
                    ? 'bg-white shadow-[0_4px_20px_rgba(0,75,87,0.08)] border border-[#004B57]/20'
                    : 'bg-white/70 border border-[#E2E8E4]/80 hover:bg-white'
                  }`}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: dim.bg, color: dim.color }}
                >
                  <dim.icon className="w-4 h-4" strokeWidth={2} />
                </div>
                <span className={`text-xs sm:text-sm font-bold whitespace-nowrap lg:whitespace-normal ${active === dim.id ? 'text-[#004B57]' : 'text-[#5F6B6E]'}`}>
                  {dim.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active detail panel */}
          <div className="lg:col-span-8 h-full bg-white rounded-3xl border border-[#e2e8e4]/80 shadow-[0_8px_40px_rgba(12,29,55,0.06)] p-6 md:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDim.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch h-full">
                  {/* Left Column: Details */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                          style={{ backgroundColor: activeDim.bg, color: activeDim.color }}
                        >
                          <activeDim.icon className="w-7 h-7" strokeWidth={1.8} />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#004B57] mb-1">
                            {activeDim.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#5F6B6E] font-medium">{activeDim.tagline}</p>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 gap-2.5 mb-8">
                        {activeDim.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1A2E32] font-medium bg-[#FAF9F5]/40 rounded-xl px-3.5 py-2.5 border border-[#E2E8E4]/50"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A] shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7A1A] hover:text-[#E86800] transition-colors group"
                      >
                        <span>Request a Custom Program</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Image illustration */}
                  <div className="md:col-span-5 relative min-h-[220px] md:min-h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100/50">
                    <img
                      src={activeDim.image}
                      alt={activeDim.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
