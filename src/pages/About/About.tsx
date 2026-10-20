import { lazy, Suspense } from 'react';
import AboutHero from '../../components/about/AboutHero';

const AboutVisionApproach = lazy(() => import('../../components/about/AboutVisionApproach'));
const AboutCTA = lazy(() => import('../../components/about/AboutCTA'));

export default function About() {
  return (
    <>
      <AboutHero />
      <Suspense fallback={<div className="min-h-[100px]" />}>
        <AboutVisionApproach />
        <AboutCTA />
      </Suspense>
    </>
  );
}
