import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import fetchBooks from './../../Redux/thunk/fetchBooks';

const BookContainer = () => {
    const states = useSelector((state) => state)
    console.log(states);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(dispatch(fetchBooks));
    }, [dispatch]);

    return (
        <div className="lws-bookContainer">
            {
                states.map((book)=><Book key={book.id} book={book}></Book> )
            }
                     
        </div>
    );
};

export default BookContainer;