import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #dee2e6;
  color: #6c757d;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <p>For more information, please contact us.</p>
  </FooterContainer>
);

export default Footer;
