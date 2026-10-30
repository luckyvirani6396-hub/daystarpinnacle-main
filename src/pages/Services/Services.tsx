import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import SectionDecorations from '../../components/common/SectionDecorations';
import LeafCTABanner from '../../components/common/LeafCTABanner';
import ServiceCard from '../../components/common/ServiceCard';
import ServicesHero from '../../components/services/ServicesHero';
import { clinicalServices } from '../../assets/data/clinicalServices';
import { staggerContainer } from '../../utils/animations';

const CareApproach = lazy(() => import('../../components/services/CareApproach'));
const HowItWorks = lazy(() => import('../../components/services/HowItWorks'));

export default function Services() {
  return (
    <>
      <ServicesHero />

      <section id="services-list" className="py-14 md:py-18 relative overflow-hidden z-10 bg-[#F3F8EE]">
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

      <LeafCTABanner />
    </>
  );
}
