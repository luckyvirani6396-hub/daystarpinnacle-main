import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Target,
  Brain,
  ChevronRight,
  ChevronDown,
  Building2,
  Shield,
  TrendingUp,
  ClipboardList,
  Calendar,
  Laptop,
  Smartphone,
  UserCheck,
  Check,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ProgramCard from '../../components/common/ProgramCard';
import { pagePrograms } from '../../assets/data/content';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';
import { CONTACT_PHONE, CONTACT_PHONE_TEL } from '../../constants';
import { fadeUp, staggerContainer } from '../../utils/animations';
import {
  btnPrimary,
  btnSecondary,
  sectionBody,
  sectionDotGrid,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
  sectionHeadingAccent,
  cardTitle,
  cardDescription,
} from '../../components/home/sectionStyles';

const deliveryFormats = [
  {
    icon: Building2,
    badge: 'Onsite',
    title: 'Workplace Sessions',
    desc: 'Hands-on yoga instructors, ergonomic workstation desk audits, and onsite health check camps conducted at your offices.',
    features: ['Physical presence & live engagement', 'Custom equipment & audio setup', 'Ergonomic audit checklists'],
    accent: '#FF7A1A',
    bg: '#FEF3E8',
  },
  {
    icon: Laptop,
    badge: 'Virtual & Hybrid',
    title: 'Live Interactive Streams',
    desc: 'High-definition interactive webinars and meditation sessions for remote, hybrid, and pan-India distributed workforces.',
    features: ['Interactive Q&A and polls', 'HD recording library access', 'Zero geographical limitations'],
    accent: '#004B57',
    bg: '#E6F2F4',
  },
  {
    icon: Smartphone,
    badge: 'Digital Tools',
    title: 'Self-Care & Habit Kits',
    desc: 'Self-care playbooks, weekly micro-habit challenges, hydration trackers, and desk stretch cheat sheets.',
    features: ['Monthly employee newsletters', 'Step & fitness challenge sheets', 'Practical recipe & diet planners'],
    accent: '#72A93B',
    bg: '#F1F9EB',
  },
  {
    icon: UserCheck,
    badge: 'Executive',
    title: 'Leadership 1-on-1s',
    desc: 'Confidential coaching on executive stress management, peak cognitive performance, and sustainable work-life rhythms.',
    features: ['Direct founder/director access', 'Tailored burnout prevention', 'Leadership resilience frameworks'],
    accent: '#8E44AD',
    bg: '#F5EEF8',
  },
];


const programFaqs = [
  {
    q: 'How do we select the right package for our organization?',
    a: 'We evaluate your workforce size, current hybrid or onsite distribution, and core wellness priorities. Our consultants offer a free 30-minute discovery call to recommend or customize a package that matches your HR timeline and budget.',
  },
  {
    q: 'Can sessions be delivered across multiple branch offices or remote staff?',
    a: 'Yes. All our packages feature flexible hybrid delivery. Sessions can be conducted onsite at your head office while simultaneously live-streamed with interactive Q&A for remote and regional branch teams across India.',
  },
  {
    q: 'How much lead time is required to launch our first wellness session?',
    a: 'We typically onboard new corporate clients and launch their first session within 5 to 7 business days. This gives us time to align on topics, provide digital promotional teasers for your employees, and confirm logistics.',
  },
  {
    q: 'Are all facilitators certified wellness professionals?',
    a: 'Absolutely. All yoga masters, corporate meditation coaches, clinical nutritionists, and ergonomic specialists are certified, experienced corporate wellness facilitators vetted by Daystar Pinnacle.',
  },
  {
    q: 'How do you measure and report employee participation?',
    a: 'After every session and campaign, we compile participation counts, post-session feedback scores, and key behavioral takeaways into an executive summary report for your HR leadership team.',
  },
];

export default function Programs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ── Corporate Programs Hero ─────────────────────────────── */}
      <section className="relative w-full bg-[#FAF9F5] overflow-hidden isolate">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-8%] top-[8%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
          <div className="absolute left-[-8%] bottom-[5%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
          <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
        </div>

        <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 pt-8 sm:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Content Column */}
            <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left relative z-10">
              {/* Breadcrumbs */}
              <motion.nav
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                aria-label="Breadcrumb"
                className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#5F6B6E] mb-5 flex-wrap"
              >
                <Link to="/" className="hover:text-[#FF7A1A] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#004B57]/30" />
                <span className="text-[#FF7A1A]">Corporate Packages</span>
              </motion.nav>

              {/* Tag badge pill */}
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={`${sectionIntroBadge} items-center gap-2`}
              >
                <Users className="w-3.5 h-3.5" />
                Workplace Wellness
              </motion.span>

              {/* H1 Heading */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-[2rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] font-serif font-medium text-[#004B57] leading-[1.1] tracking-tight mb-4 sm:mb-5 max-w-2xl"
              >
                Workplace Packages
              </motion.h1>

              {/* Separator Accent */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="h-px w-10 bg-[#FF7A1A]/40" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
                <div className="h-px flex-1 max-w-[120px] bg-[#004B57]/15" />
              </motion.div>

              {/* Tagline */}
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-2xl font-bold text-[#FF7A1A] mb-4 leading-snug font-heading"
              >
                Scale Employee Productivity &amp; Vitality.
              </motion.h2>

              {/* Description */}
              <motion.p variants={fadeUp} initial="hidden" animate="visible" className={`${sectionBody} mb-6 max-w-2xl`}>
                Structured wellness tiers designed to reduce burnout, boost office morale, and lower health-related organizational costs.
              </motion.p>

              {/* Quick pillars badges horizontal row */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative flex items-start justify-between w-full max-w-[340px] sm:max-w-[420px] mb-10 px-2 mt-6"
              >
                <div className="absolute top-7 left-12 right-12 sm:top-8 sm:left-14 sm:right-14 h-[1.8px] bg-[#FF7A1A]/20 z-0" />
                {[
                  { key: 'strategy', icon: Target, label: <>Corporate<br />Strategy</> },
                  { key: 'team', icon: Users, label: <>Team<br />Programs</> },
                  { key: 'analytics', icon: TrendingUp, label: <>Engagement<br />Analytics</> },
                ].map(({ key, icon: Icon, label }) => (
                  <div key={key} className="flex flex-col items-center z-10 w-24 sm:w-28">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FEF3E8] rounded-full flex items-center justify-center text-[#FF7A1A] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FDF2E9] border border-[#FF7A1A]/10 shadow-[0_4px_12px_rgba(255,122,26,0.08)]">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.8} />
                    </div>
                    <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#004B57] text-center mt-3.5 leading-snug tracking-wide">{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Explore Buttons */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#programs-list" className={btnPrimary}>
                  <span>Explore Our Packages</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </a>
                <Link to="/contact" className={btnSecondary}>
                  <span>Book Consultation</span>
                </Link>
              </motion.div>
            </div>

            {/* Right curved image crescent column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5 relative order-2"
            >
              <div className="absolute left-[-10px] top-[10%] bottom-[10%] w-7 bg-[#FF7A1A] rounded-r-full z-20 shadow-lg shadow-[#FF7A1A]/20" />
              <div className="absolute -right-2 top-[10%] bottom-[10%] w-9 bg-[#004B57] rounded-l-full z-20 shadow-lg" />

              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#FF7A1A]/10 to-[#004B57]/5 rounded-[28px] blur-xl" />

                <div className="relative rounded-[24px] overflow-hidden border-[3px] border-white shadow-[0_24px_60px_rgba(0,75,87,0.12)]">
                  <img
                    src={PAGE_HERO_IMAGES.programs}
                    alt="Corporate wellness team session"
                    className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004B57]/30 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Program Highlights Card Banner ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl p-6 lg:p-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full z-20 md:divide-x md:divide-gray-150"
          >
            <div className="flex items-center gap-4.5 px-2">
              <div className="w-12 h-12 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center shrink-0 text-[#FF7A1A]">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider">Tailored Programs</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  Programs designed for your workforce size.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4.5 px-2 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center shrink-0 text-[#FF7A1A]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider">Expert Coaching</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  Guidance from certified professionals.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4.5 px-2 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center shrink-0 text-[#FF7A1A]">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider">Proactive Care</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  Workshops and screenings that prevent risks.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4.5 px-2 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center shrink-0 text-[#FF7A1A]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider">Measurable Impact</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  Track engagement levels and feedback.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Programs List Section ─────────────────────────── */}
      <section id="programs-list" className="py-20 md:py-28 relative z-10 bg-white">
        <Container>
          <SectionTitle
            subtitle="Workplace Wellness"
            title="Compare Corporate Packages"
            description="Structured wellness plans designed to fit your team headcount, office delivery preference, and budget goals."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
          >
            {pagePrograms.map((program) => (
              <ProgramCard
                key={program.id}
                id={program.id}
                title={program.title}
                subtitle={program.subtitle}
                description={program.description}
                duration={program.duration || ''}
                icon={program.icon}
                features={program.features || []}
                featured={program.id === 'growth'}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── SECTION: Flexible Delivery Formats ────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAF9F5]/70 z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-6%] top-[15%] w-[40%] h-[40%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
          <div className="absolute left-[-6%] bottom-[15%] w-[38%] h-[38%] rounded-full bg-[#004B57]/4 blur-[100px]" />
          <div className="absolute inset-0" style={sectionDotGrid(0.12)} />
        </div>

        <Container className="relative z-10">
          <SectionTitle
            subtitle="Execution Flexibility"
            title="Designed for Every Workplace Model"
            description="Whether your teams work from a central corporate office, remote home setups, or a hybrid schedule, our programs integrate seamlessly."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {deliveryFormats.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-[#E2E8E4] shadow-sm hover:shadow-lg hover:border-[#FF7A1A]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
                      style={{ backgroundColor: item.bg, color: item.accent, borderColor: `${item.accent}25` }}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border"
                      style={{ backgroundColor: item.bg, color: item.accent, borderColor: `${item.accent}30` }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#004B57] mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6B6E] leading-relaxed font-medium mb-6">
                    {item.desc}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-[#E2E8E4]/80">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs font-semibold text-[#1A2E32]/85">
                        <Check className="w-3.5 h-3.5 text-[#FF7A1A] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>


      {/* ── SECTION: Fully Supported Journeys ─────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white z-10">
        <div className="absolute left-0 top-1/4 w-[280px] h-[450px] bg-gradient-to-r from-[#FEF3E8]/55 to-transparent rounded-r-full blur-xl -z-10 pointer-events-none" />
        <div className="absolute right-0 top-1/3 w-[280px] h-[450px] bg-gradient-to-l from-[#FEF3E8]/55 to-transparent rounded-l-full blur-xl -z-10 pointer-events-none" />

        <Container>
          <SectionTitle
            subtitle="Features"
            title="Fully Supported Journeys"
            description="Every transformation program bundles expert guidance, accountability, and practical tools."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: 'Program Design',
                features: ['Tailored Virtual/In-Person Mix', 'Custom Systems & API Integration', 'Quarterly Executive Business Reviews'],
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Coach Support',
                features: ['1-on-1 consultations', 'Daily messaging support', 'Weekly goal check-ins'],
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Milestone Tracking',
                features: ['Digital tracking portal', 'Metabolic checkpoints', 'Regular reports'],
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: 'Habit Integration',
                features: ['Mindfulness routines', 'Sleep optimization', 'Daily movement targets'],
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-[24px] border border-[#E2E8E4]/80 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004B57] to-[#004B57]/80 flex items-center justify-center text-white mb-4 shadow-sm shadow-[#004B57]/15">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#004B57] mb-3 leading-snug">{card.title}</h4>
                  <ul className="space-y-2">
                    {card.features.map((feat) => (
                      <li key={feat} className="text-xs text-[#4d5e53] font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process Timeline Section ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FAF9F5]/60 relative overflow-hidden z-10">
        <Container className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${sectionIntroBlock} max-w-2xl mb-10 md:mb-14`}
          >
            <span className={sectionIntroBadge}>Process</span>
            <h2 className={sectionIntroHeading}>
              Your Program <span className={sectionHeadingAccent}>Launch Path</span>
            </h2>
            <p className={`${sectionBody} mt-2`}>
              From discovery call to measurable workforce impact in under two weeks.
            </p>
          </motion.div>

          {/* Desktop Steps Layout */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[2.75rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#FF7A1A]/30 to-transparent" />
            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: 'Needs Assessment',
                  description: 'We evaluate your headcount, wellness goals, and budget to design the perfect hybrid or on-site strategy.',
                  icon: ClipboardList,
                },
                {
                  step: 2,
                  title: 'Custom Integration',
                  description: 'We customize your organization\'s wellness calendar, coordinate seminars, and launch your employee portal.',
                  icon: Calendar,
                },
                {
                  step: 3,
                  title: 'Delivery & Analytics',
                  description: 'We execute your active sessions (yoga, resilience, nutrition) and deliver employee participation reports.',
                  icon: TrendingUp,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-[#FF7A1A]/30 shadow-md flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-[#FF7A1A]" strokeWidth={2} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#004B57] text-white text-[10px] font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className={`${cardTitle} text-lg mb-2 leading-snug px-1 text-[#004B57] font-bold`}>{item.title}</h3>
                  <p className={`${cardDescription} text-[#5F6B6E] text-xs font-semibold leading-relaxed px-2`}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Steps Layout */}
          <div className="lg:hidden space-y-6 max-w-xl mx-auto">
            {[
              {
                step: 1,
                title: 'Needs Assessment',
                description: 'We evaluate your headcount, wellness goals, and budget to design the perfect hybrid or on-site strategy.',
                icon: ClipboardList,
              },
              {
                step: 2,
                title: 'Custom Integration',
                description: 'We customize your organization\'s wellness calendar, coordinate seminars, and launch your employee portal.',
                icon: Calendar,
              },
              {
                step: 3,
                title: 'Delivery & Analytics',
                description: 'We execute your active sessions (yoga, resilience, nutrition) and deliver employee participation reports.',
                icon: TrendingUp,
              },
            ].map((item, index, arr) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#FF7A1A]/25 shadow-sm flex items-center justify-center shrink-0 relative">
                    <item.icon className="w-5 h-5 text-[#FF7A1A]" strokeWidth={2} />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#004B57] text-white text-[9px] font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  {index < arr.length - 1 && (
                    <div className="w-px flex-1 min-h-[2rem] bg-[#FF7A1A]/20 mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className={`${cardTitle} text-base mb-1 text-[#004B57] font-bold`}>{item.title}</h3>
                  <p className={`${cardDescription} text-[#5F6B6E] text-xs font-semibold leading-relaxed`}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION: Corporate Programs FAQ ───────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left FAQ intro */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 text-center lg:text-left"
            >
              <span className={sectionIntroBadge}>Corporate FAQ</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#004B57] leading-tight mb-4">
                Got Questions About <span className="text-[#FF7A1A] italic">Our Packages?</span>
              </h2>
              <p className="text-sm text-[#5F6B6E] leading-relaxed font-medium mb-8">
                Everything you need to know about pricing, customization, lead times, and pan-India hybrid execution.
              </p>

              <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#E2E8E4] flex flex-col gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF3E8] text-[#FF7A1A] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#004B57]">Need Direct Assistance?</p>
                    <a
                      href={`tel:${CONTACT_PHONE_TEL}`}
                      className="text-sm font-bold text-[#FF7A1A] hover:underline"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>
                <p className="text-[11px] text-[#5F6B6E] font-medium leading-relaxed">
                  Our corporate advisors are available Monday to Saturday to answer questions or review your annual wellness calendar.
                </p>
              </div>
            </motion.div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {programFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-[#FAF9F5] border-[#FF7A1A]/30 shadow-md'
                        : 'bg-white border-[#E2E8E4] hover:border-[#004B57]/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-sm sm:text-base text-[#004B57]">
                        {faq.q}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? 'bg-[#FF7A1A] text-white rotate-180' : 'bg-[#E6F2F4] text-[#004B57]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5F6B6E] leading-relaxed font-medium"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION: Final High-Impact Consultation CTA Banner ────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAF9F5]/70 z-10">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#004B57] via-[#004B57] to-[#003840] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center md:text-left relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            {/* Ambient background glows */}
            <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#FF7A1A]/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#72A93B]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold uppercase tracking-widest text-[#FF7A1A] bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/15 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Custom Corporate Proposals
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight leading-tight mb-4">
                Ready to Build a Healthier, <span className="text-[#FF7A1A] italic">More Engaged</span> Workforce?
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium mb-6">
                Receive a tailored wellness proposal matching your team headcount, office locations, and annual budget within 24 hours.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-white/90">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                  <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  Free 30-Min Consultation
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                  <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  Flexible Hybrid Delivery
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                  <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  Zero Long-Term Lock-In
                </span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF7A1A] hover:bg-[#E86800] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#FF7A1A]/30 hover:scale-[1.02]"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-all duration-300"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FF7A1A]" />
                <span>Call Directly: {CONTACT_PHONE}</span>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
