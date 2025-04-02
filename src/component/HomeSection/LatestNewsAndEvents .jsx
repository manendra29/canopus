import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const LatestNewsAndEvents = () => {
  const [activeTab, setActiveTab] = useState('news');
  const componentRef = useRef(null);
  // Changed to false so it triggers every time it comes into view
  const isInView = useInView(componentRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const itemsControls = useAnimation();
  
  // This effect runs whenever the component comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Slight delay before starting item animations
      setTimeout(() => {
        itemsControls.start("visible");
      }, 400);
    } else {
      // Reset animations when component is out of view
      controls.start("hidden");
      itemsControls.start("hidden");
    }
  }, [isInView, controls, itemsControls]);
  
  // This effect runs when tab changes
  useEffect(() => {
    // Only animate if already in view
    if (isInView) {
      // Reset animations for items when tab changes
      itemsControls.set("hidden");
      
      // Start animations with a slight delay
      setTimeout(() => {
        itemsControls.start("visible");
      }, 100);
    }
  }, [activeTab, itemsControls, isInView]);
  
  const newsItems = [
    {
      id: 1,
      title: "Annual Science Fair Winners Announced",
      date: "March 28, 2025",
      description: "Congratulations to all participants in this year's science fair! Special recognition to Emma Chen for her innovative renewable energy project.",
      image: "/images/best.jpg",
      category: "Academic"
    },
    {
      id: 2,
      title: "Basketball Team Advances to State Finals",
      date: "March 25, 2025",
      description: "Our varsity basketball team secured their spot in the state finals after an exciting victory last weekend. Join us to cheer them on!",
      image: "/images/co-ed.jpg",
      category: "Sports"
    },
    {
      id: 3,
      title: "Spring Musical Opening This Weekend",
      date: "March 22, 2025",
      description: "Don't miss our talented drama department's production of 'Into the Woods' this weekend. Tickets available online.",
      image: "/images/download.jpeg",
      category: "Arts"
    }
  ];
  
  const eventsItems = [
    {
      id: 1,
      title: "Parent-Teacher Conferences",
      date: "April 10-11, 2025",
      description: "Schedule your meeting time with teachers through our online portal. Virtual and in-person options available.",
      image: "/images/p1.jpg",
      location: "Main Campus"
    },
    {
      id: 2,
      title: "College Application Workshop",
      date: "April 15, 2025",
      description: "Seniors and juniors are invited to attend this informative session on navigating the college application process.",
      image: "/images/house.jpg",
      location: "Library Media Center"
    },
    {
      id: 3,
      title: "Earth Day Campus Cleanup",
      date: "April 22, 2025",
      description: "Join our environmental club for a campus-wide cleanup initiative. All participants receive community service hours.",
      image: "/images/p2.jpg",
      location: "Meeting at Main Entrance"
    }
  ];
  
  // New color theme - rich purple gradient
  const primaryColor = "#8b5cf6"; // Vibrant purple
  const secondaryColor = "#6d28d9"; // Deeper purple for hover states
  const accentColor = "#4c1d95"; // Very deep purple for accents
  const gradientLight = "#a78bfa"; // Light purple for gradients
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: index => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1
      }
    }),
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0px 15px 30px rgba(107, 70, 193, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };
  
  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "100%", 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };
  
  const tabContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.8
      }
    }
  };
  
  const tabVariants = {
    inactive: { borderBottom: "2px solid transparent" },
    active: { 
      borderBottom: `2px solid ${primaryColor}`, 
      color: primaryColor,
      fontWeight: "bold",
      transition: { duration: 0.3 } 
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 1.8
      }
    },
    hover: { 
      scale: 1.05, 
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };
  
  const currentItems = activeTab === 'news' ? newsItems : eventsItems;
  
  return (
    <div 
      ref={componentRef}
      className="w-full py-12 px-4 md:px-8 bg-gradient-to-b from-purple-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -30, filter: "blur(8px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: "easeOut" 
                }
              }
            }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Latest News & Events
          </motion.h2>
          
          <div className="relative h-1 w-24 mx-auto mb-6">
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={lineVariants}
              className={`h-1 bg-gradient-to-r from-purple-400 to-${primaryColor}`}
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: 0.7 
                }
              }
            }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest happenings and upcoming events at our school.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center mb-10"
          variants={tabContainerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="flex space-x-6 text-lg">
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'news' ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveTab('news')}
              className="px-4 py-2 focus:outline-none relative"
            >
              News
              {activeTab === 'news' && (
                <motion.span
                  layoutId="activeTab"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-${primaryColor}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'events' ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveTab('events')}
              className="px-4 py-2 focus:outline-none relative"
            >
              Events
              {activeTab === 'events' && (
                <motion.span
                  layoutId="activeTab"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-${primaryColor}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          key={activeTab}
          initial="hidden"
          animate={itemsControls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden h-48">
                <motion.div
                  initial={{ height: "100%" }}
                  animate={itemsControls}
                  variants={{
                    hidden: { height: "100%" },
                    visible: { 
                      height: 0,
                      transition: { 
                        delay: 0.4 + index * 0.2, 
                        duration: 0.5, 
                        ease: "easeInOut" 
                      }
                    }
                  }}
                  className={`absolute inset-0 bg-gradient-to-r from-${primaryColor} to-${accentColor} z-10`}
                />
                <motion.img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, filter: "grayscale(100%)" }}
                  animate={itemsControls}
                  variants={{
                    hidden: { scale: 1.2, filter: "grayscale(100%)" },
                    visible: { 
                      scale: 1, 
                      filter: "grayscale(0%)",
                      transition: { 
                        delay: 0.4 + index * 0.2, 
                        duration: 0.8 
                      }
                    }
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                />
                {activeTab === 'news' && (
                  <motion.div 
                    className={`absolute top-0 right-0 bg-gradient-to-r from-${primaryColor} to-${accentColor} text-white text-xs font-bold px-3 py-1`}
                    initial={{ x: 50, opacity: 0 }}
                    animate={itemsControls}
                    variants={{
                      hidden: { x: 50, opacity: 0 },
                      visible: { 
                        x: 0, 
                        opacity: 1,
                        transition: { 
                          delay: 0.7 + index * 0.2, 
                          duration: 0.5 
                        }
                      }
                    }}
                  >
                    {item.category}
                  </motion.div>
                )}
              </div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={itemsControls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { 
                      delay: 0.6 + index * 0.2, 
                      duration: 0.5 
                    }
                  }
                }}
              >
                <motion.p 
                  className={`text-sm font-medium text-${primaryColor} mb-2`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={itemsControls}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.7 + index * 0.2, 
                        duration: 0.5 
                      }
                    }
                  }}
                >
                  {item.date}
                  {activeTab === 'events' && (
                    <span className="ml-2 text-gray-500">• {item.location}</span>
                  )}
                </motion.p>
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={itemsControls}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 0.8 + index * 0.2, 
                        duration: 0.5 
                      }
                    }
                  }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={itemsControls}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 0.9 + index * 0.2, 
                        duration: 0.5 
                      }
                    }
                  }}
                >
                  {item.description}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={itemsControls}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 1.0 + index * 0.2, 
                        duration: 0.5 
                      }
                    }
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center text-${primaryColor} font-medium hover:text-${secondaryColor}`}
                >
                  Read More
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0px 6px 15px rgba(107, 70, 193, 0.4)`
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 bg-gradient-to-r from-${primaryColor} to-${accentColor} text-black font-medium rounded-md shadow hover:from-${secondaryColor} hover:to-${accentColor} transition-all`}
          >
            View All {activeTab === 'news' ? 'News' : 'Events'}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestNewsAndEvents;