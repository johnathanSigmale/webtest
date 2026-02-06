import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const testimonials = [
{
  quote:
  "Punchway a transformé notre vie de famille. Nous avons retrouvé le plaisir d'être ensemble sans les cris du soir.",
  author: 'Sihame & Farid',
  role: 'Parents de 2 enfants',
  color: 'bg-sage-100'
},
{
  quote:
  'Une approche douce mais tellement efficace. Je me sens enfin écoutée et comprise dans mon rôle de maman.',
  author: 'Khadija',
  role: 'Maman de Adam, 4 ans',
  color: 'bg-terracotta-100'
},
{
  quote:
  `Le programme Tafakkur est l'un de mes préférés, car il est holistique et aborde tous les aspects de la personnalité de l'enfant. Il répond également à une question devenue très urgente pour les parents : Comment puis-je mieux gérer l'éducation de mon enfant ?`,
  author: 'Saad',
  role: 'Papa',
  color: 'bg-terracotta-100'
},
{
  quote:
  "Tafakkur est un cursus pionnier et efficace dans la construction de la personnalité d’une génération de penseurs éduqués, créatifs, conscients de leurs êtres respectifs, aimant leur entourage proactifs et imprégnés des valeurs du bien et du don.",
  author: 'Dr. Majdouline Enahibi',
  role: 'Experte internationale en éducation et formation',
  color: 'bg-sage-100'
},
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-800 mb-4">
            Ce que disent les familles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2
            }}
            className="relative p-10 rounded-4xl bg-cream-50 border border-cream-100">

              <div
              className={`absolute -top-6 left-10 w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-charcoal-700`}>

                <Quote size={20} fill="currentColor" className="opacity-50" />
              </div>

              <p className="text-xl text-charcoal-700 italic mb-8 relative z-10 font-medium leading-relaxed">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div
                className={`w-12 h-12 rounded-full ${t.color} opacity-50`}>
              </div>
                <div>
                  <div className="font-heading font-bold text-charcoal-900">
                    {t.author}
                  </div>
                  <div className="text-sm text-charcoal-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}