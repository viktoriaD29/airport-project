import { createSelector } from 'reselect';

export const flightsListSelector = (state) => state.flights.flightsList;
export const flightTextSelector = (state) => state.flights.flightText;

export const filterFlightListSelector = createSelector(
  [flightsListSelector, flightTextSelector],
  (flightsList, flightText) => {
    return flightText
      ? flightsList.filter(
          (flight) => flight.codeShareData[0].codeShare === flightText
        )
      : flightsList;
  }
);
