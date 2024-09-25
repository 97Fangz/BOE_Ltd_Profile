import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background: linear-gradient(135deg, #0046be, #001f54);
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 3px solid #ffd700;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Logo = styled.img`
  width: 55px;
  height: auto;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));

  @media (max-width: 768px) {
    width: 45px;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffd700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffd700;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  color: #fff;
  background-color: rgba(255, 215, 0, 0.1);
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;

  &.active {
    background-color: #ffd700;
    color: #0046be;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.4);
  }

  &:hover {
    background-color: rgba(255, 215, 0, 0.8);
    color: #0046be;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.95rem;
  }
`;

const DropdownMenu = styled.div<{ open: boolean }>`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 70px;
  right: 1rem;
  width: 90%;
  max-width: 300px;
  background: linear-gradient(135deg, #001f54, #0046be);
  border: 2px solid #ffd700;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  z-index: 999;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 769px) {
    display: none;
  }
`;

const DropdownLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &.active {
    background-color: #ffd700;
    color: #0046be;
  }

  &:hover {
    background-color: rgba(255, 215, 0, 0.2);
    transform: translateX(5px);
  }
`;

const Header: React.FC = () => {
  const [open, setIsOpen] = useState(false);

  const handleDropdownToggle = () => setIsOpen(!open);
  const handleLinkClick = () => setIsOpen(false); // Close the dropdown on link click

  return (
    <Navbar>
      <LogoContainer>
        <Logo src="Boelogo.jpeg" alt="BOE Logo" />
        <Title>BOE Limited</Title>
      </LogoContainer>
      <NavList>
        <NavItem to="/" end>
          <i className="fas fa-home"></i>
          Home
        </NavItem>
        <NavItem to="/about">
          <i className="fas fa-info-circle"></i>
          About Us
        </NavItem>
        <NavItem to="/services">
          <i className="fas fa-concierge-bell"></i>
          Services
        </NavItem>
        <NavItem to="/contact">
          <i className="fas fa-envelope"></i>
          Contact
        </NavItem>
        <NavItem to="/pricing">
          <i className="fas fa-tags"></i>
          Pricing
        </NavItem>
      </NavList>
      <MenuButton onClick={handleDropdownToggle} aria-controls="dropdown-menu" aria-expanded={open}>
        <i className="fas fa-bars"></i>
      </MenuButton>
      <DropdownMenu open={open} id="dropdown-menu">
        <DropdownLink to="/" end onClick={handleLinkClick}>
          <i className="fas fa-home"></i>
          Home
        </DropdownLink>
        <DropdownLink to="/about" onClick={handleLinkClick}>
          <i className="fas fa-info-circle"></i>
          About Us
        </DropdownLink>
        <DropdownLink to="/services" onClick={handleLinkClick}>
          <i className="fas fa-concierge-bell"></i>
          Services
        </DropdownLink>
        <DropdownLink to="/contact" onClick={handleLinkClick}>
          <i className="fas fa-envelope"></i>
          Contact
        </DropdownLink>
        <DropdownLink to="/pricing" onClick={handleLinkClick}>
          <i className="fas fa-tags"></i>
          Pricing
        </DropdownLink>
      </DropdownMenu>
    </Navbar>
  );
};

export default Header;
