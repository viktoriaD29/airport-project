import moment from 'moment';
import { createSelector } from 'reselect';

// export const flightSelectorDepartures = (state) => state.flight.flightData.departures;
// export const flightSelectorArrivals = (state) => state.flight.flightData.arrival;

export const flightSelectorList = (state) => state.flight.flightList;
// export const flightTextSelector = (state) => state.flight.flightText;

// export const filteredFlightsListSelector = createSelector(
//   [flightSelectorList, flightTextSelector],
//   (flightList, flightText) => {
//     return flightText
//       ? flightList.filter((flight) =>
//           `${flight['carrierID.IATA']}${flight.fltNo}`.includes(flightText)
//         )
//       : flightList;
//   }
// );

// export const filterFlightDepatrures = createSelector(
//   [flightSelectorList, flightTextSelector],
//   (flightList, flightText) => {
//     return flightText
//       ? flightList.filter(
//           (flight) => flight.codeShareData[0].codeShare === flightText
//         )
//       : flightDepartures;
//   }
// );
