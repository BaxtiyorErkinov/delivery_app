import { Items } from '../../data';
import { GET_FOODS } from '../actionTypes';
const initialState = {
  foods: Items,
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOODS:
      const copy = [...state.foods];
      const { payload } = action;
      const filteredItems = copy.filter((item) => item.itemId == payload);
      return {
        ...state,
        foods: filteredItems,
      };
    default:
      const initialValue = state.foods.filter(
        (item) => item.itemId == 'burger01',
      );
      return initialValue;
  }
};
