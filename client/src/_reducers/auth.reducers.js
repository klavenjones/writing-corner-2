import userConstants from "../_constants";
import { isEmpty } from "../_helpers";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
  errorMessage: ""
};

export const auth = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case userConstants.GET_USER:
      console.log(payload);
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload.user,
        errorMessage: ""
      };
    case userConstants.AUTH_SIGN_IN:
      return {
        ...state,
        ...payload,
        isAuthenticated: !isEmpty(payload),
        errorMessage: ""
      };
    case userConstants.AUTH_SIGN_OUT:
      return { ...state, isAuthenticated: false, user: {}, errorMessage: "" };
    case userConstants.AUTH_ERROR:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};
