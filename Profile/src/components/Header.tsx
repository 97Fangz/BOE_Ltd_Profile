import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background: #f4f4f4;
  color: #222;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



const Header: React.FC = () => {
  return (
    <Navbar>
      <div className='flex items-center justify-center gap-2'>
        <img src="Boelogo.jpeg" width={50} alt="" />
      <h1>BOE Limited</h1>
      </div>
      <div className='text-gray-800 flex items-center justify-center gap-6'>
        <NavLink
         to="/"
         className={({isActive}) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2":""} flex items-center justify-center gap-2`}>
          Home
          <i className="fa-solid fa-house"></i></NavLink>
        <NavLink 
        to="/about"
        className={({isActive}) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2":""} flex items-center justify-center gap-2`}>
          About Us
          <i className="fa fa-circle-question"></i></NavLink>
        <NavLink 
        to="/services"
        className={({isActive}) => `${isActive ? "border-b-2 font-semibold border-gray-800  bg-[white] py-1 px-2":""}`}>Services</NavLink>
        <NavLink 
        to="/contact" 
        className={({isActive}) => `${isActive ? "border-b-2 font-semibold border-gray-800  bg-[white] py-1 px-2":""} flex items-center justify-center gap-2`}>
          Contact
          <i className="fa-solid fa-phone"></i></NavLink>
        <NavLink 
        to="/broker"
        className={({isActive}) => `${isActive ? "border-b-2 font-semibold border-gray-800  bg-[white] py-1 px-2":""}  flex items-center justify-center gap-2`}>
          Meet Our Broker
          <i className="fa-regular fa-handshake"></i></NavLink>
      </div>
    </Navbar>
  );
};

export default Header;
