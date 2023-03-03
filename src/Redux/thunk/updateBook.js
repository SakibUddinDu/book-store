import { useState } from 'react';
import { updated } from '../Bookstore/actions';
const updateBook =(bookData)=>{
    return async (dispatch, getState)=>{

        const {id} =bookData
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                ...bookData,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        const book = await response.json()
        dispatch(updated(book))
        
    }
}
export default updateBook;