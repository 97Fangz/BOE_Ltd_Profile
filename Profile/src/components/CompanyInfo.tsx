import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2.5rem;
  margin: 2rem auto;
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
`;

const Title = styled.h2`
  color: #d97706; /* Amber */
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Text = styled.p`
  color: #1f2937; /* Darker text */
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
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
