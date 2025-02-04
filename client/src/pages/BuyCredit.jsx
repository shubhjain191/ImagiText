import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets.js';
import { AppContext } from '../context/AppContext.jsx';
import { motion } from 'framer-motion';

const BuyCredits = () => {
  const { user } = useContext(AppContext);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations for child elements
      },
    },
  };

  // Animation variants for individual plan cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Hover animation
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Choose a Plan
        </motion.button>
        <h1 className="text-4xl font-bold text-gray-900 mt-4">
          Pick the plan that matches your goals and unlock your creativity!
        </h1>
      </motion.div>

      {/* Plans Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col border-2 border-transparent hover:border-blue-500"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Plan Name */}
            <p className="text-2xl font-bold text-gray-900 mb-4">{item.id}</p>

            {/* Plan Description */}
            <ul className="space-y-3 mb-6 flex-1">
              {item.desc.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Plan Price and Credits */}
            <p className="text-xl font-bold text-gray-900 mb-6">
              ${item.price} / {item.credits} credits
            </p>

            {/* Get Started Button */}
            <motion.button
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 mt-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {user ? 'Purchase' : 'Get Started'}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BuyCredits;