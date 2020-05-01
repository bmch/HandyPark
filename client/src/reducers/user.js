const initialState = {
  isAuthenticated: false,
  currentUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        isAuthenticated: true, //!!Object.keys(action.payload).length,
        currentUser: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        isAuthenticated: false,
        currentUser: {},
      };
    case 'SET_CURRENT_USER':
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        currentUser: action.user,
      };
    default:
      return state;
  }
};
