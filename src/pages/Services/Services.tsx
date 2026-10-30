import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import SectionDecorations from '../../components/common/SectionDecorations';
import ServiceCard from '../../components/common/ServiceCard';
import ServicesHero from '../../components/services/ServicesHero';
import { clinicalServices } from '../../assets/data/clinicalServices';
import { staggerContainer, fadeUp } from '../../utils/animations';

const CareApproach = lazy(() => import('../../components/services/CareApproach'));
const HowItWorks = lazy(() => import('../../components/services/HowItWorks'));

export default function Services() {
  return (
    <>
      <ServicesHero />

      <section id="services-list" className="py-14 md:py-18 relative overflow-hidden z-10 bg-white">
        <SectionDecorations />
        <Container>
          <SectionTitle
            subtitle="Corporate Solutions"
            title="Explore Our Wellness Dimensions"
            description="We support employee health across 10 key dimensions with custom programs, campaigns, and expert coaching."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {clinicalServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                image={service.image}
                to={`/services/${service.slug}`}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      <Suspense fallback={<div className="min-h-[100px]" />}>
        <CareApproach />
        <HowItWorks />
      </Suspense>

      {/* Consultation CTA */}
      <section className="py-14 md:py-18 relative overflow-hidden bg-[#FAF9F5]/40">
        <SectionDecorations />
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#FAF9F5]/65 rounded-[24px] p-8 md:p-12 border border-[#FAF9F5]/60 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF7A1A] bg-white rounded-full px-4 py-2 mb-4 border border-[#FF7A1A]/15 shadow-sm">
                Free Consultation
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3 font-serif">
                Not Sure Which Dimension Fits Your Team?
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg font-medium">
                Book a free corporate wellness consultation and our experts will help design a customized plan for your workforce.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF7A1A] hover:bg-[#FF7A1A] text-white font-bold text-sm transition-all duration-300 shrink-0 shadow-lg shadow-[#FF7A1A]/15 hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <span>Book Consultation</span>
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
