import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Mail, ShieldCheck, Sparkles, Building2, Users } from 'lucide-react';
import Container from '../common/Container';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '../../constants';
import { btnPrimary } from '../home/sectionStyles';

export default function BlogContactCTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white z-10">
      <Container>
        <div className="bg-gradient-to-br from-[#004B57] via-[#003C46] to-[#002D34] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative ambient glowing circles */}
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[#FF7A1A]/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-[#72A93B]/15 blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-extrabold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FF7A1A] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Corporate Consultation
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-medium text-white leading-[1.15] mb-5">
              Ready to Bring These Programs to <span className="text-[#FF7A1A] italic">Your Team?</span>
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
              Whether you need hands-on desk ergonomics audits, executive stress resilience workshops, or an enterprise-wide annual wellness calendar, our certified team is here to support you.
            </p>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/85 font-semibold mb-10">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Building2 className="w-3.5 h-3.5 text-[#FF7A1A]" />
                Onsite &amp; Hybrid Across India
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Users className="w-3.5 h-3.5 text-[#72A93B]" />
                Certified Wellness Experts
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A1A]" />
                Measurable HR Impact
              </span>
            </div>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
            >
              <Link
                to="/contact"
                className={`${btnPrimary} text-sm px-8 py-4 shadow-xl shadow-[#FF7A1A]/30 hover:scale-[1.02]`}
              >
                <span>Book Corporate Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all duration-300 shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#FF7A1A]" />
                <span>Call {CONTACT_PHONE}</span>
              </a>
            </motion.div>

            {/* Direct contact footer note */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70 font-medium">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF7A1A]" />
                {CONTACT_EMAIL}
              </a>
              <span className="hidden sm:inline opacity-40">&bull;</span>
              <span>Fast response within 24 business hours</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
