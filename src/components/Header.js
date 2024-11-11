// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust path if necessary

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 120px;  // Adjust size as needed
  height: auto;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
`;

const CartIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
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
