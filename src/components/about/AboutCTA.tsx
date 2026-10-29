import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import {
  btnPrimary,
  btnSecondary,
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
  sectionIntroBlock,
} from '../home/sectionStyles';

export default function AboutCTA() {
  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden py-12 md:py-16 border-t border-[#E2E8E4]/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.08)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className={sectionIntroBlock}
        >
          <span className={sectionIntroBadge}>
            <Sparkles className="w-3.5 h-3.5 inline mr-1" />
            Partner With Us
          </span>

          <h2 className={sectionIntroHeading}>
            Ready to Build a{' '}
            <span className={sectionHeadingAccent}>Healthier Team?</span>
          </h2>

          <p className={`${sectionBody} max-w-xl mx-auto`}>
            Discover how Daystar Pinnacle&apos;s preventative health programs and tailored workplace
            wellness solutions can elevate employee morale, vitality, and productivity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              to="/contact"
              className={`${btnPrimary} px-7 py-3.5 shadow-lg shadow-[#FF7A1A]/20 w-full sm:w-auto`}
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/programs"
              className={`${btnSecondary} px-7 py-3.5 w-full sm:w-auto`}
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
