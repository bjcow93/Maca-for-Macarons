import { combineReducers } from 'redux';

import macarons from './macarons_reducer';
import cart from './cart_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
  macarons,
  cart,
  ui
});

export default rootReducer;