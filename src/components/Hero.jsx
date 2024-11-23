import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ModelViewer from './ModelViewer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleProductSelect = (productId) => {
    // Find the product card element
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (productCard) {
      // Add highlight animation class
      productCard.classList.add('ring-4', 'ring-purple-400', 'ring-offset-4');
      // Remove highlight after animation
      setTimeout(() => {
        productCard.classList.remove('ring-4', 'ring-purple-400', 'ring-offset-4');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your Journey to a
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {" "}Smoke-Free Life
              </span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Elevate every Intake with our revolutionary diffuser technology.
              Experience a healthier alternative designed for your well-being.
            </p>

            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[600px]"
          >
            <ModelViewer onProductSelect={handleProductSelect} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
      />
    </div>
  );
}