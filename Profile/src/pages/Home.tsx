import React from 'react';
import styled from 'styled-components';
import CompanyInfo from '../components/CompanyInfo';
import Services from '../components/Services';
import History from '../components/History';
// import Team from '../components/Team';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 2rem;
  gap: 3rem;
`;

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SectionWrapper>
        <CompanyInfo />
      </SectionWrapper>
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      <SectionWrapper>
        <History />
      </SectionWrapper>
      {/* <SectionWrapper>
        <Team />
      </SectionWrapper> */}
    </HomeContainer>
  );
};

export default Home;
