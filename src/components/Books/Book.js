import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookfromApi } from '../../redux/books/booksSlice';
import '../styles/Book.scss';
import progress from './progress.png';

const Book = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-card">
      <div className="book-details">
        <div className="details">
          <p className="book-title">{category}</p>
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
        </div>
        <div className="buttons">
          <button type="button" className="Comments btn">Commets</button>
          <button
            className="remove-btn btn"
            type="button"
            onClick={
          () => {
            dispatch(removeBook(id));
            dispatch(removeBookfromApi(id));
          }
        }
          >
            Remove
          </button>
          <button type="button" className="Edit btn">Edit</button>
        </div>
      </div>
      <div className="completed-container">
        <div className="percentage">
          <img
            className="progress-icon"
            alt="progress"
            src={progress}
          />
          <div className="percentage-text">
            <p className="percentaje-num">60%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="grey-line" />
        <div className="chapter-container">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
          <button type="button" className="update-btn">UPDATE PROGRESS</button>
        </div>
      </div>
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
