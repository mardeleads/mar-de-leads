'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Clock, Users, Zap, Target } from 'lucide-react';
import Link from 'next/link';

const ServiciosPage = () => {
  const starService = {
    title: 'Programa Escala Inteligente',
    subtitle: 'Metodología completa para fundadoras que quieren pasar de $10K a $100K+',
    description: 'Sin perder la cordura en el proceso',
    price: 'Desde €2,997',
    duration: '12 semanas',
    includes: [
      'Auditoría completa de tu funnel de ventas',
      'Estrategia de automatización personalizada',
      'Implementación de IA para optimización',
      'Sesiones de mentoring 1:1 semanales',
      'Acceso a comunidad exclusiva de fundadoras',
      'Plantillas y recursos premium',
      'Soporte prioritario via WhatsApp',
      'Garantía de resultados en 90 días'
    ],
    features: [
      { icon: Target, text: 'Estrategia personalizada' },
      { icon: Zap, text: 'Automatización inteligente' },
      { icon: Users, text: 'Comunidad exclusiva' },
      { icon: Star, text: 'Resultados garantizados' }
    ]
  };

  const otherServices = [
    {
      title: 'Auditoría Express',
      duration: '48 horas',
      price: '€497',
      description: 'Análisis completo de tu e-commerce con recomendaciones específicas',
      features: [
        'Análisis de conversión detallado',
        'Revisión de UX/UI',
        'Estrategia de precios',
        'Optimización SEO básica',
        'Reporte con plan de acción'
      ]
    },
    {
      title: 'Intensivo de Conversión',
      duration: '30 días',
      price: '€1,297',
      description: 'Transformación rápida de tu funnel de ventas para máximos resultados',
      features: [
        'Optimización de landing pages',
        'Configuración de emails automatizados',
        'Implementación de pop-ups estratégicos',
        'A/B testing de elementos clave',
        '2 sesiones de mentoring'
      ]
    },
    {
      title: 'Mentoring VIP',
      duration: 'Mensual',
      price: '€897/mes',
      description: 'Acompañamiento personalizado para crecimiento sostenible',
      features: [
        '4 sesiones mensuales 1:1',
        'Acceso prioritario via WhatsApp',
        'Revisión de estrategias en tiempo real',
        'Accountability personalizado',
        'Recursos exclusivos'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Análisis Profundo',
      description: 'Evaluamos tu situación actual, mercado objetivo y oportunidades de crecimiento.',
      icon: Target
    },
    {
      step: '02',
      title: 'Estrategia Personalizada',
      description: 'Diseñamos un plan específico para tu negocio basado en datos y mejores prácticas.',
      icon: Zap
    },
    {
      step: '03',
      title: 'Implementación Guiada',
      description: 'Te acompañamos paso a paso en la ejecución de cada elemento estratégico.',
      icon: Users
    },
    {
      step: '04',
      title: 'Optimización Continua',
      description: 'Monitoreamos resultados y ajustamos la estrategia para máximo rendimiento.',
      icon: Star
    }
  ];

  const faqs = [
    {
      question: '¿Necesito experiencia previa en marketing digital?',
      answer: 'No es necesario. Nuestro programa está diseñado para fundadoras de todos los niveles. Te guiamos paso a paso desde donde estés hasta donde quieres llegar.'
    },
    {
      question: '¿Funciona con cualquier plataforma de e-commerce?',
      answer: 'Sí, trabajamos con Shopify, WooCommerce, Prestashop, y todas las principales plataformas. Adaptamos nuestra metodología a tu infraestructura actual.'
    },
    {
      question: '¿Cuánto tiempo lleva ver resultados?',
      answer: 'La mayoría de nuestras clientas ven mejoras en los primeros 30 días. Los resultados significativos suelen manifestarse entre 60-90 días.'
    },
    {
      question: '¿Incluye soporte técnico?',
      answer: 'Sí, incluimos soporte para la implementación de todas las estrategias. Para aspectos técnicos avanzados, trabajamos con partners especializados.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-light to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-elegant-gray mb-6">
              Servicios que <span className="gradient-text">escalan</span> tu e-commerce
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Soluciones integrales para fundadoras que buscan crecimiento estratégico y sostenible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Star Service */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-ocean-blue to-coral text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ SERVICIO ESTRELLA
              </div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
                {starService.title}
              </h2>
              <p className="text-xl text-gray-600 mb-2">{starService.subtitle}</p>
              <p className="text-lg text-coral font-medium">{starService.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Features */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
                  <h3 className="text-2xl font-montserrat font-semibold mb-6">Qué incluye:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {starService.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-ocean-blue mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {starService.features.map((feature, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md">
                      <feature.icon size={32} className="text-ocean-blue mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-ocean-blue to-coral text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-montserrat font-bold mb-4">Invierte en tu éxito</h3>
                <div className="text-4xl font-bold mb-2">{starService.price}</div>
                <p className="opacity-90 mb-4">{starService.duration}</p>
                <p className="text-sm opacity-80 mb-6">Pago en 3 cuotas sin intereses</p>
                
                <Link
                  href="https://calendar.app.google/9Q7BL2P893YuTFL98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-ocean-blue font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block mb-4"
                >
                  Reservar Llamada
                </Link>
                
                <p className="text-sm opacity-90">
                  💰 Garantía de resultados en 90 días
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
              Otros servicios
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones específicas para cada etapa de tu crecimiento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-montserrat font-semibold text-elegant-gray mb-2">
                  {service.title}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-ocean-blue">{service.price}</span>
                  <span className="text-gray-600">
                    <Clock size={16} className="inline mr-1" />
                    {service.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-ocean-blue mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`https://wa.me/34650913997?text=${encodeURIComponent(`Hola, me interesa conocer más sobre: ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-outline text-center inline-block"
                >
                  Solicitar información
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
              Nuestro proceso de trabajo
            </h2>
            <p className="text-xl text-gray-600">
              Metodología probada para obtener resultados consistentes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-blue to-coral rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-elegant-gray text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-elegant-gray mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos tus dudas más comunes
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-montserrat font-semibold text-elegant-gray mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-ocean-blue to-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              ¿Lista para transformar tu e-commerce?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Reserva tu sesión estratégica gratuita y descubre qué servicio se adapta mejor a tus necesidades.
            </p>
            <Link
              href="https://calendar.app.google/9Q7BL2P893YuTFL98"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ocean-blue font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Reservar Sesión Gratuita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;