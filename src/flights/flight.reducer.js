import { FLIGHT_DATA, FLIGHT_TEXT } from './flight.actions.js';

const initialState = {
  flightsList: [],
  flightText: '',
};

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_DATA:
      return {
        ...state,
        flightsList: action.payload.flightData,
      };
    case FLIGHT_TEXT:
      return {
        ...state,
        flightNumber: action.payload.flightText,
      };
    default:
      return state;
  }
};
