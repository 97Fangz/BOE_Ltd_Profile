import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSectionStyled = styled.div`
  background-color: #333333;
  color: white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
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