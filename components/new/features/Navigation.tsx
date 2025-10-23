import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

const menuItems = [
  { name: 'Accueil', href: '#' },
  { name: 'À propos', href: '#about' },
  { name: 'Cours', href: '#classes' },
  { name: 'Activités', href: '#activities' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Actualités', href: '#news' },
  { name: 'Contact', href: '#contact' }
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="rounded-full  ">
   <img 
                src="/logo.png" 
                alt="logo" 
                // ✨ MODIFICATION ICI: Réduction de la taille du logo sur les petites vues (max-width: 640px)
                // w-10 h-10 pour mobile (par défaut), sm:w-12 sm:h-12 pour sm (640px+), lg:w-24 lg:h-24 pour desktop (1024px+)
                className="w-[50%]" 
              />            </div>
           
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            href='#contact'
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Inscrivez-vous maintenant
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          >
<i>
  {isOpen ? (
    <X className="w-6 h-6 text-gray-900" />
  ) : (
    <Menu className="w-6 h-6 text-gray-900" />
  )}
</i>          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <button className="w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg whitespace-nowrap cursor-pointer">
                Inscrivez-vous maintenant
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
