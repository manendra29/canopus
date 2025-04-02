// // components/ContactSection.js
// import React, { useRef, useState, useEffect } from 'react';

// const ContactSection = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     childName: '',
//     childAge: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
  
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
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here would be the code to submit the form to a backend
//     console.log('Form submitted:', formState);
//     setIsSubmitted(true);
    
//     // Reset form after submission (simulating)
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormState({
//         name: '',
//         email: '',
//         phone: '',
//         childName: '',
//         childAge: '',
//         message: ''
//       });
//     }, 3000);
//   };

//   return (
//     <section id="contact" className="py-20 bg-white" ref={sectionRef}>
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Info */}
//             <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
//               <div className="mb-10">
//                 <div className="flex items-center mb-4">
//                   <div className="h-1 w-10 bg-yellow-400 mr-4"></div>
//                   <h3 className="text-xl text-yellow-600 font-semibold">Get In Touch</h3>
//                 </div>
                
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//                   We'd Love to Hear From You
//                 </h2>
                
//                 <p className="text-lg text-gray-600 mb-8">
//                   Whether you have questions about our programs, want to schedule a tour, or are ready to enroll your child, we're here to help every step of the way.
//                 </p>
//               </div>
              
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="bg-purple-100 p-4 rounded-full mr-6">
//                     <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h4>
//                     <p className="text-gray-600">123 Rainbow Lane, Sunshine City, SC 12345</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-green-100 p-4 rounded-full mr-6">
//                     <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h4>
//                     <p className="text-gray-600">(555) 123-4567</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-4 rounded-full mr-6">
//                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h4>
//                     <p className="text-gray-600">hello@littleexplorers.edu</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-yellow-100 p-4 rounded-full mr-6">
//                     <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-1">Hours</h4>
//                     <p className="text-gray-600">Monday-Friday: 7:00 AM - 6:00 PM</p>
//                     <p className="text-gray-600">Weekends: Closed</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-12">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
//                 <div className="flex space-x-4">
//                   {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
//                     <a 
//                       key={social}
//                       href={`#${social}`}
//                       className="bg-purple-100 hover:bg-purple-200 text-purple-600 p-3 rounded-full transition duration-300"
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
//                       </svg>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             {/* Contact Form */}
//             <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
//               <div className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden">
//                 {/* Decorative elements */}
//                 <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10"></div>
//                 <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-purple-400 rounded-full opacity-10"></div>
                
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
//                 {isSubmitted ? (
//                   <div className="text-center py-8 animate-fadeIn">
//                     <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
//                       <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                     </div>
//                     <h4 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
//                     <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon!</p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formState.name}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formState.email}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
//                           required
//                         />
//                       </div>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formState.phone}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="childAge" className="block text-gray-700 font-medium mb-2">Child's Age</label>
//                         <select
//                           id="childAge"
//                           name="childAge"
//                           value={formState.childAge}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
//                         >
//                           <option value="">Select Age</option>
//                           <option value="18-24 months">18-24 months</option>
//                           <option value="2-3 years">2-3 years</option>
//                           <option value="3-4 years">3-4 years</option>
//                           <option value="4-5 years">4-5 years</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label htmlFor="childName" className="block text-gray-700 font-medium mb-2">Child's Name</label>
//                       <input
//                         type="text"
//                         id="childName"
//                         name="childName"
//                         value={formState.childName}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="4"
//                         value={formState.message}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
//                         required
//                       ></textarea>
//                     </div>
                    
//                     <div>
//                       <button
//                         type="submit"
//                         className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
//                       >
//                         Send Message
//                         <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                         </svg>
//                       </button>
//                     </div>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;











import React, { useRef, useState, useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be the code to submit the form to a backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    
    // Reset form after submission (simulating)
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-10 bg-yellow-400 mr-4"></div>
                  <h3 className="text-xl text-yellow-600 font-semibold">Get In Touch</h3>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  We'd Love to Hear From You
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  Whether you have questions about our programs, want to schedule a tour, or are ready to enroll your child, we're here to help every step of the way.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-4 rounded-full mr-6">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h4>
                    <p className="text-gray-600"> Besides Vidhya Bharti school, 64/c atop nagar Opp silver point complex, Bhatar, Athwa, Surat, Gujarat 395017</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-4 rounded-full mr-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h4>
                    <p className="text-gray-600"> +91 9726275412</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full mr-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h4>
                    <p className="text-gray-600">hello@Canopus.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-4 rounded-full mr-6">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Hours</h4>
                    <p className="text-gray-600">Monday-Friday: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Weekends: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#facebook"
                    className="bg-purple-100 hover:bg-purple-200 text-purple-600 p-3 rounded-full transition duration-300"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a 
                    href="#twitter"
                    className="bg-purple-100 hover:bg-purple-200 text-purple-600 p-3 rounded-full transition duration-300"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a 
                    href="#instagram"
                    className="bg-purple-100 hover:bg-purple-200 text-purple-600 p-3 rounded-full transition duration-300"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a 
                    href="#youtube"
                    className="bg-purple-100 hover:bg-purple-200 text-purple-600 p-3 rounded-full transition duration-300"
                  >
                    <YouTubeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <div className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-purple-400 rounded-full opacity-10"></div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
                    <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="childAge" className="block text-gray-700 font-medium mb-2">Child's Age</label>
                        <select
                          id="childAge"
                          name="childAge"
                          value={formState.childAge}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
                        >
                          <option value="">Select Age</option>
                          <option value="18-24 months">18-24 months</option>
                          <option value="2-3 years">2-3 years</option>
                          <option value="3-4 years">3-4 years</option>
                          <option value="4-5 years">4-5 years</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="childName" className="block text-gray-700 font-medium mb-2">Child's Name</label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formState.childName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        Send Message
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;