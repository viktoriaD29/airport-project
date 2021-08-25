export const FLIGHT_DATA = 'FLIGHT_DATA';
import { fetchFlightData } from './flight.gateway';

export const flightDataAction = (flightData, flightText) => {
  console.log(flightText);
  return {
    type: FLIGHT_DATA,
    payload: {
      flightData,
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
