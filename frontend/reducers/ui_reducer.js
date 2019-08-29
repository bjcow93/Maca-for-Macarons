import { OPEN_CART, CLOSE_CART } from '../actions/ui_actions';


export default function uiReducer(state = {}, action) {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case OPEN_CART:
      nextState = Object.assign({}, state);
      nextState['open'] = true;
      return nextState;
    case CLOSE_CART:
      nextState = Object.assign({}, state);
      nextState['open'] = false;
      return nextState;
    default:
      return state;
  }
}