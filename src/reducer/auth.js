import { POST_AUTHENTICATION } from "../store/constants";

export default function authentication(state = {}, action) {
  switch (action.type) {
    case POST_AUTHENTICATION:
      return action.response.data;
    default:
      return state;
  }
}
