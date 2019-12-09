import { applyMiddleware, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import history from '../routes/history';
import panelReducer from '../scenes/main/reducer';

const rootReducer = combineReducers({
  panelBlocks: panelReducer,
});

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(connectRouter(history)(rootReducer), applyMiddleware(...middlewares));

export default store;
