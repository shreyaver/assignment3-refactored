import React from 'react';
import PropTypes from 'prop-types';
import BooksByAuthor from '../BooksByAuthor/BooksByAuthor.component';
import './Books.component.css';

const Books = (props) => {
  const authors = [];
  const { books } = props;
  Object.keys(books).forEach((author) => {
    authors.push(<BooksByAuthor author={author} books={books[author]} key={author} />);
  });
  return (
    <div className="books">
      <div className="booksContent">
        {authors}
      </div>
    </div>
  );
};
Books.propTypes = {
  books: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        Name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        Author: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  ).isRequired,
};
export default Books;
