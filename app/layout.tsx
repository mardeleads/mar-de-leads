import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Mar de Leads - Consultoría de Marketing Digital para E-commerce',
  description: 'Especialistas en ayudar a fundadoras de tiendas online a escalar sus negocios de forma estratégica y sostenible. Estrategia, automatización y resultados.',
  keywords: 'marketing digital, e-commerce, mujeres emprendedoras, tiendas online, automatización, conversión',
  authors: [{ name: 'Mar de Leads' }],
  icons: {
    icon: '/Favicon-Mar.png',
    shortcut: '/Favicon-Mar.png',
    apple: '/Favicon-Mar.png',
  },
  openGraph: {
    title: 'Mar de Leads - Escala tu e-commerce sin caos ni humo',
    description: 'Te ayudo a atraer, automatizar y vender con estrategia y alma',
    type: 'website',
    locale: 'es_ES',
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