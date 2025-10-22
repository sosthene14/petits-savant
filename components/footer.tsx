import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t  bg-blue-900 border-blue-100   text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 font-bold text-xl">Groupe Scolaire Les Petits Savants</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Du berceau au baccalauréat, nous construisons les leaders de demain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-bold text-xl">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="text-blue-100 hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/nos-classes" className="text-blue-100 hover:text-white">
                  Nos classes
                </Link>
              </li>
              <li>
                <Link href="/activites" className="text-blue-100 hover:text-white">
                  Activités
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Établissements */}
          <div>
            <h3 className="mb-4 font-bold text-xl">Nos établissements</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-100">Crèche & Maternelle</li>
              <li className="text-blue-100">École Primaire</li>
              <li className="text-blue-100">Collège Les Savants</li>
              <li className="text-blue-100">Lycée Les Savants</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-bold text-xl">Contact</h3>
            <p className="text-blue-100 text-sm">
              <a href="mailto:contact@petitssavants.com" className="hover:text-white hover:underline">
                contact@petitssavants.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-700 pt-8 text-center text-blue-200 text-sm">
          <p>Groupe Scolaire Les Petits Savants © 2025. </p>
        </div>
      </div>
    </footer>
  )
}
