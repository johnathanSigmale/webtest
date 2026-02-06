import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { programs } from '../data/programs';

export function FeaturedPrograms() {
  return (
    <section
      id="programmes"
      className="py-24 bg-cream-50 relative overflow-hidden">

      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute -left-20 top-40 w-96 h-96 text-terracotta-100 opacity-50"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg">

          <path
            fill="currentColor"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.7,2.2,70C-11.5,66.3,-26,53.2,-38.6,42.6C-51.2,32,-61.8,23.8,-68.6,12.6C-75.4,1.4,-78.3,-12.8,-73.4,-25.4C-68.5,-38,-55.8,-49,-43.3,-56.8C-30.8,-64.6,-18.5,-69.2,-4.8,-61.6L8.9,-54"
            transform="translate(100 100)" />

        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-800 mb-4">
              Nos Programmes d'Accompagnement
            </h2>
            <p className="text-lg text-charcoal-500">
              Des solutions adaptées à vos besoins, que vous cherchiez un
              conseil ponctuel ou une transformation profonde.
            </p>
          </div>
          <Button variant="outline" to='/programmes'>Voir tous les programmes</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.slice(0, 3).map((program, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.6
            }}
            className={`${program.color} rounded-4xl p-8 relative group hover:shadow-lg hover:transition-shadow hover:duration-300`}>

              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <program.icon className="text-terracotta-500" size={24} />
              </div>

              <h3 className="text-2xl font-heading font-bold text-charcoal-800 mb-3">
                {program.title}
              </h3>

              <p className="text-charcoal-600 mb-6 min-h-[3rem]">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {program.tags.map((tag) =>
              <span
                key={tag}
                className="px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-charcoal-600">

                    {tag}
                  </span>
              )}
              </div>

              <div className="pt-4 border-t border-black/5">
                <Button to={`/programmes/${program.id}`} className="text-terracotta-600 font-bold text-sm flex items-center group-hover:gap-2">
                  En savoir plus <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}