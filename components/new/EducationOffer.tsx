"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EducationalOffers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const offers = [
    {
      title: 'Crèche multi-âges',
      description: 'Notre crèche multi-âges accueille les enfants dès 3 mois dans un environnement doux, sécurisé et stimulant.',
      icon: 'ri-bear-smile-line',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Cycle préscolaire',
      description: 'Notre programme préscolaire propose une approche ludique pour éveiller la curiosité et le développement des jeunes apprenants à travers des activités pratiques.',
      icon: 'ri-palette-line',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Cycle primaire',
      description: 'Nous offrons une éducation de qualité axée sur l’excellence académique et le bien-être des élèves à travers un apprentissage pratique et expérimental.',
      icon: 'ri-book-open-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cycle secondaire',
      description: 'Notre collège général prépare les élèves pour l’avenir avec une pédagogie innovante et des activités enrichissantes.',
      icon: 'ri-graduation-cap-line',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id='classes' ref={ref} className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-2xl"
          >
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Nos services éducatifs</span>
            <h2 className="text-4xl font-bold mt-4 mb-6">Nos programmes scolaires exceptionnels</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Des programmes de qualité pour le développement harmonieux des apprenants au sein de notre institution.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Tous les services
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${offer.color} flex items-center justify-center mb-4`}>
                  <i className={`${offer.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{offer.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}