// components/Header.js
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
        <img 
  src="/images/images.jpeg" 
  alt="Little Explorers Preschool" 
  className="h-12 w-12 rounded-full mr-3"
/>

          <h1 className={`font-bold text-2xl ${isScrolled ? 'text-purple-600' : 'text-white'}`}>
            Canopus International
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Programs', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-yellow-300'
              } font-medium transition duration-300 text-lg`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`h-8 w-8 ${isScrolled ? 'text-purple-600' : 'text-white'}`} />
          ) : (
            <Menu className={`h-8 w-8 ${isScrolled ? 'text-purple-600' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {['Home', 'About', 'Programs', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-purple-600 hover:text-purple-800 font-medium text-lg py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;