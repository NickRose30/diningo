import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';

class GoogleMaps extends Component {
  render() {
    return (
      <Map 
        google={this.props.google} 
        zoom={10}
        style={{width: `${this.props.height}px`, height: `${this.props.width}px`}}
      >
        <Marker name={'Current location'} />
        <InfoWindow>
            <div>
              <h1>this is something</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
})(GoogleMaps);
