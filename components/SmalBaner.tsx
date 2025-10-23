//@ts-nocheck
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Star } from "lucide-react";

export default function SeparatorBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Hook pour détecter quand la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Composant pour animer un chiffre
  const AnimatedNumber = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function pour un effet plus naturel
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        const current = Math.floor(easeOutQuart * end);
        
        setCount(current);

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [isVisible, end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-cover bg-center bg-fixed py-20 sm:py-24 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url('/banner.jpg')`, // Remplacez par votre image
      }}
    >
      {/* Overlay assombri avec gradient */}
      <div className="absolute inset-0 bg-blue-800/30"></div>
      
    
      
      {/* Contenu */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
   
          
          {/* Titre principal */}
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Former les leaders et citoyens <br className="hidden sm:block" />
            <span className="text-yellow-400">de demain</span>
          </h2>
          
          {/* Description */}
          <p className="text-blue-100 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Une éducation d'excellence qui développe le potentiel de chaque enfant dans un environnement  bienveillant
          </p>
          
          {/* Stats ou points clés */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <p className="font-bold text-3xl sm:text-4xl text-white">
                  <AnimatedNumber end={20} suffix="+" />
                </p>
              </div>
              <p className="text-blue-200 text-sm sm:text-base">Ans d'expérience</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <p className="font-bold text-3xl sm:text-4xl text-white">
                  <AnimatedNumber end={50} suffix="" />
                </p>
              </div>
              <p className="text-blue-200 text-sm sm:text-base">Enseignants</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <p className="font-bold text-3xl sm:text-4xl text-white">
                  <AnimatedNumber end={500} suffix="+" />
                </p>
              </div>
              <p className="text-blue-200 text-sm sm:text-base">Élèves</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Motif décoratif en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </section>
  );
}