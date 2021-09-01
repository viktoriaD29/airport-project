import { createSelector } from 'reselect';
import moment from 'moment';

export const flightsListSelector = (state) => state.flights.flightsList;
export const flightTextSelector = (state) => state.flights.flightText;


export const filterFlightListSelector = createSelector(
  [flightsListSelector, flightTextSelector],
  (flightsList, flightText) => {
    return flightText
      ? flightsList.filter((flight) => {
          return `${flight['carrierID.IATA']}${flight.fltNo}`.includes(
            flightText
          );
          // (flight) => flight.codeShareData[0].codeShare === flightText
        })
      : flightsList;
  }
);


// return flightText
//   ? flightsList.filter(
//       (flight) => flight.codeShareData[0].codeShare === flightText
//     )
//   : flightsList;

// export const filterFlightListSelector = createSelector(
//   [flightsListSelector, flightTextSelector],
//   (flightsList, flightText) => {
//     console.log(flightsList);
//     return flightsList.map((el) => {
//       const a = el.departure
//          return a.filter((flight) => flight.codeShareData[0].codeShare === flightText)
//     })
//   }
// );

// export const filterFlightListSelector = createSelector(
//   [flightsListSelector, flightTextSelector],
//   (flightsList, flightText) => {
//     return flightText
//       ? flightsList.filter((flight) =>
//             flight.codeShareData[0].codeShare === flightText
//         )
//       : flightsList;
//   }
// );

// export const flightsListSelector = (state) => state.flights;

// export const filterListSelector = createSelector([flightsListSelector], (flights) =>
//   flights.flightsList.filter(
//     (flight) =>
//       moment(new Date(flight.timeToStand)).format('MMM Do YY') ===
//       moment(new Date()).format('MMM Do YY')
//   )
// );

// export const filterFlightListSelector = createSelector(
//   [flightsListSelector, filterListSelector],
//   (flights, flightsList) => {
    // if (flights.searchText) {
    //   return flightsList.filter(
    //     (flight) =>
    //       flight.codeShareData[0].codeShare.indexOf(
    //         flights.searchText.toUpperCase()
    //       ) >= 0
    //   );
    // }
    // return flightsList;
//   }
// );
