import React from 'react';
import BookContainer from './BookContainer';
import BookEntryForm from './BookEntryForm';
import Filters from './Filters';

const BookStore = () => {
    return (
    <main className="py-12 2xl:px-6">
      <div
        className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8"
      >
        <div className="order-2 xl:-order-1">
            <Filters></Filters>
            <BookContainer></BookContainer>
        </div>
        <BookEntryForm></BookEntryForm>
      </div>
    </main>
    );
};

export default BookStore;