import React, { Component } from 'react';
import RestaurantListings from '../containers/RestaurantListings';
import ListingAside from '../containers/ListingAside';
import styled from 'styled-components';
import * as R from 'ramda';

const ListingHeader = styled.h2`
  text-align: center;
`;

const ListingContainer = styled.div`
  display: flex;
`;

class Landing extends Component {
  render() {
    const { searchResults } = this.props;
    const searchTerm = R.prop('searchTerm', searchResults);
    return (
      <div ref={this.props.setRef}>
        <ListingHeader>
          {searchTerm ? `Search results for: ${searchTerm}` :
            'Recommended For You'}
        </ListingHeader>
        <ListingContainer>
          <ListingAside />
          <RestaurantListings />
        </ListingContainer>
      </div>
    );
  }
}

export default Landing;