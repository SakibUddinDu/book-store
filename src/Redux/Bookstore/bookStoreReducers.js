import { ADD_BOOKS, DELETED, LOADED, UPDATED } from "./actionTypes";
import  initialState  from "./initialState";
import updateBook from './../thunk/updateBook';

// const intialState =[
//     {
//         "name": "Slow Horses (Deluxe Edition)",
//         "author": "Mick Herron",
//         "thumbnail": "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
//         "price": 14,
//         "rating": 3,
//         "featured": false,
//         "id": 1
//       },
// ]

const nextBookId = (books) => {
    const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
    return maxId + 1;
};
const bookStoreReducers = (state=initialState, action)=>{
    console.log(state);
    switch (action.type) {
        case LOADED:
            return action.payload;

        case ADD_BOOKS:
            console.log(state);
            return [
                ...state,
                {
                    ...action.payload,
                    id:nextBookId(state),  
                } 
            ];
            
        case DELETED:
            return state.filter((book) => book.id !== action.payload);

        case UPDATED:
            return state.map((book) =>
            book.id === action.payload.id ? action.payload : book)
        
        default:
            return state;
    }
}
export default bookStoreReducers;





