import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2.5rem 1rem;
  background: #f9fafb; /* Light background */
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #d97706; /* Amber color */
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem auto;
  font-size: 1.125rem;
  color: #374151; /* Darker gray text */
  line-height: 1.75rem;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const ServiceItem = styled.li`
  background: #fef3c7; /* Amber-100 */
  border-radius: 12px;
  padding: 1.5rem;
  width: 280px;
  height: 150px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px); /* Lift on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Stronger shadow */
  }

  i {
    font-size: 2rem;
    color: #b45309; /* Darker amber */
    margin-bottom: 1rem;
  }

  p {
    color: #1f2937; /* Darker text */
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

const Services: React.FC = () => {
  return (
    <Section>
      <Title>Our Services</Title>
      <Description>
        At BOE Limited, we are committed to delivering excellence in mining, logistics, and the supply of premium minerals across the globe. Our goal is to lead with innovation and integrity in every service we offer.
      </Description>
      <ServiceList>
        <ServiceItem>
          <i className="fa fa-globe" />
          <p>Global Leader in Mining</p>
        </ServiceItem>
        <ServiceItem>
          <i className="fa-solid fa-spoon" />
          <p>Mining of Earth Minerals</p>
        </ServiceItem>
        <ServiceItem>
          <i className="fa-regular fa-heart" />
          <p>Best Quality Mineral Supply</p>
        </ServiceItem>
      </ServiceList>
    </Section>
  );
};

export default Services;
