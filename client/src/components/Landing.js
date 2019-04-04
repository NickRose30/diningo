import React from 'react';
import styled from 'styled-components';
import RestaurantListings from '../containers/RestaurantListings';
import Search from './Search';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Landing = () => (
  <Container>
    <Search />
    <RestaurantListings />
  </Container>
);

export default Landing;