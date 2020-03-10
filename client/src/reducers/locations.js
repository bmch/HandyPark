const initialState = [];

export default function(state = initialState, action) {
  console.log('action is ', action);
  switch (action.type) {
    case 'SET_PARKING_LOCATIONS':
      console.log(action.locations);
      return action.locations;
    default:
      return state;
  }
}
