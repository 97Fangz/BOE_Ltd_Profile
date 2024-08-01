import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 BOE Limited. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
