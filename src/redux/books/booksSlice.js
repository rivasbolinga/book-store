import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = 'zroBLJ62WkcvT8rhK9Kg';

const initialState = {
  bookList: [],
  isLoading: true,
};

export const getBooks = createAsyncThunk('post/getBooks', async () => {
  const response = await fetch(`${url}/apps/${key}/books`);
  const data = await response.json();
  return data;
});

export const postBooks = createAsyncThunk('post/getBooks', async (newBook) => {
  const response = await fetch(`${url}/apps/${key}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
  const data = await response.json();
  return data;
});

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        bookList: state.bookList.filter((book) => book.item_id !== bookId),
      };
    },
  },
  extraReducers: {
    // while pending
    [getBooks.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    // if succes we return json response
    [getBooks.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      bookList: action.payload,
    }),
    // if error loading is false
    [getBooks.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    // while pending
    [postBooks.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    // if succes we add new book to the bookList
    [postBooks.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      bookList: [...state.bookList, action.payload],
    }),
    // if error loading is false
    [postBooks.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { removeBook } = booksSlice.actions;
export default booksSlice.reducer;
