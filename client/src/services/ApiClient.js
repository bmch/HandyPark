const BASE_URL = process.env.REACT_APP_BASE_URL;

export default {
  fetchLocations: () => {
    return fetchRequest(BASE_URL + 'location');
  },

  postBooking: data => {
    const url = BASE_URL + 'booking';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    };
    return fetchRequest(url, options);
  },

  fetchQuotes: URL_STRING => {
    const url = BASE_URL + 'quotes' + URL_STRING;
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer'
    };
    return fetchRequest(url, options);
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
