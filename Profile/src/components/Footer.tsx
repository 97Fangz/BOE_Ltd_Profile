import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f4f4f4;
  padding: 1rem;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer className='text-sm tracking-wide font-semibold'>
      <p>&copy; 2024 BOE Limited. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
