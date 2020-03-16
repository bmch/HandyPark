import {
  setParkingLocations,
  SET_PARKING_LOCATIONS
} from '../../actions/parkingLocations';

const locations = [];

test('setParkingLocations should return an object', () => {
  expect(setParkingLocations(locations)).toEqual({
    type: SET_PARKING_LOCATIONS,
    locations
  });
});
