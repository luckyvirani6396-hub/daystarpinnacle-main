import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { btnPrimary, sectionHeading, sectionHeadingAccent } from './sectionStyles';

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[#004B57]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-5%] top-[-10%] w-[50%] h-[60%] rounded-full bg-[#FF7A1A]/15 blur-[120px]" />
        <div className="absolute left-[-5%] bottom-[-10%] w-[45%] h-[55%] rounded-full bg-[#72A93B]/12 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 w-[95%] max-w-4xl mx-auto px-5 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase px-3.5 py-2 rounded-full bg-white/10 border border-white/20 text-[#FF7A1A] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Get Started
          </span>

          <h2 className={`${sectionHeading} text-white mb-4 md:mb-5`}>
            Ready to Transform{' '}
            <span className={`${sectionHeadingAccent} text-[#FF7A1A]`}>Employee Wellbeing?</span>
          </h2>

          <p className="text-[13px] sm:text-sm text-white/75 leading-relaxed font-medium max-w-2xl mx-auto mb-4">
            Partner with us to create a healthier, happier, and more productive workplace.
          </p>
          <p className="text-sm text-white/60 leading-relaxed max-w-xl mx-auto mb-8">
            Whether you&apos;re planning a one-time wellness event or a year-round employee
            wellbeing strategy, we&apos;re here to help.
          </p>

          <Link
            to="/contact"
            className={`${btnPrimary} text-sm md:text-base px-8 py-4 shadow-xl shadow-[#FF7A1A]/30`}
          >
            Book a Corporate Consultation Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
