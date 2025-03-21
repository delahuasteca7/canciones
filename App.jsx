import React, { useState } from "react";
import { FaMusic, FaGuitar, FaMicrophone, FaCompactDisc, FaStar, FaPlayCircle, FaMoon, FaSun, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const PersonalizedSongs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");
  const [showForm, setShowForm] = useState(false);

  const testimonials = [
    {
      name: "María González",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "La canción que crearon para mi boda fue simplemente mágica."
    },
    {
      name: "Carlos Rodríguez",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      quote: "Una experiencia inolvidable y una melodía perfecta."
    }
  ];

  const pricingTiers = [
    {
      name: "Básico",
      price: "299",
      features: ["Letra personalizada", "Melodía única", "1 revisión"]
    },
    {
      name: "Premium",
      price: "499",
      features: ["Grabación profesional", "3 revisiones", "Múltiples instrumentos"]
    },
    {
      name: "VIP",
      price: "999",
      features: ["Experiencia completa", "Revisiones ilimitadas", "Video musical"]
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Header */}
      <nav className="fixed w-full z-50 bg-opacity-90 backdrop-blur-lg bg-white dark:bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MusicaCrea</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="px-3 py-1 rounded-md bg-purple-600 text-white"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d')" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute" />
        <div className="container mx-auto px-4 relative text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Crea tu Canción Única
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Música Personalizada para Momentos Especiales
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => setShowForm(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            Crear Mi Canción
          </motion.button>
        </div>
      </section>

      {/* Service Steps */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Cómo Funciona</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FaMusic, title: "Consulta inicial" },
              { icon: FaGuitar, title: "Diseño musical" },
              { icon: FaMicrophone, title: "Producción" },
              { icon: FaCompactDisc, title: "Entrega final" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <step.icon className="w-16 h-16 mx-auto text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Planes y Precios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="border rounded-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <p className="text-4xl font-bold mb-6">${tier.price}</p>
                <ul className="mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <FaStar className="text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg">
                  Seleccionar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mr-6"
                />
                <div>
                  <p className="text-lg mb-2">{testimonial.quote}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-md">
            <h3 className="text-2xl font-bold mb-6">Comenzar Mi Proyecto</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border rounded-lg dark:bg-gray-700"
              />
              <select className="w-full p-3 border rounded-lg dark:bg-gray-700">
                <option>Ocasión para la canción</option>
                <option>Boda</option>
                <option>Cumpleaños</option>
                <option>Aniversario</option>
              </select>
              <textarea
                placeholder="Mensaje o historia a incluir"
                className="w-full p-3 border rounded-lg dark:bg-gray-700"
                rows="4"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full p-3 border rounded-lg dark:bg-gray-700"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/+1234567890?text=Hola,%20me%20interesa%20crear%20una%20canción%20personalizada"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default PersonalizedSongs;