// src/components/LandingPage.js
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
`;

const HeroText = styled(motion.h1)`
  position: absolute;
  top: 20%;
  font-size: 2.5rem;
  text-align: center;
  color: #ffffff;
`;

const CanvasContainer = styled.div`
  width: 100%;W
  height: 100vh;
`;

const HealixModel = () => {
  const model = useGLTF('/vape_pen.glb'); // Adjust path if needed
  return <primitive object={model.scene} />;
};

const LandingPage = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // Use useTransform to create scale and rotation based on scrollYProgress
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI]);

  return (
    <LandingContainer ref={scrollRef}>
      <HeroText
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to Healix
      </HeroText>

      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Animated 3D Model */}
          <motion.group scale={scale} rotation={[rotation, 0, 0]}>
            <HealixModel />
          </motion.group>

          <OrbitControls enableZoom={false} />
          <Environment preset="sunset" />
        </Canvas>
      </CanvasContainer>
    </LandingContainer>
  );
};

export default LandingPage;
