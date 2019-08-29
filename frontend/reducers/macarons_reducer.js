import { RECEIVE_MACARONS } from "../actions/macaron_actions.js";

const macaronsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MACARONS:
      return action.macarons;
    default:
      return state;
  }
};

export default macaronsReducer;
