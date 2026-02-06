import { motion } from 'framer-motion'
import {
  Heart,
  Users,
  GraduationCap,
  School,
  AlertCircle,
  Frown,
  Home,
  Battery,
  Sparkles,
  HeartHandshake,
  BookOpen,
  Compass,
  HandHeart,
  Award,
  Briefcase,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { BoySvg } from '../components/ui/icons'
import ImageWithLoader from '../components/ui/ImageWithLoader'
const challenges = [
  {
    icon: Frown,
    title: 'Enfants difficiles à gérer',
    description: 'Les crises, colères et tensions quotidiennes vous épuisent.',
    color: 'terracotta',
  },
  {
    icon: AlertCircle,
    title: 'Stress général',
    description:
      'Un stress qui impacte votre bien-être et celui de toute votre famille.',
    color: 'sage',
  },
  {
    icon: Home,
    title: "Perte d'harmonie",
    description:
      'Votre famille se fragilise et vous vous inquiétez des conséquences à long terme.',
    color: 'terracotta',
  },
  {
    icon: Battery,
    title: 'Épuisement parental',
    description:
      'Manque de patience, tensions accrues et difficulté à gérer les situations stressantes.',
    color: 'sage',
  },
]
const audiences = [
  {
    icon: Users,
    label: 'Parents',
  },
  {
    icon: Heart,
    label: 'Futurs parents',
  },
  {
    icon: BoySvg,
    label: 'Enfants',
  },
  {
    icon: GraduationCap,
    label: 'Enseignants',
  },
  {
    icon: School,
    label: 'Établissements scolaires',
  },
]
const secrets = [
  {
    icon: Sparkles,
    title: 'Des parents heureux',
    description:
      'Retrouvez votre équilibre personnel pour être serein et prêt à offrir le meilleur à votre famille.',
    color: 'terracotta',
  },
  {
    icon: HeartHandshake,
    title: 'Une vie familiale saine',
    description:
      'Cultivez une harmonie familiale solide et une relation de couple épanouie.',
    color: 'sage',
  },
  {
    icon: Heart,
    title: 'Un amour inconditionnel',
    description:
      "Découvrez le vrai potentiel de votre enfant et accompagnez-le pour qu'il grandisse confiant.",
    color: 'terracotta',
  },
  {
    icon: School,
    title: 'Un cadre favorable',
    description:
      'Créez un environnement propice au développement personnel, émotionnel et créatif.',
    color: 'sage',
  },
]
const offers = [
  {
    icon: BookOpen,
    title: 'Formations adaptées',
    description:
      'Pour mieux comprendre les besoins de vos enfants et gérer votre quotidien.',
  },
  {
    icon: Compass,
    title: 'Guides pratiques',
    description:
      'Des outils simples et efficaces sur la personnalité de votre enfant.',
  },
  {
    icon: HandHeart,
    title: 'Accompagnement personnalisé',
    description:
      'Pour redéfinir vos priorités et vivre en harmonie avec vos valeurs.',
  },
  {
    icon: School,
    title: 'Programme scolaire complet',
    description: 'Un programme clé en main pour les établissements scolaires.',
  },
]
export function AboutPage() {
  // small local component to show loader until image loads
  return (
    <div className="pt-20">
      {/* Hero - Pourquoi PUNCH WAY */}
      <section className="relative py-20 lg:py-28 bg-cream-50 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full fill-terracotta-100"
          >
            <path
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.7,2.2,70C-11.5,66.3,-26,53.2,-38.6,42.6C-51.2,32,-61.8,23.8,-68.6,12.6C-75.4,1.4,-78.3,-12.8,-73.4,-25.4C-68.5,-38,-55.8,-49,-43.3,-56.8C-30.8,-64.6,-18.5,-69.2,-4.8,-61.6L8.9,-54"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full fill-sage-100"
          >
            <path
              d="M41.2,-70.5C54.6,-63.6,67.5,-55.2,76.6,-44.1C85.7,-33,91,-19.2,89.9,-5.8C88.8,7.6,81.3,20.6,72.1,31.7C62.9,42.8,52,52,40.3,58.9C28.6,65.8,16.1,70.4,2.6,66C-10.9,61.6,-25.4,48.2,-38.3,37.2C-51.2,26.2,-62.5,17.6,-67.2,6.1C-71.9,-5.4,-70,-19.8,-62.4,-31.6C-54.8,-43.4,-41.5,-52.6,-28.6,-59.8C-15.7,-67,-3.2,-72.2,8.8,-70.5L20.8,-68.8"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="inline-block px-4 py-1.5 rounded-full bg-terracotta-100 text-terracotta-700 font-semibold text-sm mb-6"
            >
              Retrouvez l'harmonie familiale
            </motion.div>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal-800 mb-6"
            >
              Pourquoi{' '}
              <span className="text-terracotta-500 relative inline-block">
                PUNCH WAY
                <svg
                  className="absolute w-full h-3 bottom-1 left-0 text-terracotta-200 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>
              ?
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="text-xl text-charcoal-600 leading-relaxed mb-8"
            >
              Si vous lisez ces lignes, c'est sans doute parce que vous
              rencontrez des difficultés dans l'éducation de vos enfants.{' '}
              <strong className="text-charcoal-800">
                Rassurez-vous, vous n'êtes pas seul(e).
              </strong>
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="text-lg text-charcoal-500 leading-relaxed"
            >
              Découvrez comment retrouver l'harmonie familiale en quelques
              semaines grâce à des méthodes efficaces, simples et adaptées à
              votre situation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pourquoi nous consulter - Les défis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-800 mb-4">
              Pourquoi nous consulter ?
            </h2>
            <p className="text-lg text-charcoal-500 max-w-2xl mx-auto">
              En tant que parent, vous êtes confronté à des défis quotidiens qui
              peuvent sembler insurmontables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-cream-50 p-6 rounded-3xl border border-cream-200"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${challenge.color === 'terracotta' ? 'bg-terracotta-100 text-terracotta-600' : 'bg-sage-100 text-sage-600'}`}
                >
                  <challenge.icon size={24} />
                </div>
                <h3 className="text-lg font-heading font-bold text-charcoal-800 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-charcoal-600 text-sm">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-charcoal-700 font-medium">
              Ne laissez pas le stress et les conflits nuire à votre bonheur
              familial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* À qui s'adressent nos prestations */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-800 mb-4">
              À qui s'adressent nos prestations ?
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.label}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-cream-200"
              >
                <audience.icon size={20} className="text-terracotta-500 min-w-6" />
                <span className="font-medium text-charcoal-800">
                  {audience.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-charcoal-600 leading-relaxed italic">
              "La parentalité n'est pas simplement un choix, c'est aussi un
              héritage. Nous portons en nous les schémas parentaux transmis par
              les générations précédentes."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Le secret pour réussir */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full fill-terracotta-200"
          >
            <path
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.7,2.2,70C-11.5,66.3,-26,53.2,-38.6,42.6C-51.2,32,-61.8,23.8,-68.6,12.6C-75.4,1.4,-78.3,-12.8,-73.4,-25.4C-68.5,-38,-55.8,-49,-43.3,-56.8C-30.8,-64.6,-18.5,-69.2,-4.8,-61.6L8.9,-54"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-800 mb-4">
              Le secret pour réussir en tant que parent
            </h2>
            <p className="text-lg text-charcoal-500 max-w-2xl mx-auto">
              Ensemble, nous explorerons les différents aspects de votre vie
              pour identifier les forces et défis qui influencent votre
              quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {secrets.map((secret, index) => (
              <motion.div
                key={secret.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="flex gap-6 p-6 bg-cream-50 rounded-3xl border border-cream-100"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${secret.color === 'terracotta' ? 'bg-terracotta-100 text-terracotta-600' : 'bg-sage-100 text-sage-600'}`}
                >
                  <secret.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal-800 mb-2">
                    {secret.title}
                  </h3>
                  <p className="text-charcoal-600">{secret.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Offre */}
      <section className="py-24 bg-terracotta-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-800 mb-6">
                L'offre de PUNCH WAY
              </h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                La parentalité est un voyage complexe et parfois difficile.
                C'est pourquoi nous vous offrons{' '}
                <strong>
                  une boussole, une lumière dans l'obscurité, et une main
                  tendue.
                </strong>
              </p>
              <p className="text-charcoal-600 mb-8">
                Notre engagement envers votre réussite en tant que parent est
                total. Vous n'êtes pas seul(e) dans ce parcours ; nous serons à
                vos côtés, prêts à vous soutenir à chaque étape.
              </p>
              <Button size="lg" to='/programmes'>Découvrir nos programmes</Button>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center mb-4">
                    <offer.icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-charcoal-800 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-charcoal-600">
                    {offer.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fondatrice - Hind SERRAJ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-[4/5] rounded-4xl overflow-hidden bg-cream-100 relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-cream-200 flex items-center justify-center">
                  {/* Loader until image is ready */}
                  {/** Using local state `imgLoaded` to toggle visibility */}
                  <ImageWithLoader src="mom3.jpeg" alt="Hind Serraj" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-terracotta-100 rounded-full -z-0"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-sage-100 rounded-full -z-0"></div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="order-1 md:order-2"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 font-semibold text-sm mb-4">
                Fondatrice
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-800 mb-2">
                Hind SERRAJ
              </h2>
              <p className="text-lg text-terracotta-600 font-medium mb-6">
                Conseillère Familiale, Coach de vie & Gérante de PUNCH WAY
              </p>

              <div className="space-y-6 text-charcoal-600">
                <div>
                  <h4 className="font-heading font-bold text-charcoal-800 mb-2 flex items-center gap-2">
                    <Briefcase size={18} className="text-terracotta-500" />
                    Parcours professionnel
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Gérante de la Société Punch Way</li>
                    <li>• Présidente de l'Association Evazium</li>
                    <li>
                      • Ex-responsable : IBM Maroc, SOS Village d'enfants,
                      Centre des Jeunes Dirigeants, Intelia, Diamant Ceram
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-charcoal-800 mb-2 flex items-center gap-2">
                    <Award size={18} className="text-sage-500" />
                    Formations
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Développement personnel</li>
                    <li>• Praticienne énergétique</li>
                    <li>• Superviseur TAFAKKUR</li>
                    <li>• Certification MONTESSORI</li>
                    <li>• Diplômée ENCG Settat (2002)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 w-96 h-96 fill-terracotta-200 translate-x-1/2 -translate-y-1/2"
          >
            <path
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.7,2.2,70C-11.5,66.3,-26,53.2,-38.6,42.6C-51.2,32,-61.8,23.8,-68.6,12.6C-75.4,1.4,-78.3,-12.8,-73.4,-25.4C-68.5,-38,-55.8,-49,-43.3,-56.8C-30.8,-64.6,-18.5,-69.2,-4.8,-61.6L8.9,-54"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-800 mb-6">
              Faites le premier pas vers une famille plus harmonieuse
            </h2>
            <p className="text-xl text-charcoal-600 mb-10">
              Rejoignez-nous dès aujourd'hui pour un accompagnement personnalisé
              et transformez votre quotidien familial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">Prendre rendez-vous</Button>
              </Link>
              <Button variant="outline" size="lg" to='/programmes'>
                Voir nos programmes
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
