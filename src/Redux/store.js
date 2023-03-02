import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import bookStoreReducers from "./Bookstore/bookStoreReducers";

const store = createStore(
    bookStoreReducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;