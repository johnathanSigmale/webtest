import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

export function PrivacyPolicyPage() {
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
              Politique de confidentialité
            </h1>
            <p className="text-xl text-charcoal-600">
              Comment nous protégeons vos données personnelles
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
                Collecte des données
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Nous collectons uniquement les données nécessaires à la fourniture de nos services d'accompagnement familial. Ces données peuvent inclure :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Votre nom et prénom</li>
                  <li>Votre adresse email</li>
                  <li>Votre numéro de téléphone</li>
                  <li>Les informations que vous nous fournissez lors de nos échanges</li>
                </ul>
                <p>
                  Le traitement de ces données est effectué conformément à la loi marocaine n°09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Utilisation des données
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Vos données sont utilisées uniquement pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vous contacter et organiser nos rendez-vous</li>
                  <li>Personnaliser notre accompagnement selon vos besoins</li>
                  <li>Améliorer nos services</li>
                  <li>Répondre à vos demandes d'information</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Protection des données
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles contre la perte, l'altération, la divulgation ou l'accès non autorisé.
                </p>
                <p>
                  Vos données sont stockées sur des serveurs sécurisés et ne sont accessibles qu'aux personnes autorisées au sein de Punchway.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Durée de conservation
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Nous conservons vos données personnelles uniquement pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, ou pour respecter nos obligations légales.
                </p>
                <p>
                  À l'issue de cette période, vos données sont supprimées ou anonymisées.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Vos droits
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Conformément à la loi marocaine n°09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Droit d'accès :</strong> connaître les données personnelles que nous détenons sur vous</li>
                  <li><strong>Droit de rectification :</strong> faire corriger des données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à l'adresse : info@punchway.org
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Cookies
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Notre site utilise des cookies techniques nécessaires au fonctionnement du site. Ces cookies ne collectent pas de données personnelles et ne sont pas utilisés à des fins de marketing.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter le fonctionnement du site.
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
              Une question sur vos données ?
            </h2>
            <p className="text-xl text-charcoal-600 mb-10">
              Notre équipe est là pour répondre à toutes vos questions concernant la protection de vos données personnelles.
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