import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { btnPrimary, sectionBody, sectionHeading, sectionHeadingAccent } from '../home/sectionStyles';

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-18">
      <div className="absolute inset-0 bg-[#004B57]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-5%] top-[-10%] w-[45%] h-[55%] rounded-full bg-[#FF7A1A]/12 blur-[100px]" />
        <div className="absolute left-[-5%] bottom-[-10%] w-[40%] h-[50%] rounded-full bg-[#72A93B]/10 blur-[90px]" />
      </div>

      <div className="relative z-10 w-[95%] max-w-3xl mx-auto px-5 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${sectionHeading} text-white mb-3 md:mb-4`}>
            Ready to Build a{' '}
            <span className={`${sectionHeadingAccent} text-[#FF7A1A]`}>Healthier Team?</span>
          </h2>
          <p className={`${sectionBody} text-white/75 mb-8 max-w-xl mx-auto`}>
            Partner with us to design a corporate wellness program tailored to your organization.
          </p>
          <Link to="/#register" className={`${btnPrimary} px-8 py-4 shadow-xl shadow-[#FF7A1A]/30`}>
            Register Your Interest
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
