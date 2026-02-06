import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { WhatsApp } from './ui/icons';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Accueil',
    path: '/'
  },
  {
    name: 'À Propos',
    path: '/a-propos'
  },
  {
    name: 'Programmes',
    path: '/programmes'
  },
  {
    name: 'Produits',
    path: '/produits'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream-50/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src='/logo.png' className='object-contain h-12 w-auto'/>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors ${location.pathname === link.path ? 'text-terracotta-600 font-bold' : 'text-charcoal-700 hover:text-terracotta-600'}`}>

                {link.name}
              </Link>
            )}
            <Button size="sm" to={`https://wa.me/212600049734?text=Bonjour,+j'aimerai+prendre+rdv`}>Prendre RDV<WhatsApp className='size-6 ml-2'/></Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-4 mr-1">
            {!isMobileMenuOpen && <Button className="mt-1" to={`https://wa.me/212600049734?text=Bonjour+j'aimerai+prendre+rdv`}><WhatsApp className='size-5'/></Button>}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-800 p-2">

              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-cream-50 border-t border-cream-200 overflow-hidden">

            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium ${location.pathname === link.path ? 'text-terracotta-600 font-bold' : 'text-charcoal-800 hover:text-terracotta-600'}`}>

                  {link.name}
                </Link>
            )}
              <Button className="w-full mt-4" to={`https://wa.me/212600049734?text=Bonjour+j'aimerai+prendre+rdv`}>Prendre Rendez-vous <WhatsApp className='size-6 ml-2'/></Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}