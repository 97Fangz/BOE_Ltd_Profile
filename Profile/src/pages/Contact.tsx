import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;

  text-align: center;
`;




const Contact: React.FC = () => {
  return (
    <Section className='min-h-[50vh] my-4'>
      <h2  className='text-center mb-4 border-b-2 border-amber-900 w-max mx-auto text-2xl text-amber-900 font-semibold'>Contact Us </h2>
      <p>If you have any inquiries or need more information about our services, please reach out to us. Our expert brokers in Kenya are here to assist you with all your logistics needs, including the secure shipment of precious metals like gold.</p>
      <h3 className='text-sm font-semibold'>Contact us via the below links</h3>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='bg-green-100 mt-6 p-5 rounded-full'>
          <i className='fa fa-phone'></i>
          <p>Phone Number</p>
        </div>
        <div className='bg-green-100 mt-6 p-5 rounded-full'>
          <i className='fa-solid fa-envelope'></i>
          <p>Email Adress</p>
        </div>
        <div className='bg-green-100 mt-6 p-5 rounded-full'>
        <i className='fa-brands fa-tiktok'></i>
        <p>Tik Tok</p>
        </div>
      </div>

    </Section>
  );
};

export default Contact;
