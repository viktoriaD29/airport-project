import { fetchFlightData } from './flight.gateway.js';

export const FLIGHT_DATA = 'FLIGHT_DATA';
export const FLIGHT_TEXT = 'FLIGHT_TEXT';

export const flightDataAction = (flightData) => {
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

export const getFlightData = (direction) => {
  return function (dispatch) {
    const data = (direction = !direction ? 'departure' : direction);
      fetchFlightData().then((flightData) =>
        dispatch(
          flightDataAction(
            flightData.body[data]
          )
        )
      );
  };
};

