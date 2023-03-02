import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookList from '../../bookList';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  bookList,
  isLoading: true,
};

export const getBooks = createAsyncThunk('post/getBooks', async () => fetch(url)
  .then((res) => res.json()));

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
      cartItems: action.payload,
    }),
    // if error loading is false
    [getBooks.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
