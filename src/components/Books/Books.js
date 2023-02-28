import Book from './Book';
import Form from './Form';

const bookList = [
  { id: 0, title: 'The alchemist', author: 'Paulo Coelho' },
  { id: 1, title: 'A fine balance', author: 'Rohinton Mistry' },
  { id: 2, title: '1984', author: 'George Orwell' },
];

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
