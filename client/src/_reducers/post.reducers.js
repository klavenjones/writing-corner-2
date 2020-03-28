import postConstants from "../_constants";

const DEFAULT_STATE = {
  postings: [],
  post: {},
  errorMessage: ""
};

export const post = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case postConstants.GET_POSTS:
      return {
        ...state,
        postings: payload
      };
    case postConstants.GET_POST:
      return {
        ...state,
        post: payload
      };
    case postConstants.DELETE_POST:
      return {
        ...state
      };
    case postConstants.ADD_POST:
      return {
        ...state
      };

    default:
      return state;
  }
};
