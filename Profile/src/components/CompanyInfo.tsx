import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1.5rem; /* Adjusted for smaller screens */
  margin: 1.5rem auto; /* Adjusted for smaller screens */
  width: 90%; /* Use percentage for better responsiveness */
  max-width: 800px;
  background-color: #f9fafb; /* Light background */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-radius: 12px; /* Rounded corners */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Slight lift effect on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
  }

  @media (max-width: 600px) {
    padding: 1rem; /* Less padding on smaller screens */
    margin: 1rem auto; /* Less margin on smaller screens */
  }
`;

const Title = styled.h2`
  color: #d97706; /* Amber */
  margin-bottom: 1rem;
  font-size: 2rem; /* Adjusted for better responsiveness */
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 600px) {
    font-size: 1.75rem; /* Smaller font size for mobile */
  }
`;

const Text = styled.p`
  color: #1f2937; /* Darker text */
  font-size: 1rem; /* Adjusted for better responsiveness */
  line-height: 1.5rem; /* Adjusted line-height for better spacing */
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 0.9rem; /* Smaller font size for mobile */
  }
`;

const Highlight = styled.span`
  color: #2563eb; /* Blue highlight for important info */
  font-weight: 600;
`;

const CompanyInfo: React.FC = () => {
  return (
    <Section>
      <Title>About BOE Limited</Title>
      <Text>
        BOE Limited is a leading global company offering comprehensive solutions across four key industries: <Highlight>mining</Highlight>, <Highlight>logistics</Highlight>, <Highlight>real estate</Highlight>, and <Highlight>agriculture</Highlight>. We specialize in the extraction and sustainable management of precious resources, ensuring minimal environmental impact while maximizing value.
      </Text>
      <Text>
        Headquartered in <Highlight>Kenya</Highlight>, BOE Limited is renowned for its expertise in the secure transport of goods, including precious metals like <Highlight>gold</Highlight>. Our logistics network guarantees timely, secure deliveries worldwide. Additionally, our real estate and agricultural services focus on creating lasting value through innovative developments and eco-friendly practices, fostering community and economic growth.
      </Text>
    </Section>
  );
};

export default CompanyInfo;
