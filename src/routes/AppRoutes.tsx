import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import SmoothSuspense from '../components/common/SmoothSuspense';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Services = lazy(() => import('../pages/Services/Services'));
const ServiceDetail = lazy(() => import('../pages/Services/ServiceDetail'));
const Programs = lazy(() => import('../pages/Programs/Programs'));
const PrivacyPolicy = lazy(() => import('../pages/Legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../pages/Legal/TermsOfService'));
const WellnessHub = lazy(() => import('../pages/WellnessHub/WellnessHub'));
const WellnessArticle = lazy(() => import('../pages/WellnessHub/WellnessArticle'));
const SuccessStories = lazy(() => import('../pages/SuccessStories/SuccessStories'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const WhyWellness = lazy(() => import('../pages/WhyWellness/WhyWellness'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export default function AppRoutes() {
  return (
    <SmoothSuspense>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="programs" element={<Programs />} />
          <Route path="why-wellness" element={<WhyWellness />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="health-hub" element={<WellnessHub />} />
          <Route path="health-hub/:slug" element={<WellnessArticle />} />
          <Route path="blog" element={<WellnessHub />} />
          <Route path="blog/:slug" element={<WellnessArticle />} />
          <Route path="resources" element={<WellnessHub />} />
          <Route path="resources/:slug" element={<WellnessArticle />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SmoothSuspense>
  );
}
