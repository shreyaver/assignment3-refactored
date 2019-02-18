import React from 'react';
import './Book.component.css';
import PropTypes from 'prop-types';

const Book = (props) => {
  const imageData = require('../../Images/cover_image.jpeg');
  const { book } = props;
  let likeButton;
  if (book.rating >= 4.5) {
    likeButton = <button type="button" className="likedHeartIcon" />;
  } else {
    likeButton = <button type="button" className="heartIcon" />;
  }
  return (
    <div className="book">
      <div className="imagePanel" style={{ backgroundImage: `url(${imageData})` }} />
      <div className="bookData">
        <p className="bookName">{book.Name}</p>
        <span>
          {book.rating}
          {likeButton}
        </span>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    Author: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default Book;
