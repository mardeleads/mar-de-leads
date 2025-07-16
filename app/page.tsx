'use client';

import HeroSection from '@/components/sections/HeroSection';
import WhyMarDeLeads from '@/components/sections/WhyMarDeLeads';
import ServicesPreview from '@/components/sections/ServicesPreview';
import Testimonials from '@/components/sections/Testimonials';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';
import CommunitySection from '@/components/sections/CommunitySection';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <WhyMarDeLeads />
      <ServicesPreview />
      <StatsSection />
      <Testimonials />
      <CommunitySection />
      <CTASection />
    </div>
  );
}