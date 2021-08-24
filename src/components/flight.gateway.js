const baseUrl = 'https://api.iev.aero/api/flights';

const data = new Date()

export const fetchFlightData = (data) =>
  fetch(`${baseUrl}/${data}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
