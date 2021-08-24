import { createStore, combineReducers } from 'redux';
import {flightReducer} from './components/flight.reducer'

const reducer = combineReducers({
  flight: flightReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
