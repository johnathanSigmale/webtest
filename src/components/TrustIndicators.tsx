import { motion } from 'framer-motion'
import ImageWithLoader from './ui/ImageWithLoader'

const trustedOrganizations = [
  {
    name: 'École Montessori Internationale de Bouskoura',
    logo: '/partenaires/montessori.jpg',
  },
  {
    name: 'Institution Privée À Pédagogies Alternatives',
    logo: '/partenaires/mikado.png', 
  },
  {
    name: 'Fikra wa Basma',
    logo: '/partenaires/fikrawabasma.png', 
  },
  {
    name: 'Écoles Scientifiques',
    logo: '/partenaires/ecolesscientifiques.jpg',
  },
  {
    name: 'Bayt Al Hikma',
    logo: '/partenaires/baytalhikma.jpg',
  },
  {
    name: 'Modern International School',
    logo: '/partenaires/mis.png',
  },
  {
    name: 'Evazium',
    logo: '/partenaires/evazium.jpeg'
  }
]

export function TrustIndicators() {
  return (
    <section className="py-16 bg-white border-t-2 border-cream-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left blob */}
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 opacity-5"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-cream-900">
            <path d="M47.1,-76.4C60.5,-69.9,70.8,-57.4,79.8,-43.2C88.8,-29,96.5,-14.5,95.4,-0.6C94.3,13.3,84.5,26.6,74.2,37.8C63.9,49,53,58,40.5,66.4C28,74.8,14,82.4,-0.7,83.7C-15.4,85,-30.8,80,-44.1,70.8C-57.4,61.6,-68.6,48.2,-76.8,33.1C-85,18,-90.2,1,-87.2,-14.8C-84.2,-30.6,-73,-45.2,-59.7,-53.7C-46.4,-62.2,-31,-64.7,-15.5,-67.2C0,-69.7,15.5,-72.2,30,-70.7C44.5,-69.2,59,-63.7,47.1,-76.4Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        {/* Bottom right blob */}
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 opacity-5"
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 80, repeat: Infinity, ease: "linear" },
            scale: { duration: 25, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-sage-300">
            <path d="M39.8,-65.6C52.9,-58.7,65.8,-49.8,74.8,-37.9C83.8,-26,89,-11,87.8,3.7C86.6,18.4,79.1,32.8,68.7,44.1C58.3,55.4,45,63.6,31.4,70.2C17.8,76.8,8.9,81.8,-1.2,84.1C-11.3,86.4,-22.6,86,-34.4,80.3C-46.2,74.6,-58.5,63.6,-66.7,50.7C-74.9,37.8,-79,23,-78.1,8.7C-77.2,-5.6,-71.4,-19.6,-63.5,-31.5C-55.6,-43.4,-45.6,-53.2,-34.7,-61.1C-23.8,-69,-11.9,-75,0.7,-76.1C13.3,-77.2,26.6,-73.4,39.8,-65.6Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        {/* Center floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 opacity-10"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-terracotta-200">
            <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.7,2.2,70C-11.5,66.3,-26,53.2,-38.6,42.6C-51.2,32,-61.8,23.8,-68.6,12.6C-75.4,1.4,-78.3,-12.8,-73.4,-25.4C-68.5,-38,-55.8,-49,-43.3,-56.8C-30.8,-64.6,-18.5,-69.2,-4.8,-61.6L8.9,-54" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal-800 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-charcoal-600 max-w-2xl mx-auto">
            Écoles, associations et organisations qui nous accompagnent dans notre mission
            d'accompagnement familial et éducatif.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden hidden md:block"
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling logos container */}
          <div className="flex items-center space-x-12 animate-scroll">
            {/* First set of logos */}
            {trustedOrganizations.map((org, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 transition-all duration-300"
              >
                <div className="w-32 bg-cream-100 rounded-lg flex items-center justify-center border border-cream-200">
                  <ImageWithLoader src={org.logo} alt={org.name} title={org.name}/>
                </div>
              </div>
            ))}
 
            {/* Duplicate set for seamless scrolling */}
            {trustedOrganizations.map((org, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-32 bg-cream-100 rounded-lg flex items-center justify-center border border-cream-200">
                  <img src={org.logo} alt={org.name} title={org.name}/>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Static version for mobile/small screens */}
        <div className="md:hidden mt-8">
          <div className="grid grid-cols-2 gap-4">
            {trustedOrganizations.slice(0, 6).map((org, index) => (
              <div
                key={index}
                className="transition-all duration-300"
              >
                <div className="size-24 mx-auto bg-cream-100 rounded-lg flex items-center justify-center border border-cream-200">
                  <img src={org.logo} alt={org.name} title={org.name}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}