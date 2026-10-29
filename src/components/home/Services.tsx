import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Brain,
  Check,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Flame,
  Heart,
  HeartHandshake,
  Leaf,
  RefreshCw,
  Shield,
  Smile,
  Sparkles,
} from 'lucide-react';
import {
  btnPrimary,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from './sectionStyles';

export const dimensions = [
  {
    id: 'physical',
    slug: 'physical-wellness',
    title: 'Physical Wellness',
    tagline: 'Encourage active, healthy lifestyles',
    icon: Activity,
    color: '#FF7A1A',
    bg: '#FEF3E8',
    image: '/images/solution-physical.png',
    bullets: [
      'Corporate Yoga & Stretching',
      'Desk Mobility & Ergonomics',
      'Workplace Fitness Challenges',
      'Posture Correction Clinics',
    ],
  },
  {
    id: 'mental',
    slug: 'mental-wellbeing',
    title: 'Mental Wellbeing',
    tagline: 'Build emotional resilience & focus',
    icon: Brain,
    color: '#0066CC',
    bg: '#E6F0FA',
    image: '/images/solution-mental.png',
    bullets: [
      'Mindfulness & Meditation',
      'Stress Reduction Workshops',
      'Burnout Prevention Sessions',
      'Mental Health First-Aid Resources',
    ],
  },
  {
    id: 'nutrition',
    slug: 'nutrition-healthy-living',
    title: 'Nutrition & Healthy Living',
    tagline: 'Promote smart daily fuel & eating habits',
    icon: Flame,
    color: '#72A93B',
    bg: '#F1F9EB',
    image: '/images/solution-nutrition.png',
    bullets: [
      'Clinical Nutrition Seminars',
      'Healthy Cafeteria Guidance',
      'Hydration & Energy Management',
      'Desk Snack Planning Workshops',
    ],
  },
  {
    id: 'emotional',
    slug: 'emotional-wellness',
    title: 'Emotional Wellness',
    tagline: 'Strengthen psychological safety & EQ',
    icon: Heart,
    color: '#E74C3C',
    bg: '#FDEDEC',
    image: '/images/solution-emotional.png',
    bullets: [
      'Emotional Intelligence Training',
      'Confidence & Resilience Building',
      'Positive Psychology Frameworks',
      'Stress Coping Techniques',
    ],
  },
  {
    id: 'social',
    slug: 'social-wellbeing',
    title: 'Social Wellbeing',
    tagline: 'Foster deep team camaraderie & trust',
    icon: HeartHandshake,
    color: '#8E44AD',
    bg: '#F5EEF8',
    image: '/images/solution-social.png',
    bullets: [
      'Interactive Team-Building Days',
      'Company Wellness Challenges',
      'Group Fitness & Walkathons',
      'Community Volunteer Initiatives',
    ],
  },
  {
    id: 'balance',
    slug: 'work-life-balance',
    title: 'Work-Life Balance',
    tagline: 'Sustainable productivity & recharge habits',
    icon: Smile,
    color: '#2980B9',
    bg: '#EBF5FB',
    image: '/images/solution-balance.png',
    bullets: [
      'Hybrid Work Boundary Setting',
      'Time & Focus Management',
      'Digital Detox Strategies',
      'Rest & Recharge Frameworks',
    ],
  },
  {
    id: 'financial',
    slug: 'financial-wellness',
    title: 'Financial Wellness',
    tagline: 'Reduce money stress with practical literacy',
    icon: DollarSign,
    color: '#27AE60',
    bg: '#EAFAF1',
    image: '/images/solution-financial.png',
    bullets: [
      'Budgeting & Personal Savings',
      'Retirement & Investment Basics',
      'Tax Planning Essentials',
      'Emergency Fund Coaching',
    ],
  },
  {
    id: 'preventive',
    slug: 'preventive-healthcare',
    title: 'Preventive Healthcare',
    tagline: 'Early detection & preventive habits',
    icon: Shield,
    color: '#F39C12',
    bg: '#FEF9E7',
    image: '/images/solution-preventive.png',
    bullets: [
      'Annual Onsite Health Screenings',
      'Vitals & Biometric Assessments',
      'Flu & Vaccine Drives',
      'Preventive Health Audits',
    ],
  },
  {
    id: 'environmental',
    slug: 'environmental-wellness',
    title: 'Environmental Wellness',
    tagline: 'Ergonomic, healthy workspaces',
    icon: Leaf,
    color: '#16A085',
    bg: '#E8F8F5',
    image: '/images/solution-environmental.png',
    bullets: [
      'Individual Ergonomic Audits',
      'Biophilic & Green Office Design',
      'Lighting & Air Quality Guidance',
      'Clean Workspace Protocols',
    ],
  },
  {
    id: 'holistic',
    slug: 'holistic-wellness',
    title: 'Holistic Wellness',
    tagline: 'Comprehensive mind-body alignment',
    icon: RefreshCw,
    color: '#004B57',
    bg: '#E6F2F4',
    image: '/images/solution-holistic.png',
    bullets: [
      'Corporate Chair Massage Days',
      'Sound Bath & Breathwork',
      'Sleep Hygiene Masterclasses',
      'Full-Body Rejuvenation Sessions',
    ],
  },
];

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalCards = dimensions.length;

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 15);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 15);

    // Calculate approximate active page based on card width
    const firstCard = el.querySelector<HTMLElement>('[data-service-card]');
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 20; // width + gap
      const page = Math.round(el.scrollLeft / cardWidth);
      setActivePageIndex(Math.min(Math.max(0, page), totalCards - 1));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  // Automatic smooth slide progression (every 3.8 seconds), pausing on hover or touch
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 25;
      if (isAtEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const firstCard = el.querySelector<HTMLElement>('[data-service-card]');
        const step = firstCard ? firstCard.offsetWidth + 20 : 360;
        el.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>('[data-service-card]');
    const step = firstCard ? (firstCard.offsetWidth + 20) * (window.innerWidth >= 1024 ? 2 : 1) : 360;

    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  const scrollToCard = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>('[data-service-card]');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <section id="services" className="relative w-full bg-white overflow-hidden py-12 md:py-16">
      {/* Background decorations matching brand palette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[15%] w-[45%] h-[45%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] w-[40%] h-[40%] rounded-full bg-[#004B57]/4 blur-[100px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Our Solutions</span>
          <h2 className={sectionIntroHeading}>
            Comprehensive <span className={sectionHeadingAccent}>Corporate Wellness</span> Solutions
          </h2>
          <p className={sectionBody}>
            Flexible, engaging, and measurable initiatives designed to support employee health and
            scale seamlessly from 25 to 5,000+ employees.
          </p>
        </motion.div>

        {/* Carousel Top Controls Bar: Counter badge + Prev / Next Arrow buttons */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E2E8E4] text-xs font-bold text-[#004B57]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A]" />
              <span>10 Core Wellness Dimensions</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous service"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'border-[#004B57]/20 text-[#004B57] bg-white hover:bg-[#FAF9F5] hover:border-[#FF7A1A] hover:text-[#FF7A1A] shadow-sm hover:scale-105 cursor-pointer'
                  : 'border-[#E2E8E4] text-gray-300 bg-white/50 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next service"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'border-[#004B57]/20 text-[#004B57] bg-white hover:bg-[#FAF9F5] hover:border-[#FF7A1A] hover:text-[#FF7A1A] shadow-sm hover:scale-105 cursor-pointer'
                  : 'border-[#E2E8E4] text-gray-300 bg-white/50 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Carousel Track with pause on hover/touch */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-2 pb-6 scrollbar-hide -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {dimensions.map((dim, index) => {
            const Icon = dim.icon;
            return (
              <div
                key={dim.id}
                data-service-card
                className="w-[86vw] sm:w-[350px] md:w-[370px] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex flex-col"
              >
                <div className="group bg-white rounded-2xl border border-[#E2E8E4] shadow-[0_4px_20px_rgba(0,75,87,0.06)] hover:shadow-[0_14px_36px_rgba(0,75,87,0.12)] hover:border-[#FF7A1A]/35 transition-all duration-300 flex flex-col h-full overflow-hidden">
                  {/* Card Visual Banner */}
                  <Link
                    to={`/services/${dim.slug}`}
                    className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-50 border-b border-[#E2E8E4]/60 block shrink-0 cursor-pointer"
                  >
                    <img
                      src={dim.image}
                      alt={dim.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

                    {/* Top Index Badge */}
                    <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-widest text-[#004B57] px-2.5 py-1 rounded-md shadow-sm border border-white/60">
                      0{index + 1}
                    </span>

                    {/* Floating Icon Pill */}
                    <div
                      className="absolute top-3.5 right-3.5 w-9 h-9 rounded-xl flex items-center justify-center shadow-md backdrop-blur-md"
                      style={{ backgroundColor: dim.bg, color: dim.color }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2.2} />
                    </div>

                    {/* Bottom Tagline Overlay on Image */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-white text-xs font-semibold drop-shadow-sm truncate">
                        {dim.tagline}
                      </p>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Title & Accent Line */}
                      <Link to={`/services/${dim.slug}`} className="block group-hover:text-[#FF7A1A] transition-colors">
                        <h3 className="text-lg sm:text-[19px] font-serif font-bold text-[#004B57] leading-snug group-hover:text-[#FF7A1A] transition-colors mb-1.5">
                          {dim.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-[#5F6B6E] font-medium leading-relaxed mb-4">
                        {dim.tagline}
                      </p>

                      {/* Bullets List */}
                      <ul className="space-y-2 mb-6">
                        {dim.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1A2E32]/85 font-medium leading-relaxed"
                          >
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                              style={{ backgroundColor: dim.bg, color: dim.color }}
                            >
                              <Check className="w-2.5 h-2.5" strokeWidth={3} />
                            </span>
                            <span className="line-clamp-1">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 border-t border-[#E2E8E4]/70 flex items-center justify-between gap-3 mt-auto">
                      <Link
                        to={`/services/${dim.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#004B57] group-hover:text-[#FF7A1A] transition-colors"
                      >
                        <span>Explore Program</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        to="/contact"
                        className="text-[11.5px] font-bold text-[#FF7A1A] hover:text-[#E86800] px-3 py-1.5 rounded-lg bg-[#FEF3E8] border border-[#FF7A1A]/20 hover:border-[#FF7A1A]/50 transition-all"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Bottom Bar: Pagination Dots + View All Button */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E2E8E4]/60">
          {/* Pagination indicator dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {dimensions.map((dim, idx) => (
              <button
                key={dim.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to slide ${idx + 1}: ${dim.title}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activePageIndex === idx
                    ? 'w-7 h-2.5 bg-[#FF7A1A]'
                    : 'w-2.5 h-2.5 bg-[#E2E8E4] hover:bg-[#004B57]/40'
                }`}
              />
            ))}
          </div>

          {/* Action button: View all services catalog */}
          <Link to="/services" className={btnPrimary}>
            <span>View All 10 Services</span>
            <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
