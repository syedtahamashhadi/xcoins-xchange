import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./index";

const thunkMiddleware = [thunk];

export let store = createStore(
  rootReducer,
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(...thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(...thunkMiddleware)
);