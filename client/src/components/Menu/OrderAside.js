import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { colorDefaultDarkOrange, colorDefaultOrange } from '../../vars';
import { DefaultBtn } from '../../sharedAssets';

const Container = styled.div`
  width: 20em;
  padding: 10px;
  margin-left: 10px;
  border: 1px solid ${colorDefaultDarkOrange};
  display: flex;
  flex-direction: column;
  height: 25rem;
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.h4`
  flex-grow: 2;
  color: ${colorDefaultDarkOrange};
  margin: 0;
`;

const CloseBtn = styled(IoMdClose)`
  :hover {
    cursor: pointer;
  }
`;

const CompleteOrderBtn = styled(DefaultBtn)`
  margin: 0;
  color: white;
  background-color: ${colorDefaultOrange};
  border-color: ${colorDefaultOrange};
  margin-top: auto;
`;

const OrderItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 3px;
  border-bottom: 1px solid ${colorDefaultDarkOrange}
`;

const OrderItem = ({ item, price }) => (
  <OrderItemContainer>
    <div>{item}</div>
    <div>{price}</div>
  </OrderItemContainer>
);

const OrderAside = ({ handleClose, items }) => {
  const currentOrder = items.map((item, i) => (
    <OrderItem key={i} {...item} />
  ));
  return (
    <Container>
      <div>
        <Header>
          <Title>Current Order</Title>
          <CloseBtn onClick={handleClose} />
        </Header>
      </div>
      {currentOrder}
      <CompleteOrderBtn to='#'>Complete Order</CompleteOrderBtn>
    </Container>
  );
};

export default OrderAside;