import { createStore, applyMiddleware, compose } from "redux";
import ReduxLogger from "redux-logger";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "../_reducers";
//Middleware
const middleware = [ReduxThunk, promise];

export const stores = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //This will enable the redux chrome extension
  )
);
