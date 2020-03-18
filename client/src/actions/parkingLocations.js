import ApiClient from '../services/ApiClient';

export const SET_PARKING_LOCATIONS = 'SET_PARKING_LOCATIONS';
export const setParkingLocations = locations => ({
  type: SET_PARKING_LOCATIONS,
  locations
});

export const REQUEST_QUOTES = 'REQUEST_QUOTES';
export const requestQuotes = dates => {
  return {
    type: REQUEST_QUOTES,
    dates
  };
};

export const RECEIVE_QUOTES = 'RECEIVE_POSTS';
export const receiveQuotes = json => {
  return {
    type: RECEIVE_QUOTES,
    locations: json
  };
};

export const fetchQuotes = selectedDates => {
  return function(dispatch) {
    dispatch(requestQuotes(selectedDates));
    const { startDate, endDate } = selectedDates;
    // settimeout is used to simulate delay of a slower request,  spinners shoud load
    setTimeout(() => {
      ApiClient.fetchQuotes(
        `?start_time=${startDate.toISOString()}&end_time=${endDate.toISOString()}`
      ).then(locations => dispatch(receiveQuotes(locations)));
    }, 1500);
  };
};

export const fetchParkingLocations = () => {
  return dispatch => {
    ApiClient.fetchLocations().then(locations => {
      dispatch(setParkingLocations(locations));
    });
  };
};
