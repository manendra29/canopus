// components/AboutSection.js
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const contentContainerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Add animation class to the main section
          entry.target.classList.add('animate-fadeIn');
          
          // Add animation classes to children elements
          if (imageContainerRef.current) {
            imageContainerRef.current.classList.remove('opacity-0');
            imageContainerRef.current.classList.add('animate-slideInLeft');
          }
          
          if (contentContainerRef.current) {
            contentContainerRef.current.classList.remove('opacity-0');
            contentContainerRef.current.classList.add('animate-slideInRight');
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-purple-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            className="md:w-1/2 opacity-0 transition-all duration-1000 delay-300" 
            ref={imageContainerRef}
          >
            <img 
              src="/images/p1.jpg" 
              alt="Happy children playing" 
              className="rounded-lg shadow-xl w-full h-auto"
              onError={(e) => {
                console.error("Image failed to load");
                e.target.style.border = "2px dashed red";
                e.target.style.padding = "20px";
                e.target.style.height = "300px";
                e.target.style.display = "flex";
                e.target.style.alignItems = "center";
                e.target.style.justifyContent = "center";
                e.target.alt = "Image failed to load";
              }}
            />
          </div>
          
          <div 
            className="md:w-1/2 opacity-0 transition-all duration-1000 delay-600"
            ref={contentContainerRef}
          >
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 bg-yellow-400 mr-4"></div>
              <h3 className="text-xl text-purple-600 font-semibold">Our Story</h3>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Where Imagination Meets Education
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Canopus International was founded in 2010 with a simple mission: to create a nurturing environment where children can discover, create, and grow at their own pace. We believe that every child is unique and deserves an education that celebrates their individuality.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Our team of passionate educators is dedicated to providing a supportive and stimulating atmosphere that encourages curiosity, creativity, and confidence in every child.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Creative Learning</h4>
                  <p className="text-gray-600">Art, music, and imaginative play</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Safe Environment</h4>
                  <p className="text-gray-600">Security and comfort for all</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;