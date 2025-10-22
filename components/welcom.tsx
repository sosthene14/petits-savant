import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Sparkles } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Superposition semi-transparente pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/savant.jpg')",
          backgroundSize: 'cover', // Ajuste la taille pour éviter que l'image ne soit trop grande
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5, // Réduit l'opacité de l'image pour un effet subtil
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Badge de bienvenue */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base shadow-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Excellence & Innovation</span>
            </div>
          </div>

          {/* Titre principal */}
          <h2 className="mb-4 sm:mb-6 font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white text-center leading-tight">
            Bienvenue au Groupe Scolaire <br className="hidden sm:block" />
            <span className="text-yellow-400">Les Petits Savants</span>
          </h2>

          {/* Niveaux scolaires */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {["Crèche", "Maternelle", "Primaire", "Collège", "Lycée"].map((niveau) => (
              <span
                key={niveau}
                className="bg-white text-blue-800 px-4 sm:px-5 py-2 rounded-full font-medium text-sm sm:text-base shadow-sm border border-blue-100 hover:shadow-md hover:scale-105 transition-all"
              >
                {niveau}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mb-8 sm:mb-10 text-white text-base sm:text-lg lg:text-xl leading-relaxed text-center max-w-3xl mx-auto px-4">
            Du berceau au baccalauréat, nous construisons les leaders de demain. Bienvenue sur le site officiel du
            Groupe Scolaire Bilingue Les Petits Savants et du tout nouveau Collège & Lycée Les Savants.
          </p>

          {/* Bouton CTA */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <Button   className="bg-yellow-400 rounded-full hover:bg-yellow-500 text-blue-900 rounded-full px-12 sm:px-10 py-8 sm:py-5 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
           <a href="https://jumpshare.com/share/nY3oCqBvp52VNeQelpwr" target="_blank"> Télécharger notre brochure</a>
            </Button>
          </div>

          {/* Cartes de valeurs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-50">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-5">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-blue-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                Apprentissage Créatif
              </h3>
              <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                Des méthodes pédagogiques innovantes qui stimulent la curiosité et l'épanouissement
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-50">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4 sm:mb-5">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                Environnement Bienveillant
              </h3>
              <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                Un cadre sécurisé où chaque enfant développe sa confiance et son potentiel
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-50 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-5">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-blue-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">
                Excellence Académique
              </h3>
              <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                Des programmes bilingues de qualité pour préparer l'avenir de vos enfants
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}