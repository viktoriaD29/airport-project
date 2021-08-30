import moment from 'moment';

const dataFlight = moment(new Date()).format('DD-MM-YYYY');

export const fetchFlightData = () => {
  return fetch(`https://api.iev.aero/api/flights/${dataFlight}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    }
  )
};
