import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSectionStyled = styled.div`
  background-color: #0033A0; // Standard Chartered's primary blue
  color: white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  // Gradient overlay for depth
  background-image: linear-gradient(
    135deg,
    rgba(0, 51, 160, 1) 0%,
    rgba(0, 76, 240, 1) 100%
  );

  // Add a subtle border
  border: 1px solid rgba(255, 255, 255, 0.1);

  // Typography enhancements
  h1, h2, h3 {
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    opacity: 0.9;
    line-height: 1.6;
  }

  // Add a hover effect
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroSection: React.FC = () => (
  <ContactPageContainer>
    <HeroSectionStyled>
      <HeroTitle>Contact Us</HeroTitle>
      <HeroText>
        If you have any inquiries or need more information about our services, please reach out to us. Our expert brokers in Kenya are here to assist you with all your logistics needs, including the secure shipment of precious metals like gold.
      </HeroText>
    </HeroSectionStyled>
  </ContactPageContainer>
);

export default HeroSection;