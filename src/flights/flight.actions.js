export const FLIGHT_DATA = 'FLIGHT_DATA';
export const FLIGHT_TEXT = 'FLIGHT_TEXT';
import { fetchFlightData } from './flight.gateway';

export const flightDataAction = (flightData) => {
  console.log(flightData);
  return {
    type: FLIGHT_DATA,
    payload: {
      flightData,
    },
  };
};

export const flightTextAction = (flightText) => {
  return {
    type: FLIGHT_TEXT,
    payload: {
      flightText,
    },
  };
};

export const getFlightData = () => {
  return function (dispatch) {
    fetchFlightData().then((flightData) => {
      console.log(flightData.body);
      dispatch(flightDataAction(flightData.body));
    });
  };
};

// export const getFlightData = (direction) => {
//   return thunkaAction = function (dispatch) {
//     fetchFlightData(direction).then((flightData) =>
//       dispatch(flightDataAction(flightData.body))
//     );
//   };
// };
