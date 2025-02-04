import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
    // Animation variants for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        // Main container with centered content and max width
        <motion.div 
            className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {/* Page header section */}
            <motion.div 
                className="text-center mb-8 sm:mb-12"
                variants={itemVariants}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                    ImagiText: Transform Words into Visuals
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                    Unleash Your Creativity with AI-Powered Image Generation
                </p>
            </motion.div>

            {/* Main content grid with two columns */}
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-stretch">
                {/* Image column */}
                <motion.div 
                    className="md:w-1/2 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <img
                        src={assets.sample_img_1}
                        alt="AI-generated artwork"
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>

                {/* Text content column */}
                <motion.div 
                    className="md:w-1/2 flex flex-col justify-center"
                    variants={itemVariants}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                        Introducing ImagiText: Where Imagination Meets Visual Art
                    </h2>
                    {/* Descriptive paragraphs */}
                    <motion.div 
                        className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base"
                        variants={itemVariants}
                    >
                        <p className="leading-relaxed">
                            ImagiText is a cutting-edge AI image generation platform that transforms your textual descriptions into stunning, unique visuals. Whether you're a designer, artist, or creative enthusiast, our powerful AI turns your wildest imagination into breathtaking artwork.
                        </p>
                        <p className="leading-relaxed">
                            Simply type your idea, and watch as our advanced neural networks craft intricate images that capture the essence of your words. From abstract concepts to detailed scenes, ImagiText brings your imagination to life with unprecedented precision and creativity.
                        </p>
                    </motion.div>

                    {/* Features list */}
                    <motion.div 
                        className="mt-4 sm:mt-6"
                        variants={itemVariants}
                    >
                        <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                            {[
                                "Instant Image Creation",
                                "High-Quality Artwork",
                                "Unlimited Creative Possibilities"
                            ].map((feature, index) => (
                                <motion.li 
                                    key={index} 
                                    className="flex items-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Description