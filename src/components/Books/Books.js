import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../../redux/books/booksSlice';

const Books = () => {
  const { bookList } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <>
      <section className="book-section">
        {bookList.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </section>
      <Form />
    </>
  );
};

export default Books;
