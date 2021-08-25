import { createSelector } from 'reselect';

export const flightSelectorDepartures = (state) => state.flight.flightDataDepartures;
export const flightSelectorArrivals = (state) => state.flight.flightDataArrivals;
export const flightTextSelector = (state) => state.flight.flightText

export const filterFlightDepatrures = createSelector(
  [flightSelectorDepartures, flightTextSelector], 
  (flightDepartures, flightText) => {
    console.log(flightDepartures);
    console.log(flightText);
    // return flightDepartures.filter((flight) =>
    //   flight.codeShareData[0].codeShare
    //     .toLowerCase()
    //     .includes(flightText.toLowerCase())
    // );

    // if (flightText === '') {
    //   return flightDepartures;
    // }
    // return flightDepartures.filter((flight) =>
    //   flight['codeShareData[0].codeShare'].toLowerCase().includes(flightText.toLowerCase())
    // );
  }
);
