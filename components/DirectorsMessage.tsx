import React from "react";
import { BookOpen } from "lucide-react";

export default function DirectorsMessage() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20  overflow-hidden">
      {/* Formes décoratives subtiles */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-6xl">
          {/* Badge titre */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm shadow-sm">
              <BookOpen className="w-4 h-4" />
              <span>Mot de la Directrice</span>
            </div>
          </div>

          {/* Layout principal */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
            {/* Colonne texte */}
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="mb-4 font-bold text-2xl sm:text-3xl text-blue-900 text-center lg:text-left">
                Un engagement pour l'excellence
              </h2>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-50">
                <div className="text-blue-700 text-sm sm:text-base leading-relaxed space-y-3">
                  <p className="text-blue-800 font-medium">
                    Chers parents, chers visiteurs,
                  </p>
                  
                  <p>
                    Bienvenue sur la plateforme du Groupe Scolaire Bilingue Les Petits Savants et du Collège & Lycée Les Savants.
                  </p>
                  
                  <p>
                    En tant que mère, éducatrice et citoyenne, j'ai fondé cette école avec une vision claire : offrir à chaque enfant un cadre d'apprentissage rigoureux, bilingue, bienveillant et adapté aux exigences du monde d'aujourd'hui.
                  </p>
                  
                  <p>
                    Notre ambition est simple mais exigeante : accompagner les enfants du berceau jusqu'au baccalauréat, en développant en eux la curiosité, l'autonomie, le goût de l'effort et la confiance en soi.
                  </p>
                  
                  <p className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400">
                    L'année scolaire 2025–2026 marque un tournant majeur avec l'ouverture de notre <span className="font-semibold text-blue-900">Collège & Lycée Les Savants</span>, prolongeant naturellement notre engagement éducatif.
                  </p>
                  
                  <p>
                    Je remercie les familles qui nous font confiance et invite celles qui nous découvrent à venir visiter notre campus : une école d'excellence, de valeurs, et de résultats.
                  </p>
                  
                  <div className="pt-4 mt-4 border-t border-blue-100">
                    <p className="font-semibold text-blue-900 text-sm">
                      Dr. Danielle Leatitia Youbi GHEMBU, epse Nkouessom<br />
                      <span className="text-blue-700 font-normal">Fondatrice et Directrice Générale</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne image */}
            <div className="w-full lg:w-80 xl:w-96 order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-xs lg:max-w-none">
                {/* Forme décorative */}
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-200 to-yellow-200 rounded-2xl blur-xl opacity-40"></div>
                
                {/* Image */}
                <img
                  src="/directrice.jpg"
                  alt="Dr. Danielle Leatitia Youbi GHEMBU"
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover aspect-[3/4] border-4 border-white"
                />
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}