import AboutSection from '@/components/new/AboutSection';
import Activities from '@/components/new/Activities';
import CTASection from '@/components/new/CTAsection';
import EducationalOffers from '@/components/new/EducationOffer';
import HeroSection from '@/components/new/HeroSection';
import Testimonials from '@/components/new/Testimonial';
import WhyChooseUs from '@/components/new/WhyChooseUs';
import SeparatorBanner from '@/components/SmalBaner';
import { Suspense } from 'react';
 

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <HeroSection />
        <WhyChooseUs />
        <EducationalOffers />
        <Testimonials />
        <SeparatorBanner />
        <Activities />
        <AboutSection />
        <CTASection />
      </Suspense>
    </div>
  );
}
