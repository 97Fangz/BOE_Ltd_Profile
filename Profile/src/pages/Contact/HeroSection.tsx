import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #f7f7f7;
  padding: 2rem 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  color: #b67d0d; /* Amber color */
  font-weight: 600;
  border-bottom: 4px solid #b67d0d;
  display: inline-block;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const HeroText = styled.p`
  font-size: 1.125rem;
  color: #4a4a4a;
  max-width: 600px;
  margin: 0 auto;
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
