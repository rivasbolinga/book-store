import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookstore.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookList.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
