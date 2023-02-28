import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: () => {

    },
  },
});
console.log(booksSlice, booksSlice.reducer);
export default booksSlice.reducer;
