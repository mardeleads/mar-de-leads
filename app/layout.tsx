import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: {
    default: 'Mar de Leads - Consultoría de Marketing Digital para E-commerce',
    template: '%s | Mar de Leads'
  },
  description: 'Especialistas en ayudar a fundadoras de tiendas online a escalar sus negocios de forma estratégica y sostenible. Aumenta tus ventas con estrategia, automatización y resultados garantizados.',
  keywords: ['marketing digital', 'e-commerce', 'mujeres emprendedoras', 'tiendas online', 'automatización', 'conversión', 'consultoría marketing', 'escalar negocio online', 'fundadoras', 'shopify', 'woocommerce'],
  authors: [{ name: 'Mar de Leads' }],
  creator: 'Mar de Leads',
  publisher: 'Mar de Leads',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/Favicon-Mar.png',
    shortcut: '/Favicon-Mar.png',
    apple: '/Favicon-Mar.png',
  },
  openGraph: {
    title: 'Mar de Leads - Escala tu e-commerce sin caos ni humo',
    description: 'Te ayudo a atraer, automatizar y vender con estrategia y alma. Consultoría especializada para fundadoras de tiendas online.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://mardeleads.com',
    siteName: 'Mar de Leads',
    images: [
      {
        url: '/Mar-de-leads-el_bueno-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Mar de Leads - Consultoría de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mar de Leads - Escala tu e-commerce sin caos ni humo',
    description: 'Te ayudo a atraer, automatizar y vender con estrategia y alma',
    images: ['/Mar-de-leads-el_bueno-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://mardeleads.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}