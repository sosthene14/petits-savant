import React from "react";
import { Baby, BookOpen, GraduationCap, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InscriptionSection() {
  const levels = [
    { 
      number: "01", 
      title: "Crèche", 
      icon: Baby, 
      age: "3 mois - 3 ans",
      image: "/creche.jpg" 
    },
    { 
      number: "02", 
      title: "Maternelle", 
      icon: School, 
      age: "PS - MS - GS",
      image: "/maternelle.jpg"
    },
    { 
      number: "03", 
      title: "Primaire", 
      icon: BookOpen, 
      age: "CP - CM2",
      image: "/primaire.jpg"
    },
    { 
      number: "04", 
      title: "Collège", 
      icon: GraduationCap, 
      age: "6e - 3e", 
      new: true,
      image: "/college.jpg"
    },
    { 
      number: "05", 
      title: "Lycée", 
      icon: GraduationCap, 
      age: "Seconde - Terminale", 
      new: true,
      image: "/lycee.webp"
    },
  ];

  return (
    <section className="bg-blue-50   py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="mb-10 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <span>🎓 Inscriptions Ouvertes</span>
          </div>
          <h2 className="mb-3 font-extrabold text-3xl sm:text-4xl text-blue-900">
            Année Scolaire 2025 – 2026
          </h2>
          <p className="text-blue-700 text-lg sm:text-xl">
            Les inscriptions ont débuté et se poursuivent
          </p>
        </div>

        {/* Cards avec images */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-10 sm:mb-12">
          {levels.map((level) => (
            <Card
              key={level.number}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-0 relative h-80 sm:h-96">
                
                {/* Conteneur pour l'image et l'overlay, avec overflow-hidden et le scale sur un enfant */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-110"> {/* Le scale est ici */}
                    <img
                      src={level.image}
                      alt={level.title}
                      className="w-full h-full object-cover" // Pas de scale sur l'image directement
                    />
                    {/* Overlay assombri - à l'intérieur du conteneur qui scale */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-900/80 group-hover:from-blue-900/60 group-hover:via-blue-900/50 group-hover:to-blue-900/70 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Contenu - doit être relatif pour être au-dessus de l'image */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="font-bold text-5xl text-yellow-400 opacity-80">
                      {level.number}
                    </div>
                    {level.new && (
                      <span className="rounded-full bg-green-500 px-3 py-1 text-white text-xs font-semibold shadow-lg animate-pulse">
                        Nouveau
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
                      <level.icon className="h-6 w-6 text-white group-hover:text-blue-900" />
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-white text-2xl mb-1">
                        {level.title}
                      </h3>
                      <p className="text-blue-100 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
                        {level.age}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Inscrivez votre enfant
          </Button>
          <p className="mt-4 text-sm text-blue-600">
            Places limitées • Rejoignez-nous dès maintenant
          </p>
        </div>
      </div>
    </section>
  );
}