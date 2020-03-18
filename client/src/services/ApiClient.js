const PARKING_URL = process.env.REACT_APP_BASE_URL + 'parking/';
const USER_URL = process.env.REACT_APP_BASE_URL + 'auth/';

export default {
  fetchLocations: () => {
    return fetchRequest(PARKING_URL + 'location');
  },

  postBooking: data => {
    const url = PARKING_URL + 'booking';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    };
    return fetchRequest(url, options);
  },

  fetchQuotes: URL_STRING => {
    const url = PARKING_URL + 'quotes' + URL_STRING;
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer'
    };
    return fetchRequest(url, options);
  },
  login: async data => {
    const url = USER_URL + 'login';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    };
    let response = await fetch(url, options);
    let result = await response.json();
    console.log('response', result);
    return result;
  }
};

const fetchRequest = (url, options) => {
  return fetch(url, options)
    .then(res => (res.status < 400 ? res : Promise.reject(res)))
    .then(res => res.json())
    .catch(err => {
      console.log(`${err.message} while fetching ${url}`);
    });
};
