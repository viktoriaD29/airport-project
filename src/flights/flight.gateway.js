import moment from 'moment';

export const dataFlight = moment(new Date()).format('DD-MM-YYYY');

export const fetchFlightData = (direction) => {
  return fetch(`${baseUrl}${dataFlight}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(
      (res) => res.body[(direction = !direction ? 'departure' : direction)]
    );
};

// export const fetchFlightData = () => {
//   return fetch(`https://api.iev.aero/api/flights/${dataFlight}`).then(
//     (response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error();
//     }
//   );
// };


