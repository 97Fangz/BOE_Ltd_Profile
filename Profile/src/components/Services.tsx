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
  display:flex;
`;

const Services: React.FC = () => {
  return (
    <Section>
      <h2 className='font-bold text-2xl text-center text-amber-900'>Our Services</h2>
      <ServiceList className='flex flex-wrap items-center justify-center gap-6'>
        <ServiceItem className='flex bg-amber-100 h-[100px] items-center justify-center flex-col w-[300px]'>
        <i className="fa fa-globe fa-2x text-amber-700"></i>
        <h2 className='text-lg font-semibold mt-2'>
          Worldwide Freight Transportation
        </h2>
          </ServiceItem>
          <ServiceItem className='flex bg-amber-100 h-[100px]  items-center justify-center flex-col w-[300px]'>
        <i className="fa-solid fa-2x fa-warehouse text-amber-700"></i>
        <h2 className='text-lg font-semibold mt-2'>
          Warehousing and Storage Solutions
        </h2>
          </ServiceItem>
          <ServiceItem className='flex bg-amber-100 h-[100px]  items-center justify-center flex-col w-[300px]'>
        <i className="fa-solid fa-2x fa-truck-field text-amber-700"></i>
        <h2 className='text-lg font-semibold mt-2'>
          Supply Chain Management
        </h2>
          </ServiceItem>
          <ServiceItem className='flex bg-amber-100 h-[100px]  items-center justify-center flex-col w-[300px]'>
          <i className="fa-regular fa-2x  fa-heart text-amber-700"></i>
          <h2 className='text-lg mt-2 font-semibold'>
          Specialized Brokerage for High-Value Goods
          </h2>
          </ServiceItem>
          <ServiceItem className='flex bg-amber-100 h-[100px]  items-center justify-center flex-col w-[300px]'>
        <i className="fa-solid fa-shield-halved fa-2x text-amber-700"></i>
        <h2 className='text-lg mt-2 font-semibold'>
          Secure Transport of Precious Metals, including Gold
        </h2>
          </ServiceItem>
      </ServiceList>
    </Section>
  );
};

export default Services;
