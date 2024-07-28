// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavBrand>Portfolio</NavBrand>
      <ToggleButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </ToggleButton>
      <NavItems isOpen={isOpen}>
        <NavItem>
          <StyledNavLink to="/" end onClick={() => setIsOpen(false)}>
            Home
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/skills" onClick={() => setIsOpen(false)}>
            Skills
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </StyledNavLink>
        </NavItem>
      </NavItems>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  position: relative;
`;

const NavBrand = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const ToggleButton = styled.div`
  display: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavItems = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #333;
    width: 200px;
    border-radius: 5px;
    padding: 10px;
  }
`;

const NavItem = styled.div`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;

  &.active {
    color: #00f0ff;
    text-decoration: underline;
  }

  &:hover {
    color: #00f0ff;
  }
`;

export default Navbar;
