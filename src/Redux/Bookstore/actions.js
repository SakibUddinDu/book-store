import { ADD_BOOKS, LOADED } from './actionTypes';

export const added = (formData)=>{
    return{
        type: ADD_BOOKS,
        payload: formData
    }
}
export const loaded = (books)=>{
    return{
        type: LOADED,
        payload: books
    }
}
// export const cardQuantityDecreser= (id, quantity)=>{
//     return{
//         type: CARD_QUANTITY_DECREASER,
//         payload: {
//             id,
//             quantity
//         }
//     }
// }