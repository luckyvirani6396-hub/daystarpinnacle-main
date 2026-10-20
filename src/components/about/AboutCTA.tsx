import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import {
  btnPrimary,
  btnSecondary,
  sectionBody,
  sectionDotGrid,
  sectionHeading,
  sectionHeadingAccent,
  sectionBadge,
} from '../home/sectionStyles';

export default function AboutCTA() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 md:py-24 border-t border-[#E2E8E4]/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-3xl mx-auto px-5 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`${sectionBadge} mb-4`}>
            <Sparkles className="w-3.5 h-3.5 inline mr-1" />
            Get Started
          </span>

          <h2 className={`${sectionHeading} mb-3 md:mb-4`}>
            Ready to Build a{' '}
            <span className={sectionHeadingAccent}>Healthier Team?</span>
          </h2>

          <p className={`${sectionBody} mb-8 max-w-xl mx-auto text-[#1A2E32]/80`}>
            Partner with us to design a corporate wellness program tailored to your organization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className={`${btnPrimary} px-8 py-4 shadow-xl shadow-[#FF7A1A]/20 w-full sm:w-auto`}
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/programs"
              className={`${btnSecondary} px-8 py-4 w-full sm:w-auto`}
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
