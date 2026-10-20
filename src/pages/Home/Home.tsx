import Hero from '../../components/home/Hero';
// import TrustedBy from '../../components/home/TrustedBy';
import AboutPreview from '../../components/home/AboutPreview';
import OurApproach from '../../components/home/OurApproach';
import Services from '../../components/home/Services';
import EngagementPrograms from '../../components/home/EngagementPrograms';
import WhyChooseUs from '../../components/home/WhyChooseUs';
// import IndustriesWeServe from '../../components/home/IndustriesWeServe';
import HowItWorks from '../../components/home/HowItWorks';
import Programs from '../../components/home/Programs';
import Stats from '../../components/home/Stats';
import Testimonials from '../../components/home/Testimonials';
import FAQ from '../../components/home/FAQ';
import HomeRegistration from '../../components/home/HomeRegistration';
import BlogPreview from '../../components/home/BlogPreview';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustedBy /> */}
      <AboutPreview />
      <WhyChooseUs />
      <Services />
      <OurApproach />
      <EngagementPrograms />
      {/* <IndustriesWeServe /> */}
      <HowItWorks />
      <Programs />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <HomeRegistration />
    </>
  );
}
