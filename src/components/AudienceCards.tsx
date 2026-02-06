import { motion } from 'framer-motion';
import { Users, School } from 'lucide-react';
import { BoySvg } from './ui/icons';
const audiences = [
{
  id: 'mamans',
  title: 'Pour les Parents',
  description:
  'Retrouvez confiance en vos capacités parentales et apaisez le quotidien.',
  icon: Users,
  color: 'terracotta',
  delay: 0
},
{
  id: 'enfants',
  title: 'Pour les Enfants',
  description:
  'Des outils ludiques pour gérer les émotions et grandir sereinement.',
  icon: BoySvg,
  color: 'sage',
  delay: 0.1
},
{
  id: 'ecoles',
  title: 'Pour le personnel enseignant',
  description:
  `Créez un environnement d'apprentissage plus sain et adapté à chaque enfant.`,
  icon: School,
  color: 'terracotta',
  delay: 0.2
}];

export function AudienceCards() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-800 mb-4">
            Pour qui est Punchway ?
          </h2>
          <p className="text-lg text-charcoal-500 max-w-2xl mx-auto">
            Nous adaptons notre approche à chaque personne pour un équilibre global.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item) =>
          <motion.div
            key={item.id}
            initial={{
              opacity: 0, 
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: item.delay,
              duration: 0.6
            }}
            whileHover={{
              y: -8
            }}
            className="bg-cream-50 rounded-3xl p-8 shadow-sm hover:shadow-md border border-cream-200 group">

              <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${item.color === 'terracotta' ? 'bg-terracotta-100 text-terracotta-600 group-hover:bg-terracotta-200' : 'bg-sage-100 text-sage-600 group-hover:bg-sage-200'}`}>

                <item.icon size={32} strokeWidth={1.5} className='max-w-12'/>
              </div>
              <h3 className="text-2xl font-heading font-bold text-charcoal-800 mb-3">
                {item.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}