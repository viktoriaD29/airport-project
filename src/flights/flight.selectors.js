import { createSelector } from 'reselect';

export const flightSelectorDepartures = (state) => state.flight.flightData.departures;
export const flightSelectorArrivals = (state) => state.flight.flightData.arrivals;
export const flightSelectorList = (state) => state.flight.flightData;
export const flightTextSelector = (state) => state.flight.flightText;

export const filterFlightDepatrures = createSelector(
  [flightSelectorList, flightTextSelector],
  (flightList, flightText) => {
    return flightText
      ? flightList.filter(
          (flight) => flight.codeShareData[0].codeShare === flightText
        )
      : flightDepartures;
  }
);
