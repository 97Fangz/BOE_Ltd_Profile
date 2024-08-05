import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background: #f4f4f4;
  color: #222;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Header: React.FC = () => {
  const [open, setIsOpen] = useState(false);
  
  return (
    <Navbar>
      <div className='flex items-center justify-center gap-2'>
        <img src="Boelogo.jpeg" width={50} alt="BOE Logo" />
        <h1>BOE Limited</h1>
      </div>
      <div className='text-gray-800 hidden md:flex items-center justify-center gap-6'>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""} flex items-center justify-center gap-2`}>
          Home
          <i className="fa-solid fa-house"></i>
        </NavLink>
        <NavLink 
          to="/about"
          className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""} flex items-center justify-center gap-2`}>
          About Us
          <i className="fa fa-circle-question"></i>
        </NavLink>
        <NavLink 
          to="/services"
          className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""}`}>
          Services
        </NavLink>
        <NavLink 
          to="/contact"
          className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""} flex items-center justify-center gap-2`}>
          Contact
          <i className="fa-solid fa-phone"></i>
        </NavLink>
        <NavLink 
          to="/pricing"
          className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""} flex items-center justify-center gap-2`}>
          Pricing
          <i className="fa-solid fa-tag"></i>
        </NavLink>
      </div>
      <div className='block md:hidden' onClick={() => setIsOpen(true)}>
        <i className='fa fa-bars cursor-pointer fa-2x text-gray-800'></i>
      </div>
      {open && (
        <div className='absolute border-2 transition-all duration-150 ease-in-out border-amber-300 w-[300px] right-0 top-0 mt-6 rounded mr-3 h-[50vh] bg-amber-100'>
          <i
            onClick={() => setIsOpen(false)}
            className='fa fa-times cursor-pointer absolute mr-2 mt-2 top-0 fa-2x right-0'></i>
          <div className='flex flex-col gap-4 items-center justify-center h-[100%]'>
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""} flex items-center justify-center gap-2`}>
              Home
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""} flex items-center justify-center gap-2`}>
              About Us
              <i className="fa fa-circle-question"></i>
            </NavLink>
            <NavLink 
              to="/services"
              className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""}`}>
              Services   </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""} flex items-center justify-center gap-2`}>
              Contact
              <i className="fa-solid fa-phone"></i>
            </NavLink>
            <NavLink 
              to="/pricing"
              className={({ isActive }) => `${isActive ? "border-b-2 font-semibold border-gray-800 bg-[white] py-1 px-2" : ""} flex items-center justify-center gap-2`}>
              Pricing
              <i className="fa-solid fa-tag"></i>
            </NavLink>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
