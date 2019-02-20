import React from 'react';
import './Book.component.css';
import PropTypes from 'prop-types';
import coverImage from '../../Images/cover_image.jpeg';
import roundOffRating from '../../Helpers/roundOffRating/roundOffRating';

const Book = (props) => {
  const { book, handleLikeClick } = props;
  const likeButton = book.liked === true ? 'likedHeartIcon' : 'heartIcon';
  return (
    <div className="book" style={{ backgroundImage: `url(${coverImage})` }}>
      <div className="imagePanel" />
      <div className="bookData">
        <p className="bookName">{book.Name}</p>
        <span>
          {roundOffRating(book.rating)}
          <button type="button" className={likeButton} onClick={handleLikeClick(book)} />
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
  handleLikeClick: PropTypes.func.isRequired,
};
export default Book;
