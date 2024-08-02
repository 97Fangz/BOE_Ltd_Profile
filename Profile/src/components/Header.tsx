import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <Navbar>
    <div className='flex items-center justify-center  gap-2'>
    <img src="Boelogo.jpeg" width={50}  className=''/>
    <h1>BOE Limited</h1>
    </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/broker">Meet Our Broker</NavLink>
      </div>
    </Navbar>
  );
};

export default Header;
