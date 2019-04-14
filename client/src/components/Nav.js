import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
// styles
import styled from 'styled-components';
import {
  colorWhite,
  colorDefaultOrange,
  colorDefaultDarkOrange,
  colorTransparentGray,
} from '../vars';
//components
import Search from '../containers/Search';
// images
import Backdrop1 from '../images/alcohol-ale-bar.jpg';
import Backdrop2 from '../images/appetizer-dark-delicious.jpg';

const BackgroundImgs = [
  Backdrop1,
  Backdrop2,
];

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => (props.landing ? '' : colorDefaultOrange)};
  background-image: ${props =>
    props.landing
      ? `url(${props.image})`
      : `linear-gradient(
      80deg,
      ${colorDefaultDarkOrange} 0%,
      ${colorDefaultOrange} 70%
    );`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: ${props => (props.landing ? '75vh' : '')};
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

// TODO: replace this with an actual logo image
const Logo = styled(Link)`
  text-decoration: none;
  color: ${colorWhite};
  font-size: 40px;
  padding: 20px 10px;
`;

const NavLink = styled(Link)`
  margin: 10px;
  color: ${colorWhite};
  text-decoration: none;
`;

const AccountButton = styled(Link)`
  text-decoration: none;
  border: 2px solid ${props => (props.landing ? colorTransparentGray : colorWhite)};
  margin: 10px;
  color: ${colorWhite};
  border-radius: 5px;
  padding: 5px 20px;

  :hover {
    background-color: ${props => (props.landing ? colorTransparentGray : colorWhite)};
    color: ${props => (props.landing ? colorWhite : colorDefaultOrange)}
    cursor: pointer;
  }
`;

class Nav extends Component {
  state = {
    backgroundImgIndex: 0,
  };

  componentDidMount() {
    const updateImg = () => {
      const currIndex = this.state.backgroundImgIndex;
      const nextIndex =
        currIndex + 1 <= BackgroundImgs.length ? currIndex + 1 : 0;
      this.setState({ backgroundImgIndex: nextIndex });
    };
    this.intervalId = setInterval(updateImg, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log('Interval Cleared');
  }

  render() {
    const { location, workspaceRef } = this.props;
    const isRoot = location.pathname === '/';
    return (
      <LandingContainer
        landing={isRoot}
        image={BackgroundImgs[this.state.backgroundImgIndex]}
      >
        <NavContainer>
          <Logo to='/'>DININGO</Logo>
          <div>
            <NavLink to='/'>About Us</NavLink>
            <NavLink to='/'>Contact Us</NavLink>
            <AccountButton landing={isRoot} to='/'>
              Log in
            </AccountButton>
            <AccountButton landing={isRoot} to='/'>
              Sign up
            </AccountButton>
          </div>
        </NavContainer>
        {location.pathname === '/' && <Search landingRef={workspaceRef} />}
      </LandingContainer>
    );
  }
};

export default withRouter(Nav);