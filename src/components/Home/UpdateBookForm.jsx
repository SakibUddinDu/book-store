import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addBook from '../../Redux/thunk/addBook';
import updateBook from './../../Redux/thunk/updateBook';

const UpdateBookForm = ({bookData}) => {
  const dispatch =useDispatch()
  const [updateformData, setUpdateformData] = useState({...bookData});

  console.log(updateformData);
  const handleChange = (e) => {
    e.preventDefault();
    setUpdateformData({
      ...updateformData,
      [e.target.name]: e.target.value,
      featured:e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(updateformData));
    setUpdateformData({
      name: '',
      author: '',
      thumbnail: '',
      price: 0,
      rating: 0,
      featured: false
    });
  };
    return (
        <div>
          <div
            className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md"
          >
            <h4 className="mb-8 text-xl font-bold text-center">Update Your Book</h4>
            <form className="book-form" onSubmit={handleSubmit}> 
              <div className="space-y-2">
                <label htmlFor="name">Book Name</label>
                <input
                  required onChange={handleChange}
                  className="text-input"
                  type="text"
                  id="input-Bookname"
                  name="name"
                  defaultValue={bookData.name}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="category">Author</label>
                <input
                  required onChange={handleChange}
                  className="text-input"
                  type="text"
                  id="input-Bookauthor"
                  name="author"
                  defaultValue={bookData.author}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="image">Image Url</label>
                <input
                  required onChange={handleChange}
                  className="text-input"
                  type="text"
                  id="input-Bookthumbnail"
                  name="thumbnail"
                  defaultValue={bookData.thumbnail}
                />
              </div>

              <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                  <label htmlFor="price">Price</label>
                  <input
                    required onChange={handleChange}
                    className="text-input"
                    type="number"
                    id="input-Bookprice"
                    name="price"
                    defaultValue={bookData.price}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="quantity">Rating</label>
                  <input
                    required onChange={handleChange}
                    className="text-input"
                    type="number"
                    id="input-Bookrating"
                    name="rating"
                    defaultValue={bookData.rating}
                    min="1"
                    max="5"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="input-Bookfeatured"
                  type="checkbox"
                  name="featured"
                  className="w-4 h-4"
                  onChange={handleChange}
                  checked={updateformData.featured}
                />
                <label htmlFor="featured" className="ml-2 text-sm">
                  This is a featured book
                </label>
              </div>

              <button type="submit" className="submit" id="submit">
                Update Book
              </button>
            </form>
          </div>
        </div>
    );
};

export default UpdateBookForm;