'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      role: 'Fundadora de Belleza Natural',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Gracias a Mar de Leads pasé de $8K a $35K mensuales en solo 4 meses. Su estrategia de automatización cambió completamente mi negocio.',
      rating: 5,
      results: '+337% en ventas'
    },
    {
      name: 'Carmen Rodríguez',
      role: 'CEO de Moda Consciente',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'El acompañamiento personalizado fue clave. No solo aumenté mis ventas, sino que ahora tengo una mentalidad completamente diferente.',
      rating: 5,
      results: '+280% en conversión'
    },
    {
      name: 'Ana López',
      role: 'Fundadora de Vida Saludable',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Su metodología ESCALA me ayudó a estructurar mi negocio de manera que ahora prácticamente se maneja solo. Increíble.',
      rating: 5,
      results: '+420% en ingresos'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
            Lo que dicen nuestras <span className="gradient-text">clientas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de fundadoras que han transformado sus negocios con nuestra metodología.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <Quote size={48} className="text-ocean-blue/20 mx-auto mb-4" />
                    
                    <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-montserrat font-semibold text-elegant-gray">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-ocean-blue to-coral text-white px-4 py-2 rounded-full inline-block">
                      {testimonial.results}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-ocean-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;