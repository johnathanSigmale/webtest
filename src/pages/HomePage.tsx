import { Hero } from '../components/Hero';
import { AudienceCards } from '../components/AudienceCards';
import { FeaturedPrograms } from '../components/FeaturedPrograms';
import { Testimonials } from '../components/Testimonials';
import { TrustIndicators } from '../components/TrustIndicators';
export function HomePage() {
  return (
    <>
      <Hero />
      <AudienceCards />
      <FeaturedPrograms />
      <Testimonials />
      <TrustIndicators />
    </>);

}