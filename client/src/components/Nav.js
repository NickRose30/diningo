import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  colorWhite,
  colorDefaultOrange, 
  colorDefaultDarkOrange,
} from '../vars';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colorDefaultOrange};
  padding: 0 20px;
  background-image: linear-gradient(
    80deg,
    ${colorDefaultDarkOrange} 0%,
    ${colorDefaultOrange} 70%
  );
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
  border: 2px solid ${colorWhite};
  margin: 10px;
  color: ${colorWhite};
  border-radius: 5px;
  padding: 5px 20px;

  :hover {
    color: ${colorDefaultOrange};
    background-color: ${colorWhite};
    cursor: pointer;
  }
`;

const Nav = () => (
  <NavContainer>
    <Logo to='/'>DININGO</Logo>
    <div>
      <NavLink to='/'>About Us</NavLink>
      <NavLink to='/'>Contact Us</NavLink>
      <AccountButton to='/'>Log in</AccountButton>
      <AccountButton to='/'>Sign up</AccountButton>
    </div>
  </NavContainer>
);

export default Nav;