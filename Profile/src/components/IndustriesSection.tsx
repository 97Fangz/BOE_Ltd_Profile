import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 1rem; /* Adjusted padding for better mobile view */
  background: #f9fafb; /* Light background */
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Subtle shadow */
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem; /* Reduced margin for mobile */
`;

const Icon = styled.div`
  background-color: #d97706; /* Amber background */
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
  font-size: 1.5rem; /* Adjusted font size for mobile */
  color: #1f2937; /* Gray-800 */
  font-weight: 700;
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 1rem; /* Adjusted gap for mobile */

  @media(min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust for larger screens */
    gap: 2rem;
  }
`;

const IndustryCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Slight hover lift */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IndustryTitle = styled.h3`
  font-size: 1.25rem; /* Adjusted font size for mobile */
  color: #1e3a8a; /* Blue-800 */
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const IndustryDescription = styled.p`
  font-size: 0.875rem; /* Adjusted font size for mobile */
  color: #4b5563; /* Gray-600 */
  line-height: 1.5rem; /* Adjusted line height for mobile */
`;

const IndustriesSection: React.FC = () => {
  return (
    <Section>
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
            BOE Limited pioneers in gold mining, extracting precious metals through responsible methods that prioritize sustainability.
          </IndustryDescription>
        </IndustryCard>

        <IndustryCard>
          <IndustryTitle>Logistics</IndustryTitle>
          <IndustryDescription>
            Our logistics division operates with precision and reliability, providing secure and timely delivery services.
          </IndustryDescription>
        </IndustryCard>

        <IndustryCard>
          <IndustryTitle>Real Estate</IndustryTitle>
          <IndustryDescription>
            At BOE Limited, real estate isn't just about property; it's about creating value through community growth.
          </IndustryDescription>
        </IndustryCard>

        <IndustryCard>
          <IndustryTitle>Agriculture</IndustryTitle>
          <IndustryDescription>
            Our agricultural initiatives focus on sustainability and innovation, collaborating with local farmers to enhance productivity.
          </IndustryDescription>
        </IndustryCard>
      </IndustryGrid>
    </Section>
  );
};

export default IndustriesSection;
