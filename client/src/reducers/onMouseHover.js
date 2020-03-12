import { HOVER, UNHOVER } from '../actions/onMouseHover';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case HOVER:
      return action.hoverId;
    case UNHOVER: {
      return initialState;
    }
    default:
      return state;
  }
};
