import { added } from "../Bookstore/actions";

 const addBook=(formData)=>{
    return async (dispatch) =>{
        const response = await fetch('http://localhost:9000/books',{
            method:"POST",
            body:JSON.stringify(
                formData,
            ),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            }
        });
        const book =await response.json();
        console.log(book)
        dispatch(added(book))

    }
}
export default addBook;
