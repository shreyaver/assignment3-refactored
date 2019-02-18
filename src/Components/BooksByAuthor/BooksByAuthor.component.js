import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book.component';
import './BooksByAuthor.component.css';

const BooksByAuthor = (props) => {
  const booksByAuthor = [];
  const { author, books } = props;
  books.forEach((book, index) => {
    booksByAuthor.push(<Book book={book} key={book.Name} index={index} />);
  });
  return (
    <div className="booksByAuthorContainer">
      <div className="authorName">
        <span>{author}</span>
      </div>
      <div className="booksByAuthor">
        {booksByAuthor}
      </div>
    </div>
  );
};
BooksByAuthor.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      Author: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  author: PropTypes.string.isRequired,
};
export default BooksByAuthor;
