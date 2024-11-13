// src/components/LandingPage.js
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { motion, useScroll } from 'framer-motion';
import styled from 'styled-components';

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff; /* Background set to white */
`;

const TitleLeft = styled(motion.div)`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5rem; /* Increased font size */
  font-weight: 700; /* Bold font */
  color: #000000; /* Black color */
  text-align: left;
  text-transform: uppercase; /* Uppercase text */
  line-height: 1.2; /* Space between lines */
  font-family: 'MyCustomFont', sans-serif; /* Apply custom font */
`;

const TitleTop = styled(motion.h2)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  font-weight: 700;
  color: #000000;
  font-family: 'MyCustomFont', sans-serif; /* Apply custom font */
`;

const TitleRight = styled(motion.div)`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5rem;
  font-weight: 700;
  color: #000000;
  text-align: right;
  text-transform: uppercase;
  line-height: 1.2;
  font-family: 'MyCustomFont', sans-serif; /* Apply custom font */
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const VapePen = () => {
  const { scene } = useGLTF('/vape_pen.glb');
  return <primitive object={scene} scale={0.3} position={[0, 0, 0]} />;
};

const LandingPage = () => {
  const scrollRef = useRef(null);

  return (
    <LandingContainer ref={scrollRef}>
      {/* Title Elements */}
      <TitleLeft initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        QUIT<br />SMOKE
      </TitleLeft>
      <TitleTop initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Switch To
      </TitleTop>
      <TitleRight initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        HEALTHY<br />DIFFUSER
      </TitleRight>

      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          
          {/* Vape Pen Model */}
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
