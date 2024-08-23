import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  margin-top: 0.5rem;
  color: #6c757d;
`;

const CustomList: React.FC<{ items: string[] }> = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={index}>{item}</ListItem>
    ))}
  </List>
);

export default CustomList;
