import React from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import UpperBar from '../scenes/general/upperBar/example';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={UpperBar} />
    </div>
  </Router>
);

export default Routes;
