import {
  REMOVE_AUTH,
  SET_AUTH
} from "./action-tyes";
import type {AuthObject} from "../../../models/auth-object";

export const setAuth = (authObject: AuthObject) => ({
  type: SET_AUTH,
  payload: {
    authObject
  }
});

export const removeAuth = () => ({
  type: REMOVE_AUTH
});