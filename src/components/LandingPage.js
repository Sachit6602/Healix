// src/components/LandingPage.js
import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Bounds } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const LandingContainer = styled.div`
  width: 100%;
  height: 250vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000000;

  @media (max-width: 768px) {
    height: 300vh;
  }
`;

const Title = styled(motion.h1)`
  position: absolute;
  top: 10%;
  left: 25%;
  transform: translateX(-50%);
  font-size: 12rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'MyCustomFontt', sans-serif;

  @media (max-width: 768px) {
    font-size: 6rem;
    top: 5%;
  }
`;

const TitleLeft = styled(motion.div)`
  position: absolute;
  left: 10%;
  top: 40%;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
  line-height: 1.2;
  font-family: 'MyCustomFontt', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    left: 5%;
  }
`;

const TitleCenter = styled(motion.div)`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-family: 'MyCustomFontt', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    top: 32%;
  }
`;

const TitleRight = styled(motion.div)`
  position: absolute;
  right: 10%;
  top: 40%;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  text-align: right;
  text-transform: uppercase;
  line-height: 1.2;
  font-family: 'MyCustomFontt', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    right: 5%;
  }
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 40vh;
`;

const Arrows = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  width: 90%;
  transform: translateY(-50%);
  z-index: 10;
`;

const ArrowButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const FallbackCube = () => (
  <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="gray" />
  </mesh>
);

const VapePen = ({ modelPath, scale, onClick }) => {
  const { scene } = useGLTF(modelPath);
  if (!scene) {
    return <FallbackCube />;
  }

  return (
    <mesh onClick={onClick} position={[0, -2, 0]} scale={scale}>
      <primitive object={scene} />
    </mesh>
  );
};

const LandingPage = () => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll();

  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const models = [
    { path: '/vape_pen.glb', scale: 0.5 },
    { path: '/vape_pen1.glb', scale: 20 },
  ];

  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const leftTitleOpacity = useTransform(scrollY, [100, 400], [0, 1]);
  const rightTitleOpacity = useTransform(scrollY, [100, 400], [0, 1]);
  const centerTitleOpacity = useTransform(scrollY, [100, 400], [0, 1]);

  const handleArrowClick = (direction) => {
    setCurrentModelIndex((prevIndex) =>
      direction === 'left'
        ? (prevIndex - 1 + models.length) % models.length
        : (prevIndex + 1) % models.length
    );
  };

  const handleModelClick = () => {
    // Navigate to the desired link on click
    window.open("https://www.your-link.com", "_blank"); // Change the URL to your link
  };

  const currentModel = models[currentModelIndex];

  return (
    <LandingContainer ref={scrollRef}>
      <Title style={{ opacity: titleOpacity, scale: titleScale }}>HEALIX</Title>
      <TitleLeft style={{ opacity: leftTitleOpacity }}>
        QUIT<br />SMOKING
      </TitleLeft>
      <TitleCenter style={{ opacity: centerTitleOpacity }}>
        SWITCH TO
      </TitleCenter>
      <TitleRight style={{ opacity: rightTitleOpacity }}>
        HEALTHY<br />DIFFUSER
      </TitleRight>

      <CanvasContainer>
        <Canvas>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Bounds fit clip observe>
            <Suspense fallback={<FallbackCube />}>
              <VapePen
                modelPath={currentModel.path}
                scale={currentModel.scale}
                onClick={handleModelClick} // Add the click handler
              />
            </Suspense>
          </Bounds>
          <OrbitControls enableZoom={false} />
          <Environment preset="sunset" />
        </Canvas>
      </CanvasContainer>

      <Arrows>
        <ArrowButton onClick={() => handleArrowClick('left')}>←</ArrowButton>
        <ArrowButton onClick={() => handleArrowClick('right')}>→</ArrowButton>
      </Arrows>
    </LandingContainer>
  );
};

export default LandingPage;
