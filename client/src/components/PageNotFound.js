import React from 'react';
import styled from 'styled-components';
import { colorDefaultOrange } from '../vars';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colorDefaultOrange};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 400%;
`;

const Message = styled.div`
  color: white;
  font-size: 300%;
`;

const PageNotFound = () => (
  <Page>
    <Logo>DININGO</Logo>
    <Message>404 Page Not Found</Message>
  </Page>
);

export default PageNotFound;