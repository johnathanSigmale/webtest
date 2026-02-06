import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

export function TermsPage() {
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
              Conditions Générales de Vente
            </h1>
            <p className="text-xl text-charcoal-600">
              Conditions applicables à nos services d'accompagnement
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
                Article 1 - Objet
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Les présentes conditions générales de vente régissent les relations contractuelles entre Punchway et ses clients dans le cadre de la fourniture de services d'accompagnement familial et parental. Elles sont soumises au droit marocain.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Article 2 - Services
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Punchway propose des services d'accompagnement personnalisé pour les familles, incluant :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consultations individuelles</li>
                  <li>Ateliers collectifs</li>
                  <li>Programmes d'accompagnement personnalisés</li>
                  <li>Suivi et accompagnement à distance</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Article 3 - Tarifs et paiement
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Les tarifs des services sont communiqués lors de la prise de contact et peuvent être ajustés selon la nature et la durée de l'accompagnement demandé.
                </p>
                <p>
                  Le paiement s'effectue selon les modalités convenues (virement bancaire, chèque, espèces). Un acompte peut être demandé pour confirmer la réservation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Article 4 - Réservation et annulation
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Les réservations se font par email, téléphone ou via le formulaire de contact du site. Une confirmation sera envoyée dans les plus brefs délais.
                </p>
                <p>
                  En cas d'annulation, veuillez nous prévenir au moins 48 heures à l'avance. Au-delà de ce délai, des frais d'annulation peuvent être appliqués.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Article 5 - Obligations du client
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Le client s'engage à :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fournir des informations exactes et complètes</li>
                  <li>Respecter les règles de confidentialité</li>
                  <li>Participer activement aux séances d'accompagnement</li>
                  <li>Régler les prestations aux échéances convenues</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Article 6 - Obligations de Punchway
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Punchway s'engage à :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fournir des services de qualité professionnelle</li>
                  <li>Respecter la confidentialité des informations partagées</li>
                  <li>Maintenir une relation d'écoute et de bienveillance</li>
                  <li>Adapter l'accompagnement aux besoins exprimés</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Article 7 - Responsabilité
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Punchway ne peut être tenu responsable des conséquences indirectes ou imprévisibles des services fournis. L'accompagnement proposé ne se substitue pas à un suivi médical ou psychologique professionnel.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Article 8 - Droit de rétractation
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Conformément au Dahir n°1-11-03 du 14 Rabii I 1432 (3 mars 2011) portant promulgation de la loi n°31-08 relative à la protection du consommateur, le client dispose d'un délai de 7 jours à compter de la confirmation de commande pour exercer son droit de rétractation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-6">
                Article 9 - Litiges
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Tout litige relatif à l'interprétation ou à l'exécution des présentes conditions sera soumis aux tribunaux marocains compétents dans le respect des règles de procédure civile.
                </p>
                <p>
                  En cas de difficulté, nous encourageons une résolution amiable préalable.
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
              Prêt à commencer votre accompagnement ?
            </h2>
            <p className="text-xl text-charcoal-600 mb-10">
              Contactez-nous pour discuter de vos besoins et trouver la solution adaptée à votre famille.
            </p>
            <Link to="/contact">
              <Button size="lg">Prendre rendez-vous</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}