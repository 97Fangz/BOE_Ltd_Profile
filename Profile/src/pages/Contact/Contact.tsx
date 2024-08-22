import React from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection';
import ContactSection from './ContactSection';

const PageContainer = styled.div`
  font-family: "Noto Serif", "Noto Sans", sans-serif;
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  overflow-x: hidden;
`;

const Contact: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection />
      <ContactSection />
    </PageContainer>
  );
};

export default Contact;
