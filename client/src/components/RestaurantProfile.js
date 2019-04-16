import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as R from 'ramda';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { DefaultBtn } from '../sharedAssets';
import { FaMapMarker } from 'react-icons/fa';
import Stars from './Stars';
import ReviewListings from './ReviewListings';
import {
  colorGreen,
  colorYellow,
  colorRed,
  colorWhite,
  colorTransparentBlack,
  colorDefaultOrange,
  colorDefaultDarkOrange,
  colorBlack,
  colorTransparentOrange,
} from '../vars';

const Container = styled.div`
  display: flex;
  padding: 30px 30px;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightPanel = styled.div`
  width: 50%;
  padding: 0 0 0 30px;
  flex-direction: column;
  flex-grow: 2;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionBtns = styled.div`
  display: flex;
`;

const StarsAndWaitTime = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WaitTimeContainer = styled.div`
  margin: auto 0;
`;

const WaitTime = styled.span`
  background-color: ${props =>
    R.cond([
      [R.gte(20), R.always(colorGreen)],
      [R.gte(45), R.always(colorYellow)],
      [R.T, R.always(colorRed)]
    ])(props.time)};
  padding: 7px 10px;
  border-radius: 20px;
  color: ${colorWhite};
  text-shadow: 0 1px 6px ${colorTransparentBlack};
`;

const GoogleMapsContainer = styled.div`
  height: 300px;
  width: 100%;
`;

const HoursContainer = styled.div`
  max-width: 100%;
  margin: 25px 0;
  padding: 10px;
  font-weight: bold;
  border: 1px solid ${colorDefaultOrange};
  color: ${colorBlack};
`;

const HoursSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HoursHr = styled.hr`
  border-color: ${colorTransparentOrange};
`;

const Hours = styled.p`
  color: ${colorDefaultDarkOrange};
  margin: 5px 0;
`;

const Days = styled.p`
  margin: 5px 0;
`;

const HourDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const MapMarker = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${colorDefaultDarkOrange};
  text-shadow: 0 0 2px ${colorWhite};
`;

const MarkerIcon = styled(FaMapMarker)`
  font-size: 18px;
`;

const MapComponent = ({ text }) => (
  <MapMarker>
    <MarkerIcon />
    {text}
  </MapMarker>
);

class RestaurantProfile extends Component {
  state = {
    profile: {},
  }

  componentDidMount() {
    const { restaurantId } = this.props.match.params;
    this.props.fetchRestaurantProfile(restaurantId);
  }

  static getDerivedStateFromProps(newProps, state) {
    const newProfile = newProps.profile;
    const oldProfile = state.profile;
    if (newProfile !== oldProfile) {
      return { profile: newProfile };
    }
    else return null;
  }

  render() {
    const { image, title, address, fullDescription, stars, currentWait, lat, lng } =
      R.prop('profile', this.state) || {};

    const { mon, tue, wed, thu, fri, sat, sun } =
      R.path(['profile', 'hours'], this.state) || {};
      
    return (
      <Container>
        <LeftPanel>
          <ImageContainer src={image} />
          <HoursContainer>
            <div>Hours</div>
            <HoursHr />
            <HoursSection>
              <HourDetails>
                <Days>Monday:</Days>
                <Days>Tuesday:</Days>
                <Days>Wednesday:</Days>
                <Days>Thursday:</Days>
                <Days>Friday:</Days>
                <Days>Saturday:</Days>
                <Days>Sunday:</Days>
              </HourDetails>
              <HourDetails>
                <Hours>{mon}</Hours>
                <Hours>{tue}</Hours>
                <Hours>{wed}</Hours>
                <Hours>{thu}</Hours>
                <Hours>{fri}</Hours>
                <Hours>{sat}</Hours>
                <Hours>{sun}</Hours>
              </HourDetails>
            </HoursSection>
          </HoursContainer>
          <GoogleMapsContainer>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.GOOGLE_API_KEY
              }}
              defaultCenter={{
                lat,
                lng
              }}
              defaultZoom={14}
            >
              <MapComponent lat={lat} lng={lng} text={title} />
            </GoogleMapReact>
          </GoogleMapsContainer>
        </LeftPanel>
        <RightPanel>
          <Header>
            <h1>{title}</h1>
            <ActionBtns>
              <DefaultBtn to='#'>View Menu</DefaultBtn>
              <DefaultBtn to='#'>Make Reservation</DefaultBtn>
            </ActionBtns>
          </Header>
          <h3>{address}</h3>
          <StarsAndWaitTime>
            <Stars num={stars} />
            <WaitTimeContainer>
              Current wait time:{' '}
              <WaitTime time={currentWait}>{currentWait} minutes</WaitTime>
            </WaitTimeContainer>
          </StarsAndWaitTime>
          <p>{fullDescription}</p>
          <ReviewListings />
        </RightPanel>
      </Container>
    );
  }
} 

export default withRouter(RestaurantProfile);