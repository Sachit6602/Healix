import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HealixPro, HealixMini, EssentialOils } from './3DModels';

const models = [
  { 
    component: HealixPro, 
    name: 'Healix Pro',
    productId: '1'
  },
  { 
    component: HealixMini, 
    name: 'Healix Mini',
    productId: '2'
  },
  { 
    component: EssentialOils, 
    name: 'Essential Oils Pack',
    productId: '3'
  }
];

export default function ModelViewer({ onProductSelect }) {
  const [currentModel, setCurrentModel] = useState(0);

  const nextModel = () => {
    setCurrentModel((prev) => (prev + 1) % models.length);
  };

  const previousModel = () => {
    setCurrentModel((prev) => (prev - 1 + models.length) % models.length);
  };

  const handleModelClick = () => {
    const productId = models[currentModel].productId;
    onProductSelect(productId);
    
    // Smooth scroll to products section
    document.getElementById('products').scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="relative h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          {React.createElement(models[currentModel].component, { onClick: handleModelClick })}
          <OrbitControls 
            enableZoom={false}
            autoRotate={false}
            enablePan={false}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={previousModel}
          className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
        >
          <ChevronLeft className="h-6 w-6 text-purple-600" />
        </motion.button>

        <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
          <p className="text-sm font-medium text-purple-600">
            {models[currentModel].name}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextModel}
          className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
        >
          <ChevronRight className="h-6 w-6 text-purple-600" />
        </motion.button>
      </div>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          Click model to view product
        </p>
      </div>
    </div>
  );
}