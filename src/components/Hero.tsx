import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImageWithLoader from './ui/ImageWithLoader';
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-cream-50">
      {/* Background Organic Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] opacity-30 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full fill-terracotta-100">

          <path
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.7,2.2,70C-11.5,66.3,-26,53.2,-38.6,42.6C-51.2,32,-61.8,23.8,-68.6,12.6C-75.4,1.4,-78.3,-12.8,-73.4,-25.4C-68.5,-38,-55.8,-49,-43.3,-56.8C-30.8,-64.6,-18.5,-69.2,-4.8,-61.6L8.9,-54"
            transform="translate(100 100)" />

        </svg>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] opacity-30 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full fill-sage-100">

          <path
            d="M41.2,-70.5C54.6,-63.6,67.5,-55.2,76.6,-44.1C85.7,-33,91,-19.2,89.9,-5.8C88.8,7.6,81.3,20.6,72.1,31.7C62.9,42.8,52,52,40.3,58.9C28.6,65.8,16.1,70.4,2.6,66C-10.9,61.6,-25.4,48.2,-38.3,37.2C-51.2,26.2,-62.5,17.6,-67.2,6.1C-71.9,-5.4,-70,-19.8,-62.4,-31.6C-54.8,-43.4,-41.5,-52.6,-28.6,-59.8C-15.7,-67,-3.2,-72.2,8.8,-70.5L20.8,-68.8"
            transform="translate(100 100)" />

        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}>

            <a className="inline-flex gap-5 px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 font-semibold text-sm mb-6 hover:shadow-md transition-shadow" href='https://www.tafakkur.com' target='_blank'>
              <div className='my-auto'>Partenaire officiel Tafakkur</div>
              <ImageWithLoader src='/partenaires/tafakkur.webp' className='h-12 drop-shadow hidden md:block' />
            </a>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal-800 leading-tight mb-6">
              Accompagner chaque famille vers son{' '}
              <span className="text-terracotta-500 relative inline-block">
                épanouissement
                <svg
                  className="absolute w-full h-3 bottom-1 left-0 text-terracotta-200 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none">

                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none" />

                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal-500 mb-8 leading-relaxed max-w-lg">
              Un espace de soutien chaleureux pour parents et enfants. Retrouvez
              l'harmonie, la confiance et la joie d'être ensemble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" to='/programmes'>
                Découvrir nos programmes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" to='/a-propos'>
                En savoir plus
              </Button>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="relative">

            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Organic shape behind image */}
              <div className="absolute inset-0 bg-cream-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-float opacity-60"></div>
              <div
                className="absolute inset-4 bg-terracotta-50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float"
                style={{
                  animationDelay: '-2s'
                }}>
              </div>

              {/* <img src='happyfam.png' className='relative z-10 w-full h-full drop-shadow-xl'/> */}

              {/* Hand-drawn style illustration (SVG) */}
              <svg
                viewBox="0 0 400 400"
                className="relative z-10 w-full h-full drop-shadow-xl"
                xmlns="http://www.w3.org/2000/svg">

                {/* Abstract Family Representation - Soft Lines */}
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Parent Figure 1 */}
                  <path
                    d="M140 280 C 140 280, 120 200, 160 160 C 180 140, 200 140, 220 160 C 260 200, 240 280, 240 280"
                    stroke="#C4704B"
                    strokeWidth="3"
                    fill="#FBE8E2" />

                  <circle
                    cx="190"
                    cy="130"
                    r="25"
                    stroke="#C4704B"
                    strokeWidth="3"
                    fill="#FFF" />


                  {/* Parent Figure 2 */}
                  <path
                    d="M220 290 C 220 290, 240 220, 270 190 C 285 175, 305 175, 320 190 C 350 220, 330 290, 330 290"
                    stroke="#8B9E7C"
                    strokeWidth="3"
                    fill="#E9EFE7" />

                  <circle
                    cx="295"
                    cy="160"
                    r="22"
                    stroke="#8B9E7C"
                    strokeWidth="3"
                    fill="#FFF" />


                  {/* Child Figure */}
                  <path
                    d="M180 300 C 180 300, 170 250, 200 220 C 215 205, 235 205, 250 220 C 280 250, 270 300, 270 300"
                    stroke="#5A5A5A"
                    strokeWidth="3"
                    fill="#FFF" />

                  <circle
                    cx="225"
                    cy="200"
                    r="18"
                    stroke="#5A5A5A"
                    strokeWidth="3"
                    fill="#FFF" />


                  {/* Decorative hearts */}
                  <path
                    d="M320 100 Q 330 90, 340 100 T 360 100 Q 370 110, 360 120 L 340 140 L 320 120 Q 310 110, 320 100"
                    fill="#D4856A"
                    stroke="none"
                    opacity="0.8" />

                  <path
                    d="M100 150 Q 105 145, 110 150 T 120 150 Q 125 155, 120 160 L 110 170 L 100 160 Q 95 155, 100 150"
                    fill="#A3B593"
                    stroke="none"
                    opacity="0.8" />

                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}