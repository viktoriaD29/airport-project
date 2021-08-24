import { FLIGHT_DATA } from './flight.actions';

const initialState = {
  flightData: [],
  flightText: '',
};

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_DATA:
      return {
        ...state,
        flightData: action.payload.flightData,
        flightText: action.payload.flightText,
      };
    default:
      return state;
  }
};
