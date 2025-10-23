"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Activities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activities = [
    {
      title: 'Activités récréatives',
      description: 'À travers des jeux éducatifs, des ateliers créatifs et des activités artistiques, nos élèves éveillent leur imagination, partagent des moments de détente et renforcent leur esprit d\'équipe.',
      icon: 'ri-gamepad-line',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Activités éducatives',
      description: 'Dans un esprit de découverte joyeuse, les élèves acquièrent des compétences en lisant, en expérimentant, en créant et en s\'ouvrant au monde, guidés avec soin dans chaque atelier éducatif.',
      icon: 'ri-microscope-line',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Activités sportives',
      description: 'À travers le jeu, le mouvement et les défis partagés, nos activités sportives éveillent l\'énergie, la coopération et la confiance en soi, tout en cultivant le fair-play et la persévérance.',
      icon: 'ri-football-line',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id='activities' ref={ref} className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-2xl"
          >
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Nos activités extrascolaires</span>
            <h2 className="text-4xl font-bold mt-4 mb-6">Nos activités extrascolaires variées</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Nos activités extrascolaires variées qui complètent l\'enseignement encouragent la créativité et la sociabilité, incluant sports, arts et projets collaboratifs pour enrichir l\'expérience des élèves.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Toutes les activités
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center flex-shrink-0`}>
                    <i className={`${activity.icon} text-3xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}