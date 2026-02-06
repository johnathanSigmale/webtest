import { useParams, Link } from 'react-router-dom';
import { Clock, Users, CheckCircle, ArrowLeft, BookOpen, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { programs } from '../data/programs';
import { WhatsApp } from '../components/ui/icons';
import ImageWithLoader from '../components/ui/ImageWithLoader';

export function ProgramDetailPage() {
  const { slug } = useParams();
  const program = programs.filter((p) => p.id == slug)[0]
  const wtsplink = `https://wa.me/212600049734?text=Bonjour,+j'aimerai+m'inscrire+au+programme+${program.title}.`

  // const program = {
  //   title: 'Programme Harmonie',
  //   subtitle: "Retrouvez l'équilibre familial en 3 mois",
  //   description:
  //   'Un parcours complet conçu pour transformer la dynamique familiale en profondeur. Nous travaillons ensemble sur la communication, la gestion des émotions et la mise en place de nouvelles habitudes positives.',
  //   duration: '3 mois',
  //   format: 'Hybride (En ligne + Présentiel)',
  //   price: 'Sur devis',
  //   features: [
  //   'Bilan initial complet (2h)',
  //   '6 séances de coaching familial',
  //   'Accès à la plateforme de ressources en ligne',
  //   'Support WhatsApp 5j/7',
  //   'Bilan de fin de parcours']

  // };
  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/programmes"
          className="inline-flex items-center text-charcoal-600 hover:text-terracotta-600 transition-colors font-medium">

          <ArrowLeft size={20} className="mr-2" />
          Retour aux programmes
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
          <div className="absolute top-6 left-6 w-[180px] h-[180px] opacity-20 pointer-events-none animate-float">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-sage-100">
              <path d="M41.2,-70.5C54.6,-63.6,67.5,-55.2,76.6,-44.1C85.7,-33,91,-19.2,89.9,-5.8C88.8,7.6,81.3,20.6,72.1,31.7C62.9,42.8,52,52,40.3,58.9C28.6,65.8,16.1,70.4,2.6,66C-10.9,61.6,-25.4,48.2,-38.3,37.2C-51.2,26.2,-62.5,17.6,-67.2,6.1C-71.9,-5.4,-70,-19.8,-62.4,-31.6C-54.8,-43.4,-41.5,-52.6,-28.6,-59.8C-15.7,-67,-3.2,-72.2,8.8,-70.5L20.8,-68.8" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="absolute bottom-6 right-6 w-[140px] h-[140px] opacity-18 pointer-events-none animate-float" style={{animationDelay: '-1.5s'}}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-cream-200">
              <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.7,2.2,70C-11.5,66.3,-26,53.2,-38.6,42.6C-51.2,32,-61.8,23.8,-68.6,12.6C-75.4,1.4,-78.3,-12.8,-73.4,-25.4C-68.5,-38,-55.8,-49,-43.3,-56.8C-30.8,-64.6,-18.5,-69.2,-4.8,-61.6L8.9,-54" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className='flex gap-8'>
                <program.icon size={30} className='bg-terracotta-100 text-terracotta-700 rounded-xl' />
                <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta-100 text-terracotta-700 font-bold text-sm mb-6">
                  {program.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-800 mb-4">
                {program.title}
              </h1>
              <p className="text-xl text-charcoal-600 mb-8">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8 text-charcoal-600">
                {program.duration && <div className="flex items-center">
                  <Clock size={20} className="text-terracotta-500 mr-2" />
                  <span className="font-medium">{program.duration}</span>
                </div>}
                <div className="flex items-center">
                  <Users size={20} className="text-terracotta-500 mr-2" />
                  <span className="font-medium">{program.format}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" to={wtsplink}>{program.produit ? 'Commander' : 'Réserver ma place'} <WhatsApp className='size-6 ml-2'/></Button>
                <a href={program.brochure} download={program.brochure}>
                <Button variant="outline" size="lg">
                  Télécharger la brochure
                </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-sage-100 flex items-center justify-center">
                <ImageWithLoader src={program.image} className='h-full w-full object-cover rounded-md'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {program.apropos && <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                  <BookOpen size={20} className="text-sage-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-charcoal-800">
                  À propos du programme
                </h2>
              </div>
              <p className="text-lg text-charcoal-600 leading-relaxed whitespace-pre-line">
                {program.apropos}
              </p>
            </div>}

            {program.objectifs && <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center">
                  <Target size={20} className="text-terracotta-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-charcoal-800">
                  Ce que vous allez apprendre
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.objectifs.map((objectif) =>
                <div key={objectif} className="flex items-start gap-3 p-4 rounded-xl bg-cream-50 border border-cream-100">
                    <CheckCircle
                    size={20}
                    className="text-sage-500 mt-1 shrink-0" />

                    <span className="text-charcoal-600 leading-relaxed">
                      {objectif}
                    </span>
                  </div>
                )}
              </div>
            </div>}

            {program.modules && <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
                  <Clock size={20} className="text-charcoal-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-charcoal-800">
                  Le programme en détail
                </h2>
              </div>
              <div className="space-y-6">
                {program.modules.map((module, idx) =>
                <div
                  key={module.title}
                  className="flex items-start gap-6 bg-cream-50 p-6 rounded-2xl border border-cream-100 shadow-sm hover:shadow-md transition-shadow">

                  <div className="w-10 h-10 rounded-full bg-terracotta-500 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-charcoal-800 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-charcoal-600 whitespace-pre-line leading-relaxed">
                      {module.content}
                    </p>
                  </div>
                </div>
                )}
              </div>
            </div>}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-cream-200 sticky top-24">
              {program.features && <div>
                <h3 className="text-xl font-heading font-bold text-charcoal-800 mb-6">
                  Ce qui est inclus
                </h3>
                <ul className="space-y-4 mb-8">
                  {program.features.map((feature, idx) =>
                  <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2 shrink-0"></div>
                      <span className="text-charcoal-600 text-sm">{feature}</span>
                    </li>
                  )}
                </ul>
              </div>}

              <div className="bg-cream-50 p-4 rounded-xl mb-6 text-center">
                <span className="block text-sm text-charcoal-500 mb-1">
                  Tarif du programme
                </span>
                <span className="block text-2xl font-bold text-charcoal-800">
                  {program.price}
                </span>
              </div>

              <Button className="w-full mb-3" to={wtsplink}>{program.produit ? 'Commander maintenant' : `S'inscrire maintenant`} <WhatsApp className='size-6 ml-2'/></Button>
              {/* <p className="text-xs text-center text-charcoal-400">
                Paiement en 3x sans frais disponible
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </div>);

}