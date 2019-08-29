import { RECEIVE_ITEM, REMOVE_ITEM } from "../actions/cart_actions";

export default function cartReducer(state = {}, action) {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_ITEM:
      nextState = Object.assign({}, state);
      action.item.id in nextState
        ? (nextState[action.item.id] += 1)
        : (nextState[action.item.id] = 1);
      return nextState;
    case REMOVE_ITEM:
      nextState = Object.assign({}, state);
      nextState[action.id] == 1
        ? delete nextState[action.id]
        : (nextState[action.id] -= 1);
      return nextState;

    default:
      return state;
  }
}
