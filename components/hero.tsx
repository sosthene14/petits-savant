"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      className="relative h-[80vh] sm:h-[60vh] md:h-[100vh]  flex flex-col px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('/hero.png')`,
       
        backgroundSize: "stretch",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      {/* Header fixe en haut */}
      <header className="relative z-20 w-full py-4 lg:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/logo-Petits_Savants.png" 
                alt="logo" 
                // ✨ MODIFICATION ICI: Réduction de la taille du logo sur les petites vues (max-width: 640px)
                // w-10 h-10 pour mobile (par défaut), sm:w-12 sm:h-12 pour sm (640px+), lg:w-24 lg:h-24 pour desktop (1024px+)
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-24 lg:h-24" 
              />
              <h1 className="font-bold text-blue-800">
                {/* ✨ MODIFICATION ICI: Réduction de la taille du titre sur mobile */}
                {/* text-base pour mobile (par défaut), sm:text-xl pour sm, lg:text-2xl pour desktop */}
                <span className="text-base sm:text-xl lg:text-2xl">
                  Les Petits Savants
                </span>
              </h1>
            </div>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors">
                Accueil
              </a>
              <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors">
                À propos
              </a>
              <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors">
                Nos classes
              </a>
              <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors">
                Activités
              </a>
              <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors">
                Galerie
              </a>
              <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors">
                Actualités
              </a>
              <Button className="bg-white text-blue-800 hover:bg-white/80 cursor-pointer rounded-full px-6 py-2 transition-colors">
                Contact
              </Button>
            </nav>

            {/* Burger menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-blue-800 hover:text-blue-600 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu mobile */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-2xl mt-2 py-4 px-6">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors py-2">
                  Accueil
                </a>
                <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors py-2">
                  À propos
                </a>
                <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors py-2">
                  Nos classes
                </a>
                <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors py-2">
                  Activités
                </a>
                <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors py-2">
                  Galerie
                </a>
                <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors py-2">
                  Actualités
                </a>
                <Button className="bg-white-700 text-blue-800 cursor-pointer hover:bg-white/80 rounded-full px-6 py-3 mt-2 w-full transition-colors">
                  Contact
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Contenu principal centré */}
      <div className="relative max-w-7xl z-10 flex-1 left-0 mt-20 w-full mx-auto pb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight">
          L'école qui fait <br /> aimer apprendre
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl">
          Un univers d'apprentissage créatif et sécurisé
        </p>

        <Button className="mt-6 cursor-pointer sm:mt-8 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-full px-8 sm:px-20 py-3 sm:py-8 text-base sm:text-xl transition-all hover:scale-105 shadow-lg">
          Découvrir
        </Button>
      </div>
    </section>
  );
}