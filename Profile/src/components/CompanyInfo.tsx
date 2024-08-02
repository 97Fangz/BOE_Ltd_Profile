import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #f4f4f4;
  text-align: center;
`;

const CompanyInfo: React.FC = () => {
  return (
    <Section>
      <h2>About BOE Limited</h2>
      <p>BOE Limited is a premier logistics company specializing in worldwide shipments. We ensure that your goods reach their destinations safely and efficiently.</p>
      <p>Based in Kenya, we have a proven track record of handling shipments with expertise and precision. One of our key specialties is the secure transport of precious metals, including gold.</p>
    </Section>
  );
};

export default CompanyInfo;