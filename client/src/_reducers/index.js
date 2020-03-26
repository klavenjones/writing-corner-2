import { combineReducers } from "redux";
import { auth } from "./auth.reducers";
import { post } from "./post.reducers";

const reducers = combineReducers({
  auth,
  post
});

export default reducers;
