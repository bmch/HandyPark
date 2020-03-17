import {
  setParkingLocations,
  SET_PARKING_LOCATIONS,
  requestQuotes,
  REQUEST_QUOTES,
  receiveQuotes,
  RECEIVE_QUOTES
} from '../../actions/parkingLocations';

test('setParkingLocations should return an object', () => {
  const locations = [];
  expect(setParkingLocations(locations)).toEqual({
    type: SET_PARKING_LOCATIONS,
    locations: []
  });
});

test('should setup set parking location action object', () => {
  const action = setParkingLocations([1, 2, 3]);
  expect(action).toEqual({
    type: SET_PARKING_LOCATIONS,
    locations: [1, 2, 3]
  });
});

test('should setup request Quotes action object', () => {
  const dates = {
    startDate: new Date('2020-06-17T08:00:00'),
    endDate: new Date('2020-06-18T18:00:00')
  };
  const action = requestQuotes(dates);
  expect(action).toEqual({
    type: REQUEST_QUOTES,
    dates
  });
});

test('should setup receive Quotes action object', () => {
  const locationArr = [{ _id: 1 }, { _id: 2 }];
  const action = receiveQuotes(locationArr);
  expect(action).toEqual({
    type: RECEIVE_QUOTES,
    locations: [{ _id: 1 }, { _id: 2 }]
  });
});
