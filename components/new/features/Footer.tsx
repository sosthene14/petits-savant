import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <i className="ri-graduation-cap-fill text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>Les Petits Savants</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              C.S LES PETITS SAVANTS, un centre éducatif de qualité au Congo pour les enfants, de la crèche au collège.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Menu</h4>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'Activités', 'À propos', 'Blog', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Informations de contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-xl text-blue-400 mt-1"></i>
                <span className="text-gray-400">12/14 rue Kimbenza, quartier Diata (derrière ORSTOM)<br />Brazzaville, République du Congo</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-xl text-blue-400"></i>
                <span className="text-gray-400">+242064117272</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-xl text-blue-400"></i>
                <span className="text-gray-400">management@les-petits-savants.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} C.S LES PETITS SAVANTS
          </p>
         
        </div>
      </div>
    </footer>
  );
}