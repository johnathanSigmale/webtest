import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { productsar, productsfr } from '../data/products';
import ImageWithLoader from '../components/ui/ImageWithLoader';
import { useState } from 'react';

export function ProductDetailPage() {
  const { slug } = useParams();
  const [ fr, changeFr ] = useState(true);
  const products = fr ? productsfr : productsar
  const product = products.filter((p) => p.id == slug)[0];
  
  if (!product) {
    return (
      <div className="pt-20 min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-charcoal-800 mb-4">Produit non trouvé</h1>
          <Link to="/produits" className="text-terracotta-600 hover:text-terracotta-700 font-medium">
            Retourner à la boutique
          </Link>
        </div>
      </div>
    );
  }

  const wtsplink = `https://wa.me/212600049734?text=Bonjour,+j'aimerai+acheter+le+produit+${product.title}.`;

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Back Link + Language Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
        <Link
          to="/produits"
          className="inline-flex items-center text-charcoal-600 hover:text-terracotta-600 transition-colors font-medium">
          <ArrowLeft size={20} className="mr-2" />
          Retour à la boutique
        </Link>
      </div>

      {/* Hero */}
      <section className="pb-16 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-4xl p-2 md:p-12 shadow-sm border border-cream-100 relative overflow-clip">
          {/* Decorative organic blobs (like Hero) */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[520px] h-[520px] opacity-30 pointer-events-none">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-terracotta-100">

              <path
                d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.7,2.2,70C-11.5,66.3,-26,53.2,-38.6,42.6C-51.2,32,-61.8,23.8,-68.6,12.6C-75.4,1.4,-78.3,-12.8,-73.4,-25.4C-68.5,-38,-55.8,-49,-43.3,-56.8C-30.8,-64.6,-18.5,-69.2,-4.8,-61.6L8.9,-54"
                transform="translate(100 100)" />

            </svg>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[420px] h-[420px] opacity-30 pointer-events-none">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-sage-100">

              <path
                d="M41.2,-70.5C54.6,-63.6,67.5,-55.2,76.6,-44.1C85.7,-33,91,-19.2,89.9,-5.8C88.8,7.6,81.3,20.6,72.1,31.7C62.9,42.8,52,52,40.3,58.9C28.6,65.8,16.1,70.4,2.6,66C-10.9,61.6,-25.4,48.2,-38.3,37.2C-51.2,26.2,-62.5,17.6,-67.2,6.1C-71.9,-5.4,-70,-19.8,-62.4,-31.6C-54.8,-43.4,-41.5,-52.6,-28.6,-59.8C-15.7,-67,-3.2,-72.2,8.8,-70.5L20.8,-68.8"
                transform="translate(100 100)" />

            </svg>
          </div>

          {/* Additional small decorative blobs */}
          <div className="absolute top-8 left-8 w-[160px] h-[160px] opacity-22 pointer-events-none animate-float">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-sage-100">
              <path d="M41.2,-70.5C54.6,-63.6,67.5,-55.2,76.6,-44.1C85.7,-33,91,-19.2,89.9,-5.8C88.8,7.6,81.3,20.6,72.1,31.7C62.9,42.8,52,52,40.3,58.9C28.6,65.8,16.1,70.4,2.6,66C-10.9,61.6,-25.4,48.2,-38.3,37.2C-51.2,26.2,-62.5,17.6,-67.2,6.1C-71.9,-5.4,-70,-19.8,-62.4,-31.6C-54.8,-43.4,-41.5,-52.6,-28.6,-59.8C-15.7,-67,-3.2,-72.2,8.8,-70.5L20.8,-68.8" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="absolute bottom-8 right-8 w-[120px] h-[120px] opacity-16 pointer-events-none animate-float" style={{animationDelay: '-1.2s'}}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-cream-200">
              <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.7,2.2,70C-11.5,66.3,-26,53.2,-38.6,42.6C-51.2,32,-61.8,23.8,-68.6,12.6C-75.4,1.4,-78.3,-12.8,-73.4,-25.4C-68.5,-38,-55.8,-49,-43.3,-56.8C-30.8,-64.6,-18.5,-69.2,-4.8,-61.6L8.9,-54" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className='mb-6 flex gap-5'>
                <product.icon size={40} className='bg-terracotta-100 text-terracotta-700 p-2 rounded-xl' />
                <button
                  onClick={() => changeFr(!fr)}
                  className="px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 font-semibold text-sm hover:bg-terracotta-200 transition-colors">
                  {fr ? 'العربية' : 'Français'}
                </button>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-800 mb-4">
                {product.title}
              </h1>
              
              <p className="text-xl text-charcoal-600 mb-8">
                {product.description}
              </p>

              {/* Stock */}
              <div className="mb-8 space-y-3"> 
                <div className="flex items-center gap-2">
                  {product.inStock === false ? (
                    <span className="text-red-600 font-bold">Rupture de stock</span>
                  ) : (
                    <>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-green-600 font-medium">En stock</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Button 
                  size="lg" 
                  to={wtsplink}
                  disabled={product.inStock === false}>
                  <ShoppingCart size={20} className="mr-2" />
                  Acheter maintenant
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-cream-100 flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <ImageWithLoader src={product.image} alt={product.title} className='w-full h-full object-cover' />
                ) : (
                  <product.icon size={120} className='text-cream-300' />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {/* blobs ici */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {product.longDescription && (
              <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                    <BookOpen size={20} className="text-sage-600" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-charcoal-800">
                    Description complète
                  </h2>
                </div>
                <p className="text-lg text-charcoal-600 leading-relaxed whitespace-pre-line">
                  {product.longDescription}
                </p>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center">
                    <CheckCircle size={20} className="text-terracotta-600" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-charcoal-800">
                    Ce qui est inclus
                  </h2>
                </div>
                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-cream-50 border border-cream-100">
                      <CheckCircle
                        size={20}
                        className="text-sage-500 mt-0.5 shrink-0"
                      />
                      <span className="text-charcoal-600 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.tags && product.tags.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-charcoal-800 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-sage-50 text-sage-600 text-sm font-medium border border-sage-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-cream-200 sticky top-24">
              <h3 className="text-xl font-heading font-bold text-charcoal-800 mb-8">
                Détails du produit
              </h3>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="block text-sm text-charcoal-500 mb-2">Disponibilité</span>
                  <span className={`font-medium ${product.inStock === false ? 'text-red-600' : 'text-green-600'}`}>
                    {product.inStock === false ? 'Rupture de stock' : 'En stock'}
                  </span>
                </div>
              </div>

              <div className="bg-cream-50 p-6 rounded-2xl mb-6 text-center border border-cream-200">
                <span className="block text-sm text-charcoal-500 mb-2">
                  Prix
                </span>
                <span className="block text-3xl font-bold text-charcoal-800">
                  {product.price}
                </span>
              </div>

              <Button 
                className="w-full mb-3" 
                to={wtsplink}
                disabled={product.inStock === false}>
                <ShoppingCart size={20} className="mr-2" />
                Acheter maintenant
              </Button>

              <p className="text-xs text-center text-charcoal-400 mt-4">
                Contact via WhatsApp pour l'achat
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}