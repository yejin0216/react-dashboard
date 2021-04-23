import {SET_BREADCUMBS} from "../store/constants";

const breadcumbs = (state = [], action) => {
  switch (action.type) {
    case SET_BREADCUMBS :
      return action.breadcumbs;
    default:
      return state;
  }
}

export {
  breadcumbs
}