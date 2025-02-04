import React, { useContext } from "react"
import { assets } from "../assets/assets"
import { motion } from "framer-motion"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if(user){
            navigate('/result')
        } else {
            setShowLogin(true)
        }

    }


    return (
        <motion.div
            className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Top section with star icon - Now in one line with border */}
            <motion.div
                className="inline-flex items-center gap-3 px-6 py-2.5 border-2 border-[#0098C0] rounded-full mb-10 sm:mb-12 hover:bg-[#0098C0]/5 transition-colors duration-300"
                initial={{ opacity: 0.2, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <p className="text-base sm:text-lg font-semibold text-[#0098C0] tracking-wider whitespace-nowrap">
                    AI-POWERED IMAGINATION
                </p>
                <img
                    src={assets.star_icon || "/placeholder.svg?height=24&width=24"}
                    alt="Star icon"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ filter: "invert(56%) sepia(75%) saturate(1771%) hue-rotate(157deg) brightness(91%) contrast(101%)" }}
                />
            </motion.div>

            {/* Main headline */}
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Visualize Your Words with{" "}
                    <span className="text-[#0098C0] block mt-2 sm:mt-3">ImagiText</span>
                </h1>
            </motion.div>

            {/* Description */}
            <motion.p
                className="mt-6 sm:mt-8 text-center text-gray-600 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                Unleash the power of AI to transform your ideas into stunning visuals. From concept to creation in seconds,
                ImagiText brings your imagination to life.
            </motion.p>

            {/* CTA Button */}
            <motion.div
                className="mt-8 sm:mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <button onClick={onClickHandler} className="bg-[#0098C0] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#007a9a] transition-all duration-300 flex items-center gap-3 hover:gap-4 hover:shadow-lg transform hover:-translate-y-0.5">
                    Create Your Image
                    <img src={assets.star_group || "/placeholder.svg?height=20&width=20"} alt="Star group" className="w-5 h-5" />
                </button>
            </motion.div>

            {/* Sample images */}
            <motion.div
                className="mt-16 sm:mt-20"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {Array(6)
                        .fill("")
                        .map((_, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    src={
                                        index % 2 === 0
                                            ? assets.sample_img_2 || "/placeholder.svg?height=80&width=80"
                                            : assets.sample_img_1 || "/placeholder.svg?height=80&width=80"
                                    }
                                    alt={`Sample image ${index + 1}`}
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
                                />
                            </motion.div>
                        ))}
                </div>
                <p className="text-center text-gray-500 mt-4 text-sm sm:text-base">
                    Breathtaking visuals created by ImagiText
                </p>
            </motion.div>
        </motion.div>
    )
}

export default Header