import axios from "axios";

import userConstants from "../_constants";

export const authActions = {
  signIn,
  checkAuth,
  loadProfile,
  logOut
};

function signIn(data, history) {
  return async dispatch => {
    try {
      const response = await axios.post("/api/auth/login", data);
      dispatch({
        type: userConstants.AUTH_SIGN_IN,
        payload: response.data
      });
      dispatch(loadProfile());
      history.push("/admin");
    } catch (err) {
      dispatch({
        type: userConstants.AUTH_ERROR,
        payload: err.response
      });
    }
  };
}

function logOut() {
  return async dispatch => {
    await axios.get("/api/auth/logout");
    dispatch({
      type: userConstants.AUTH_SIGN_OUT
    });
  };
}

function loadProfile() {
  return async dispatch => {
    try {
      let response = await axios.get("/api/auth/status");
      dispatch({
        type: userConstants.GET_USER,
        payload: response.data
      });
    } catch (error) {
      dispatch({ type: userConstants.AUTH_ERROR, payload: error });
    }
  };
}

function checkAuth() {
  return async dispatch => {
    try {
      await axios.get("/api/auth/status");
      dispatch({ type: userConstants.AUTH_SIGN_IN });
    } catch (err) {
      dispatch({ type: userConstants.AUTH_ERROR, payload: err });
    }
  };
}
