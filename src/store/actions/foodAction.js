import { GET_FOODS } from '../actionTypes';

export const foodAction = (value) => {
  return { type: GET_FOODS, payload: value };
};
