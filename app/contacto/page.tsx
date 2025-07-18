'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Clock, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Reserva tu Sesión Estratégica Gratuita',
  description: 'Contacta con Mar de Leads para reservar tu sesión estratégica gratuita. Descubre cómo podemos escalar tu e-commerce en los próximos 90 días.',
  openGraph: {
    title: 'Contacto - Mar de Leads',
    description: 'Reserva tu sesión estratégica gratuita con Mar de Leads',
    url: 'https://mardeleads.com/contacto',
  },
  alternates: {
    canonical: 'https://mardeleads.com/contacto',
  },
};

const ContactoPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Ingresa un email válido'),
    comment: z.string().min(10, 'Déjanos tu comentario'),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: any) => {
    // Aquí iría la lógica para enviar el formulario
    console.log('Form data:', data);
    setFormSubmitted(true);
    reset();
    
    // Simular envío
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'maria@mardeleads.com',
      action: 'mailto:maria@mardeleads.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 650 913 997',
      action: 'tel:+34650913997'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Cantabria, España',
      action: ''
    }
  ];

  const socialChannels = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Business',
      description: 'Respuesta inmediata',
      action: 'https://wa.me/34123456789'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: '@mardeleads',
      action: 'https://instagram.com/mardeleads'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Conectemos profesionalmente',
      action: 'https://linkedin.com/company/mardeleads'
    }
  ];

  if (formSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-light to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white p-12 rounded-2xl shadow-2xl max-w-md mx-4"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-montserrat font-bold text-elegant-gray mb-4">
            ¡Mensaje enviado!
          </h2>
          <p className="text-gray-600 mb-6">
            Gracias por tu interés. Te contactaré en las próximas 24 horas para agendar nuestra sesión estratégica.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="btn-primary"
          >
            Volver al formulario
          </button>
        </motion.div>
      </div>
    );
  }

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
              Hablemos de tu <span className="gradient-text">próximo nivel</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Reserva tu sesión estratégica gratuita y descubre cómo podemos escalar tu e-commerce juntas
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-ocean-blue" />
                <span>30 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-coral" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-ocean-blue" />
                <span>Plan personalizado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-2xl font-montserrat font-bold text-elegant-gray mb-6">
                Contáctanos
              </h2>
              <p className="text-gray-600 mb-8">
                Déjanos tu información y nos pondremos en contacto contigo.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name?.message as string}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email?.message as string}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comentario *
                  </label>
                  <textarea
                    {...register('comment')}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all"
                    placeholder="Cuéntanos sobre tu negocio, tus desafíos o cualquier consulta que tengas..."
                  />
                  {errors.comment && (
                    <p className="text-red-500 text-sm mt-1">{errors.comment?.message as string}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Calendar Booking */}
            <div className="bg-gradient-to-br from-ocean-blue to-coral text-white rounded-2xl p-8 text-center">
              <Calendar size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                ¿Prefieres reservar directo?
              </h3>
              <p className="mb-6 opacity-90">
                Accede a mi calendario y elige el horario que mejor te convenga
              </p>
              <a
                href="https://calendar.app.google/9Q7BL2P893YuTFL98"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-ocean-blue font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Reservar Llamada Ahora
              </a>
              <p className="text-sm opacity-80 mt-4">
                Sesión de 30 minutos • Completamente gratuita
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-montserrat font-semibold text-elegant-gray mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-ocean-blue/10 rounded-full flex items-center justify-center">
                      <item.icon size={20} className="text-ocean-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{item.title}</p>
                      {item.action ? (
                        <a href={item.action} className="text-ocean-blue hover:text-coral transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-montserrat font-semibold text-elegant-gray mb-6">
                Canales alternativos
              </h3>
              <div className="space-y-4">
                {socialChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-ocean-blue to-coral rounded-full flex items-center justify-center">
                      <channel.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{channel.title}</p>
                      <p className="text-sm text-gray-600">{channel.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Lead Magnet */}
            <div className="bg-gradient-to-br from-coral to-red-500 text-white rounded-2xl p-8 text-center">
              <Download size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-bold mb-4">
                Únete a la Comunidad
              </h3>
              <p className="mb-6 opacity-90">
                Red exclusiva de fundadoras exitosas + recursos semanales
              </p>
              <button className="bg-white text-coral font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Unirme Gratis
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;