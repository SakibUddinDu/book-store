import React from 'react';
import BookStore from './BookStore';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BookStore></BookStore>
           
        </div>
    );
};

export default Home;