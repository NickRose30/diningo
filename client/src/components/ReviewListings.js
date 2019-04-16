import React from 'react';
import styled from 'styled-components';
import { colorDefaultOrange } from '../vars';

const ListingsContainer = styled.div`
  width: 100%;
  flex-grow: 2;
  border: 1px solid ${colorDefaultOrange};
`;

const CompTitle = styled.h3`
  padding: 0 20px;
`;

const ReviewListings = props => (
  <ListingsContainer>
    <CompTitle>Reviews</CompTitle>
  </ListingsContainer>
);

export default ReviewListings;