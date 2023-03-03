import { deleted } from "../Bookstore/actions"

const deleteBook= (deleteItemId) =>{
    return async (dispatch)=>{
        const response = fetch(`http://localhost:9000/books/${deleteItemId}`,{
            method:"DELETE",
        })

        dispatch(deleted(deleteItemId))
    }
}

export default deleteBook;