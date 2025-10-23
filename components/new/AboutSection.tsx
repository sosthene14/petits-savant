"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='about' ref={ref} className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">À propos de nous</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Un engagement profond pour l’éducation et le bien-être des élèves
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Le complexe scolaire offre un environnement éducatif de qualité pour les enfants, de la crèche aux cycles préscolaire, primaire et secondaire de premier niveau.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nous croyons en la promotion non seulement de l’excellence académique, mais aussi du développement émotionnel, social et créatif de chaque enfant. Nos éducateurs expérimentés créent une atmosphère de soutien où les élèves se sentent valorisés et inspirés pour atteindre leur plein potentiel.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              En savoir plus
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://les-petits-savants.com/wp-content/uploads/2025/05/CSLPS-IMAGE-DE-LENSEIGNANTE-2.jpg"
                alt="Enseignante en classe"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-3xl text-white"></i>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">20+</p>
                  <p className="text-sm text-gray-600">Années d’expérience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-8 -right-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-8 shadow-2xl text-white"
            >
              <div className="text-center">
                <i className="ri-user-smile-line text-4xl mb-2"></i>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm">Élèves</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}