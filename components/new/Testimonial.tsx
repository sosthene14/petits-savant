"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      text: 'L’éducation et l’enseignement que reçoit mon fils ici sont exceptionnels. L’équipe pédagogique est très impliquée et attentive à tous les détails nécessaires.',
      author: 'Mme Ruth VOUVOUNGUI',
      rating: 5
    },
    {
      text: 'Je suis ravie de voir ma fille s’épanouir dans un environnement chaleureux et stimulant. LES PETITS SAVANTS est véritablement une belle découverte enrichissante.',
      author: 'Mme MARIE ANDREA BAHANA',
      rating: 5
    },
    {
      text: 'Cette école offre un environnement idéal pour les enfants. Ma fille apprécie ses enseignants et les activités proposées. Je la recommande vivement.',
      author: 'M. WADAGOYE',
      rating: 5
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Ce qu’ils disent de nous</h2>
          
          <div className="flex justify-center gap-12 mb-8">
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-2xl text-yellow-400"></i>
                ))}
              </div>
              <p className="text-sm text-gray-600">Basé sur les avis Google</p>
            </div>
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-2xl text-yellow-400"></i>
                ))}
              </div>
              <p className="text-sm text-gray-600">Basé sur les avis Yelp</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-double-quotes-l text-3xl text-white"></i>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-xl text-yellow-400"></i>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}