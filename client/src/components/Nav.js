import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// styles
import styled from 'styled-components';
import {
  colorWhite,
  colorDefaultOrange,
  colorDefaultDarkOrange,
  colorTransparentGray,
} from '../vars';
import { DefaultBtn } from '../sharedAssets';
// components
import Search from '../containers/Search';
// images
import Backdrop from '../images/alcohol-ale-bar.jpg';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => (props.landing ? '' : colorDefaultOrange)};
  background-image: ${props =>
    props.landing
      ? `url(${Backdrop})`
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

const AccountBtn = styled(DefaultBtn)`
  border-color: ${props => (props.landing ? colorTransparentGray : colorWhite)};
  color: ${colorWhite}

  :hover {
    background-color: ${props =>
      props.landing ? colorTransparentGray : colorWhite};
    color: ${props => (props.landing ? colorWhite : colorDefaultOrange)}
  }
`;

const Nav = props => {
  const isRoot = props.location.pathname === '/';
  return (
    <LandingContainer landing={isRoot}>
      <NavContainer>
        <Logo to='/'>DININGO</Logo>
        <div>
          <NavLink to='#'>About Us</NavLink>
          <NavLink to='#'>Contact Us</NavLink>
          <AccountBtn landing={isRoot} to='#'>
            Log in
          </AccountBtn>
          <AccountBtn landing={isRoot} to='#'>
            Sign up
          </AccountBtn>
        </div>
      </NavContainer>
      {props.location.pathname === '/' && (
        <Search landingRef={props.workspaceRef} />
      )}
    </LandingContainer>
  );
};

export default withRouter(Nav);