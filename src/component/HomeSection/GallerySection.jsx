// components/GallerySection.js
import React, { useState, useEffect, useRef } from 'react';

const GallerySection = () => {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const images = [
    {
      id: 1,
      src: "/images/p1.jpg",
      alt: "Children painting together",
      category: "Art"
    },
    {
      id: 2,
      src: "/images/p2.jpg",
      alt: "Outdoor playground time",
      category: "Play"
    },
    {
      id: 3,
      src: "/images/house.jpg",
      alt: "Story time in the reading corner",
      category: "Learning"
    },
    {
      id: 4,
      src: "/images/dance.jpg",
      alt: "Music and movement class",
      category: "Music"
    },
    {
      id: 5,
      src: "/images/co-ed.jpg",
      alt: "Science experiment with teachers",
      category: "Science"
    },
    {
      id: 6,
      src: "/images/best.jpg",
      alt: "Lunch time at school",
      category: "Daily Life"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="gallery" className="py-20 bg-yellow-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-10 bg-yellow-500 mr-2"></div>
            <h3 className="text-xl text-yellow-600 font-semibold">Our Gallery</h3>
            <div className="h-1 w-10 bg-yellow-500 ml-2"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Capturing Moments of Joy and Discovery
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a peek at our vibrant learning environment and see the magic that happens every day in our classrooms and playgrounds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className={`group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/70 to-transparent opacity-0 group-hover:opacity-70 transition duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                <span className="bg-yellow-500 text-xs text-yellow-900 px-3 py-1 rounded-full font-medium mb-2 inline-block">{image.category}</span>
                <h3 className="text-lg font-bold">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 flex items-center">
            View All Photos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
        
        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-900 hover:text-red-500 transition duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold text-gray-800">{selectedImage.alt}</h3>
                <p className="text-purple-600">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;