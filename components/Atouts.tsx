import React from "react";
import { Check, Users, Globe, Heart, TrendingUp, Shield, Award, Sparkles } from "lucide-react";

export default function AtoutsSection() {
  const atouts = [
    {
      title: "Parcours Continu",
      description: "Du berceau à la terminale, un accompagnement cohérent et progressif",
      icon: TrendingUp,
      image: "/parcours.jpeg",
    },
    {
      title: "Enseignement Bilingue",
      description: "Français et anglais dès la maternelle pour une ouverture internationale",
      icon: Globe,
      image: "/bilin.jpg",
    },
    {
      title: "Équipe Qualifiée",
      description: "Des enseignants passionnés, expérimentés et en formation continue",
      icon: Users,
      image: "/equip.jpg",
    },
    {
      title: "Suivi Personnalisé",
      description: "Classes à effectif réduit pour un accompagnement individualisé",
      icon: Heart,
      image: "/follow.jpeg",
    },
    {
      title: "Activités Enrichies",
      description: "Informatique, musique, sport, bibliothèque et clubs variés",
      icon: Sparkles,
      image: "/infor.jpg",
    },
    {
      title: "Environnement Sécurisé",
      description: "Campus propre, moderne et stimulant pour l'épanouissement",
      icon: Shield,
      image: "/secure.jpg",
    },
    {
      title: "Excellence & Résultats",
      description: "Maîtrise des savoirs, autonomie et développement de l'esprit critique",
      icon: Award,
      image: "/exce.webp",
    },
  ];

  return (
    <section className="relative bg-blue-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <Award className="w-4 h-4" />
            <span>Notre Excellence</span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-blue-900 mb-3">
            Nos atouts majeurs
          </h2>
          <p className="text-blue-700 text-base sm:text-lg">
            Ce qui fait la différence chez Les Petits Savants
          </p>
        </div>

        {/* Grille des atouts */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {atouts.map((atout, index) => (
            <div
              key={index}
              className="group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={atout.image}
                  alt={atout.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Icône flottante */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <atout.icon className="w-6 h-6 text-white" />
                </div>

                {/* Numéro */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/80 font-bold text-4xl">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
                  {atout.title}
                  <Check className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  {atout.description}
                </p>
              </div>

              {/* Barre colorée en bas */}
              <div className="h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Citation ou message final */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-t-4 border-yellow-400">
            <p className="text-blue-900 text-base sm:text-lg font-medium italic leading-relaxed">
              "Chaque enfant est unique, et notre mission est de révéler son plein potentiel dans un cadre d'excellence et de bienveillance."
            </p>
            <div className="mt-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}