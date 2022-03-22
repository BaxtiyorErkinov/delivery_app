import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { foodReducer } from './foodsReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  foods: foodReducer,
});
