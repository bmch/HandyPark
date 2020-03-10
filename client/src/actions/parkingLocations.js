import ApiClient from '../services/ApiClient';

export const fetchParkingLocations = () => {
  return dispatch => {
    ApiClient.fetchLocations.then(locations => setParkingLocations(locations));
  };
};

export const setParkingLocations = expenses => ({
  type: 'SET_PARKING_LOCATIONS',
  locations
});
