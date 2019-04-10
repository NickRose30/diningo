import React, { Component } from 'react';
import RestaurantListings from '../containers/RestaurantListings';
import styled from 'styled-components';

const ListingHeader = styled.h2`
  text-align: center;
`;

class Landing extends Component {
  render() {
    return (
      <div ref={this.props.setRef}>
        <ListingHeader>Recommended For You</ListingHeader>
        <RestaurantListings />
      </div>
    );
  }
}

export default Landing;