import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as R from 'ramda';
// components
import GoogleMaps from './GoogleMaps';
import { DefaultBtn } from '../sharedAssets';
import Stars from './Stars';
import ReviewListings from './ReviewListings';
import RestaurantHours from './RestaurantHours';
// styles
import {
  colorGreen,
  colorYellow,
  colorRed,
  colorWhite,
  colorTransparentBlack,
} from '../vars';
import styled from 'styled-components';

const MAP_HEIGHT = 300;
const MAP_WIDTH = 300;

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
  height: ${MAP_HEIGHT}px;
  width: ${MAP_WIDTH}px;
`;

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
    const { match } = this.props;
    
    const { image, title, address, fullDescription, stars, currentWait, lat, lng } =
      R.prop('profile', this.state) || {};

    const hours = R.path(['profile', 'hours'], this.state)
      
    return (
      <Container>
        <LeftPanel>
          <ImageContainer src={image} />
          <RestaurantHours {...hours} />
          <GoogleMapsContainer>
            <GoogleMaps height={MAP_HEIGHT} width={MAP_WIDTH}/>
          </GoogleMapsContainer>
        </LeftPanel>
        <RightPanel>
          <Header>
            <h1>{title}</h1>
            <ActionBtns>
              <DefaultBtn to={`/${match.params.restaurantId}/menu`}>
                View Menu
              </DefaultBtn>
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