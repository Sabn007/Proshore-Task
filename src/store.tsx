import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./reducers/RootReducers";

const Store = createStore(
  RootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store
