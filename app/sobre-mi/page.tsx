'use client';

import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Heart, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import CommunitySection from '@/components/sections/CommunitySection';

const SobreMiPage = () => {
  const differentiators = [
    {
      icon: Target,
      title: 'Enfoque Integral',
      description: 'Marketing + Tecnología + Mentalidad en una sola estrategia'
    },
    {
      icon: Users,
      title: 'Especialización Única',
      description: 'Exclusivamente para fundadoras de tiendas online'
    },
    {
      icon: Zap,
      title: 'Metodología ESCALA',
      description: 'Framework propietario: Estrategia, Sistemas, Conversión, Automatización, Liderazgo, Abundancia'
    },
    {
      icon: Heart,
      title: 'Comunidad de Apoyo',
      description: 'Red de fundadoras exitosas que se apoyan mutuamente'
    }
  ];

  const credentials = [
    {
      title: 'Certificación Google Ads',
      description: 'Especialista certificada en publicidad digital'
    },
    {
      title: 'Facebook Blueprint',
      description: 'Experta en marketing en redes sociales'
    },
    {
      title: 'HubSpot Certified',
      description: 'Automatización de marketing e inbound'
    },
    {
      title: 'Shopify Plus Partner',
      description: 'Especialista en e-commerce de alto volumen'
    }
  ];

  const escalaFramework = [
    { letter: 'E', word: 'Estrategia', description: 'Definir objetivos claros y plan de acción' },
    { letter: 'S', word: 'Sistemas', description: 'Crear procesos automatizados y eficientes' },
    { letter: 'C', word: 'Conversión', description: 'Optimizar cada punto de contacto' },
    { letter: 'A', word: 'Automatización', description: 'Tecnología que trabaja por ti' },
    { letter: 'L', word: 'Liderazgo', description: 'Desarrollar mentalidad de CEO' },
    { letter: 'A', word: 'Abundancia', description: 'Mindset de crecimiento sostenible' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-light to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-elegant-gray mb-6">
                Hola, soy <span className="gradient-text">María</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Fundadora de Mar de Leads y mentora de emprendedoras digitales
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Después de 8 años ayudando a empresas tradicionales, descubrí mi verdadera pasión: 
                empoderar a mujeres fundadoras para que escalen sus e-commerce sin sacrificar su bienestar.
              </p>
              <div className="flex gap-4">
                <Link href="/contacto" className="btn-primary">
                  Trabajemos juntas
                </Link>
                <Link href="/servicios" className="btn-outline">
                  Mis servicios
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="María - Fundadora de Mar de Leads"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ocean-blue/10 to-coral/10 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-8 text-center">
              Mi historia
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Mi journey comenzó trabajando en agencias de marketing tradicionales, donde aprendí las bases 
                del marketing digital. Pero algo me faltaba: <strong>la conexión personal</strong> y la posibilidad 
                de generar un impacto real en la vida de las emprendedoras.
              </p>
              
              <p>
                En 2019, decidí dar el salto y crear Mar de Leads con una misión clara: 
                <strong>ayudar a mujeres fundadoras a escalar sus e-commerce de forma estratégica y sostenible</strong>, 
                sin caer en el burnout que yo misma había experimentado.
              </p>
              
              <p>
                Desde entonces, he tenido el privilegio de trabajar con más de 150 fundadoras, ayudándolas 
                a multiplicar sus ventas mientras mantienen su bienestar y equilibrio personal. 
                Cada historia de éxito de mis clientas es mi mayor motivación.
              </p>
              
              <p>
                Creo firmemente que <strong>el éxito empresarial no debe venir a costa de tu salud mental</strong>. 
                Por eso, mi enfoque combina estrategia de marketing con mentalidad de crecimiento, 
                creando un ecosistema donde puedes prosperar sin sacrificar lo que más valoras.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-ocean-blue/10 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} className="text-ocean-blue" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-elegant-gray mb-4">
                Mi Misión
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Empoderar a mujeres fundadoras para que construyan e-commerce prósperos y sostenibles, 
                proporcionándoles las herramientas, estrategias y mentalidad necesarias para alcanzar 
                sus objetivos sin comprometer su bienestar personal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-coral" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-elegant-gray mb-4">
                Mi Visión
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Crear un ecosistema global donde las mujeres fundadoras de e-commerce puedan prosperar, 
                colaborar y apoyarse mutuamente, redefiniendo el éxito empresarial desde una perspectiva 
                más humana y sostenible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
              Lo que me hace <span className="gradient-text">diferente</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No soy una consultora más. Soy una fundadora que entiende tus desafíos porque los he vivido.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-blue to-coral rounded-full flex items-center justify-center mb-6">
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-elegant-gray mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCALA Framework */}
      <section className="py-20 bg-elegant-gray text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Metodología <span className="gradient-text">ESCALA</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mi framework propietario para transformar e-commerce de forma integral
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {escalaFramework.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-ocean-blue to-coral rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">{item.letter}</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">
                  {item.word}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-elegant-gray mb-4">
              Mis credenciales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Formación continua para ofrecerte siempre las mejores estrategias
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-ocean-blue to-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-montserrat font-semibold text-elegant-gray">
                    {credential.title}
                  </h3>
                  <p className="text-gray-600">{credential.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <CommunitySection />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-ocean-blue to-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              ¿Lista para escribir tu historia de éxito?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Hagamos que tu e-commerce sea la herramienta que transforme tu vida, no que la consuma.
            </p>
            <Link
              href="/contacto"
              className="bg-white text-ocean-blue font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Reservar Sesión Conmigo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SobreMiPage;