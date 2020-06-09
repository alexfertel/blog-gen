import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PerksSection from '../components/home/PerksSection';
import FeaturedSection from '../components/home/FeaturedSection';
import ContactUsSection from '../components/home/ContactUsSection';
import Footer from '../components/home/Footer';

export default function Index() {
  return (
    <div className="w-full">
      <HeroSection />
      <PerksSection />
      <FeaturedSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
