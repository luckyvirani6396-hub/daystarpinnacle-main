import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import {
  cardOnCream,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroBlock,
  sectionIntroHeading,
  btnSecondary,
} from '../home/sectionStyles';

const teamMembers = [
  {
    name: 'Dr. Alok Sen',
    role: 'Chief Corporate Wellness Consultant',
    specialty: 'Occupational Health & Ergonomics',
    image: '/images/team-doctor.png',
  },
  {
    name: 'Megha Vyas',
    role: 'Lead Clinical Nutritionist',
    specialty: 'Workplace Nutrition & Metabolic Health',
    image: '/images/team-nutritionist.png',
  },
  {
    name: 'Rohan Sharma',
    role: 'Head Yoga & Mindfulness Coach',
    specialty: 'Stress Mitigation & Breathwork',
    image: '/images/team-yoga.png',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Account Coordinator & Support Lead',
    specialty: 'HR Integration & Engagement Reports',
    image: '/images/team-coordinator.png',
  },
];

export default function AboutTeam() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[40%] h-[40%] rounded-full bg-[#72A93B]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] w-[38%] h-[38%] rounded-full bg-[#FF7A1A]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${sectionIntroBlock} mb-10 md:mb-14`}
        >
          <span className={sectionIntroBadge}>The Specialists</span>
          <h2 className={sectionIntroHeading}>
            Our Dedicated <span className={sectionHeadingAccent}>Wellness Team</span>
          </h2>
          <p className={sectionBody}>
            Our team consists of certified wellness professionals, trainers, nutritionists, and
            mental health experts dedicated to improving employee wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => {
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`group ${cardOnCream} overflow-hidden flex flex-col h-full hover:shadow-lg hover:-translate-y-1 hover:border-[#FF7A1A]/30 transition-all duration-300 border border-[#FAF9F5]/70`}
              >
                {/* Team member portrait banner */}
                <div className="w-full h-64 relative overflow-hidden bg-gray-50 border-b border-[#FAF9F5]/60 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Team Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#FF7A1A] mb-1.5 block">
                      {member.role}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#004B57] leading-snug mb-3 group-hover:text-[#FF7A1A] transition-colors">
                      {member.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#004B57]/80 leading-relaxed font-medium pt-3 border-t border-[#FAF9F5]/60 mt-auto">
                    {member.specialty}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Team action strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/contact" className={`${btnSecondary} shadow-sm inline-flex items-center gap-2`}>
            <Sparkles className="w-4 h-4 text-[#FF7A1A]" />
            <span>Request a Specialist Session for Your Company</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
