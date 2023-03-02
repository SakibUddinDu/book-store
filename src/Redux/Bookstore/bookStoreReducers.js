import { ADD_BOOKS, LOADED } from "./actionTypes";
import  initialState  from "./initialState";

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
        // case CARD_QUANTITY_DECREASER:
        //     return state.map((product) =>{
        //         if(product.id !== action.payload.id){
        //             return product;
        //         } else{
        //              return {
        //                 ...product,
        //                 quantity: action.payload.quantity - 1,
        //             }
        //         }
        //         // if(product.id === action.payload.id){
        //             // return {
        //             //     ...product,
        //             //     quantity: action.payload.quantity - 1,
        //             // }

        //         // }
        //     })
        
    
        default:
            return state;
    }
}
export default bookStoreReducers;



