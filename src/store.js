// import { createStore, combineReducers } from 'redux';
// import {flightReducer} from './components/flight.reducer'

// const reducer = combineReducers({
//   flight: flightReducer,
// });

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {flightReducer} from './components/flight.reducer'

const reducer = combineReducers({
  flight: flightReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
