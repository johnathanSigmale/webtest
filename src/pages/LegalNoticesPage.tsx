import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

export function LegalNoticesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream-100 to-cream-200 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-800 mb-6">
              Mentions légales
            </h1>
            <p className="text-xl text-charcoal-600">
              Informations légales concernant Punchway
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Éditeur du site
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  <strong>Punchway</strong><br />
                  Association déclarée au Maroc<br />
                  Siège social : [Adresse au Maroc]<br />
                  Email : info@punchway.org<br />
                  Téléphone : [Numéro marocain]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Directeur de la publication
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  [Nom du directeur de la publication]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Hébergement
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Ce site est hébergé par :<br />
                  [Nom de l'hébergeur]<br />
                  [Adresse de l'hébergeur]<br />
                  [Numéro de téléphone de l'hébergeur]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Données personnelles
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Conformément à la loi marocaine n°09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à l'adresse : info@punchway.org
                </p>
                <p>
                  Pour plus d'informations, consultez notre <Link to="/politique-confidentialite" className="text-terracotta-600 hover:text-terracotta-700">politique de confidentialité</Link>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-800 mb-6">
              Une question ?
            </h2>
            <p className="text-xl text-charcoal-600 mb-10">
              N'hésitez pas à nous contacter pour toute information complémentaire.
            </p>
            <Link to="/contact">
              <Button size="lg">Nous contacter</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}