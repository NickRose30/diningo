import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
// components
import Nav from './Nav';
import PageNotFound from './PageNotFound';
import Landing from './Landing';

const Container = styled.div`
  margin: 0 30px;
  display: flex;
`;

const renderWorkspace = Component => () => (
  <div>
    <Nav />
    <Container>
      <Component />
    </Container>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={renderWorkspace(Landing)} />
    <Route component={PageNotFound} />
  </Switch>
);

export default withRouter(Main);