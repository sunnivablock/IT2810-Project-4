import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducers/index'
import thunk from 'redux-thunk';

const middlewares= [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
  composeEnhancers(
  applyMiddleware(...middlewares)
  ));

export default store;