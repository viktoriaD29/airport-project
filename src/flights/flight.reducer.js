import { FLIGHT_DATA } from './flight.actions';
import { FLIGHT_TEXT } from './flight.actions';

const initialState = {
  flightList: [],
  // flightText: '',
};

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_DATA:
      return {
        ...state,
        flightList: action.payload.flightData,
      };
    // case FLIGHT_TEXT:
    //   return {
    //     ...state,
    //     flightText: action.payload.flightText,
    //   };
    default:
      return state;
  }
};
