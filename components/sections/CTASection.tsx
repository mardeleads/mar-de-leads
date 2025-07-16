'use client';

import { motion } from 'framer-motion';
import { Calendar, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ocean-blue to-coral text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            ¿Lista para escalar tu e-commerce sin perder la cordura?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reserva tu sesión estratégica gratuita y descubre cómo puedes aumentar tus ventas en los próximos 90 días.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="https://calendar.app.google/9Q7BL2P893YuTFL98"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ocean-blue font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <Calendar size={20} />
              Reservar Sesión Estratégica
            </Link>
            
            <Link
              href="/recursos"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-ocean-blue transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Download size={20} />
              Descargar Guía Gratuita
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30 min</div>
              <div className="opacity-80">Sesión gratuita</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Sin compromiso</div>
              <div className="opacity-80">Evaluación honest</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Resultados</div>
              <div className="opacity-80">Plan personalizado</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-lg opacity-90">
              Únete a más de 150 fundadoras que ya han transformado sus negocios
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;