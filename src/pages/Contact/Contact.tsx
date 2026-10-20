import { lazy, Suspense } from 'react';
import ContactHero from '../../components/contact/ContactHero';
import ContactSection from '../../components/contact/ContactSection';

const ConsultationSection = lazy(() =>
  import('../../components/contact/ConsultationSection').then((mod) => ({ default: mod.default }))
);
const MapSection = lazy(() =>
  import('../../components/contact/ConsultationSection').then((mod) => ({ default: mod.MapSection }))
);

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <Suspense fallback={<div className="min-h-[100px]" />}>
        <ConsultationSection />
        <MapSection />
      </Suspense>
    </>
  );
}
