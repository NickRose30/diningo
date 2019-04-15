import React from 'react';
import styled from 'styled-components';
import { colorDefaultOrange } from '../vars';

const ListingsContainer = styled.div`
  width: 100%;
  flex-grow: 2;
  border: 1px solid ${colorDefaultOrange};
`;

const ReviewListings = props => (
  <ListingsContainer>
    <div>Reviews</div>
  </ListingsContainer>
);

export default ReviewListings;