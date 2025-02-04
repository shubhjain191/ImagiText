import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets.js';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext.jsx';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <form onSubmit={onSubmitHandler} className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 space-y-8">
        {/* Image Result Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <motion.div
            className="relative group mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={image}
              alt="Generated Result"
              className={`max-w-md h-64 sm:h-96 object-cover rounded-2xl shadow-xl ${
                loading ? 'blur-sm' : ''
              } group-hover:scale-105 transition-transform duration-300`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            {loading && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Loading Spinner */}
                  <div className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
                  <p className="text-white text-lg font-semibold">Generating your image...</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Input and Generate Section */}
        {!isImageLoaded && (
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe your imagination..."
              className="flex-1 w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition duration-300 text-lg placeholder-gray-400"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-zinc-500 to-zinc-600 text-white rounded-2xl hover:from-cyan-600 hover:to-cyan-700 transition duration-300 font-semibold text-lg flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Generate</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </motion.div>
        )}

        {/* Generate Another and Download Section */}
        {isImageLoaded && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              onClick={() => setIsImageLoaded(false)}
              className="w-full sm:w-auto px-6 py-3 bg-zinc-700 text-white rounded-2xl transition duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Generate Another</span>
            </motion.button>
            <motion.a
              href={image}
              download
              className="w-full sm:w-auto px-6 py-3 bg-zinc-700 text-white rounded-2xl transition duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download
            </motion.a>
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default Result;