'use client';

import { motion } from 'framer-motion';
import { Target, Bot, Heart, TrendingUp } from 'lucide-react';

const WhyMarDeLeads = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Estrategia Clara',
      description: 'Sin tácticas dispersas, enfoque integral que realmente funciona',
      color: 'text-ocean-blue',
      bgColor: 'bg-ocean-blue/10'
    },
    {
      icon: Bot,
      title: 'Automatización Inteligente',
      description: 'Tecnología que trabaja por ti 24/7 mientras tú descansas',
      color: 'text-coral',
      bgColor: 'bg-coral/10'
    },
    {
      icon: Heart,
      title: 'Toque Humano',
      description: 'Acompañamiento personal y cercano en cada paso del camino',
      color: 'text-ocean-blue',
      bgColor: 'bg-ocean-blue/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
            Por qué <span className="gradient-text">Mar de Leads</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No somos una agencia más. Somos especialistas en fundadoras como tú que quieren resultados reales.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="card-hover p-8 text-center group"
            >
              <div className={`w-16 h-16 ${pillar.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon size={32} className={pillar.color} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-elegant-gray mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-ocean-blue to-coral rounded-3xl p-8 text-center text-white"
        >
          <div className="flex items-center justify-center mb-4">
            <TrendingUp size={32} className="mr-2" />
            <h3 className="text-2xl font-montserrat font-bold">
              Resultados que hablan por sí solos
            </h3>
          </div>
          <p className="text-xl font-semibold">
            95% de nuestras clientas incrementan sus ventas en 90 días
          </p>
          <p className="text-lg opacity-90 mt-2">
            Con metodología probada y acompañamiento personalizado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMarDeLeads;