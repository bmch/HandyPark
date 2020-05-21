import { addToCheckout } from '../actions/checkout';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CHECKOUT':
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
