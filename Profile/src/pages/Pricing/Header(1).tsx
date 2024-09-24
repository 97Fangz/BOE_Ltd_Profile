import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #343a40;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Title>Gold Pricing and Sales Procedure</Title>
  </HeaderContainer>
);

export default Header;
