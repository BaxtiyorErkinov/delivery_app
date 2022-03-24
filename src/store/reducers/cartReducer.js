import { REMOVE_FROM_CART, ADD_TO_CART, UPDATE_CART } from '../actionTypes';
import { Items } from '../../data';
const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // [...state.cart, data[0]]
      const { payload } = action;
      const data = Items.filter((item) => item.id === payload);
      const existData = state.cart.find((el) => el.id === payload);
      if (existData) {
        return {
          ...state,
          cart: state.cart.map((el, index) => {
            if (el.id == payload) {
              return {
                ...el,
                count: el.count + 1,
              };
            } else {
              return el;
            }
          }),
        };
      }
      return {
        ...state,
        cart: [...state.cart, ...data],
      };

    case UPDATE_CART:
      console.log(action.payload);
      return {
        ...state,
        cart: state.cart.map((el) => {
          if (el.id == action.payload.id) {
            return {
              ...el,
              count: el.count + 1,
            };
          } else {
            return el;
          }
        }),
      };

    default:
      return state;
  }
};
