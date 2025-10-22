import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center font-bold text-5xl text-blue-900">Contactez-nous</h1>
          <p className="mb-12 text-balance text-center text-blue-700 text-xl">
            Nous sommes à votre écoute pour toute question concernant l'inscription de votre enfant
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h2 className="mb-6 font-bold text-2xl text-blue-900">Informations de contact</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-blue-900">Email</h3>
                      <a href="mailto:contact@petitssavants.com" className="text-blue-600 hover:underline">
                        contact@petitssavants.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-blue-900">Téléphone</h3>
                      <p className="text-blue-700">À venir</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-blue-900">Adresse</h3>
                      <p className="text-blue-700">À venir</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-yellow-50 p-6">
                  <h3 className="mb-2 font-semibold text-blue-900">Horaires d'ouverture</h3>
                  <p className="text-blue-700 text-sm">
                    Lundi - Vendredi: 7h00 - 18h00
                    <br />
                    Samedi: Sur rendez-vous
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h2 className="mb-6 font-bold text-2xl text-blue-900">Envoyez-nous un message</h2>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-medium text-blue-900 text-sm">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-medium text-blue-900 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block font-medium text-blue-900 text-sm">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Votre numéro"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block font-medium text-blue-900 text-sm">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option>Inscription</option>
                      <option>Information générale</option>
                      <option>Visite de l'établissement</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block font-medium text-blue-900 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Votre message..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Download Brochure CTA */}
          <Card className="mt-8 border-none bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 font-bold text-3xl text-blue-900">Téléchargez notre brochure</h2>
              <p className="mb-6 text-blue-800 text-lg">Découvrez tous nos programmes et services en détail</p>
              <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800">
                Télécharger la brochure (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
