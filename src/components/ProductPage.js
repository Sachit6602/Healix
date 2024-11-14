// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductDetailContainer = styled.section`
  padding: 50px 20px;
  display: flex;
  gap: 20px;
  background-color: #222; /* Dark background */
  color: #ffffff; /* Light text */
`;

const ProductImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

const ProductInfo = styled.div`
  max-width: 600px;
`;

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  return (
    <ProductDetailContainer>
      <ProductImage
        src={product.image}
        alt={product.name}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <ProductInfo>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </ProductInfo>
    </ProductDetailContainer>
  );
};

export default ProductPage;
