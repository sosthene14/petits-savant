"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      title: 'Pédagogie innovante',
      description: 'Notre approche centrée sur l’apprenant favorise des méthodes interactives adaptées à chaque élève. Nous cultivons un environnement d’apprentissage stimulant.',
      icon: 'ri-lightbulb-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Équipe dévouée',
      description: 'Nos enseignants sont des professionnels passionnés, engagés à accompagner chaque apprenant. Leur attention contribue au bien-être des élèves.',
      icon: 'ri-team-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Activités enrichissantes',
      description: 'Nous proposons une variété d’activités extrascolaires qui complètent l’apprentissage, permettant aux élèves d’explorer leurs passions et talents.',
      icon: 'ri-star-line',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Pourquoi choisir notre école ?</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Un environnement éducatif unique et enrichissant
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-cyan-200 font-semibold text-sm uppercase tracking-wider">Éducation engageante pour tous</span>
              <h3 className="text-3xl font-bold mt-4 mb-6">Découvrez nos programmes scolaires exceptionnels</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Nous proposons des activités enrichissantes qui complètent l’apprentissage. Explorez notre programme mixte (congolais-français-belge-américain tout-en-un) pour une éducation complète et dynamique.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-2xl"></i>
                </div>
                <span className="text-xl font-semibold">(+242) 06 411 72 72</span>
              </div>
            </div>
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 blur-3xl"
              />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '500+', label: 'Élèves' },
                    { number: '50+', label: 'Enseignants' },
                    { number: '20+', label: 'Années' },
                    { number: '98%', label: 'Réussite' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="text-center"
                    >
                      <p className="text-3xl font-bold">{stat.number}</p>
                      <p className="text-blue-100 text-sm mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}