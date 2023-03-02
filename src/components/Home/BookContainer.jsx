import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import fetchBooks from './../../Redux/thunk/fetchBooks';

const BookContainer = () => {
    const books = useSelector((state) => state.bookStore)
    const filters = useSelector((state) => state.filters)

    const {status, searchText} = filters;
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(dispatch(fetchBooks));
    }, [dispatch]);


    const filterByStatus = (book) => {
        switch (status) {
            case "Featured":
                return book.featured;

            default:
                return true;
        }
    };
    // const filterBySearchText = (book) => {
    //     const filteredBooks = books.filter((book) =>
    //     book.name.toLowerCase().includes(searchText.toLowerCase())
    //   );
    //   console.log(filteredBooks)
    //   return filteredBooks;
    // //   setSearchResults(filteredBooks);
    // };

    return (
        <div className="lws-bookContainer">
            {
                books
                .filter((book) =>book.name.toLowerCase().includes(searchText.toLowerCase()))
                .filter(filterByStatus)
                .map((book)=> <Book key={book.id} book={book}></Book> )
            }
                     
        </div>
    );
};

export default BookContainer;