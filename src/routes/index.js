import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import Ar from '../pages/ar';

const Routes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Ar} />
    </Fragment>
  </Router>
);

export default Routes;
