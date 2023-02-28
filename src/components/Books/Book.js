
const Book = (book) => {
  const { title, author } = book;
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p className="book-title">{author}</p>
      <button
        className="remove-btn"
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default Book;
