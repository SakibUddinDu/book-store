import { combineReducers } from "redux";
import bookStoreReducers from "./Bookstore/bookStoreReducers";
import filterReducer from "./filters/filterReducer";

const rootReducer = combineReducers({
    bookStore: bookStoreReducers,
    filters: filterReducer,
});

export default rootReducer;