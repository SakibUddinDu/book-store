import { SEARCH_TEXT, STATUS_CHANGED } from "./actionTypes";
import initialState from "./initialState";

// const initialState = {
//     status: "All",
//      searchText:'',
// };
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload,
            };
        case SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            };   

        default:
            return state;
    }
};

export default filterReducer;
