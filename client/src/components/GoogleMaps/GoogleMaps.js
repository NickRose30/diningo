import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';

const GoogleMapsContainer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

const MapComp = styled(Map)`
  position: relative!important;
`;

class GoogleMaps extends Component {
  render() {
    const { height, width, points, currentLocation, google } = this.props;

    const markers = points.map((point, i) => {
      const { lat, lng } = point;
      return (
        <Marker position={{ lat: lat, lng: lng }} key={i} />
      )}
    );

    const initialCenter = { lat: points[0].lat, lng: points[0].lng }

    return (
      <GoogleMapsContainer height={height} width={width}>
        <MapComp
          centerAroundCurrentLocation={currentLocation}
          initialCenter={currentLocation ? {} : initialCenter}
          google={google}
          zoom={currentLocation ? 8 : 10}
          style={{ width: `${height}px`, height: `${width}px` }}
        >
          {markers}
        </MapComp>
      </GoogleMapsContainer>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
})(GoogleMaps);
