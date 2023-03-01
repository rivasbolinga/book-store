import { createSlice } from '@reduxjs/toolkit';

import bookList from '../../bookList';

const initialState = {
  bookList,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      const newBook = { title, author };
      state.bookList.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        bookList: state.bookList.filter((book) => book.id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
