// components/HeroSection.js
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/images/best.jpg",
      title: "Where Learning Begins With Fun",
      subtitle: "Nurturing Young Minds in a Colorful World of Discovery"
    },
    {
      image: "/images/dance.jpg",
      title: "Play, Learn, Grow Together",
      subtitle: "Building Foundations for a Bright Future"
    },
    {
      image: "/images/house.jpg",
      title: "Every Child is Unique",
      subtitle: "Personalized Care and Education for Your Little One"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title}
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
              <h1 
                className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInUp"
                style={{animationDelay: '0.3s'}}
              >
                {slide.title}
              </h1>
              <p 
                className="text-xl md:text-2xl text-white mb-8 max-w-3xl animate-fadeInUp"
                style={{animationDelay: '0.6s'}}
              >
                {slide.subtitle}
              </p>
              <button 
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{animationDelay: '0.9s'}}
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-yellow-400 w-10' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;