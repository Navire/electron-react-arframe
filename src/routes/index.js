import React from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import RiddlesACT from '../scenes/castleMenu/librarySub/riddlesACT';
import Main from '../scenes/Main/index';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={RiddlesACT} />
      <Route exact path="/mesa" component={Main} />
    </div>
  </Router>
);

export default Routes;
