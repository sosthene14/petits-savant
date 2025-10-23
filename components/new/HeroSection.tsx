"use client";

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Navigation from './features/Navigation';
import { Sphere, Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroSection() {
  return (
    <div id='' className="relative min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-yellow-100 overflow-hidden">
      <Navigation />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-yellow-300 rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <p className="text-blue-600 font-semibold text-sm">Inscriptions ouvertes pour 2025-2026</p>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              L'école qui rend
              <span className="block text-blue-600 mt-2">l'apprentissage agréable</span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Un univers d'apprentissage créatif et sécurisé où l'excellence rencontre le soin du développement de chaque enfant
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              En savoir plus
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
              </Canvas>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-book-open-line text-3xl text-blue-600"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Étudiants heureux</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-20 right-10 bg-white p-6 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="ri-trophy-line text-3xl text-yellow-600"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-600">Taux de réussite</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: 'ri-book-2-line', title: 'À propos de l\'école', color: 'blue' },
            { icon: 'ri-group-line', title: 'Nos classes', color: 'green' },
            { icon: 'ri-palette-line', title: 'Activités', color: 'purple' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer"
            >
              <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4`}>
                <i className={`${item.icon} text-3xl text-${item.color}-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}