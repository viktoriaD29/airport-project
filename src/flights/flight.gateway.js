import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';
const dataOfFlight = moment(new Date()).format('DD-MM-YYYY');

export const fetchFlightData = () =>
  fetch(`${baseUrl}/${dataOfFlight}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error()
  });

