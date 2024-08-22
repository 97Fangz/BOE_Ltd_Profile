import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-image: url("/Boelogo.jpeg");
  background-size: cover;
  background-position: center;
  height: 300px; /* Increased height for a more prominent hero section */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 2rem;
  padding: 1rem;

  h1 {
    font-size: 3rem; /* Adjusted font size for better visibility */
    font-weight: 700;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5); /* More pronounced shadow */
    margin: 0;
  }
`;

const HeroSection: React.FC = () => (
  <HeroContainer>
    <h1>Contact Us</h1>
  </HeroContainer>
);

export default HeroSection;
