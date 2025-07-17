'use client';

import HeroSection from '@/components/sections/HeroSection';
import WhyMarDeLeads from '@/components/sections/WhyMarDeLeads';
import ServicesPreview from '@/components/sections/ServicesPreview';
import Testimonials from '@/components/sections/Testimonials';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';
import CommunitySection from '@/components/sections/CommunitySection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio - Escala tu e-commerce sin caos ni humo',
  description: 'Consultoría de marketing digital especializada en fundadoras de tiendas online. Te ayudo a atraer, automatizar y vender con estrategia y alma. Resultados garantizados en 90 días.',
  openGraph: {
    title: 'Mar de Leads - Escala tu e-commerce sin caos ni humo',
    description: 'Consultoría de marketing digital especializada en fundadoras de tiendas online',
    url: 'https://mardeleads.com',
  },
  alternates: {
    canonical: 'https://mardeleads.com',
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden" itemScope itemType="https://schema.org/Organization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mar de Leads",
            "description": "Consultoría de marketing digital especializada en fundadoras de tiendas online",
            "url": "https://mardeleads.com",
            "logo": "https://mardeleads.com/Mar-de-leads-el_bueno-removebg-preview.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+34-650-913-997",
              "contactType": "customer service",
              "email": "maria@mardeleads.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Cantabria",
              "addressCountry": "ES"
            },
            "sameAs": [
              "https://instagram.com/mardeleads",
              "https://linkedin.com/company/mardeleads"
            ]
          })
        }}
      />
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