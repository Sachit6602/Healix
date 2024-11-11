// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/path/to/your/image.jpg') no-repeat center center/cover;
  text-align: center;
`;

const Tagline = styled.h1`
  font-size: 3rem;
  color: #fff;
  max-width: 800px;
`;

const HeroSection = () => (
  <HeroContainer as={motion.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
    <Tagline>A Healthier Path to Quitting Smoking</Tagline>
  </HeroContainer>
);

export default HeroSection;
