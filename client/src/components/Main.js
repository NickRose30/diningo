import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// components
import Workspace from './Workspace';
import PageNotFound from './PageNotFound';
import Landing from './Landing';

const renderWorkspace = Component => () => <Workspace Component={Component} />;

const Main = () => (
  <Switch>
    <Route exact path='/' component={renderWorkspace(Landing)} />
    <Route component={PageNotFound} />
  </Switch>
);

export default withRouter(Main);