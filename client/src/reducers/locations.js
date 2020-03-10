const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_PARKING_LOCATIONS':
      return action.locations;
    default:
      return state;
  }
}
