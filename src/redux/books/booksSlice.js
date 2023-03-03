import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';
import bookList from '../../bookList';

const initialState = {
  bookList,
};
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = 'zroBLJ62WkcvT8rhK9Kg';
export const getBooks = createAsyncThunk('get/getBooks', async () => {
  const response = await fetch(`${url}/apps/${key}/books`);
  const data = await response.json();
  return data;
});

export const postBooks = createAsyncThunk('post/postBooks', async (book) => {
  const response = await fetch(`${url}/apps/${key}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: uuidv4(),
      title: book.title,
      author: book.author,
      category: '',
    }),
  });
  const data = await response.json();
  return data;
});

export const removeBookfromApi = createAsyncThunk('remove/removeBooks', async (bookId) => {
  const response = await fetch(`${url}/apps/${key}/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author, category } = action.payload;
      const newBook = {
        item_id: `item${state.bookList.length + 1}`,
        title,
        author,
        category,
      };
      state.bookList.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        bookList: state.bookList.filter((book) => book.item_id !== bookId),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // while pending
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      // if success, return json response
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        bookList: action.payload,
      }))
      // if error, loading is false
      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      // while pending
      .addCase(postBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      // if success, add new book to the bookList
      .addCase(postBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        booklist: state.bookList.push(action.payload),
      }))
      // if error, loading is false
      .addCase(postBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(removeBookfromApi.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        bookList: state.bookList.filter((book) => book.item_id !== action.payload.item_id),
      }));
  },

});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
