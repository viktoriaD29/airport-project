export const FLIGHT_DATA = 'FLIGHT_DATA';
export const FLIGHT_TEXT = 'FLIGHT_TEXT';
import { fetchFlightData } from './flight.gateway';

export const flightDataAction = (flightData) => {
  const action = {
    type: FLIGHT_DATA,
    payload: {
      flightData,
    },
  };
  return action;
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
    fetchFlightData().then((flightData) =>
      dispatch(flightDataAction(flightData.body))
    );
  };
};

// export const getFlightData = (direction) => {
//   const thunkAction = function (dispatch) {
//     fetchFlightData().then((flightData) =>
//       dispatch(flightDataAction(flightData.body[`${direction.slice(0, -1)}`]))
//     );
//   };
//   return thunkAction;
// };
