import { lazy, Suspense } from 'react';
import AboutHero from '../../components/about/AboutHero';

const AboutMissionVision = lazy(() => import('../../components/about/AboutMissionVision'));
const AboutWellnessPillars = lazy(() => import('../../components/about/AboutWellnessPillars'));
const AboutEmployeeFirst = lazy(() => import('../../components/about/AboutEmployeeFirst'));
const LeafCTABanner = lazy(() => import('../../components/common/LeafCTABanner'));

export default function About() {
  return (
    <div className="w-full bg-[#FAF9F5]">
      <AboutHero />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <AboutMissionVision />
        <AboutWellnessPillars />
        <AboutEmployeeFirst />
        <LeafCTABanner />
      </Suspense>
    </div>
  );
}
