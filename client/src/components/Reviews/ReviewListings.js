import React from 'react';
import styled from 'styled-components';
import { colorDefaultOrange } from '../../vars';
import { DefaultBtn } from '../../sharedAssets';

const ListingsContainer = styled.div`
  width: 100%;
  flex-grow: 2;
  border: 1px solid ${colorDefaultOrange};
`;

const Header = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const ReviewListings = props => (
  <ListingsContainer>
    <Header>
      <h3>Reviews</h3>
      <DefaultBtn to='#'>Leave a review</DefaultBtn>
    </Header>
  </ListingsContainer>
);

export default ReviewListings;