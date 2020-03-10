import ApiClient from '../services/ApiClient';

export const fetchParkingLocations = () => {
  return dispatch => {
    ApiClient.fetchLocations().then(locations => {
      dispatch(setParkingLocations(locations));
    });
  };
};

export const setParkingLocations = locations => ({
  type: 'SET_PARKING_LOCATIONS',
  locations
});
