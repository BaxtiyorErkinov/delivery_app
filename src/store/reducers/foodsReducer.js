import { Items } from '../../data';
import { GET_FOODS } from '../actionTypes';
const initialState = {
  foods: [],
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOODS:
      const { payload } = action;
      const filteredItems = Items.filter((item) => item.itemId == payload);
      return filteredItems;
    default:
      const initialValue = Items.filter((item) => item.itemId == 'burger01');
      return initialValue;
  }
};
