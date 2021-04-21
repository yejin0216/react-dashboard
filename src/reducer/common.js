import { GET_CATEGORIES } from 'store/constants';

/**
 * state : 카테고리
 * @param state
 * @param action
 * @returns {*[]}
 */
export const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...state, action.data.list];
    default:
      return state;
  }
}
