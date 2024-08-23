import React from 'react';
import styled from 'styled-components';

const OrderedList = styled.ol`
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.5rem;
    color: #6c757d;
  }
`;

const CustomOrderedList: React.FC<{ items: string[] }> = ({ items }) => (
  <OrderedList>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </OrderedList>
);

export default CustomOrderedList;
