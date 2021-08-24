export const FLIGHT_DATA = 'FLIGHT_DATA';
import { fetchFlightData } from './flight.gateway';

export const flightDataAction = (flightData, flightText) => {
  console.log(flightData);
  return {
    type: FLIGHT_DATA,
    payload: {
      flightText,
      flightData,
    },
  };
};

export const getFlightData = () => {
  return function (dispatch) {
    fetchFlightData().then((flightData) => {
      console.log(flightData);
      const a = flightData.body.departure;
      console.log(a);
      dispatch(flightDataAction(flightData.body.departure));
    });
  };
};
