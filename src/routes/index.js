import React from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

<<<<<<< HEAD
import RiddlesACT from '../scenes/castleMenu/librarySub/riddlesACT';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={RiddlesACT} />
    </div>
  </Router>
=======
import Main from '../scenes/Main/';

import RiddlesACT from '../scenes/castleMenu/librarySub/riddlesACT';
// import Activity from '../scenes/activity/';

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={RiddlesACT} />
      {/* <Route path="/activity" component={Activity} /> */}
    </Switch>
  </ConnectedRouter>
>>>>>>> Implementation of Riddles Activity with 6 levels using strings as the blocks translation on the table instead of images
);

export default Routes;
