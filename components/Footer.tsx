'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: 'https://instagram.com/mardeleads', icon: Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com/company/mardeleads', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:hola@mardeleads.com', icon: Mail, label: 'Email' },
  ];

  const quickLinks = [
    { href: '/servicios', label: 'Servicios' },
    { href: '/sobre-mi', label: 'Sobre Mí' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/recursos', label: 'Recursos' },
  ];

  return (
    <footer className="bg-elegant-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <img
                src="/Mar-de-leads-sin_fondo_cropped_via_10015_io.png"
                alt="Mar de Leads"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Consultoría de marketing digital especializada en ayudar a fundadoras de tiendas online a escalar sus negocios de forma estratégica y sostenible.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ocean-blue transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-montserrat font-semibold text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-coral transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="font-montserrat font-semibold text-lg">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-coral" />
                <a href="mailto:maria@mardeleads.com" className="text-gray-300 hover:text-coral transition-colors">maria@mardeleads.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-coral" />
                <span className="text-gray-300">+34 650 913 997</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-coral" />
                <span className="text-gray-300">Cantabria, España</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-montserrat font-medium mb-2">Comunidad de fundadoras</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-coral"
                />
                <button className="bg-coral hover:bg-coral/90 px-6 py-2 rounded-r-full transition-colors duration-300">
                  Unirme
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mar de Leads. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;