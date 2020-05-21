const initialState = {
  isAuthenticated: false,
  currentUser: {},
  bookings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isAuthenticated: true, //!!Object.keys(action.payload).length,
        currentUser: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        isAuthenticated: false,
        currentUser: {},
        bookings: [],
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        isAuthenticated: !!Object.keys(action.user).length,
        currentUser: action.user,
      };
    case 'SET_USER_BOOKINGS':
      return {
        ...state,
        bookings: action.bookings,
      };
    default:
      return state;
  }
};
