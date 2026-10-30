import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Check, Layers, MapPin, Monitor } from 'lucide-react';
import {
  btnPrimary,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from './sectionStyles';

const programs = [
  {
    id: 'virtual',
    label: 'Virtual',
    color: '#FAF9F5',
    activeText: '#FF7A1A',
    icon: Monitor,
    tagline: 'Engage remote and distributed teams from anywhere.',
    image: '/images/engagement-virtual.png',
    items: [
      'Live-streamed yoga & fitness classes',
      'Virtual meditation & mindfulness sessions',
      'Online nutrition workshops',
      'Digital wellness challenges',
      'Employee wellness webinars',
      'On-demand session library',
    ],
  },
  {
    id: 'in-office',
    label: 'In Office',
    color: '#FAF9F5',
    activeText: '#004B57',
    icon: Building2,
    tagline: 'Bring wellness directly into your workplace.',
    image: '/images/engagement-office.png',
    items: [
      'On-site yoga & fitness sessions',
      'Workplace health screenings',
      'Office ergonomics workshops',
      'In-person wellness fairs',
      'Lunch & learn sessions',
      'Desk stretch & mobility breaks',
    ],
  },
  {
    id: 'hybrid',
    label: 'Hybrid',
    color: '#FAF9F5',
    activeText: '#72A93B',
    icon: Layers,
    tagline: "Flexible delivery for today's hybrid workforce.",
    image: '/images/engagement-hybrid.png',
    items: [
      'Rotating virtual and onsite programs',
      'Location-flexible session scheduling',
      'Hub-and-spoke wellness events',
      'Combined digital + in-person challenges',
      'Tailored plans for hybrid teams',
      'Unified engagement tracking',
    ],
  },
  {
    id: 'team-outing',
    label: 'Team Outing',
    color: '#FAF9F5',
    activeText: '#FF7A1A',
    icon: MapPin,
    tagline: 'Strengthen culture through shared experiences.',
    image: '/images/engagement-outing.png',
    items: [
      'Off-site team wellness retreats',
      'Outdoor adventure & fitness activities',
      'Corporate wellness day outings',
      'Team building through shared experiences',
      'Group volunteer & community events',
      'Celebration & recognition events',
    ],
  },
];

export default function EngagementPrograms() {
  const [activeId, setActiveId] = useState(programs[0].id);
  const active = programs.find((p) => p.id === activeId) ?? programs[0];

  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[12%] w-[40%] h-[40%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Delivery Modes</span>
          <h2 className={sectionIntroHeading}>
            Engagement <span className={sectionHeadingAccent}>Programs</span>
          </h2>
          <p className={sectionBody}>
            Choose how your team experiences wellness — virtual, in-office, hybrid, or through
            memorable team outings.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          {programs.map((program) => {
            const isActive = activeId === program.id;
            return (
              <button
                key={program.id}
                type="button"
                onClick={() => setActiveId(program.id)}
                className={`relative rounded-2xl md:rounded-3xl px-4 py-5 md:py-7 text-center font-bold text-sm sm:text-base md:text-lg transition-all duration-300 cursor-pointer border-2 ${isActive
                  ? 'scale-[1.03] shadow-md'
                  : 'border-transparent opacity-85 hover:opacity-100 hover:scale-[1.02]'
                  }`}
                style={{
                  backgroundColor: isActive ? active.activeText : 'white',
                  color: isActive ? 'white' : '#004B57',
                  borderColor: isActive ? active.activeText : '#FAF9F5',
                  boxShadow: isActive ? `0 12px 28px ${active.activeText}25` : undefined,
                }}
                aria-pressed={isActive}
              >
                {program.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-3xl border border-[#FAF9F5] bg-white overflow-hidden shadow-[0_8px_40px_rgba(0,75,87,0.05)]"
          >
            <div
              className="h-1.5"
              style={{ backgroundColor: active.activeText }}
            />

            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-8">
                {/* Column 1: Info and list */}
                <div className="flex-1 min-w-[280px]">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: active.color, color: active.activeText }}
                    >
                      <active.icon className="w-6 h-6" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#004B57]">
                        {active.label} Programs
                      </h3>
                      <p className="text-sm text-[#004B57] font-medium mt-0.5">{active.tagline}</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {active.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: active.color }}
                        >
                          <Check className="w-3 h-3 text-[#004B57]" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-[#004B57]/85 font-medium leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Image banner */}
                <div className="hidden lg:block w-80 shrink-0 relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <img
                    src={active.image}
                    alt={active.label}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Column 3: Best for card */}
                <div
                  className="w-full lg:w-72 shrink-0 rounded-2xl p-6 border border-[#FAF9F5]/80 bg-[#FAF9F5] flex flex-col justify-between"
                  style={{ borderTopColor: active.activeText, borderTopWidth: 3 }}
                >
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#004B57] mb-2">
                      Best for
                    </p>
                    <p className="text-sm font-bold text-[#004B57] leading-relaxed mb-5">
                      {active.id === 'virtual' && 'Remote teams, multi-location companies, and flexible scheduling needs.'}
                      {active.id === 'in-office' && 'On-site employees, office culture building, and hands-on wellness experiences.'}
                      {active.id === 'hybrid' && 'Hybrid workforces needing equal access across office and remote employees.'}
                      {active.id === 'team-outing' && 'Morale boosts, team bonding, and memorable culture-building moments.'}
                    </p>
                  </div>
                  <Link to="/contact" className={`${btnPrimary} w-full text-sm`}>
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
