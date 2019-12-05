import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Main from '../scenes/Main/';
// import Activity from '../scenes/activity/';

import history from './history';

// const Routes = () => (
//   <ConnectedRouter history={history}>
//     <Switch>
//       <Route exact path="/" component={Main} />
//       <Route path="/activity" component={Activity} />
//     </Switch>
//   </ConnectedRouter>
// );

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/activity" component={Activity} />
    </div>
  </Router>
);

export default Routes;
