import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

const Book = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-card">
      <p className="book-title">{category}</p>
      <h3 className="book-title">{title}</h3>
      <p className="book-title">{author}</p>
      <button
        className="remove-btn"
        type="button"
        onClick={() => dispatch(removeBook(id))}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
