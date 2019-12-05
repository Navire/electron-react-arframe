import React from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import Main from '../scenes/main/';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
    </div>
  </Router>
);

export default Routes;
