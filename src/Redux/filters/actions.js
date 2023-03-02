import { SEARCH_TEXT, STATUS_CHANGED } from "./actionTypes";

export const statusChanged = (status) => {
    return {
        type: STATUS_CHANGED,
        payload: status,
    };
};
export const searchText = (searchText) => {
    return {
        type: SEARCH_TEXT,
        payload: searchText,
    };
};
