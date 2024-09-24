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
          To be a leading mining company on the globe</ServiceItem>
          <ServiceItem 
        className='flex items-center justify-center gap-3 flex-col w-[300px] text-center bg-amber-100  h-[120px]'
        >
          <i className='fa-solid fa-spoon fa-2x text-amber-900'></i>
          Mining of earth minerals
          </ServiceItem>
      
          <ServiceItem 
        className='flex items-center justify-center gap-3 flex-col w-[300px] text-center bg-amber-100  h-[120px]'
        >
          <i className="fa-regular fa-heart fa-2x text-amber-900"></i>
          To supply the best quality of minerals across the globe
     </ServiceItem>
        
      </ServiceList>
      <div className='flex items-center justify-center gap-7 flex-wrap' >
      <div className='md:w-1/3'>
        <img src="" alt="" />
      </div>
      </div>
    </Section>
  );
};

export default Services;
