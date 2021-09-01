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
    fetchFlightData().then(
      (flightData) =>
        dispatch(flightDataAction(flightData.body[`${direction.slice(0, -1)}`]))
        // dispatch(flightDataAction(flightData.body[direction]))

      // console.log(flightData.body[direction])
      // console.log(flightData.body[`${direction.slice(0, -1)}`])
      // console.log(flightData.body)
    );
  };
};
