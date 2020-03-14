import ApiClient from '../services/ApiClient';

export const SET_PARKING_LOCATIONS = 'SET_PARKING_LOCATIONS';
export const setParkingLocations = locations => ({
  type: SET_PARKING_LOCATIONS,
  locations
});

export const REQUEST_QUOTES = 'REQUEST_QUOTES';
function requestQuotes(dates) {
  return {
    type: REQUEST_QUOTES,
    dates
  };
}

export const RECEIVE_QUOTES = 'RECEIVE_POSTS';
function receiveQuotes(json) {
  return {
    type: RECEIVE_QUOTES,
    locations: json
  };
}

export const fetchQuotes = obj => {
  return function(dispatch) {
    dispatch(requestQuotes(obj));
    const { startDate, endDate } = obj;
    setTimeout(() => {
      ApiClient.fetchQuotes(
        `?start_time=${startDate.toISOString()}&end_time=${endDate.toISOString()}`,
        'GET'
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

// export const searchRequestUpdateTimes = (payLoad = {}) => {
//   console.log('payLoad', payLoad);

//   return dispatch => {
//     console.log('inside dispatch func');
//     const { startDate = '', endDate = '' } = payLoad;
//     console.log('start', startDate);
//     console.log('end', endDate);
//     const startDateISO = startDate.toISOString();
//     const endDateISO = endDate.toISOString();
//     console.log('this far');
//     console.log(startDateISO);
//     console.log(endDateISO);

//     const qString = `?start_time=${startDateISO}&end_time=${endDateISO}`;
//     console.log('qString', qString);

//     //run loading spinner for 0.3 seconds
//     ApiClient.fetchQuotes(qString, 'GET').then(locations => {
//       dispatch(setParkingLocations(locations));
//     });
//   };
// };
