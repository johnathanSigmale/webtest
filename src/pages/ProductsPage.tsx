import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';

export function ProductsPage() {

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-800 mb-6">
            Notre Boutique
          </h1>
          <p className="text-xl text-charcoal-600">
            Des ressources et outils de qualité pour soutenir votre développement
            personnel et celui de votre famille.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {products.map((product) =>
              <motion.div
                layout
                key={product.id}
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
                className={`bg-white rounded-4xl p-8 border border-cream-100 shadow-sm hover:shadow-lg flex flex-col ${product.featured ? 'ring-2 ring-terracotta-200' : ''}`}>

                {product.featured &&
                  <div className="self-start mb-4 px-3 py-1 bg-terracotta-100 text-terracotta-700 text-xs font-bold uppercase tracking-wide rounded-full">
                    Populaire
                  </div>
                }

                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-charcoal-800 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>

                {/* Product Image */}
                {product.image && (
                  <div className="mb-6 aspect-square rounded-2xl bg-cream-100 flex items-center justify-center overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Rating and Stock */}
                <div className="mb-6 space-y-3">
                  {product.inStock === false && (
                    <span className="text-sm text-red-600 font-medium">Rupture de stock</span>
                  )}
                  {product.inStock !== false && (
                    <span className="text-sm text-green-600 font-medium">En stock</span>
                  )}
                </div>

                <div className="mt-auto pt-6 border-t border-cream-100 flex items-center justify-between">
                  <span className="font-bold text-charcoal-800 text-lg">
                    {product.price}
                  </span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="group" 
                    to={`/produits/${product.id}`}
                    disabled={product.inStock === false}>
                    Voir plus
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
