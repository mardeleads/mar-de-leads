'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    growth: 0,
    satisfaction: 0,
    experience: 0
  });

  const stats = [
    {
      icon: Users,
      value: 150,
      suffix: '+',
      label: 'Clientas Exitosas',
      color: 'text-ocean-blue'
    },
    {
      icon: TrendingUp,
      value: 300,
      suffix: '%',
      label: 'Crecimiento Promedio',
      color: 'text-coral'
    },
    {
      icon: Award,
      value: 98,
      suffix: '%',
      label: 'Satisfacción',
      color: 'text-ocean-blue'
    },
    {
      icon: Clock,
      value: 5,
      suffix: '+',
      label: 'Años de Experiencia',
      color: 'text-coral'
    }
  ];

  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration]);
    
    return count;
  };

  return (
    <section className="py-20 bg-elegant-gray text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Números que <span className="gradient-text">respaldan</span> nuestra experiencia
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada número representa fundadoras que han transformado sus negocios con nuestra metodología.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${stat.color.replace('text-', 'bg-')}/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={36} className={stat.color} />
                </div>
              </div>
              
              <div className="text-4xl md:text-5xl font-montserrat font-bold mb-2">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                />
              </div>
              
              <p className="text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl font-light italic max-w-4xl mx-auto">
            "No se trata solo de números, se trata de vidas transformadas y sueños hechos realidad."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [end, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.div>
  );
};

export default StatsSection;