import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f4f4f4;
  padding: 1em;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer className='w-[100%] text-'>
      <p className='text-sm font-semibold'>&copy; 2024 BOE Limited. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
