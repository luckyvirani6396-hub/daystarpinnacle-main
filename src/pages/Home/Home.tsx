import { lazy, Suspense } from 'react';
import Hero from '../../components/home/Hero';
import AboutPreview from '../../components/home/AboutPreview';
import WhyChooseUs from '../../components/home/WhyChooseUs';

// Lazy-loaded below-the-fold sections for optimal initial load speed and code splitting
const Services = lazy(() => import('../../components/home/Services'));
const OurApproach = lazy(() => import('../../components/home/OurApproach'));
const EngagementPrograms = lazy(() => import('../../components/home/EngagementPrograms'));
const HowItWorks = lazy(() => import('../../components/home/HowItWorks'));
const Programs = lazy(() => import('../../components/home/Programs'));
const Stats = lazy(() => import('../../components/home/Stats'));
const BlogPreview = lazy(() => import('../../components/home/BlogPreview'));
const FAQ = lazy(() => import('../../components/home/FAQ'));
const HomeRegistration = lazy(() => import('../../components/home/HomeRegistration'));

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <Suspense fallback={<div className="min-h-[100px]" />}>
        <Services />
        <OurApproach />
        <EngagementPrograms />
        <HowItWorks />
        <Programs />
        <Stats />
        <BlogPreview />
        <FAQ />
        <HomeRegistration />
      </Suspense>
    </>
  );
}
