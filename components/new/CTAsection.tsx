"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Footer from './features/Footer';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <section id='contact' ref={ref} className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white space-y-8"
          >
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Agissez aujourd’hui</span>
            
            <h2 className="text-4xl lg:text-5xl font-bold">
              Contactez-nous pour découvrir comment nous pouvons guider
              <br />
              vos enfants vers un avenir brillant
            </h2>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='#contact'
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-5 rounded-full shadow-lg transition-all duration-300 text-lg whitespace-nowrap cursor-pointer"
            >
              Inscrivez-vous maintenant
            </motion.a>

            <p className="text-blue-200 text-lg mt-8">ou appelez-nous au</p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 cursor-pointer"
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <i className="ri-phone-line text-2xl text-gray-900"></i>
              </div>
              <span className="text-2xl font-bold">(+242) 06 411 72 72</span>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
              {[
                { icon: 'ri-shield-check-line', title: 'Environnement sécurisé', description: 'Campus sécurisé avec surveillance 24/7' },
                { icon: 'ri-global-line', title: 'Programme international', description: 'Programmes éducatifs mixtes' },
                { icon: 'ri-parent-line', title: 'Implication des parents', description: 'Communication et mises à jour régulières' },
                { icon: 'ri-medal-line', title: 'Excellence', description: 'Taux de réussite de 98 %' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-3xl text-yellow-400`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}