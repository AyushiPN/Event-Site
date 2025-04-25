import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import EventCategories from '../components/home/EventCategories';
import FeaturedEvents from '../components/home/FeaturedEvents';
import Testimonials from '../components/home/Testimonials';
import ProductShowcase from '../components/home/ProductShowcase';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Elite Events | Premium Event Management';
  }, []);

  return (
    <div>
      <Hero />
      <EventCategories />
      <FeaturedEvents />
      <ProductShowcase />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;