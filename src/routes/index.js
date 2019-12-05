import React from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import RiddlesACT from '../scenes/castleMenu/librarySub/riddlesACT';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={RiddlesACT} />
    </div>
  </Router>
);

export default Routes;
