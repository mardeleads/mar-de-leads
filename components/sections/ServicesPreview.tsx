'use client';

import { motion } from 'framer-motion';
import { Search, Zap, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesPreview = () => {
  const services = [
    {
      icon: Search,
      title: 'Auditoría de E-commerce',
      description: 'Análisis completo de tu tienda online para identificar oportunidades de mejora y crecimiento.',
      features: ['Análisis de conversión', 'Revisión de UX/UI', 'Estrategia de precios', 'Optimización SEO'],
      color: 'from-ocean-blue to-blue-600'
    },
    {
      icon: Zap,
      title: 'Estrategia de Automatización',
      description: 'Implementación de sistemas que trabajen por ti para aumentar ventas sin esfuerzo adicional.',
      features: ['Email marketing', 'Chatbots inteligentes', 'Workflows automatizados', 'Seguimiento de leads'],
      color: 'from-coral to-red-500'
    },
    {
      icon: Users,
      title: 'Mentoring Ejecutivo',
      description: 'Acompañamiento personalizado para fundadoras que quieren escalar con estrategia y mentalidad.',
      features: ['Sesiones 1:1', 'Plan estratégico', 'Accountability', 'Acceso a comunidad'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
            Servicios que <span className="gradient-text">transforman</span> tu negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales diseñadas específicamente para fundadoras de e-commerce que buscan resultados reales.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-montserrat font-semibold text-elegant-gray mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-ocean-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/34650913997?text=${encodeURIComponent(`Hola, me interesa conocer más sobre el servicio: ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocean-blue font-semibold hover:text-coral transition-colors duration-300 flex items-center gap-2 group"
                >
                  Solicitar información
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/servicios"
            className="btn-primary inline-flex items-center gap-2"
          >
            Ver todos los servicios
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;