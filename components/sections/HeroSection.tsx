'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-light via-white to-coral/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-ocean-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-coral/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-ocean-blue/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-coral/10 rounded-full animate-pulse-soft"></div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-elegant-gray mb-6 mt-24 md:mt-0"
          >
            Escala tu <span className="gradient-text">e-commerce</span> sin caos ni humo
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-4 font-medium"
          >
            Te ayudo a atraer, automatizar y vender con estrategia y alma
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-500 mb-8 leading-relaxed"
          >
            Consultoría de marketing digital para fundadoras de tiendas online que quieren vender más con inteligencia, sin quemarse en el intento.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/contacto"
              className="btn-primary inline-flex items-center gap-2"
            >
              Reserva tu sesión estratégica gratuita
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/servicios"
              className="btn-outline inline-flex items-center gap-2"
            >
              Ver servicios
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <TrendingUp size={20} className="text-ocean-blue" />
              <span className="font-medium">95% clientes aumentan ventas</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Zap size={20} className="text-coral" />
              <span className="font-medium">Resultados en 90 días</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Heart size={20} className="text-ocean-blue" />
              <span className="font-medium">Acompañamiento personal</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="relative z-10">
            <img
              src="/Ecommerce checkout laptop-amico.svg"
              alt="E-commerce checkout illustration"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ocean-blue/20 to-coral/20 rounded-2xl"></div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-ocean-blue">+300%</div>
              <div className="text-sm text-gray-600">Aumento promedio</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-coral">24/7</div>
              <div className="text-sm text-gray-600">Automatización</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;