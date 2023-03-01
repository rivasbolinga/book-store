import Book from './Book';
import Form from './Form';
import bookList from '../../bookList';

const Books = () => (
  <>
    <section className="book-section">
      {bookList.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}

      <Form />
    </section>
  </>
);

export default Books;
