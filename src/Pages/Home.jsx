import React from 'react'
import Header from '../component/Header/Header'
import HeroSection from '../component/HomeSection/HeroSection'
import AboutSection from '../component/HomeSection/AboutSection'
import ProgramsSection from '../component/HomeSection/ProgramsSection'
import GallerySection from '../component/HomeSection/GallerySection'
import TestimonialsSection from '../component/HomeSection/TestimonialsSection'
import ContactSection from '../component/HomeSection/ContactSection'
import Footer from '../component/Header/Footer'
import LatestNewsAndEvents from '../component/HomeSection/LatestNewsAndEvents '

const Home = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <LatestNewsAndEvents />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
