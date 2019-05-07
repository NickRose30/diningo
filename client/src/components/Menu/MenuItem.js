import React from 'react';
import styled from 'styled-components';
import { colorDefaultDarkOrange } from '../../vars';
import { IoMdAddCircleOutline } from 'react-icons/io';

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

const FlexItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const AddItemBtn = styled(IoMdAddCircleOutline)`
  color: ${colorDefaultDarkOrange};
  font-size: 175%;

  :hover {
    cursor: pointer;
  }
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
    <FlexItem>
      <Description>{description}</Description>
        {showAddBtn && <AddItemBtn onClick={addItemToOrder({ item, price })} />}
    </FlexItem>
  </Container>
);

export default MenuItem;