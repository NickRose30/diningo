import React from 'react';
import RestaurantListings from '../containers/RestaurantListings';
import styled from 'styled-components';

const ListingHeader = styled.h2`
  text-align: center;
`;

const Landing = () => (
  <div>
    <ListingHeader>Recommended For You</ListingHeader>
    <RestaurantListings />
  </div>
);

export default Landing;