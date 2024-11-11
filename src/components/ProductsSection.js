// src/components/ProductsSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductsContainer = styled.section`
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled(motion.div)`
  background: #f9f9f9;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductsSection = ({ products }) => (
  <ProductsContainer>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </ProductCard>
    ))}
  </ProductsContainer>
);

export default ProductsSection;
