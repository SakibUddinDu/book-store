import React, { useState } from 'react';
import BookContainer from './BookContainer';
import BookEntryForm from './BookEntryForm';
import Filters from './Filters';
import Navbar from './Navbar';
import UpdateBookForm from './UpdateBookForm';
import { useSelector } from 'react-redux';

const BookStore = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [bookData, setBookData]=useState('')
  console.log(bookData);

    return (
    <main className="py-12 2xl:px-6">
      <div
        className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8"
      >
        <div className="order-2 xl:-order-1">
            <Filters></Filters>
            <BookContainer showComponent={showComponent} setShowComponent={setShowComponent}  setBookData={setBookData}></BookContainer>
        </div>
        {
          showComponent?<UpdateBookForm bookData={bookData}/>:<BookEntryForm />
        }  
      </div>
    </main>
    );
};

export default BookStore;