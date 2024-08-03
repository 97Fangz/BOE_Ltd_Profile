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
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
`;

const Services: React.FC = () => {
  return (
    <Section>
      <h2 className='text-center text-2xl text-amber-900 font-semibold'>Our Services</h2>
      <ServiceList className='flex items-center justify-center flex-wrap gap-8'>
        <ServiceItem 
        className='flex items-center justify-center gap-3 flex-col w-[300px] text-center bg-amber-100  h-[120px]'
        >
          <i className='fa fa-globe fa-2x text-amber-900'></i>
          Worldwide Freight Transportation</ServiceItem>
          <ServiceItem 
        className='flex items-center justify-center gap-3 flex-col w-[300px] text-center bg-amber-100  h-[120px]'
        >
          <i className='fa fa-boxes-packing fa-2x text-amber-900'></i>
          Warehousing and Storage Solutions</ServiceItem>
          <ServiceItem 
        className='flex items-center justify-center gap-3 flex-col w-[300px] text-center bg-amber-100  h-[120px]'
        >
          <i className='fa-solid fa-people-roof fa-2x text-amber-900'></i>
          Supply Chain Management</ServiceItem>
          <ServiceItem 
        className='flex items-center justify-center gap-3 flex-col w-[300px] text-center bg-amber-100  h-[120px]'
        >
          <i className="fa-regular fa-heart fa-2x text-amber-900"></i>
          Specialized Brokerage for High-Value Goods</ServiceItem>
          <ServiceItem 
        className='flex items-center justify-center gap-3 flex-col w-[300px] text-center bg-amber-100  h-[120px]'
        >
         <i className="fa-solid fa-shield fa-2x text-amber-900"></i>
          Secure Transport of Precious Metals, including Gold</ServiceItem>
      </ServiceList>
    </Section>
  );
};

export default Services;
