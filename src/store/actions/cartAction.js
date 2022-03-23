import { ADD_TO_CART, UPDATE_CART } from '../actionTypes';

export const cartAction = (id) => {
  return { type: ADD_TO_CART, payload: id };
};

export const cartUpdateAction = (id, count) => {
  return {
    type: UPDATE_CART,
    payload: {
      id: id,
      count: count,
    },
  };
};
