import axios from "axios";
import postConstants from "../_constants";
import { authActions } from "./";

export const getPosts = () => {
  return async dispatch => {
    try {
      const response = await axios.get("/api/post/");
      dispatch({
        type: postConstants.GET_POSTS,
        payload: response.data
      });
    } catch (err) {
      dispatch({
        type: postConstants.AUTH_ERROR,
        payload: err.response
      });
    }
  };
};

export const addPost = data => {
  return async dispatch => {
    try {
      await axios.post("/api/post/", data);
      dispatch(authActions.loadProfile());
    } catch (err) {
      dispatch({
        type: postConstants.AUTH_ERROR,
        payload: err.response
      });
    }
  };
};

export const editPost = (data, id) => {
  return async dispatch => {
    try {
      await axios.put(`/api/post/${id}`, data);
      dispatch(authActions.loadProfile());
    } catch (err) {
      dispatch({
        type: postConstants.AUTH_ERROR,
        payload: err.response
      });
    }
  };
};

export const deletePost = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/post/${id}`);
      dispatch(authActions.loadProfile());
    } catch (err) {
      dispatch({
        type: postConstants.AUTH_ERROR,
        payload: err.response
      });
    }
  };
};

export const getPost = payload => {
  return async dispatch => {
    try {
      const response = await axios.put("/api/post/");
      dispatch({
        type: postConstants.EDIT_POST,
        payload: response.data
      });
    } catch (err) {
      dispatch({
        type: postConstants.AUTH_ERROR,
        payload: err.response
      });
    }
  };
};
