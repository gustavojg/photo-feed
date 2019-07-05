import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import posts from "./reducers/posts";

export const store = createStore(
  combineReducers({ posts }),
  applyMiddleware(thunk)
);
