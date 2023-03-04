import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bookList: [],
};
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = 'zroBLJ62WkcvT8rhK9Kg';
export const getBooks = createAsyncThunk('book/getBooks', async () => {
  const response = await fetch(`${url}/apps/${key}/books`);
  const data = await response.json();
  return data;
});

export const postBooks = createAsyncThunk('book/postBooks', async (book) => {
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
  console.log(data);
  return data;
});

export const removeBookfromApi = createAsyncThunk('book/removeBookfromApi', async (bookId) => {
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
      const newBook = {
        item_id: `item${state.bookList.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
      };
      console.log(state.bookList);
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
    builder.addCase(postBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postBooks.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(removeBookfromApi.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(removeBookfromApi.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const newBook = Object.entries(action.payload).map(
        (book) => ({
          item_id: book[0],
          ...book[1][0],
        }),
      );
      console.log(newBook);
      return { ...state, bookList: newBook };
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
