import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Palette, GraduationCap, Baby, School } from "lucide-react"
import Hero from "@/components/hero"
import WelcomeSection from "@/components/welcom"
import DirectorsMessage from "@/components/DirectorsMessage"
import InscriptionSection from "@/components/inscriptionSection"
import CyclesSection from "@/components/Cycle"
import SeparatorBanner from "@/components/SmalBaner"
import AtoutsSection from "@/components/Atouts"
import { ScollarLife } from "@/components/ScollarLife"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* Hero Section */}
      <section  >
     
        {/* Feature Cards */}
        <div className="container relative mx-auto -mt-20 z-[1000] px-4 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 font-bold text-blue-900 text-xl">À propos de l'école</h3>
                <p className="text-blue-700 text-sm">Excellence académique et bienveillance</p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 font-bold text-blue-900 text-xl">Nos classes</h3>
                <p className="text-blue-700 text-sm">De la crèche au lycée</p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Palette className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 font-bold text-blue-900 text-xl">Activités</h3>
                <p className="text-blue-700 text-sm">Sorties, clubs et événements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
     <WelcomeSection />
<DirectorsMessage />
  
      {/* School Levels */}
  <InscriptionSection />

<SeparatorBanner />
      {/* Services Section */}
    <CyclesSection />

      {/* Advantages Section */}
    <AtoutsSection /> 

      {/* Activities Section */}
   <ScollarLife />

      {/* CTA Section */}
      <section id="inscription" className="bg-blue-50 to-blue-800 py-16 text-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-bold text-4xl">Souhaitez-vous inscrire votre enfant?</h2>
          <p className="mb-8 text-xl">Téléchargez notre brochure pour en savoir plus</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <Link href="/contact">Téléchargez notre brochure</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-blue-900 text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 font-bold text-4xl text-blue-900">Contactez-nous pour plus d'information</h2>
          <a
            href="mailto:contact@petitssavants.com"
            className="inline-block text-2xl text-blue-600 hover:text-blue-800 hover:underline"
          >
            contact@petitssavants.com
          </a>
        </div>
      </section>
    </div>
  )
}
