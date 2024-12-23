// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/lg2.png'; // Adjust path if necessary

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fffff; /* Dark background */
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.1);
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  a {
    text-decoration: none;
    color: #ffffff; /* Light text */
    font-weight: bold;
  }
`;

const CartIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff; /* Light icon */
`;

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo src={logo} alt="Healix Logo" />
    </Link>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
    <CartIcon>🛒</CartIcon>
  </HeaderContainer>
);

export default Header;
