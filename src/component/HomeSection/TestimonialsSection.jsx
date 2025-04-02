// // components/TestimonialsSection.js
// import React, { useState, useEffect, useRef } from 'react';

// const TestimonialsSection = () => {
//   const sectionRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
  
//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Parent of Emily, Age 4",
//       image: "/images/house.jpg",
//       text: "Little Explorers has been a second home for my daughter. She has flourished socially and academically in ways I couldn't have imagined. The teachers truly care and the curriculum is fantastic!"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Parent of Twins, Age 3",
//       image: "/images/co-ed.jpg",
//       text: "Finding a preschool for twins was challenging until we discovered Little Explorers. They understand each child's unique needs and provide a balanced approach to learning and play. My children love going to school every day!"
//     },
//     {
//       id: 3,
//       name: "Amanda Rodriguez",
//       role: "Parent of Lucas, Age 5",
//       image: "/images/best.jpg",
//       text: "The Pre-K program prepared my son for kindergarten beautifully. He's confident, curious, and has developed such a love for learning. I'm grateful for the foundation Little Explorers has provided."
//     },
//     {
//       id: 4,
//       name: "David Thompson",
//       role: "Parent of Zoe, Age 2",
//       image: "/images/dance.jpg",
//       text: "I was nervous about sending my little one to preschool, but the toddler program at Little Explorers made the transition seamless. The gentle approach and attentive staff have made all the difference."
//     }
//   ];
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 6000);
    
//     return () => clearInterval(interval);
//   }, [testimonials.length]);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section id="testimonials" className="py-20 bg-purple-100" ref={sectionRef}>
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <div className="flex justify-center items-center mb-4">
//             <div className="h-1 w-10 bg-purple-600 mr-2"></div>
//             <h3 className="text-xl text-purple-600 font-semibold">Parent Testimonials</h3>
//             <div className="h-1 w-10 bg-purple-600 ml-2"></div>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             What Our Families Say
//           </h2>
          
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Hear from the parents who have entrusted us with their children's early education and care.
//           </p>
//         </div>
        
//         <div className="max-w-5xl mx-auto relative">
//           {/* Decorative elements */}
//           <div className="absolute -top-8 -left-8 w-16 h-16 text-yellow-400 opacity-30 animate-float">
//             <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//               <path d="M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
//             </svg>
//           </div>
//           <div className="absolute -bottom-10 -right-10 w-20 h-20 text-purple-400 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
//             <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//               <path d="M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
//             </svg>
//           </div>
          
//           {/* Testimonial slider */}
//           <div className={`bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
//             <div className="relative h-full">
//               {testimonials.map((testimonial, index) => (
//                 <div 
//                   key={testimonial.id}
//                   className={`absolute inset-0 transition-opacity duration-1000 p-8 md:p-12 ${
//                     currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
//                   }`}
//                 >
//                   <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//                     <div className="flex-shrink-0">
//                       <div className="relative">
//                         <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-200">
//                           <img 
//                             src={testimonial.image} 
//                             alt={testimonial.name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2">
//                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="flex-1 text-center md:text-left">
//                       <svg className="w-10 h-10 text-purple-200 mb-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M11 7.05C9.022 7.68 8 9.033 8 11.17c0 2.838 1.44 5.05 4.45 5.05.474 0 .856.428.856.956 0 .53-.382.954-.856.954C8.424 18.13 6 15.512 6 11.17 6 8.249 7.398 6.2 10.26 5.087L11 7.05zm6.584 0c-1.98.63-3 1.983-3 4.12 0 2.838 1.44 5.05 4.45 5.05.475 0 .855.428.855.956 0 .53-.38.954-.855.954-4.027 0-6.45-2.618-6.45-6.96 0-2.921 1.4-4.97 4.26-6.083l.74 1.963z"></path>
//                       </svg>
                      
//                       <p className="text-gray-700 text-lg md:text-xl mb-6 italic">{testimonial.text}</p>
                      
//                       <div>
//                         <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
//                         <p className="text-purple-600">{testimonial.role}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Navigation dots */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   currentIndex === index ? 'bg-purple-600 w-6' : 'bg-purple-300'
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;














// components/TestimonialsSection.js
import React, { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent of Emily, Age 4",
      image: "/images/house.jpg",
      text: "Canopus International has been a second home for my daughter. She has flourished socially and academically in ways I couldn't have imagined. The teachers truly care and the curriculum is fantastic!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Parent of Twins, Age 3",
      image: "/images/co-ed.jpg",
      text: "Finding a preschool for twins was challenging until we discovered Canopus International. They understand each child's unique needs and provide a balanced approach to learning and play. My children love going to school every day!"
    },
    {
      id: 3,
      name: "Amanda Rodriguez",
      role: "Parent of Lucas, Age 5",
      image: "/images/best.jpg",
      text: "The Pre-K program prepared my son for kindergarten beautifully. He's confident, curious, and has developed such a love for learning. I'm grateful for the foundation Canopus International has provided."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Parent of Zoe, Age 2",
      image: "/images/dance.jpg",
      text: "I was nervous about sending my little one to preschool, but the toddler program at Canopus International made the transition seamless. The gentle approach and attentive staff have made all the difference."
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
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
    <section id="testimonials" className="py-20 bg-purple-100" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-10 bg-purple-600 mr-2"></div>
            <h3 className="text-xl text-purple-600 font-semibold">Parent Testimonials</h3>
            <div className="h-1 w-10 bg-purple-600 ml-2"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What Our Families Say
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the parents who have entrusted us with their children's early education and care.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 text-yellow-400 opacity-30 animate-float">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
          </div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 text-purple-400 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
          </div>
          
          {/* Testimonial slider */}
          <div className={`bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <div className="relative h-96"> {/* Add fixed height */}
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-opacity duration-1000 p-8 md:p-12 ${
                    currentIndex === index ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-200">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <svg className="w-10 h-10 text-purple-200 mb-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7.05C9.022 7.68 8 9.033 8 11.17c0 2.838 1.44 5.05 4.45 5.05.474 0 .856.428.856.956 0 .53-.382.954-.856.954C8.424 18.13 6 15.512 6 11.17 6 8.249 7.398 6.2 10.26 5.087L11 7.05zm6.584 0c-1.98.63-3 1.983-3 4.12 0 2.838 1.44 5.05 4.45 5.05.475 0 .855.428.855.956 0 .53-.38.954-.855.954-4.027 0-6.45-2.618-6.45-6.96 0-2.921 1.4-4.97 4.26-6.083l.74 1.963z"></path>
                      </svg>
                      
                      <p className="text-gray-700 text-lg md:text-xl mb-6 italic">{testimonial.text}</p>
                      
                      <div>
                        <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                        <p className="text-purple-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-purple-600 w-6' : 'bg-purple-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;