// import React from 'react';
// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-purple-900 text-white">
//       {/* Top wave decoration */}
//       <div className="text-purple-900">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="currentColor">
//           <path d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
//           </path>
//         </svg>
//       </div>
      
//       <div className="container mx-auto px-4 pt-8 pb-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* About */}
//           <div>
//             <div className="flex items-center mb-6">
//               <img 
//                 src="/images/images.jpeg" 
//                 alt="Little Explorers Preschool" 
//                 className="h-12 w-auto mr-3"
//               />
//               <h3 className="text-2xl font-bold">Little Explorers</h3>
//             </div>
//             <p className="text-purple-200 mb-6">
//               A nurturing and engaging preschool environment where children can learn, play, and grow to their fullest potential.
//             </p>
//             <div className="flex space-x-4">
//               {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
//                 <a 
//                   key={social}
//                   href={`#${social}`}
//                   className="bg-purple-800 hover:bg-purple-700 p-2 rounded-full transition duration-300"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xl font-bold mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               {[
//                 { name: 'About Us', href: '#about' },
//                 { name: 'Our Programs', href: '#programs' },
//                 { name: 'Gallery', href: '#gallery' },
//                 { name: 'Testimonials', href: '#testimonials' },
//                 { name: 'Contact Us', href: '#contact' },
//                 { name: 'Enrollment', href: '#' },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <a 
//                     href={link.href}
//                     className="text-purple-200 hover:text-white transition duration-300 flex items-center"
//                   >
//                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                     </svg>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* Hours */}
//           <div>
//             <h4 className="text-xl font-bold mb-6">Hours of Operation</h4>
//             <ul className="space-y-3">
//               {[
//                 { day: 'Monday - Friday', hours: '7:30 AM - 6:00 PM' },
//                 { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
//                 { day: 'Sunday', hours: 'Closed' },
//               ].map((schedule) => (
//                 <li key={schedule.day} className="flex justify-between">
//                   <span className="text-purple-200">{schedule.day}</span>
//                   <span>{schedule.hours}</span>
//                 </li>  
//               ))}
//             </ul>
//             <div className="mt-6">
//               <h5 className="font-semibold mb-2">Holiday Schedule</h5>
//               <p className="text-purple-200">
//                 Please check our calendar for holiday closures and special events.
//               </p>
//             </div>
//           </div>
          
//           {/* Contact */}
//           <div>
//             <h4 className="text-xl font-bold mb-6">Contact Us</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <svg className="w-5 h-5 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                 </svg>
//                 <span className="text-purple-200">
//                   123 Learning Lane<br />
//                   Imagination City, IC 12345
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                 </svg>
//                 <span className="text-purple-200">(555) 123-4567</span>
//               </li>
//               <li className="flex items-center">
//                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                 </svg>
//                 <span className="text-purple-200">info@littleexplorers.edu</span>
//               </li>
//             </ul>
//             <div className="mt-6">
//               <h5 className="font-semibold mb-3">Newsletter</h5>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="bg-purple-800 text-white rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//                 <button className="bg-purple-600 hover:bg-purple-500 rounded-r px-4 transition duration-300">
//                   Join
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Copyright */}
//         <div className="border-t border-purple-800 mt-10 pt-6 text-center">
//           <p>© {currentYear} Little Explorers Preschool. All Rights Reserved.</p>
//           <div className="mt-2">
//             <a href="#" className="text-purple-200 hover:text-white mx-2 transition duration-300">Privacy Policy</a>
//             <span className="text-purple-700">|</span>
//             <a href="#" className="text-purple-200 hover:text-white mx-2 transition duration-300">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;












import React from 'react';
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-purple-900 text-white">
      {/* Top wave decoration */}
      <div className="text-purple-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="currentColor">
          <path d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/images/images.jpeg" 
                alt="Little Explorers Preschool" 
                className="h-12 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold">Canopus International</h3>
            </div>
            <p className="text-purple-200 mb-6">
              A nurturing and engaging preschool environment where children can learn, play, and grow to their fullest potential.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="bg-purple-800 hover:bg-purple-700 p-2 rounded-full transition duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#instagram" className="bg-purple-800 hover:bg-purple-700 p-2 rounded-full transition duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#youtube" className="bg-purple-800 hover:bg-purple-700 p-2 rounded-full transition duration-300">
                <YouTube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[{ name: 'About Us', href: '#about' }, { name: 'Our Programs', href: '#programs' }, { name: 'Gallery', href: '#gallery' }, { name: 'Testimonials', href: '#testimonials' }, { name: 'Contact Us', href: '#contact' }, { name: 'Enrollment', href: '#' }].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-purple-200 hover:text-white transition duration-300 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6">Hours of Operation</h4>
            <ul className="space-y-3">
              {[{ day: 'Monday - Friday', hours: '7:30 AM - 6:00 PM' }, { day: 'Saturday', hours: '9:00 AM - 1:00 PM' }, { day: 'Sunday', hours: 'Closed' }].map((schedule) => (
                <li key={schedule.day} className="flex justify-between">
                  <span className="text-purple-200">{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </li>  
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Holiday Schedule</h5>
              <p className="text-purple-200">Please check our calendar for holiday closures and special events.</p>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-200"> Besides Vidhya Bharti school, 64/c atop nagar Opp silver point complex, <br />Bhatar, Athwa, Surat, Gujarat 395017</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-200"> +91 97262 75412</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-200">info@littleexplorers.edu</span>
              </li>
            </ul>
            
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-purple-800 mt-10 pt-6 text-center">
          <p>© {currentYear} Little Explorers Preschool. All Rights Reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-purple-200 hover:text-white mx-2 transition duration-300">Privacy Policy</a>
            <span className="text-purple-700">|</span>
            <a href="#" className="text-purple-200 hover:text-white mx-2 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
