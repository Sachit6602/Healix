// src/components/LandingPage.js
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const LandingContainer = styled.div`
  width: 100%;
  height: 250vh; /* Increased height for scroll */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000000; /* Background changed to black */
`;

const Title = styled(motion.h1)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12rem;
  font-weight: 700;
  color: #ffffff; /* Text color changed to white */
  font-family: 'MyCustomFontt', sans-serif;
`;

const TitleLeft = styled(motion.div)`
  position: absolute;
  left: 10%;
  top: 50%;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff; /* Text color changed to white */
  text-align: left;
  text-transform: uppercase;
  line-height: 1.2;
  font-family: 'MyCustomFontt', sans-serif;
`;

const TitleRight = styled(motion.div)`
  position: absolute;
  right: 10%;
  top: 50%;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff; /* Text color changed to white */
  text-align: right;
  text-transform: uppercase;
  line-height: 1.2;
  font-family: 'MyCustomFontt', sans-serif;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const VapePen = ({ rotation }) => {
  const { scene } = useGLTF('/vape_pen.glb');
  return <primitive object={scene} rotation={rotation} scale={0.6} position={[0, 2, 0]} />;
};

const LandingPage = () => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll();

  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]); // Healix fades out
  const titleScale = useTransform(scrollY, [0, 300], [1, 1.5]); // Zoom in Healix
  const leftTitleOpacity = useTransform(scrollY, [200, 400], [0, 1]); // Left title fades in
  const rightTitleOpacity = useTransform(scrollY, [200, 400], [0, 1]); // Right title fades in
  const modelRotation = useTransform(scrollY, [0, 800], [0, Math.PI * 2]); // Full rotation over scroll

  return (
    <LandingContainer ref={scrollRef}>
      {/* Healix Title with Zoom Effect */}
      <Title style={{ opacity: titleOpacity, scale: titleScale }}>HEALIX</Title>

      {/* Left Title: QUIT SMOKING */}
      <TitleLeft style={{ opacity: leftTitleOpacity }}>
        QUIT<br />SMOKING
      </TitleLeft>

      {/* Right Title: HEALTHY DIFFUSER */}
      <TitleRight style={{ opacity: rightTitleOpacity }}>
        HEALTHY<br />DIFFUSER
      </TitleRight>

      {/* 3D Model Canvas */}
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 15] }}> {/* Move camera further back */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          
          {/* Vape Pen Model positioned higher and scaled up */}
          <Suspense fallback={null}>
            <VapePen />
          </Suspense>
          
          <OrbitControls enableZoom={false} />
          <Environment preset="sunset" />
        </Canvas>
      </CanvasContainer>
    </LandingContainer>
  );
};

export default LandingPage;
