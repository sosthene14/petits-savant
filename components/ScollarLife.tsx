import { Card, CardContent } from "./ui/card"

export const ScollarLife = () => {
    return (
           <section className=" to-sky-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-bold text-4xl text-blue-900">Activités & Vie scolaire</h2>

          <div className="mx-auto max-w-4xl space-y-6">
            <Card className="border-none bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-3 font-bold text-blue-900 text-xl">Sorties pédagogiques</h3>
                <p className="text-blue-700 leading-relaxed">
                  Sorties régulières (musées, services publics, fermes, sites historiques…)
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-3 font-bold text-blue-900 text-xl">Concours & Compétitions</h3>
                <p className="text-blue-700 leading-relaxed">Concours de lecture, maths, dictée, débats oratoires</p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-3 font-bold text-blue-900 text-xl">Cours innovants</h3>
                <p className="text-blue-700 leading-relaxed">
                  Art oratoire, culture générale, anglais, intelligence artificielle, entrepreneuriat
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-3 font-bold text-blue-900 text-xl">Clubs</h3>
                <p className="text-blue-700 leading-relaxed">
                  Anglais, informatique, intelligence artificielle, robotique, journal scolaire
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-3 font-bold text-blue-900 text-xl">Événements</h3>
                <p className="text-blue-700 leading-relaxed">
                  Fêtes scolaires, journée du livre, spectacle de fin d'année
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}