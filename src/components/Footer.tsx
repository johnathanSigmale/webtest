import { Mail } from 'lucide-react';
import { Instagram, Facebook } from './ui/icons';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="bg-cream-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src='/logo.png' className='object-contain h-12 w-auto'/>
            <p className="text-charcoal-600 max-w-sm mb-8 leading-relaxed">
              Accompagner chaque famille vers son épanouissement avec
              bienveillance, écoute et expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/punch.way/"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal-600 hover:bg-terracotta-500 hover:text-white transition-colors">

                <Instagram className='size-5' />
              </a>
              <a
                href="https://www.facebook.com/punchway1"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal-600 hover:bg-terracotta-500 hover:text-white transition-colors">

                <Facebook className='size-5' />
              </a>
              <a
                href="mailto:info@punchway.org"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal-600 hover:bg-terracotta-500 hover:text-white transition-colors">

                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-charcoal-800 mb-6 text-lg">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/" 
                  className="text-charcoal-600 hover:text-terracotta-600 transition-colors">

                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-charcoal-600 hover:text-terracotta-600 transition-colors">

                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/programmes"
                  className="text-charcoal-600 hover:text-terracotta-600 transition-colors">

                  Programmes
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-charcoal-600 hover:text-terracotta-600 transition-colors">

                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-charcoal-800 mb-6 text-lg">
              Légal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-charcoal-600 hover:text-terracotta-600 transition-colors">

                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/politique-confidentialite"
                  className="text-charcoal-600 hover:text-terracotta-600 transition-colors">

                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/conditions-generales"
                  className="text-charcoal-600 hover:text-terracotta-600 transition-colors">

                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-100 pt-8 text-center text-charcoal-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Punchway. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>);

}