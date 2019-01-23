import {combineReducers} from 'redux';

import auth from "../services/auth/reducers";
import navigation from "../navigation/reducers";

export default combineReducers({
  auth,
  navigation
});