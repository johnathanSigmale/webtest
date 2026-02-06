import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState } from 'react';
import { programs } from '../data/programs';

type ProgramCategory = 'Tous' | 'Enfants' | 'Familles' | 'Écoles';

const categories: ProgramCategory[] = [
'Tous',
'Enfants',
'Familles',
'Écoles'];

export function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory>('Tous');
  const filteredPrograms =
  activeCategory === 'Tous' ?
  programs :
  programs.filter((p) => p.category === activeCategory);
  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-800 mb-6">
            Nos Programmes
          </h1>
          <p className="text-xl text-charcoal-600">
            Des solutions adaptées à chaque étape de votre vie familiale et
            personnelle.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-terracotta-500 text-white shadow-md' : 'bg-white text-charcoal-600 hover:bg-terracotta-50 border border-cream-200'}`}>

              {cat}
            </button>
          )}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) =>
            <motion.div
              layout
              key={program.id}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3
              }}
              className={`bg-white rounded-4xl p-8 border border-cream-100 shadow-sm hover:shadow-lg flex flex-col ${program.featured ? 'ring-2 ring-terracotta-200' : ''}`}>

                {program.featured &&
              <div className="self-start mb-4 px-3 py-1 bg-terracotta-100 text-terracotta-700 text-xs font-bold uppercase tracking-wide rounded-full">
                    Recommandé
                  </div>
              }

                <div className="mb-6">
                  <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-sage-50 text-sage-600`}>
                    {program.category}
                  </span>
                  <h3 className={`text-2xl font-heading font-bold text-charcoal-800 ${program.comment !== undefined ? '' : 'mb-3'}`}>
                    {program.title}
                  </h3>
                  {program.comment && <strong className='mb-3 block'>{program.comment}</strong>}
                  <p className="text-charcoal-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  {program.duration &&
                    <div className="flex items-center text-charcoal-500 text-sm">
                      <Clock size={18} className="mr-2 text-terracotta-500" />
                      {program.duration}
                    </div>
                  }
                  {program.format &&
                    <div className="flex items-center text-charcoal-500 text-sm">
                      <Users size={18} className="mr-2 text-terracotta-500" />
                      {program.format}
                    </div>
                  }
                  <div className="pt-6 border-t border-cream-100 flex items-center justify-between">
                    <span className="font-bold text-charcoal-800">
                      {program.price}
                    </span>
                    <Button size="sm" variant="outline" className="group" to={`/programmes/${program.id}`}>
                      Détails
                      <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform" />

                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>);

}