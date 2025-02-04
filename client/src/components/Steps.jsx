import React from "react"
import { stepsData } from "../assets/assets"
import { motion } from "framer-motion"

const Steps = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.section
            className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
                        How it works
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600">
                        Transform words into stunning images
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {stepsData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="group relative bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50"
                        >
                            {/* Step Number */}
                            <motion.div
                                className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#0098C0] text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.2 + index * 0.1
                                }}
                            >
                                {index + 1}
                            </motion.div>

                            {/* Icon */}
                            <motion.div
                                className="mb-4 sm:mb-6 flex justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0098C0]/10 flex items-center justify-center group-hover:bg-[#0098C0]/20 transition-colors duration-300 shadow-inner">
                                    <motion.img
                                        src={item.icon || "/placeholder.svg?height=32&width=32"}
                                        alt={item.title}
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div className="text-center">
                                <motion.h2
                                    className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 group-hover:text-[#0098C0] transition-colors duration-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Steps