import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #dee2e6;
  padding-bottom: 0.5rem;
`;

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionContainer>
);

export default Section;
