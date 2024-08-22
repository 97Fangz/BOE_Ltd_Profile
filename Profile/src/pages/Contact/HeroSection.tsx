import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #e6f3ff; // Light blue background
  padding: 2rem 1rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  color: #3a5a7a; // Darker blue for contrast
  font-weight: 600;
  border-bottom: 4px solid #3a5a7a;
  display: inline-block;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.125rem;
  color: #4a4a4a;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroSection: React.FC = () => (
  <HeroContainer>
    <HeroTitle>Contact Us</HeroTitle>
    <HeroText>
      If you have any inquiries or need more information about our services, please reach out to us. Our expert brokers in Kenya are here to assist you with all your logistics needs, including the secure shipment of precious metals like gold.
    </HeroText>
  </HeroContainer>
);

export default HeroSection;