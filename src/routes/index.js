import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import RiddlesACT from '../scenes/castleMenu/librarySub/riddlesACT';
import Main from '../scenes/main/';

const Routes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Main} />
      <Route exact path="/riddles" component={RiddlesACT} />
    </Fragment>
  </Router>
);

export default Routes;
