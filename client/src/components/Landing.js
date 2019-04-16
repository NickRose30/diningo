import React, { Component } from 'react';
import RestaurantListings from '../containers/RestaurantListings';
import styled from 'styled-components';
import * as R from 'ramda';

const ListingHeader = styled.h2`
  text-align: center;
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
        <RestaurantListings />
      </div>
    );
  }
}

export default Landing;