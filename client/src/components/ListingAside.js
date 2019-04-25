import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';
import styled from 'styled-components';

const AsideContainer = styled.div`
  margin-top: 20px;
`;

class ListingAside extends Component {
  render() {
    const points = this.props.results ? this.props.results.map(listing => (
      { lat: listing.lat, lng: listing.lng }
    )) : [];
    console.log(points);
    return (
      <AsideContainer>
        <GoogleMaps
          height={300}
          width={300}
          points={points}
          currentLocation
        />
      </AsideContainer>
    );
  }
}

export default ListingAside;