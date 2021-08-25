import { createSelector } from 'reselect';

export const flightSelectorDepartures = (state) => state.flight.flightDataDepartures;
export const flightSelectorArrivals = (state) => state.flight.flightDataArrivals;
export const flightTextSelector = (state) => state.flight.flightText;

export const filterFlightDepatrures = createSelector(
  [flightSelectorDepartures, flightTextSelector],
  (flightDepartures, flightText) => {
    console.log(flightDepartures);

    return flightDepartures.filter((el) => {
      console.log(el.codeShareData[0].codeShare);
      console.log(flightText);
      // if (!el.codeShareData[0].codeShare === flightText) {
      //   return 'No flights';
      // }
      // return el.codeShareData[0].codeShare === flightText;
    });
  }
);
