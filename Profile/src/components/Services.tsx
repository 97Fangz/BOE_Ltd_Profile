import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #fff;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  background: #e4e4e4;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
`;

const Services: React.FC = () => {
  return (
    <Section>
      <h2 className='font-bold text-2xl'>Our Services</h2>
      <ServiceList>
        <ServiceItem>Worldwide Freight Transportation</ServiceItem>
        <ServiceItem>Warehousing and Storage Solutions</ServiceItem>
        <ServiceItem>Supply Chain Management</ServiceItem>
        <ServiceItem>Specialized Brokerage for High-Value Goods</ServiceItem>
        <ServiceItem>Secure Transport of Precious Metals, including Gold</ServiceItem>
      </ServiceList>
    </Section>
  );
};

export default Services;
