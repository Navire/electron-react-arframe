import { applyMiddleware, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import history from '../routes/history';
// import activityReducer from '../scenes/activity/reducer';

const rootReducer = combineReducers({
  // activity: activityReducer,
});

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(connectRouter(history)(rootReducer), applyMiddleware(...middlewares));

export default store;
