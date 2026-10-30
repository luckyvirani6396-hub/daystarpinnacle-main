import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import {
  cardOnWhite,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
} from '../home/sectionStyles';

const faculties = [
  {
    role: 'Clinical Nutrition & Dietetics',
    subtitle: 'Metabolic Health & Sustainable Energy',
    image: '/images/team-nutritionist.png',
    credentials: 'Registered Clinical Nutritionists',
    color: '#72A93B',
    bg: '#FAF9F5',
    points: [
      'Evidence-based workplace nutrition seminars',
      'Blood sugar & sustained afternoon energy plans',
      'Desk snack audits & hydration frameworks',
    ],
  },
  {
    role: 'Mental Wellbeing & Psychology',
    subtitle: 'Stress Management & Emotional Resilience',
    image: '/images/team-doctor.png',
    credentials: 'Licensed Counseling Psychologists',
    color: '#004B57',
    bg: '#FAF9F5',
    points: [
      'Burnout prevention & mindfulness coaching',
      'Confidential employee emotional support',
      'Work-life boundary & hybrid fatigue workshops',
    ],
  },
  {
    role: 'Movement, Yoga & Ergonomics',
    subtitle: 'Desk Biomechanics & Physical Vitality',
    image: '/images/team-yoga.png',
    credentials: 'Certified Ergonomists & Yoga Masters',
    color: '#FF7A1A',
    bg: '#FAF9F5',
    points: [
      'Office posture & ergonomic desk corrections',
      'Corporate chair stretch & mobility masterclasses',
      'Walking campaigns & physical wellness days',
    ],
  },
  {
    role: 'Corporate Program Management',
    subtitle: 'End-to-End Execution & Engagement',
    image: '/images/team-coordinator.png',
    credentials: 'Corporate Wellness Directors',
    color: '#004B57',
    bg: '#FAF9F5',
    points: [
      'Tailored annual wellness calendar strategy',
      'Zero-hassle scheduling & calendar invitations',
      'Quarterly participation & health outcome reports',
    ],
  },
];

export default function AboutClinicalTeam() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-8%] top-[15%] w-[45%] h-[45%] rounded-full bg-[#004B57]/4 blur-[100px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.12)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>Experienced Faculty</span>
          <h2 className={sectionIntroHeading}>
            Led by Certified <span className={sectionHeadingAccent}>Clinical &amp; Wellness</span> Specialists
          </h2>
          <p className={sectionBody}>
            Our multidisciplinary team brings together certified clinical nutritionists, licensed psychologists,
            ergonomic consultants, and corporate wellness leaders to deliver impactful workplace programs.
          </p>
        </motion.div>

        {/* 4 Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-12">
          {faculties.map((fac, idx) => (
            <motion.div
              key={fac.role}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group ${cardOnWhite} overflow-hidden flex flex-col h-full border border-[#FAF9F5]/80 hover:shadow-xl hover:border-[#FF7A1A]/35 transition-all duration-300`}
            >
              {/* Image Banner */}
              <div className="w-full h-52 relative overflow-hidden shrink-0 bg-gray-50 border-b border-[#FAF9F5]/60">
                <img
                  src={fac.image}
                  alt={fac.role}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[10px] font-extrabold uppercase tracking-wider text-[#004B57] px-2.5 py-1 rounded-md shadow-sm border border-white/60">
                  {fac.credentials}
                </span>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-semibold drop-shadow-sm truncate">
                    {fac.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base sm:text-[17px] font-serif font-bold text-[#004B57] leading-snug group-hover:text-[#FF7A1A] transition-colors mb-3">
                    {fac.role}
                  </h3>

                  <ul className="space-y-2 mb-4">
                    {fac.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-[#004B57]/80 leading-relaxed font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A1A] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#FAF9F5]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#FF7A1A]">
                  <Award className="w-3.5 h-3.5" />
                  <span>Certified Corporate Faculty</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authority & Confidentiality Trust Banner */}
        <div className="bg-[#FAF9F5] border border-[#FAF9F5] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#FAF9F5] text-[#FF7A1A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#004B57]">
                100% Employee Data Confidentiality Guarantee
              </h4>
              <p className="text-xs text-[#004B57] font-medium leading-relaxed">
                Individual health responses and consultations remain strictly private. Employers only receive anonymized, aggregated participation metrics.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded-full bg-white border border-[#FAF9F5] text-xs font-bold text-[#004B57]">
              Certified Faculty
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-[#FAF9F5] text-xs font-bold text-[#004B57]">
              Zero Spam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
