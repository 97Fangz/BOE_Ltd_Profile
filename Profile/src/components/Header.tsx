import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Navbar = styled.nav`
  background: #f4f4f4; /* Light grey background */
  color: #222;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 2px solid #d10000; /* Red border at the bottom */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #d10000; /* Darker red for title */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
    width: 100%;
    flex-direction: column;
    background-color: #f4f4f4; /* Light grey background */
    position: absolute;
    top: 60px;
    right: 0;
    border: 1px solid #d10000; /* Border color */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const NavItem = styled(NavLink)`
  display: block;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: #333;
  background-color: #f0e5c9; /* Light gold for tabs */
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.active {
    border-bottom: 2px solid #d10000; /* Highlight for active tab */
    background-color: #fff; /* White background for active tab */
    color: #d10000;
  }

  &:hover {
    background-color: #d10000; /* Darker red on hover */
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    text-align: center;
  }
`;

const DropdownMenu = styled.div<{ open: boolean }>`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  max-width: 300px;
  background: #f4f4f4; /* Light grey background */
  border: 1px solid #d10000; /* Border color */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 0.5rem;
  box-sizing: border-box;

  @media (min-width: 769px) {
    display: none;
  }
`;

const DropdownLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  &.active {
    background-color: #d10000; /* Highlight active link */
    color: #fff;
  }

  &:hover {
    background-color: #d10000;
    color: #fff;
  }
`;

const Header: React.FC = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <Navbar>
      <LogoContainer>
        <Logo src="Boelogo.jpeg" alt="BOE Logo" />
        <Title>BOE Limited</Title>
      </LogoContainer>
      <NavList>
        <NavItem to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
          <i className="fa-solid fa-house"></i>
        </NavItem>
        <NavItem to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About Us
          <i className="fa fa-circle-question"></i>
        </NavItem>
        <NavItem to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
          Services
          <i className="fa-solid fa-concierge-bell"></i>
        </NavItem>
        <NavItem to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
          <i className="fa-solid fa-phone"></i>
        </NavItem>
        <NavItem to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
          Pricing
          <i className="fa-solid fa-tag"></i>
        </NavItem>
      </NavList>
      <MenuButton onClick={() => setIsOpen(!open)} aria-controls="dropdown-menu" aria-expanded={open}>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </MenuButton>
      <DropdownMenu open={open} id="dropdown-menu">
        <DropdownLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
          <i className="fa-solid fa-house"></i>
        </DropdownLink>
        <DropdownLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About Us
          <i className="fa fa-circle-question"></i>
        </DropdownLink>
        <DropdownLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
          Services
          <i className="fa-solid fa-concierge-bell"></i>
        </DropdownLink>
        <DropdownLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
          <i className="fa-solid fa-phone"></i>
        </DropdownLink>
        <DropdownLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
          Pricing
          <i className="fa-solid fa-tag"></i>
        </DropdownLink>
      </DropdownMenu>
    </Navbar>
  );
};

export default Header;
