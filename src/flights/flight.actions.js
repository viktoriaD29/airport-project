export const FLIGHT_DATA = 'FLIGHT_DATA';
export const FLIGHT_TEXT = 'FLIGHT_TEXT';
import { fetchFlightData } from './flight.gateway';

export const flightDataAction = (flightData) => {
  return {
    type: FLIGHT_DATA,
    payload: {
      flightData,
    },
  };
};

export const flightTextAction = (flightText) => {
  console.log(flightText);
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
      dispatch(flightDataAction(flightData.body));
    });
  };
};
