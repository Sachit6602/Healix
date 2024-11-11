// src/components/LandingPage.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
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

const SubText = styled(motion.p)`
  position: absolute;
  top: 30%;
  font-size: 1.25rem;
  color: #ffffff;
  max-width: 600px;
  text-align: center;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      {/* Hero Text and Subtext */}
      <HeroText
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to Healix
      </HeroText>
      <SubText
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        A Healthier Path to Quitting Smoking
      </SubText>

      {/* Canvas for 3D Objects */}
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* 3D Objects */}
          <Sphere args={[1, 32, 32]} position={[-2, 0, 0]} scale={1.5}>
            <meshStandardMaterial color="#E94560" metalness={0.5} roughness={0.1} />
          </Sphere>
          <Box args={[1, 1, 1]} position={[2, 0, 0]} scale={1.2}>
            <meshStandardMaterial color="#3B82F6" metalness={0.3} roughness={0.2} />
          </Box>

          {/* Orbit Controls */}
          <OrbitControls enableZoom={false} />
          
          {/* Environment (optional, adds depth) */}
          <Environment preset="sunset" />
        </Canvas>
      </CanvasContainer>
    </LandingContainer>
  );
};

export default LandingPage;
