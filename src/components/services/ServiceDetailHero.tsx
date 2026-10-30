import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import type { ClinicalService } from '../../types';
import ServiceIcon from '../common/ServiceIcon';
import { getServiceHeroImage } from '../../constants/pageImages';
import { fadeUp } from '../../utils/animations';
import {
  btnPrimary,
  btnSecondary,
  sectionBody,
  sectionDotGrid,
  sectionIntroBadge,
} from '../home/sectionStyles';

interface ServiceDetailHeroProps {
  service: ClinicalService;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const heroImage = service.image || getServiceHeroImage(service.slug);
  const highlightBenefits = service.benefits.slice(0, 3);

  return (
    <section className="relative w-full bg-[#FAF9F5] overflow-hidden isolate">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[8%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/6 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[5%] w-[38%] h-[38%] rounded-full bg-[#004B57]/5 blur-[90px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.14)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8 pt-8 sm:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left details info column */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left relative z-10">
            
            {/* Breadcrumb path */}
            <motion.nav
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#004B57] mb-5 flex-wrap"
            >
              <Link to="/" className="hover:text-[#FF7A1A] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#004B57]/30" />
              <Link to="/services" className="hover:text-[#FF7A1A] transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#004B57]/30" />
              <span className="text-[#FF7A1A] line-clamp-1">{service.title}</span>
            </motion.nav>

            {/* Tag badge pill */}
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`${sectionIntroBadge} items-center gap-2`}
            >
              <ServiceIcon name={service.icon} className="w-3.5 h-3.5" />
              Clinical Care
            </motion.span>

            {/* H1 Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[2rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] font-serif font-medium text-[#004B57] leading-[1.1] tracking-tight mb-4 sm:mb-5 max-w-2xl"
            >
              {service.title}
            </motion.h1>

            {/* Separator Accent */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-px w-10 bg-[#FF7A1A]/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
              <div className="h-px flex-1 max-w-[120px] bg-[#004B57]/15" />
            </motion.div>

            {/* Short details */}
            <motion.p variants={fadeUp} initial="hidden" animate="visible" className={`${sectionBody} mb-6 max-w-2xl`}>
              {service.shortDescription}
            </motion.p>

            {/* Highlighted benefits list */}
            {highlightBenefits.length > 0 && (
              <motion.ul variants={fadeUp} initial="hidden" animate="visible" className="space-y-3 mb-8 w-full max-w-md">
                {highlightBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#004B57] font-semibold leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-[#FAF9F5] flex items-center justify-center shrink-0 mt-0.5 border border-[#FF7A1A]/10">
                      <Check className="w-3 h-3 text-[#FF7A1A]" strokeWidth={3} />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </motion.ul>
            )}

            {/* CTA action row */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#service-details" className={btnPrimary}>
                <span>View Details</span>
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

            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#FF7A1A]/10 to-[#004B57]/5 rounded-[28px] blur-xl" />

              <div className="relative rounded-[24px] overflow-hidden border-[3px] border-white shadow-[0_24px_60px_rgba(0,75,87,0.12)]">
                <img
                  src={heroImage}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004B57]/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Includes row */}
        {service.includes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl p-5 sm:p-6 lg:p-7.5 w-full z-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-[#FAF9F5]/70">
              {service.includes.slice(0, 4).map((item) => (
                <div key={item} className="flex items-center gap-3.5 px-2 sm:px-5 py-1">
                  <div className="w-9 h-9 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center shrink-0 text-[#FF7A1A] border border-[#FF7A1A]/5 shadow-sm">
                    <Check className="w-4.5 h-4.5" strokeWidth={2.5} />
                  </div>
                  <p className="text-xs text-[#004B57] font-semibold leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
