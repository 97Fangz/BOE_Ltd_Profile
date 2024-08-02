import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #f4f4f4;
  width:100%;
`;

const About: React.FC = () => {
  return (
    <Section>
      <div className='flex items-start flex-col uppercase'>
      <h1 className='text-4xl text-gray-700'>About</h1>
      <h2 className=' font-semibold text-amber-900 text-4xl'>Our Company</h2>
      <div className='w-8 h-1 bg-amber-900 mt-1 mb-1'></div>
      </div>
      <div className='flex w-[100%] items-start sm:flex-row flex-col justify-center gap-4'>
      <div >
          <p>
          Core Mineral Galore Co., Ltd. is an investment
holding company mainly engaged in gold mining
and support small scale artisan miners and its
subsidiaries, the company operates through
three departments.
The Gold Mining Division is mainly engaged in
gold mining, processing and sales of gold products and other by-products in the people's
Republic of DR. Congo.
Minerals Trading Division buys and sells AU and
other precious stones.
          </p>   
      </div>
      <div>
        <p>
        The financial services business segment is
mainly engaged in the provision of financial
services in DRC. Congo to equip the small-scale
artisan miners with basic necessities i.e., medicine, mining trainings, skills and some light
mining equipment within DRC. Congo.
Our team has really helped and saved many
lives who have been using mercury to extract
gold.

        </p>
      </div>
      </div>
      
    </Section>
  );
};

export default About;
