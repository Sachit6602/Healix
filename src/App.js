// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ProductPage from './components/ProductPage';
import LandingPage from './components/LandingPage';
import Mint from './assets/mint.png'
import Euc from './assets/euc.png'

const sampleProducts = [
  { id: '1', name: 'Healix Mint', price: '₹ 1999', description: 'Minty fresh', image: Mint},
  { id: '2', name: 'Healix Eucalyptus', price: '₹ 1999', description: 'Smooth vanilla', image: Euc},
  // more sample products
];

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <LandingPage />
            <HeroSection />

            <ProductsSection products={sampleProducts} />
          </>
        }
      />
      <Route path="/products/:productId" element={<ProductPage products={sampleProducts} />} />
    </Routes>
  </Router>
);

export default App;
