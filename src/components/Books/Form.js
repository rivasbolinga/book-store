const Form = () => (
  <form className="form">
    <h2 className="form-title">ADD NEW BOOK</h2>
    <input
      type="text"
      className="book-title-input"
      placeholder="Book title"
      required
    />
    <input
      type="text"
      className="book-author-input"
      placeholder="Book author"
      required
    />
    <button
      className="submit-btn"
      type="button"
    >
      Add button
    </button>
  </form>

);

export default Form;
