import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, School, BookOpen, GraduationCap, Sparkles, ArrowRight } from "lucide-react";

export default function CyclesSection() {
  const cycles = [
    {
      title: "Crèche",
      age: "3 mois - 3 ans",
      description: "Un accueil sécurisé, affectif et stimulant pour les tout-petits.",
      icon: Baby,
      color: "from-pink-400 to-pink-500",
      bgColor: "bg-pink-50",
      features: ["Éveil sensoriel", "Soins individualisés", "Espace sécurisé"]
    },
    {
      title: "Maternelle",
      age: "PS - MS - GS",
      description: "Apprentissage par le jeu, éveil à la lecture et à l'anglais, socialisation.",
      icon: School,
      color: "from-purple-400 to-purple-500",
      bgColor: "bg-purple-50",
      features: ["Jeux éducatifs", "Initiation langues", "Socialisation"]
    },
    {
      title: "Primaire",
      age: "CP - CM2",
      description: "Méthodes actives, renforcement en lecture, mathématiques et langues.",
      icon: BookOpen,
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-50",
      features: ["Méthodes actives", "Langues vivantes", "Bases solides"]
    },
    {
      title: "Collège",
      age: "6e - 3e",
      description: "Programme rigoureux, cours bilingues, soutien scolaire, développement personnel.",
      icon: GraduationCap,
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      isNew: true,
      features: ["Cours bilingues", "Soutien scolaire", "Développement personnel"]
    },
    {
      title: "Lycée",
      age: "Seconde - Terminale",
      description: "Préparation au bac, orientation personnalisée, ouverture internationale, clubs scientifiques et littéraires.",
      icon: GraduationCap,
      color: "from-amber-400 to-amber-500",
      bgColor: "bg-amber-50",
      isNew: true,
      features: ["Préparation Bac", "Orientation", "Ouverture internationale"]
    },
  ];

  return (
    <section className="relative  py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Décoration arrière-plan */}
    
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <div className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Du berceau au baccalauréat</span>
          </div>
          <h2 className="mb-3 font-extrabold text-3xl sm:text-4xl text-blue-900">
            Nos cycles d'enseignement
          </h2>
          <p className="text-blue-700 text-base sm:text-lg">
            Un parcours éducatif complet et cohérent pour accompagner chaque enfant
          </p>
        </div>

        {/* Grille des cycles */}
        <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cycles.map((cycle, index) => (
            <Card 
              key={index} 
              className="group relative border-0 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Bande colorée en haut */}
               
              <CardContent className="p-6 sm:p-7">
                {/* Header avec icône */}
                <div className="flex items-start justify-between mb-4">
              
                  {cycle.isNew && (
                    <span className="flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-white text-xs font-semibold shadow-md">
                      <Sparkles className="w-3 h-3" />
                      Nouveau 2025
                    </span>
                  )}
                </div>

                {/* Titre */}
                <h3 className="font-bold text-blue-900 text-xl sm:text-2xl mb-1">
                  {cycle.title}
                </h3>
                <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${cycle.color} bg-clip-text text-transparent`}>
                  {cycle.age}
                </p>

                {/* Description */}
                <p className="text-blue-700 text-sm leading-relaxed mb-4">
                  {cycle.description}
                </p>

                {/* Points clés */}
                <div className="space-y-2 pt-4 border-t border-blue-100">
                  {cycle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-blue-600">
                      <ArrowRight className="w-3 h-3 text-blue-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Effet hover subtil */}
             </Card>
          ))}
        </div>

        {/* Note informative */}
        <div className="mt-10 text-center">
          <p className="text-blue-600 text-sm inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            Un accompagnement personnalisé à chaque étape du parcours scolaire
          </p>
        </div>
      </div>
    </section>
  );
}