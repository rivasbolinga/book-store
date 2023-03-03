import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { bookList, isLoading } = useSelector((state) => state.books);
  console.log(bookList);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  const bookArray = Object.values(bookList);
  return (
    <>
      <section className="book-section">

        {bookArray.map((bookArr) => (
          bookArr.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))
        ))}
        <Form />
      </section>
    </>
  );
};

export default Books;
