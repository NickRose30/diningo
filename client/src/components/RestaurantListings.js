import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';
import styled from 'styled-components';

const ListingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

class RestaurantListings extends Component {

  componentDidMount = () => {
    this.props.fetchInitialListings();
  };

  render() {
    const { initialListings, searchResults } = this.props;
    const listings = searchResults ? searchResults.results : initialListings;
    const restaurantListings = listings ? listings.map((listing, i) => (
      <RestaurantCard {...listing} key={i} />
    )) : [];
    return (
      <ListingContainer>
        {restaurantListings}
      </ListingContainer>
    );
  }
};

export default RestaurantListings;