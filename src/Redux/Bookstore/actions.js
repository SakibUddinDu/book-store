import { ADD_BOOKS, LOADED, DELETED, UPDATED, } from './actionTypes';

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

export const deleted =(deleteItemId)=>{
    return {
        type: DELETED,
        payload: deleteItemId
    }
}

export const updated =(updatedData)=>{
    return {
        type: UPDATED,
        payload: updatedData
    }
}
