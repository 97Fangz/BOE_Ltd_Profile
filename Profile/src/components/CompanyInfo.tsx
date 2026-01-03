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
 <Title>About BOE Minerals</Title>
 <Text>
   BOE Minerals is a specialized company focused on <Highlight>gold trading</Highlight>, offering comprehensive solutions in the precious metals market. We ensure secure and reliable transactions while maintaining the highest standards of business practices.
 </Text>
 <Text>
   Headquartered in <Highlight>Kenya</Highlight>, BOE Minerals has established itself as a trusted name in the <Highlight>gold</Highlight> trade sector. Our extended logistics arm, <Highlight>Fastisha Logistics</Highlight>, provides comprehensive transport solutions, ensuring secure and timely delivery services worldwide. Through our integrated approach to gold trading and logistics, we create lasting value while fostering economic growth in the regions we serve.
 </Text>
</Section>
  );
};

export default CompanyInfo;
