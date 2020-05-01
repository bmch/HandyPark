const BASE_URL = process.env.REACT_APP_BASE_URL;
const PARKING_URL = BASE_URL + 'parking/';
const USER_URL = BASE_URL + 'auth/';

export default {
  fetchLocations: () => {
    return fetchRequest(PARKING_URL + 'location');
  },

  postBooking: (data) => {
    const url = PARKING_URL + 'booking';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer',
      body: JSON.stringify(data),
    };
    return fetchRequest(url, options);
  },

  fetchQuotes: (URL_STRING) => {
    const url = PARKING_URL + 'quotes' + URL_STRING;
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer',
    };
    return fetchRequest(url, options);
  },
  login: async (data) => {
    const url = BASE_URL + 'auth/login';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer',
      body: JSON.stringify(data),
    };
    return fetchRequest(url, options);
  },
  register: async (data) => {
    const url = USER_URL + 'signup';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer',
      body: JSON.stringify(data),
    };
    return fetchRequest(url, options);
  },
  fetchAccount: async (token) => {
    const url = BASE_URL + 'user/account';
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return fetch(url, options);
  },
  fetchPassportSuccess: async () => {
    const url = BASE_URL + 'auth/login/success';
    const options = {
      credentials: 'include',
    };
    return fetchRequest(url, options);
  },
};

const fetchRequest = (url, options) => {
  return fetch(url, options)
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching ${url}`);
    });
};
