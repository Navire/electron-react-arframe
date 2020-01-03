import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import RiddlesACT from '../scenes/riddlesACT';
import Main from '../scenes/main/';
import Ar from '../scenes/ar/';

const Routes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Ar} />
      <Route exact path="/riddles" component={RiddlesACT} />
      <Route exact path="/ar" component={Ar} />
    </Fragment>
  </Router>
);

export default Routes;
