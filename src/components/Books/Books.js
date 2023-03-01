import Book from './Book';
import Form from './Form';

const Books = () => (
  <>
    <section className="book-section">
      {bookList.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}

      <Form />
    </section>
  </>
);

export default Books;
