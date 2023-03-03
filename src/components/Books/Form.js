import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBooks } from '../../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postBooks({ title, author }));
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleAdd}>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="book-title-input"
        placeholder="Book title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="book-author-input"
        placeholder="Book author"
        required
      />
      <button className="submit-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
