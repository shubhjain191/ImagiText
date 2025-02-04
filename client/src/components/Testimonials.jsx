import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // Animation variants for each testimonial card
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  // Animation variants for stars
  const starVariants = {
    hidden: { scale: 0 },
    visible: i => ({
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  }

  return (
    <motion.div 
      className="container mx-auto px-4 py-12 max-w-6xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Customer Testimonials
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Hear from our creative users who have transformed their ideas into stunning visuals
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* User Profile */}
            <motion.div 
              className="flex items-center mb-4"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-100"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{testimonial.name}</h2>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>

            {/* Star Rating */}
            <div className="flex mb-4">
              {Array(testimonial.stars).fill().map((_, i) => (
                <motion.img 
                  key={i} 
                  src={assets.rating_star} 
                  alt="star" 
                  className="w-5 h-5 mr-1"
                  variants={starVariants}
                  custom={i}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <motion.p 
              className="text-gray-600 italic mb-4 flex-grow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              "{testimonial.text}"
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Testimonials