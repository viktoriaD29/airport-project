import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Search from './components/Search';
import Flights from './components/Flights';
import FlightButton from './components/FlightButton';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route component={Search} />
        <Route component={FlightButton} />
        <Switch>
          <Route path="/departures" component={Flights} />
          <Route path="/arrivals" component={Flights} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
