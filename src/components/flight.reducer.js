import { FLIGHT_DATA } from './flight.actions';

const initialState = {
  flightDataDepartures: [],
  flightDataArrivals: [],
  flightText: '',
};

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_DATA:
      return {
        ...state,
        flightDataDepartures: action.payload.flightData.departure,
        flightDataArrivals: action.payload.flightData.arrival,
        flightText: action.payload.flightText,
      };
    default:
      return state;
  }
};
