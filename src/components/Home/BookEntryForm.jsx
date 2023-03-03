import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addBook from './../../Redux/thunk/addBook';

const BookEntryForm = () => {

  const dispatch =useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    author: '',
    thumbnail: '',
    price: 0,
    rating: 0,
    featured: false
  });

  console.log(formData);
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      featured:e.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    setFormData({
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
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form className="book-form" onSubmit={handleSubmit}> 
              <div className="space-y-2">
                <label htmlFor="name">Book Name</label>
                <input
                  required onChange={handleChange}
                  className="text-input"
                  type="text"
                  id="input-Bookname"
                  name="name"
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
                  checked={formData.featured}
                />
                <label htmlFor="featured" className="ml-2 text-sm">
                  This is a featured book
                </label>
              </div>

              <button type="submit" className="submit" id="submit">
                Add Book
              </button>
            </form>
          </div>
        </div>
    );
};

export default BookEntryForm;

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import addBook from './../../Redux/thunk/addBook';
// import updateBook from './../../Redux/thunk/updateBook';

// const BookEntryForm = ({bookToUpdate}) => {
//   const dispatch =useDispatch()

//   const [formData, setFormData] = useState({
//     name: '',
//     author: '',
//     thumbnail: '',
//     price: 0,
//     rating: 0,
//     featured: false
//   });

//   useEffect(() => {
//     if (bookToUpdate) {
//       setFormData(bookToUpdate);
//     }
//   }, [bookToUpdate]);

//   const handleChange = (e) => {
//     e.preventDefault();
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//       featured:e.target.checked
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (bookToUpdate) {
//       dispatch(updateBook(formData));
//     } else {
//       dispatch(addBook(formData));
//     }
//     setFormData({
//       name: '',
//       author: '',
//       thumbnail: '',
//       price: 0,
//       rating: 0,
//       featured: false
//     });
//   };

//   const submitButtonText = bookToUpdate ? 'Update Book' : 'Add Book';

//   return (
//     <div>
//       <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
//         <h4 className="mb-8 text-xl font-bold text-center">{submitButtonText}</h4>
//         <form className="book-form" onSubmit={handleSubmit}> 
//           <div className="space-y-2">
//             <label htmlFor="name">Book Name</label>
//             <input
//               required onChange={handleChange}
//               className="text-input"
//               type="text"
//               id="input-Bookname"
//               name="name"
//               value={formData.name}
//             />
//           </div>

//           <div className="space-y-2">
//             <label htmlFor="category">Author</label>
//             <input
//               required onChange={handleChange}
//               className="text-input"
//               type="text"
//               id="input-Bookauthor"
//               name="author"
//               value={formData.author}
//             />
//           </div>

//           <div className="space-y-2">
//             <label htmlFor="image">Image Url</label>
//             <input
//               required onChange={handleChange}
//               className="text-input"
//               type="text"
//               id="input-Bookthumbnail"
//               name="thumbnail"
//               value={formData.thumbnail}
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-8 pb-4">
//             <div className="space-y-2">
//               <label htmlFor="price">Price</label>
//               <input
//                 required onChange={handleChange}
//                 className="text-input"
//                 type="number"
//                 id="input-Bookprice"
//                 name="price"
//                 value={formData.price}
//               />
//             </div>