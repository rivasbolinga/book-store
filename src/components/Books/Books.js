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

  return (
    <>
      <section className="book-section">
        {Object.keys(bookList).map((bookId) => (
          <Book
            key={bookId}
            id={bookId}
            title={bookList[bookId][0].title}
            author={bookList[bookId][0].author}
            category={bookList[bookId][0].category}
          />
        ))}
        <Form />
      </section>
    </>
  );
};

export default Books;
