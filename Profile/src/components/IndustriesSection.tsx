import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2.5rem;
  margin: 2rem auto;
  max-width: 800px;
  background-color: #f9fafb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4b5563;
  &:hover {
    color: #1f2937;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Icon = styled.div`
  background-color: #d97706;
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    color: #fff;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #1f2937;
  font-weight: 700;
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const IndustryCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IndustryTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e3a8a;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const IndustryDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.75rem;
`;

const ClosableIndustriesSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <Section>
      <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
      <TitleWrapper>
        <Icon>
          <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 2a8 8 0 10-8 8 8 8 0 008-8zm1 11.25V10h1.75L10 12.25 8.25 10H10v3.25zm1.25-5.25H8.75V5h3.5v3.25z" clipRule="evenodd" />
          </svg>
        </Icon>
        <Title>Our Industries</Title>
      </TitleWrapper>

      <IndustryGrid>
        <IndustryCard>
          <IndustryTitle>Mining</IndustryTitle>
          <IndustryDescription>
            BOE Limited pioneers in gold mining, extracting precious metals through responsible methods that prioritize sustainability. We ensure minimal environmental impact while maximizing the value of our operations.
          </IndustryDescription>
        </IndustryCard>

        <IndustryCard>
          <IndustryTitle>Logistics</IndustryTitle>
          <IndustryDescription>
            Our logistics division operates with precision and reliability, providing secure and timely delivery services. We employ advanced tracking systems to ensure the safety of goods from departure to arrival.
          </IndustryDescription>
        </IndustryCard>

        <IndustryCard>
          <IndustryTitle>Real Estate</IndustryTitle>
          <IndustryDescription>
            At BOE Limited, real estate isn't just about property; it's about creating value. From residential to commercial developments, we provide consultancy and project management services to foster community growth.
          </IndustryDescription>
        </IndustryCard>

        <IndustryCard>
          <IndustryTitle>Agriculture</IndustryTitle>
          <IndustryDescription>
            Our agricultural initiatives focus on sustainability and innovation. We collaborate with local farmers, utilizing cutting-edge techniques to enhance productivity and deliver high-quality products.
          </IndustryDescription>
        </IndustryCard>
      </IndustryGrid>
    </Section>
  );
};

export default CloIndustriesSection;