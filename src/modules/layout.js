import {SET_BREADCUMBS} from 'store/constants'

function setBreadcumbs(breadcumbs) {
  return (dispatch) => {
    return dispatch({type:SET_BREADCUMBS, breadcumbs:breadcumbs})
  }
}

export {
  setBreadcumbs
};