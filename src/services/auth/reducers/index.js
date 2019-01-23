import {
  REMOVE_AUTH,
  SET_AUTH
} from "../actions/action-tyes";

function auth(state = {}, action) {
  switch (action.type) {
    case SET_AUTH: {
      return {
        authObject: action.payload.authObject
      }
    }
    case REMOVE_AUTH: {
      return {
        authObject: null
      }
    }
    default: {
      return state;
    }
  }
}

export default auth;