import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// components
import PageNotFound from './PageNotFound';
import Workspace from './Workspace';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Workspace} />
    <Route component={PageNotFound} />
  </Switch>
);

export default withRouter(Main);