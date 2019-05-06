import React from 'react';
import styled from 'styled-components';
import { colorDefaultDarkOrange } from '../../vars';

const Container = styled.div`
  border-bottom: 1px solid ${colorDefaultDarkOrange};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h4`
  color: ${colorDefaultDarkOrange};
  text-transform: uppercase;
  margin-bottom: 0;
`;

const Description = styled.span`
  display: block;
  margin: 10px 0;
`;

const Price = styled.h4`
  color: ${colorDefaultDarkOrange};
  margin-bottom: 0;
`;

const MenuItem = ({
  item,
  price,
  description,
  showAddBtn,
  addItemToOrder,
}) => (
  <Container>
    <Header>
      <Name>{item}</Name>
      <Price>{price}</Price>
    </Header>
    <Description>{description}</Description>
    {showAddBtn && <button onClick={addItemToOrder({ item, price })}>+</button>}
  </Container>
);

export default MenuItem;