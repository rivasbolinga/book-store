import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const { bookList } = useSelector((state) => state.books);

  return (
    <>
      <section className="book-section">
        {bookList.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
        <Form />
      </section>
    </>
  );
};

export default Books;
