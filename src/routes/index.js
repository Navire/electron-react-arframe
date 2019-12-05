import React from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import PanelBottom from '../scenes/general/panelBottom';
import Main from '../scenes/main/';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/panelbottom" component={PanelBottom} />
    </div>
  </Router>
);

export default Routes;
