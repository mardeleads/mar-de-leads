'use client';

import { motion } from 'framer-motion';
import { Users, MessageSquare, BookOpen, Trophy, Heart, Star } from 'lucide-react';
import { useState } from 'react';

const CommunitySection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para unirse a la comunidad
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const benefits = [
    {
      icon: MessageSquare,
      title: 'Networking Exclusivo',
      description: 'Conecta con otras fundadoras en tu mismo journey'
    },
    {
      icon: BookOpen,
      title: 'Recursos Semanales',
      description: 'Estrategias, plantillas y herramientas actualizadas'
    },
    {
      icon: Trophy,
      title: 'Celebramos Victorias',
      description: 'Compartimos éxitos y nos motivamos mutuamente'
    },
    {
      icon: Heart,
      title: 'Apoyo Incondicional',
      description: 'Comunidad que entiende tus desafíos únicos'
    }
  ];

  const stats = [
    { number: '500+', label: 'Fundadoras activas' },
    { number: '150+', label: 'Países representados' },
    { number: '2M+', label: 'Ingresos generados' },
    { number: '98%', label: 'Recomiendan unirse' }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white p-12 rounded-2xl shadow-2xl max-w-md mx-auto"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-elegant-gray mb-4">
              ¡Bienvenida a la familia!
            </h3>
            <p className="text-gray-600 mb-6">
              Revisa tu email para acceder a la comunidad exclusiva de fundadoras exitosas.
            </p>
            <div className="flex justify-center">
              <Star className="text-yellow-400 fill-current" size={24} />
              <Star className="text-yellow-400 fill-current" size={24} />
              <Star className="text-yellow-400 fill-current" size={24} />
              <Star className="text-yellow-400 fill-current" size={24} />
              <Star className="text-yellow-400 fill-current" size={24} />
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
            Únete a nuestra <span className="gradient-text">Comunidad</span> de fundadoras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una red exclusiva de mujeres que están transformando el e-commerce con estrategia, apoyo mutuo y resultados reales.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-elegant-gray mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-montserrat font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Join Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            ¿Lista para formar parte de algo más grande?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Únete a cientos de fundadoras que ya están escalando sus negocios juntas
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email profesional"
              className="flex-1 px-6 py-3 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Unirme Ahora
            </button>
          </form>
          
          <div className="flex items-center justify-center mt-6 text-sm opacity-90">
            <Users size={16} className="mr-2" />
            <span>100% gratuito • Sin spam • Cancela cuando quieras</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;